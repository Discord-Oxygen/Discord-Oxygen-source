# some js codes i'm testing

## initialize API
```js
webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]) //we make use of discords code which kinda parses and executes the last element of webpackChunkdiscord_app.
webpackChunkdiscord_app.pop(); // clean up the mess we created in order to obtain the objects
var discordchunkAPI = m; //we don't need to do this, any other name than m is possible ("m" is not hardcoded in discords code). I was just being stupid and misread discords code (I didn't notice that my client was bugged, therefore i though this "m" was the reason)
delete m;
//never use webpackChunkdiscord_app.push again lol
//if discord changes something again, this is the only thing that need to be updated
```
## todo
pushing this array `[[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]` into `webpackChunkdiscord_app` creates object m.
so here's a more readable verion of this array:
```js
[
  [''],
  {},
  function (e) {
    m = [];
    for (let c in e.c) {
      m.push(e.c[c])
    };
  }
]
```
unfortunately I don't have access to discord's source maps so I have to make sense out of their scrambled code using the firefeox debugger.

## anti token logger

```js
var AntiLoggerStrictmode = false; //change to true for enabling strict mode (alert on every webpack update)

var totalbundled = webpackChunkdiscord_app.length; //save length of Discord's Webpack array globally scoped
function checkAccess(strict = false) {
  var e = false; //local var for exit code
  if (webpackChunkdiscord_app.length > totalbundled) {
    if (strict == true) {
      e = true; //trigger detection if array became bigger
    } else {
    //this else part checks if the recently added object is an array and contrains three objects. Most console hacks use this pushed array to access the webpack API
      if (Array.isArray((webpackChunkdiscord_app[webpackChunkdiscord_app.length - 1]))) {
        if ((webpackChunkdiscord_app[webpackChunkdiscord_app.length - 1].length == 3)) {
          e = true;
        }
      }
    }
  } 
  totalbundled = webpackChunkdiscord_app.length; //totalbundles is a global var. We reset it so that the user only gets notified once
  return e;
}
setInterval(()=>{
  if (checkAccess(AntiLoggerStrictmode)) {
    alert("A function accessed Discord's Webpack API!"); //message still a wip
  }
}, 1000);
```
