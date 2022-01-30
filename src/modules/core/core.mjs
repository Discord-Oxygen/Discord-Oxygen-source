'use strict';
export function initialize() {
  window.DiscordOxygen = [];
  window.DiscordOxygen.version = "dev-5.0.2" //still need to figure out a way how to load this value from package.json
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
  import * as window.DiscordOxygen.modules.name from "path";
};