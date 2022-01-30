'use strict';

export var name = "Free Emoji";
export var description = "Use custom emojis without Nitro";
export var long_description = "No description yet :/";
export var version = "dev-0.0.1";
export var detectable = 4; //indicate how likely it is, that enabling this module will get noticed / and or your account banned.
export var unstable = false; //if this odule breaks discord
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

/* This shouldn't be required if Nitro is spoofed.
let css = `li[class*='emojiItemDisabled'] { 
  outline: dotted 1px rgba(255, 0, 0, 0.3); 
  outline-offset: -2px; 
  filter: none !important; 
  cursor: pointer; 
}

li[class*='emojiItemDisabled'] > img { 
   filter: none; 
}`;

import {checkCSS, addCSS, delCss} from "../core/customcss.mjs"

if (!checkCSS(emojipicker)) {
  addCSS(css);
}
*/

function downloadIMG(id) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
	  		var reader = new FileReader();
	  		reader.onloadend = function() {
				resolve(reader.result);
	  		}
			reader.onerror = reject;
	  		reader.readAsDataURL(xhr.response);
		};
		xhr.onerror = reject;
		xhr.open('GET', `https://cdn.discordapp.com/emojis/${id}.png?size=22`);
		xhr.responseType = 'blob';
		xhr.send();
	})
}

