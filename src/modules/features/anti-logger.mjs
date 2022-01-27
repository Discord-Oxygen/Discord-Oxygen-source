'use strict';
export var config.AntiLoggerMessage = "Dumbass did you really think I'd fall for this? lol"
export var originaltoken;

export default function antilogger() {
  originaltoken = window.DiscordOxygen.API.DiscordChunk.find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken();
  window.DiscordOxygen.API.DiscordChunk.find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken() = () => {
    alert('Prevented token readout attempt!');
    return "Discord Oxygen Anti-TokenLogger: " + config.AntiLoggerMessage;
  }
}