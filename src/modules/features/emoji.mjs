'use strict';

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

