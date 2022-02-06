export var name = "Anti Logger";
export var description = "Protects against Token Loggers by spoofing the function's readout. WARNING: THIS MODULE WILL BREAK DISCORD. Using the audit module is recommended instead.";
export var long_description = "Description not written yet, sorry.";
export var version = "dev-0.0.1";
export var detectable = 3
export var unstable = true;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

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