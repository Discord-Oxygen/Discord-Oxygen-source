'use strict';

export var name = "Custom CSS";
export var description = "Provides methods for modifiying styles and managing custom css scripts.";
export var long_description = "Description not written yet, sorry.";
export var version = "dev-0.0.1";
export var detectable = 1; //indicate how likely it is, that enabling this module will get noticed / and or your account banned.
export var unstable = false;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

export function addCSS(cssname, css) {
  let el = document.createElement("style");
  el.innerHTML = css;
  el.name = cssname;
  document.head.appendChild(el);
}

export function delCss(cssname) {
  document.getElementsByName(cssname).remove();
};

export function checkCSS(cssname) {
  return !!document.getElementsByName(cssname);
}