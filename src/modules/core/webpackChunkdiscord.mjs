export var name = "Discord Chunk Webpack API";
export var description = "Provides access to Discord's internal API.";
export var long_description = "Description not written yet, sorry.";
export var version = "dev-0.0.1";
export var detectable = 0; //indicate how likely it is, that enabling this module will get noticed / and or your account banned.
export var unstable = false;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

if (typeof(webpackChunkdiscord_app) === undefined) {
  alert('CRITICAL ERROR! webpackChunkdiscord_app not found!\nSeems like Discord changed their codebase again.')
}

export default function DiscordChunk() {
  window.DiscordOxygen.API.DiscordChunk = [];
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
  window.DiscordOxygen.API.DiscordChunk = DiscordChunk;
  delete DiscordChunk;
}

export function DiscordChunkAPI() {
  //DiscordChunkAPI().getCurrentUser(); not sure yet wether this is possible
}


export function DiscordChunkFunction(name) {
  return "DiscordChunk.find(m => m?.exports?.default?."+name+" !== void 0).exports.default."+name;
}