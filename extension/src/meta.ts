// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
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

/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @value `project-config.manualUpdate`
   */
  manualUpdate: "project-config.manualUpdate",
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey = 
  | "project-config.autoUpdate"
  | "project-config.annotations"
  | "project-config.autoUpdateInterval"
  | "project-config.color"
  | "project-config.position"

export interface ConfigKeyTypeMap {
  "project-config.autoUpdate": boolean,
  "project-config.annotations": boolean,
  "project-config.autoUpdateInterval": number,
  "project-config.color": string,
  "project-config.position": ("after" | "before"),
}

export interface ConfigShorthandMap {
  autoUpdate: "project-config.autoUpdate",
  annotations: "project-config.annotations",
  autoUpdateInterval: "project-config.autoUpdateInterval",
  color: "project-config.color",
  position: "project-config.position",
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T,
  default: ConfigKeyTypeMap[T],
}


/**
 * Configs map registed by `cnjimbo.project-config`
 */
export const configs = {
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  autoUpdate: {
    key: "project-config.autoUpdate",
    default: true,
  } as ConfigItem<"project-config.autoUpdate">,
  /**
   * Enabled project-config inline annotations
   * @key `project-config.annotations`
   * @default `true`
   * @type `boolean`
   */
  annotations: {
    key: "project-config.annotations",
    default: true,
  } as ConfigItem<"project-config.annotations">,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  autoUpdateInterval: {
    key: "project-config.autoUpdateInterval",
    default: 4320,
  } as ConfigItem<"project-config.autoUpdateInterval">,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.color`
   * @default `"auto"`
   * @type `string`
   */
  color: {
    key: "project-config.color",
    default: "auto",
  } as ConfigItem<"project-config.color">,
  /**
   * Position the icon before or after the icon name
   * @key `project-config.position`
   * @default `"before"`
   * @type `string`
   */
  position: {
    key: "project-config.position",
    default: "before",
  } as ConfigItem<"project-config.position">,
}

export interface ScopedConfigKeyTypeMap {
  "autoUpdate": boolean,
  "annotations": boolean,
  "autoUpdateInterval": number,
  "color": string,
  "position": ("after" | "before"),
}

export const scopedConfigs = {
  scope: "project-config",
  defaults: {
    "autoUpdate": true,
    "annotations": true,
    "autoUpdateInterval": 4320,
    "color": "auto",
    "position": "before",
  } satisfies ScopedConfigKeyTypeMap,
}

