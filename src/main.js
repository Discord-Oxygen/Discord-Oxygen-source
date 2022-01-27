/* This will be the end-result which gets executed */
if (window.localStorage.getItem(DiscordOxygenBackup) !== undefined) {
  pastehere(./resume.js);
} else {
  pasthere(./init.js);
}

DiscordOxygen.API.DiscordChunk = [];
webpackChunkdiscord_app.push([
  [''],
  {},
  function (e) {
    DiscordChunk = [];
    for (let c in e.c) {
      DiscordChunk.push(e.c[c])
    }; //we make use of discords code which kinda parses and executes the last element of webpackChunkdiscord_app.
  }
]);
webpackChunkdiscord_app.pop(); // clean up the mess we created in order to obtain the objects
/*
and now
never use webpackChunkdiscord_app.push again lol, if discord changes soemthing again (like on october 22nd, 2021), this is the only thing that need to be updated
*/
DiscordOxygen.API.DiscordChunk = DiscordChunk;
delete DiscordChunk;