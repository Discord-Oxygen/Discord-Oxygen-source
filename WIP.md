# some js codes i'm testing

## anti token logger

```js
var totalbundled = webpackChunkdiscord_app.length; //save length of Discord's Webpack array globally scoped
function checkAccess() {
  var e = false; //local var for exit code
  if (webpackChunkdiscord_app.length>totalbundled) {
    e = true;
  } //check if webpack array became bigger. This works becuase most console hacks and token logger push an array to the webpack array in order to parse it.
	totalbundled = webpackChunkdiscord_app.length; //totalbundles is a global var. We reset it so that the user only gets notified once
  return e;
}
setInterval(()=>{
  if (checkAccess()) {
    alert('A function accessed Discord's Webpack API!'); //message still a wip
  }
}, 1000);
```
