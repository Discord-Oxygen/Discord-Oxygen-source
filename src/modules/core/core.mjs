export var name = "Core";
export var description = "Core Module required for making Discord Oxygen work.";
export var long_description = "Core Module required for making Discord Oxygen work.";
export var version = "dev-0.0.2";
export var detectable = 0;
export var unstable = false;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

export function initialize() {
  window.DiscordOxygen = [];
  window.DiscordOxygen.version = "dev-5.2.0" //still need to figure out a way how to load this value from package.json
  window.DiscordOxygen.config = [];
  window.DiscordOxygen.modules = [];
  window.DiscordOxygen.API = [];
  window.DiscordOxygen.accounts = [];
  window.localStorage.setItem("DiscordOxygenBackup", JSON.stringify(DiscordOxygen));
};

export function resume() {
  window.DiscordOxygen = JSON.parse(window.localStorage.getItem(DiscordOxygenBackup));
};

export function loadModule(path) {
  let nameArray = path.split('/');
  let name = nameArray[nameArray.length - 1];
  import * as DiscordOxygenmodule_tempdeleteme from "path";
  window.DiscordOxygen.modules.name = DiscordOxygenmodule_tempdeleteme;
  DiscordOxygenmodule_tempdeleteme = (function(){}());
};