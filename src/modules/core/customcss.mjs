export let name = "Custom CSS";
export let description = "Provides methods for modifiying styles and managing custom css scripts.";
export let long_description = "Description not written yet, sorry.";
export let version = "dev-0.0.1";
export let detectable = 1;

export function addCSS(cssname, css) {
  const el = document.createElement("style");
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