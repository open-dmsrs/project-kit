// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info

import { defineConfigObject, defineConfigs } from 'reactive-vscode'

export const publisher = "cnjimbo"
export const name = "project-config"
export const version = "1.1.2"
export const displayName = "Project Config Updater"
export const description = "Export current settings to workspace config file "
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "project-config.manualUpdate"
  | "project-config.remove-watch-dir"
  | "project-config.add-watch-dir"

/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @value `project-config.manualUpdate`
   * @example
   * useCommand(commands.manualUpdate, async () => {
   *   //do actions or update config 
   * })
   */
  manualUpdate: "project-config.manualUpdate",
  /**
   * remove watch dir
   * @value `project-config.remove-watch-dir`
   * @example
   * useCommand(commands.removeWatchDir, async () => {
   *   //do actions or update config 
   * })
   */
  removeWatchDir: "project-config.remove-watch-dir",
  /**
   * add watch dir
   * @value `project-config.add-watch-dir`
   * @example
   * useCommand(commands.addWatchDir, async () => {
   *   //do actions or update config 
   * })
   */
  addWatchDir: "project-config.add-watch-dir",
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */

/**
 * Config keys of `root of configuration`
 */
export interface Root {
  /**
   * Enabled project-config inline annotations
   * @key `xxx`
   * @default `true`
   * @type `boolean`
   */
  "xxx": boolean,
}

/**
 * Scoped defaults of `root of configuration`
 */
const _root = {
/**
 * scope: `root of configuration`
 */
  scope: "",
/**
 * Keys' defaults of `root of configuration`
 */
  defaults: {
    "xxx": true,
  } satisfies Root,
}

/**
 * Reactive ConfigObject of `root of configuration`
 * @example
 * let configValue = rootConfigObject.xxx //get value 
 * rootConfigObject.xxx = true // set value
 * rootConfigObject.$update("xxx", !configValue, ConfigurationTarget.Workspace, true)
 */
export const rootConfigObject = defineConfigObject<Root>(
  _root.scope,
  _root.defaults
)
/**
 * Reactive ToConfigRefs of `root of configuration`
 * @example
 * let configValue:boolean =rootConfigs.xxx.value //get value 
 * rootConfigs.xxx.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * rootConfigs.xxx.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const rootConfigs = defineConfigs<Root>(
  _root.scope,
  _root.defaults
)

/**
 * Config keys of `project-config`
 */
export interface ProjectConfig {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "test.annotations": boolean,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.color`
   * @default `"auto"`
   * @type `string`
   */
  "test.color": string,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.partten`
   * @default `["src /**\/*","docs /**\/*"]`
   * @type `array`
   */
  "test.partten": string[],
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "test.position": ("after" | "before"),
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.fileNestingUpdater.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "fileNestingUpdater.autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @key `project-config.fileNestingUpdater.promptOnAutoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "fileNestingUpdater.promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.fileNestingUpdater.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  "fileNestingUpdater.autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamBranch": string,
}

/**
 * Scoped defaults of `project-config`
 */
const _projectConfig = {
/**
 * scope: `project-config`
 */
  scope: "project-config",
/**
 * Keys' defaults of `project-config`
 */
  defaults: {
    "test.annotations": true,
    "test.color": "auto",
    "test.partten": ["src /**/*","docs /**/*"],
    "test.position": "before",
    "fileNestingUpdater.autoUpdate": true,
    "fileNestingUpdater.promptOnAutoUpdate": true,
    "fileNestingUpdater.autoUpdateInterval": 4320,
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    "fileNestingUpdater.upstreamBranch": "main",
  } satisfies ProjectConfig,
}

/**
 * Reactive ConfigObject of `project-config`
 * @example
 * let configValue = projectConfigConfigObject.test.annotations //get value 
 * projectConfigConfigObject.test.annotations = true // set value
 * projectConfigConfigObject.$update("test.annotations", !configValue, ConfigurationTarget.Workspace, true)
 */
export const projectConfigConfigObject = defineConfigObject<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)
/**
 * Reactive ToConfigRefs of `project-config`
 * @example
 * let configValue:boolean =projectConfigConfigs.test.annotations.value //get value 
 * projectConfigConfigs.test.annotations.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * projectConfigConfigs.test.annotations.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const projectConfigConfigs = defineConfigs<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)

/**
 * Config keys of `project-config.test`
 */
export interface Test {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.color`
   * @default `"auto"`
   * @type `string`
   */
  "color": string,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.partten`
   * @default `["src /**\/*","docs /**\/*"]`
   * @type `array`
   */
  "partten": string[],
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "position": ("after" | "before"),
}

/**
 * Scoped defaults of `project-config.test`
 */
const _test = {
/**
 * scope: `project-config.test`
 */
  scope: "project-config.test",
/**
 * Keys' defaults of `project-config.test`
 */
  defaults: {
    "annotations": true,
    "color": "auto",
    "partten": ["src /**/*","docs /**/*"],
    "position": "before",
  } satisfies Test,
}

