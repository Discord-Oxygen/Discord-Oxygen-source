"use strict";
/* NOTICE: This work is intellecutal property of hxr404. You are legally required to follow the Terms & Conditions of your License Agreement with hxr404.
If you don't have a valid License Agreement, accessing this file is illegal and you must delete everything immeditatley.

(c) 2022 hxr404
All rights reserved.

*/

if (window.localStorage.getItem(DiscordOxygenBackup !== undefined)) {
  import initialize from "./modules/core/core.mjs";
  initialize();
} else {
  import resume from "./modules/core/core.mjs";
  resume();
}
import loadModule from "./modules/core/core.mjs";

loadModule("./webpackChunkdiscord_app");