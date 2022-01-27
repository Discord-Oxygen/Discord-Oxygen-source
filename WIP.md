# some js codes i'm testing

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
Note: There is a version of this code which replaces the first empty string with a random number. Both Version work equally well.
unfortunately I don't have access to discord's source maps so I have to make sense out of their scrambled code using the firefeox debugger.


## initialize API
```js
//we make use of discords code which kinda parses and executes the last element of webpackChunkdiscord_app.
webpackChunkdiscord_app.push([
  [''],
  {},
  function (e) {
    DiscordChunk = [];
    for (let c in e.c) {
      DiscordChunk.push(e.c[c])
    };
  }
]);
webpackChunkdiscord_app.pop(); // clean up the mess we created in order to obtain the objects
/*
and now
never use webpackChunkdiscord_app.push again lol, if discord changes soemthing again (like on october 22nd, 2021), this is the only thing that need to be updated
*/
```

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

## some interesting objects to look at
```
DiscordChunk.find(m=>m?.exports?.default?.getDefaultPrice!==void 0)
```
