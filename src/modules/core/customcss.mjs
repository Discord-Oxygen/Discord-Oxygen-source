'use strict';


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