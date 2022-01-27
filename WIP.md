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

## some interesting objects to look at
```
DiscordChunk.find(m=>m?.exports?.default?.getDefaultPrice!==void 0)
```
