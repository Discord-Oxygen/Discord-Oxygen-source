"use strict";
/*!

NOTICE: This work is intellecutal property of hxr404. You are legally required to follow the Terms & Conditions of your License Agreement with hxr404.
If you don't have a valid License Agreement, using this file is illegal and you must delete everything immeditatley.

(c) 2022 hxr404
All rights reserved.

*/
import {initialize, resume} from "./modules/core/core.mjs";

if (window.localStorage.getItem(DiscordOxygenBackup) !== undefined) {
  initialize();
} else {
  resume();
}
