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
export default DiscordChunk;
//window.DiscordOxygen.API.DiscordChunk = DiscordChunk;

function DiscordChunkAPI() {
  //DiscordChunkAPI().getCurrentUser(); not sure yet wether this is possible
}

/* this is an ugly hack and will hopefully never make it into production
export function DiscordChunkFunction(name) {
  return "DiscordChunk.find(m => m?.exports?.default?." + name + " !== void 0).exports.default." + name;
}
*/

let webpackExports;
if (webpackChunkdiscord_app != null) {
  let ids = ["__extra_id__"];
  webpackChunkdiscord_app.push([ids,{},(req) => {webpackExports = req;ids.length = 0;},]);
  window.webpackChunkdiscord_app.pop(); // clean up the mess we created in order to obtain the objects
}
const findModule = (filter) => {
  for (let i in webpackExports.c) {
    if (webpackExports.c.hasOwnProperty(i)) {
      let m = webpackExports.c[i].exports;
      if (!m) continue;
      if (m.__esModule && m.default) m = m.default;
      if (filter(m)) return m;
    }
  }
  return null;
};
const findModuleProps = (propNames) => findModule((module) => propNames.every((prop) => module[prop] !== undefined));

export {findModuleProps};