export let name = "Anti Logger";
export let description = "Protects against Token Loggers by spoofing the function's readout. WARNING: THIS MODULE WILL BREAK DISCORD. Using the audit module is recommended instead.";
export let long_description = "Description not written yet, sorry.";
export let version = "dev-0.0.2";
export let detectable = 3
export var unstable = true;

export const config = [];
config.AntiLoggerMessage = "Dumbass did you really think I'd fall for this? lol"

export var originaltoken;

import DiscordChunk from "../core/webpackChunkdiscord.mjs";

export default function antilogger() {
  originaltoken = DiscordChunk.find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken();
  DiscordChunk.find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken() = () => {
    alert('Prevented token readout attempt!');
    return "Discord Oxygen Anti-TokenLogger: " + config.AntiLoggerMessage;
  }
}