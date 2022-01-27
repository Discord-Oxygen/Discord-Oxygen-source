var DiscordOxygen.config.AntiLoggerMessage = "Dumbass did you really think I'd fall for this? lol"
Originaltoken = DiscordChunk.find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
DiscordChunk.find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken() = () => {
  alert('Prevented token readout attempt!');
  return "Discord Oxygen Anti-TokenLogger: " + DiscordOxygen.config.AntiLoggerMessage;
}