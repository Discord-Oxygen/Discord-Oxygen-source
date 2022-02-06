export let name = "Discord Chunk Webpack API";
export let description = "Provides access to Discord's internal API.";
export let long_description = "Description not written yet, sorry.";
export let version = "dev-0.0.1";
export let detectable = 0;

if (typeof (webpackChunkdiscord_app) === undefined) {
  alert('CRITICAL ERROR! webpackChunkdiscord_app not found!\nSeems like Discord changed their codebase again.')
}

window.webpackChunkdiscord_app.push([
  [''],
  {},
  function (e) {
    DiscordChunk = [];
    for (let c in e.c) {
      DiscordChunk.push(e.c[c])
    }; //we make use of discords code which kinda parses and executes the last element of webpackChunkdiscord_app.
  }
]);
window.webpackChunkdiscord_app.pop(); // clean up the mess we created in order to obtain the objects
/*
and now
never use webpackChunkdiscord_app.push again lol, if discord changes soemthing again (like on october 22nd, 2021), this is the only thing that need to be updated
*/
export default {DiscordChunk};
//window.DiscordOxygen.API.DiscordChunk = DiscordChunk;

export function DiscordChunkAPI() {
  //DiscordChunkAPI().getCurrentUser(); not sure yet wether this is possible
}


export function DiscordChunkFunction(name) {
  return "DiscordChunk.find(m => m?.exports?.default?." + name + " !== void 0).exports.default." + name;
}