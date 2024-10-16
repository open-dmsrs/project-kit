import type { ProjectKit } from '@/generated-meta'
import { exec } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import {
  commands,
  name,
  useCommands,
  useConfigObjectProjectKit,
} from '@/generated-meta'
import { useDisposable, useEvent, useOutputChannel } from 'reactive-vscode'
import vscode from 'vscode'

const onDidChangeConfiguration = useEvent(vscode.workspace.onDidChangeConfiguration)
const onDidSaveTextDocument = useEvent(vscode.workspace.onDidSaveTextDocument)
export function activate(context: vscode.ExtensionContext): void {
  const extension = new RunOnSaveExtension(context)
  extension.showOutputMessage()

  onDidChangeConfiguration((_) => {
    useDisposable(extension.showStatusMessage('Run On Save: Reloading config.'))
    extension.loadConfig()
  })

  onDidSaveTextDocument((document: vscode.TextDocument) => {
    extension.runCommands(document)
  })

  useCommands({
    [commands.enableRunOnSave]: async () => {
      extension.isEnabled = true
    },
    [commands.disableRunOnSave]: async () => {
      extension.isEnabled = false
    },
  })
}

interface ICommand {
  match?: string
  notMatch?: string
  cmd: string
  isAsync: boolean
}

class RunOnSaveExtension {
  private _outputChannel: vscode.OutputChannel
  private _context: vscode.ExtensionContext
  private _config: ProjectKit['runonsave']

  constructor(context: vscode.ExtensionContext) {
    this._context = context
    this._outputChannel = useOutputChannel(name) // vscode.window.createOutputChannel('Run On Save')
    this._config = useConfigObjectProjectKit().runonsave
  }

  /** Recursive call to run commands. */
  private _runCommands(
    commands: Array<ICommand>,
    document: vscode.TextDocument,
  ): void {
    if (commands.length) {
      const cfg = commands.shift()
      if (cfg !== undefined) {
        this.showOutputMessage(`*** cmd start: ${cfg.cmd}`)
        const child = exec(cfg.cmd, this._getExecOption(document))
        child.stdout?.on('data', data => this._outputChannel.append(data))
        child.stderr?.on('data', data => this._outputChannel.append(data))
        child.on('error', (e) => {
          this.showOutputMessage(e.message)
        })
        child.on('exit', (_e) => {
          // if sync
          if (!cfg.isAsync) {
            this._runCommands(commands, document)
          }
        })

        // if async, go ahead and run next command
        if (cfg.isAsync) {
          this._runCommands(commands, document)
        }
      }
    }
    else {
      // NOTE: This technically just marks the end of commands starting.
      // There could still be asyc commands running.
      this.showStatusMessage('Run on Save done.')
    }
  }

  private _getExecOption(
    document: vscode.TextDocument,
  ): { shell: string, cwd?: string } {
    return {
      shell: this.shell,
      cwd: this._getWorkspaceFolderPath(document.uri),
    }
  }

  private _getWorkspaceFolderPath(uri: vscode.Uri): string | undefined {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri)

    // NOTE: rootPath seems to be deprecated but seems like the best fallback so that
    // single project workspaces still work. If I come up with a better option, I'll change it.
    return workspaceFolder
      ? workspaceFolder.uri.fsPath
      : vscode.workspace.rootPath
  }

  public get isEnabled(): boolean {
    return !!this._context.globalState.get('isEnabled', true)
  }

  public set isEnabled(value: boolean) {
    this._context.globalState.update('isEnabled', value)
    this.showOutputMessage()
  }

  public get shell(): string {
    return this._config.shell ?? ''
  }

  public get autoClearConsole(): boolean {
    return !!this._config.autoClearConsole
  }

  public get commands(): Array<ICommand> {
    return this._config.commands || []
  }

  public loadConfig(): void {
    this._config = useConfigObjectProjectKit().runonsave
  }

  /**
   * Show message in output channel
   */
  public showOutputMessage(message?: string): void {
    message = message || `Run On Save ${this.isEnabled ? 'enabled' : 'disabled'}.`
    this._outputChannel.appendLine(message)
  }

  /**
   * Show message in status bar and output channel.
   * Return a disposable to remove status bar message.
   */
  public showStatusMessage(message: string): vscode.Disposable {
    this.showOutputMessage(message)
    return vscode.window.setStatusBarMessage(message)
  }

  public runCommands(document: vscode.TextDocument): void {
    if (this.autoClearConsole) {
      this._outputChannel.clear()
    }

    if (!this.isEnabled || this.commands.length === 0) {
      this.showOutputMessage()
      return
    }

    const match = (pattern: string): boolean => !!pattern && pattern.length > 0 && new RegExp(pattern).test(document.fileName)

    const commandConfigs = this.commands
      .filter((cfg) => {
        const matchPattern = cfg.match || ''
        const negatePattern = cfg.notMatch || ''

        // if no match pattern was provided, or if match pattern succeeds
        const isMatch = matchPattern.length === 0 || match(matchPattern)

        // negation has to be explicitly provided
        const isNegate = negatePattern.length > 0 && match(negatePattern)

        // negation wins over match
        return !isNegate && isMatch
      })

    if (commandConfigs.length === 0) {
      return
    }

    this.showStatusMessage('Running on save commands...')

    // build our commands by replacing parameters with values
    const commands: Array<ICommand> = []
    for (const cfg of commandConfigs) {
      let cmdStr = cfg.cmd

      const extName = path.extname(document.fileName)
      const workspaceFolderPath = this._getWorkspaceFolderPath(document.uri)
      if (!workspaceFolderPath) {
        continue
      }
      const relativeFile = path.relative(workspaceFolderPath, document.uri.fsPath)

      cmdStr = cmdStr.replace(/\$\{file\}/g, `${document.fileName}`)

      // DEPRECATED: workspaceFolder is more inline with vscode variables,
      // but leaving old version in place for any users already using it.
      cmdStr = cmdStr.replace(/\$\{workspaceRoot\}/g, workspaceFolderPath)

      cmdStr = cmdStr.replace(/\$\{workspaceFolder\}/g, workspaceFolderPath)
      cmdStr = cmdStr.replace(/\$\{fileBasename\}/g, path.basename(document.fileName))
      cmdStr = cmdStr.replace(/\$\{fileDirname\}/g, path.dirname(document.fileName))
      cmdStr = cmdStr.replace(/\$\{fileExtname\}/g, extName)
      cmdStr = cmdStr.replace(/\$\{fileBasenameNoExt\}/g, path.basename(document.fileName, extName))
      cmdStr = cmdStr.replace(/\$\{relativeFile\}/g, relativeFile)
      cmdStr = cmdStr.replace(/\$\{cwd\}/g, process.cwd())

      // replace environment variables ${env.Name}
      cmdStr = cmdStr.replace(/\$\{env\.([^}]+)\}/g, (sub: string, envName: string) => {
        const a = process.env[envName] as string
        return a
      })

      commands.push({
        cmd: cmdStr,
        isAsync: !!cfg.isAsync,
      })
    }

    this._runCommands(commands, document)
  }
}
