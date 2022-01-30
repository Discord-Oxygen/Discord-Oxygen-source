'use strict';

export var name = "Core";
export var description = "Core Module required for making Discord Oxygen work.";
export var long_description = "Core Module required for making Discord Oxygen work.";
export var version = "dev-0.0.2";
export var detectable = 0; //indicate how likely it is, that enabling this module will get noticed / and or your account banned.
export var unstable = false;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

export function initialize() {
  window.DiscordOxygen = [];
  window.DiscordOxygen.version = "dev-5.1.0" //still need to figure out a way how to load this value from package.json
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
  //let type = nameArray[1]; I'm considering to subgroup the modules into modules.core and modules.features
  let name = nameArray[nameArray.length - 1];
  import * as window.DiscordOxygen.modules.name from "path";
};