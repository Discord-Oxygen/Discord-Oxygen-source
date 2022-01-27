# some js codes i'm testing

## anti token logger

```js
var totalbundled = webpackChunkdiscord_app.length; //save length of Discord's Webpack array globally scoped
function checkAccess(strict = false) {
  var e = false; //local var for exit code
  if (webpackChunkdiscord_app.length>totalbundled) {
    if (strict == true) {
      e = true; //check if webpack array became bigger.
    } else {
    //this else part checks if the recently added object is an array and contrains three objects. Most console hacks use this pushed array to access the webpack API
      if (Array.isArray((webpackChunkdiscord_app[webpackChunkdiscord_app.length -1]))) {
        if ((webpackChunkdiscord_app[webpackChunkdiscord_app.length -1].length == 3)) {
          e = true;
        }
      }
    }
  } 
  totalbundled = webpackChunkdiscord_app.length; //totalbundles is a global var. We reset it so that the user only gets notified once
  return e;
}
setInterval(()=>{
  if (checkAccess()) {
    alert("A function accessed Discord's Webpack API!"); //message still a wip
  }
}, 1000);
```