/**
 * Reactive ConfigObject of `project-config.test`
 * @example
 * let configValue = testConfigObject.annotations //get value 
 * testConfigObject.annotations = true // set value
 * testConfigObject.$update("annotations", !configValue, ConfigurationTarget.Workspace, true)
 */
export const testConfigObject = defineConfigObject<Test>(
  _test.scope,
  _test.defaults
)
/**
 * Reactive ToConfigRefs of `project-config.test`
 * @example
 * let configValue:boolean =testConfigs.annotations.value //get value 
 * testConfigs.annotations.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * testConfigs.annotations.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const testConfigs = defineConfigs<Test>(
  _test.scope,
  _test.defaults
)

/**
 * Config keys of `project-config.fileNestingUpdater`
 */
export interface FileNestingUpdater {
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.fileNestingUpdater.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @key `project-config.fileNestingUpdater.promptOnAutoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.fileNestingUpdater.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  "autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "upstreamBranch": string,
}

/**
 * Scoped defaults of `project-config.fileNestingUpdater`
 */
const _fileNestingUpdater = {
/**
 * scope: `project-config.fileNestingUpdater`
 */
  scope: "project-config.fileNestingUpdater",
/**
 * Keys' defaults of `project-config.fileNestingUpdater`
 */
  defaults: {
    "autoUpdate": true,
    "promptOnAutoUpdate": true,
    "autoUpdateInterval": 4320,
    "upstreamRepo": "antfu/vscode-file-nesting-config",
    "upstreamBranch": "main",
  } satisfies FileNestingUpdater,
}

/**
 * Reactive ConfigObject of `project-config.fileNestingUpdater`
 * @example
 * let configValue = fileNestingUpdaterConfigObject.autoUpdate //get value 
 * fileNestingUpdaterConfigObject.autoUpdate = true // set value
 * fileNestingUpdaterConfigObject.$update("autoUpdate", !configValue, ConfigurationTarget.Workspace, true)
 */
export const fileNestingUpdaterConfigObject = defineConfigObject<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)
/**
 * Reactive ToConfigRefs of `project-config.fileNestingUpdater`
 * @example
 * let configValue:boolean =fileNestingUpdaterConfigs.autoUpdate.value //get value 
 * fileNestingUpdaterConfigs.autoUpdate.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * fileNestingUpdaterConfigs.autoUpdate.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const fileNestingUpdaterConfigs = defineConfigs<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)

/**
 * Config keys of `project-config2`
 */
export interface ProjectConfig2 {
  /**
   * Enabled project-config inline annotations
   * @key `project-config2.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "test.annotations": boolean,
}

/**
 * Scoped defaults of `project-config2`
 */
const _projectConfig2 = {
/**
 * scope: `project-config2`
 */
  scope: "project-config2",
/**
 * Keys' defaults of `project-config2`
 */
  defaults: {
    "test.annotations": true,
  } satisfies ProjectConfig2,
}

/**
 * Reactive ConfigObject of `project-config2`
 * @example
 * let configValue = projectConfig2ConfigObject.test.annotations //get value 
 * projectConfig2ConfigObject.test.annotations = true // set value
 * projectConfig2ConfigObject.$update("test.annotations", !configValue, ConfigurationTarget.Workspace, true)
 */
export const projectConfig2ConfigObject = defineConfigObject<ProjectConfig2>(
  _projectConfig2.scope,
  _projectConfig2.defaults
)
/**
 * Reactive ToConfigRefs of `project-config2`
 * @example
 * let configValue:boolean =projectConfig2Configs.test.annotations.value //get value 
 * projectConfig2Configs.test.annotations.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * projectConfig2Configs.test.annotations.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const projectConfig2Configs = defineConfigs<ProjectConfig2>(
  _projectConfig2.scope,
  _projectConfig2.defaults
)

/**
 * Config keys of `project-config2.test`
 */
export interface ProjectConfig2Test {
  /**
   * Enabled project-config inline annotations
   * @key `project-config2.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
}

/**
 * Scoped defaults of `project-config2.test`
 */
const _projectConfig2Test = {
/**
 * scope: `project-config2.test`
 */
  scope: "project-config2.test",
/**
 * Keys' defaults of `project-config2.test`
 */
  defaults: {
    "annotations": true,
  } satisfies ProjectConfig2Test,
}

/**
 * Reactive ConfigObject of `project-config2.test`
 * @example
 * let configValue = projectConfig2TestConfigObject.annotations //get value 
 * projectConfig2TestConfigObject.annotations = true // set value
 * projectConfig2TestConfigObject.$update("annotations", !configValue, ConfigurationTarget.Workspace, true)
 */
export const projectConfig2TestConfigObject = defineConfigObject<ProjectConfig2Test>(
  _projectConfig2Test.scope,
  _projectConfig2Test.defaults
)
/**
 * Reactive ToConfigRefs of `project-config2.test`
 * @example
 * let configValue:boolean =projectConfig2TestConfigs.annotations.value //get value 
 * projectConfig2TestConfigs.annotations.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * projectConfig2TestConfigs.annotations.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const projectConfig2TestConfigs = defineConfigs<ProjectConfig2Test>(
  _projectConfig2Test.scope,
  _projectConfig2Test.defaults
)
