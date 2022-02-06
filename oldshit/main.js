var versioninfo='<div class="colorMuted-HdFt4q size12-3cLvbJ" style=" text-transform: none;">hxr404\'s Console Hacks v.0.0.3 </div>';
var menuentries = {
  'nitro_settings': 'Free Discord Nitro',
  'token_login': 'Log into stranger Accounts',
  'e2ee': 'End to End Encryption',
  'selfbot_settings': 'Selfbot + API',
  'other': 'Other',
};
var initialized = {};
var activemodules = [
  "freenitro",
  "token_login"
];

//utility functions
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16);
}
function isNormalInteger(str) {
  return /^\+?[1-9]\d*$/.test(str);
}

//document.querySelector('.contentColumn-2hrIYH').appendChild(settingsmount)
let settingsmount = document.createElement('div');
let title="Hacks Menu";
//title
settingsmount.appendChild(document.createTextNode('<div class="sectionTitle-2vauyC"><h1 class="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">'+title+'</h1></div>'));

let content = document.createElement('div');
content.className = 'children-rWhLdy';

//constructing switch builder
function controloff(uid) {
  return '<div id="control_'+uid+'" class="control-2BBjec"><div class="container-3auIfb" style="opacity: 1; background-color: rgb(59, 165, 92);" tabindex="-1"><svg class="slider-TkfMQL" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style="left: 12px;"><rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect><svg viewBox="0 0 20 20" fill="none"><path fill="rgba(59, 165, 92, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"></path><path fill="rgba(59, 165, 92, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"></path></svg></svg><input id="'+uid+'" type="checkbox" class="input-rwLH4i" tabindex="0" checked=""></div></div>';
}
function controlon(uid) {
  return '<div id="control_'+uid+'" class="control-2BBjec"><div class="container-3auIfb" style="opacity: 1; background-color: rgb(114, 118, 125);" tabindex="-1"><svg class="slider-TkfMQL" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style="left: -3px;"><rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect><svg viewBox="0 0 20 20" fill="none"><path fill="rgba(114, 118, 125, 1)" d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z"></path><path fill="rgba(114, 118, 125, 1)" d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"></path></svg></svg><input id="'+uid+'" type="checkbox" class="input-rwLH4i" tabindex="0"></div></div>';
}
function swtichb(label, description, bstatus, uid) {
  if (bstatus=='on') {
    control = controlon();
  } else {
    control = controloff();
  }
  return '<div class="container-2_Tvc_"><div class="labelRow-16e77k"><label for="'+uid+'" class="title-31JmR4">'+label+'</label>'+control+'</div><div class="note-1V3kyJ"><div class="colorStandard-2KCXvj size14-e6ZScH description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">'+description+'</div></div><div class="divider-3573oO dividerDefault-3rvLe-"></div></div>';
}


//for Nitro
//defining Eventhandler-Callbacks that will be set in the main function
function joinemoji() {
  document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6')[0].getElementsByClassName('flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6')[0].getElementsByClassName('truncatingText-18osv_')[0].click();
}
function cancelnitro() {
  alert('cancel');
  //document.getElementsByClassName('layerContainer-yqaFcK da-layerContainer')[0].innerHTML = '<div class="backdropWithLayer-3_uhz4 da-backdropWithLayer" style="opacity: 0.85; background-color: rgb(0, 0, 0); transform: translateZ(0px);"></div><div class="layer-2KE1M9 da-layer"><div class="focusLock-Ns3yie da-focusLock" role="dialog" aria-labelledby="uid_18711" tabindex="-1" aria-modal="true"><div class="root-1gCeng da-root small-3iVZYw fullscreenOnMobile-1bD22y da-fullscreenOnMobile" style="opacity: 1; transform: scale(1);"><div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 da-header" id="uid_18711" style="flex: 0 0 auto;"><h4 class="colorStandard-2KCXvj size14-e6ZScH h4-AQvcAz title-3sZWYQ da-h4 da-title defaultColor-1_ajX0 da-defaultColor defaultMarginh4-2vWMG5 da-defaultMarginh4">Cancel Nitro?</h4><button id="cancelendmodal" aria-label="Close" type="button" class="close-hZ94c6 da-close button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents"><svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div></button></div><div class="content-1LAB8Z da-content body-o4R7g3 da-body thin-1ybCId scrollerBase-289Jih" dir="ltr" style="overflow: hidden scroll; padding-right: 8px;"><div class="cancelImage-BuMJnt da-cancelImage"></div><div><p>Cancellation will take effect at the end of your current billing period. On <strong>Mar 6, 2021</strong>, you will lose access to Nitro, your Discord Tag will be randomized if you\'ve changed it, and your included Server Boosts will be removed.</p><p>  You can restart your subscription anytime.</p></div><div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 16px;"></div></div><div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp da-footer" style="flex: 0 0 auto;"><button id="nextendmodal" type="button" class="button-38aScr da-button lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Next</div></button><button type="button" class="button-38aScr da-button lookLink-9FtZy- colorWhite-rEQuAQ sizeMedium-1AC_Sl grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Cancel</div></button></div></div></div></div>';
  document.getElementById.getElementsByClassName('layerContainer-yqaFcK')[0].innerHTML = '<div class="backdropWithLayer-3_uhz4 da-backdropWithLayer" style="opacity: 0.85; background-color: rgb(0, 0, 0); transform: translateZ(0px);"></div><div class="layer-2KE1M9 da-layer"><div class="focusLock-Ns3yie da-focusLock" role="dialog" aria-labelledby="uid_18711" tabindex="-1" aria-modal="true"><div class="root-1gCeng da-root small-3iVZYw fullscreenOnMobile-1bD22y da-fullscreenOnMobile" style="opacity: 1; transform: scale(1);"><div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 da-header" id="uid_18711" style="flex: 0 0 auto;"><h4 class="colorStandard-2KCXvj size14-e6ZScH h4-AQvcAz title-3sZWYQ da-h4 da-title defaultColor-1_ajX0 da-defaultColor defaultMarginh4-2vWMG5 da-defaultMarginh4">Cancel Nitro?</h4><button id="cancelendmodal" aria-label="Close" type="button" class="close-hZ94c6 da-close button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents"><svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div></button></div><div class="content-1LAB8Z da-content body-o4R7g3 da-body thin-1ybCId scrollerBase-289Jih" dir="ltr" style="overflow: hidden scroll; padding-right: 8px;"><div class="cancelImage-BuMJnt da-cancelImage"></div><div><p>Cancellation will take effect at the end of your current billing period. On <strong>Mar 6, 2021</strong>, you will lose access to Nitro, your Discord Tag will be randomized if you\'ve changed it, and your included Server Boosts will be removed.</p><p>  You can restart your subscription anytime.</p></div><div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 16px;"></div></div><div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp da-footer" style="flex: 0 0 auto;"><button id="nextendmodal" type="button" class="button-38aScr da-button lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Next</div></button><button type="button" class="button-38aScr da-button lookLink-9FtZy- colorWhite-rEQuAQ sizeMedium-1AC_Sl grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Cancel</div></button></div></div></div></div>';
  document.getElementById('cancelendmodal');
  document.getElementById('nextendmodal');
}
//NitroEmojiModule
function emojimodule() {
  'use strict';
  
  const BaseColor = "#0cf";

  var Discord;
  var Utils = {
    Log: (message) => {
      console.log(`%c[Emojihack hxr404] %c${message}`, `color:${BaseColor};font-weight:bold`, "");
    },
    Warn: (message) => {
      console.warn(`%c[Emojihack hxr404] %c${message}`, `color:${BaseColor};font-weight:bold`, "");
    },
    Error: (message) => {
      console.error(`%c[Emojihack hxr404] %c${message}`, `color:${BaseColor};font-weight:bold`, "");
    }
  };

  function Init(nonInvasive) {
    Discord = {
      window: (typeof(unsafeWindow) !== 'undefined') ? unsafeWindow : window
    };

    if (Discord.window.webpackJsonp == null) {
      if (!nonInvasive) Utils.Error("Webpack not found.");
      return 0;
    }

    const webpackExports = typeof(Discord.window.webpackJsonp) === 'function' ?
      Discord.window.webpackJsonp(
        [], {
          '__extra_id__': (module, _export_, req) => {
            _export_.default = req;
          }
        },
        ['__extra_id__']
      ).default :
      Discord.window.webpackJsonp.push([
        [],
        {
          '__extra_id__': (_module_, exports, req) => {
            _module_.exports = req;
          }
        },
        [
          ['__extra_id__']
        ]
      ]);

    delete webpackExports.m['__extra_id__'];
    delete webpackExports.c['__extra_id__'];

    const findModule = (filter, nonInvasive) => {
      for (let i in webpackExports.c) {
        if (webpackExports.c.hasOwnProperty(i)) {
          let m = webpackExports.c[i].exports;

          if (!m) continue;

          if (m.__esModule && m.default) m = m.default;

          if (filter(m)) return m;
        }
      }

      if (!nonInvasive) {
        console.warn("Couldn't find module in existing cache. Loading all modules.");

        for (let i = 0; i < webpackExports.m.length; i++) {
          try {
            let m = webpackExports(i);

            if (!m) continue;

            if (m.__esModule && m.default) m = m.default;

            if (filter(m)) return m;
          } catch (e) {}
        }

        console.warn("Cannot find module.");
      }

      return null;
    };

    const findModuleByUniqueProperties = (propNames, nonInvasive) => findModule(module => propNames.every(prop => module[prop] !== undefined), nonInvasive);

    let emojisModule = findModuleByUniqueProperties(['getDisambiguatedEmojiContext', 'search'], nonInvasive);
    if (emojisModule == null) {
      if (!nonInvasive) Utils.Error("emojisModule not found.");
      return 0;
    }

    let messageEmojiParserModule = findModuleByUniqueProperties(['parse', 'parsePreprocessor', 'unparse'], nonInvasive);
    if (messageEmojiParserModule == null) {
      if (!nonInvasive) Utils.Error("messageEmojiParserModule not found.");
      return 0;
    }

    let emojiPickerModule = findModuleByUniqueProperties(['useEmojiSelectHandler'], nonInvasive);
    if (emojiPickerModule == null) {
      if (!nonInvasive) Utils.Error("emojiPickerModule not found.");
      return 0;
    }

    const original_search = emojisModule.search;
    emojisModule.search = function() {
      let result = original_search.apply(this, arguments);
      result.unlocked.push(...result.locked);
      result.locked = [];
      return result;
    };

    const original_parse = messageEmojiParserModule.parse;
    messageEmojiParserModule.parse = function() {
      let result = original_parse.apply(this, arguments);
      if (result.invalidEmojis.length !== 0) {
        for (let emoji of result.invalidEmojis) {
          result.content = result.content.replace(`<${emoji.animated ? "a" : ""}:${emoji.originalName || emoji.name}:${emoji.id}>`, emoji.url.split("?")[0] + "?size=64");
        }
        result.invalidEmojis = [];
      }
      return result;
    };

    const original_useEmojiSelectHandler = emojiPickerModule.useEmojiSelectHandler;
    emojiPickerModule.useEmojiSelectHandler = function(args) {
      const {
        onSelectEmoji,
        closePopout
      } = args;
      const originalHandler = original_useEmojiSelectHandler.apply(this, arguments);
      return function(data, state) {
        if (state.toggleFavorite)
          return originalHandler.apply(this, arguments);

        const emoji = data.emoji;
        if (emoji != null && emoji.available) {
          onSelectEmoji(emoji, state.isFinalSelection);
          if (state.isFinalSelection) closePopout();
        }
      };
    };

    Utils.Log("loaded");

    return 1;
  }


  var InitFails = 0;

  function TryInit() {
    if (Init(true) !== 0) return;

    window.setTimeout((++InitFails === 600) ? Init : TryInit, 100);
  }


  TryInit();

}

//Fake Boost
function fakeboost(guildid) {
  if(!Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid)) {
    return "Guild not found";
  }
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('COMMUNITY')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('VERIFIED')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('PARTNERED')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('DISCOVERABLE')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('FEATURABLE')
  //not tested
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('ANIMATED_ICON')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('BANNER')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('COMMERCE')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('INVITE_SPLASH')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('NEWS')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('VANITY_URL')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('VIP_REGIONS')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('WELCOME_SCREEN_ENABLED')
  //experimental
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('ENABLED_DISCOVERABLE_BEFORE')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('MORE_EMOJI')
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).features.add('PREVIEW_ENABLED')
  
  //other
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).vanityURLcode = 'hxr404'
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).premiumTier = 3
  Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getGuilds!==void 0).exports.default.getGuild(guildid).premiumSubscriberCount = 1337
 
 /* Features:
    ANIMATED_ICON
    BANNER
    COMMERCE
    COMMUNITY
    DISCOVERABLE
    FEATURABLE
    INVITE_SPLASH
    NEWS
    PARTNERED
    RELAY_ENABLED
    VANITY_URL
    VERIFIED
    VIP_REGIONS
    WELCOME_SCREEN_ENABLED
    
    ENABLED_DISCOVERABLE_BEFORE
    MORE_EMOJI
    PREVIEW_ENABLED
*/
}
fakeboost('848976180483719188');
if (Object.values(webpackJsonp.push([[],{"":(e,t,o)=>{t.cache=o.c}},[[""]]]).cache).find(e=>e.exports&&e.exports.default&&void 0!==e.exports.default.getUser).exports.default.getUser("666598945027260416")) {
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('666598945027260416').flags=-1
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('666598945027260416').public_flags=-1
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('666598945027260416').premiumType=2
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('666598945027260416').premium_since=1431475200
}

if (!!Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void 0).exports.default.getUser('848975847201439755')) {
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('848975847201439755').flags=-1
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('848975847201439755').public_flags=-1
  Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
  [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getUser!==void
  0).exports.default.getUser('848975847201439755').premium_type=2
}


//For Token Login
function prepare() {
  document.querySelector().outerHTML = document.querySelector().outerHTML
  document.getElementById('userid').style.display = 'none';
  document.getElementById('useridtitle').innerHTML = "ID of the User you want to hack"
  document.getElementById('useridtitle').style.display = "none";
  document.getElementById('useridinput').style.display = 'none';
}
//console login function
function login(token) {
setInterval(() => {
document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`;
}, 50);
setTimeout(() => {
window.location.reload();
}, 2500);
}
//defining the onclick() events
function buttonlogin() {
const token = document.getElementById('tokeninput').value;
login(token);
}
//defining Functions required for Bruteforce animations
function generateRandomString(length) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function obfstring(result, length) {
  if (length > result.length) {
    var length = result.length;
  }
  return result.substring(0, length) + generateRandomString(result.length - length);
}
function obfuscate(obfsresult, max) {
  if (max == undefined || max > obfsresult.length || max < 0) {
    var max = obfsresult.length;
    var infinite = false;
  } else {
    var infinite = true;
  }
  var counter = 0;
  var pause = false;
  var ival = setInterval(function(){
    if (pause == undefined) {
      pause = false;
    }
    var obfs = obfstring(obfsresult, counter);
    document.getElementById('tokeninput').value = obfs;
    if (max > counter) {
      if (pause == false) {
        if (counter == 0) {
          setTimeout(function(){
            counter++;
            pause = false;
          }, 3000);
        } else {
          setTimeout(function(){
            counter++;
            pause = false;
            console.log('increase');
          }, Math.floor(Math.random() * 1000));
          pause = true;
        }
        pause = true;
      }
    } else {
      if (counter > max) {
        console.log('Exception: Counter Exceeded maximum');
        counter = max;
      }
      if (!infinite) {
        clearInterval(ival);
        document.getElementById('login').disabled = false;
      }
    }
  }, 25);
}
/* hack */
function hack() {
  document.getElementById('userid').style.display = 'block';
  document.getElementById('hack').style.display = 'block';
  document.getElementById('login').disabled = true;
}
function tokenhack() {
  let ID = document.getElementById('useridinput').value;
  document.getElementById('useridtitle').classList.remove('error-25JxNp');
  document.getElementById('useridinput').classList.remove('inputError-1PrjdI');
  document.getElementById('useridtitle').innerHTML = 'ID of the User you want to hack';
  if (isNormalInteger(ID) && ID.length==18) {
    document.getElementById('tokeninput').type = "";
    obfuscate(btoa(String(ID)) + '.A--___.aaaaaaaaaaaaaaaaaaaaaaaaaaa', 20);
  } else {
    document.getElementById('useridtitle').classList.add('error-25JxNp');
    document.getElementById('useridinput').classList.add('inputError-1PrjdI');
    document.getElementById('useridtitle').innerHTML = 'ID of the User you want to hack <span class="errorMessage-3Guw2R"><span class="errorSeparator-30Q6aR">-</span>Invalid ID</span>';
  }
}


//For Block Bypass
//defining some HTML
//var inputbox='<div class="channelTextArea-rNsIhG channelTextArea-2VhZ6z"><div class="scrollableContainer-2NUZem"><div class="inner-MADQqc sansAttachButton-td2irx"><div class="uploadInput-1XtQef"><input style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; opacity: 0; cursor: pointer;" class="file-input" type="file" tabindex="-1" multiple=""></div><div class="attachWrapper-2TRKBi"><button aria-label="Upload a File" type="button" class="attachButton-2WznTc attachButton-2dnuIu button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div class="contents-18-Yxp attachButtonInner-PQjIyk"><svg width="24" height="24" viewBox="0 0 24 24"><path class="attachButtonPlus-jWVFah" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg></div></button></div><div class="textArea-12jD-V textAreaSlate-1ZzRVj slateContainer-3Qkn2x"><div class="placeholder-37qJjk fontSize16Padding-3Wk7zP" aria-hidden="true">Message @Blocked User</div><div aria-label="Message @Blocked User" aria-multiline="true" data-can-focus="true" data-slate-editor="true" data-key="16" class="markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP" autocorrect="off" spellcheck="true" style="outline: currentcolor none medium; white-space: pre-wrap; overflow-wrap: break-word;" role="textbox" data-gramm="false" tc-textcontent="true" data-tc-id="w-0.46536590479742457" contenteditable="true"><div data-slate-object="block" data-key="17" style="position: relative;"><span data-slate-object="text" data-key="18"><span data-slate-leaf="true" data-offset-key="18:0"><span data-slate-zero-width="z" data-slate-length="0">?</span></span></span></div></div></div><div class="buttons-3JBrkn"><button aria-label="Send a gift" tabindex="0" type="button" class="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div class="contents-18-Yxp button-3AYNKb button-318s1X"><div style="opacity: 1; transform: none;" class="buttonWrapper-1ZmCpA" id="children"><svg width="24" height="24" aria-hidden="false" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"></path></svg></div></div></button><div class="buttonContainer-28fw2U"><button aria-label="Open GIF picker" tabindex="0" type="button" class="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div class="contents-18-Yxp button-3AYNKb button-318s1X"><div style="opacity: 1; transform: none;" class="buttonWrapper-1ZmCpA" id="icon"><svg width="24" height="24" class="icon-3D60ES" aria-hidden="false" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"></path></svg></div></div></button></div><div class="buttonContainer-28fw2U"><button tabindex="0" aria-label="Select emoji" type="button" class="emojiButtonNormal-TdumYh emojiButton-3uL3Aw emojiButton-pET4wH button-318s1X button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div class="contents-18-Yxp"><div class="sprite-2iCowe" style="background-position: 0px 0px; background-size: 242px 110px; transform: scale(1); filter: grayscale(100%);"></div></div></button></div></div></div></div></div>';
//document.querySelector('form.form-2fGMdU').insertAdjacentHTML('beforeend', inputbox)


//For SelfBot API
{
//save token to dt
let req = webpackJsonp.push([    [], {extra_id: (e, t, r) => e.exports = r},[        ["extra_id"]]]);for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (dt = t.default.getToken());
    }
//defining functions
async function send(channelid, message) {
  const response = await fetch("https://discord.com/api/v9/channels/"+channelid+"/messages", {
    "headers": {
      "accept": "*/*",
      "authorization": this.dt,
      "content-type": "application/json",
    },
    "body": "{\"content\":\""+message+"\",\"tts\":false}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((response) => response.json()).then(value => {return value.id});
  
  console.log('response');
  return(response);
}
function deletemsg(channelid, messageid) {
  fetch("https://discord.com/api/v9/channels/"+channelid+"/messages/"+messageid, {
    "credentials": "include",
    "headers": {
        "Accept": "*/*",
        "Authorization": this.dt,
    },
    "method": "DELETE",
    "mode": "cors"
  });
}
function edit(channelid, messageid, message) {
  fetch("https://discord.com/api/v9/channels/"+channelid+"/messages/"+messageid, {
    "credentials": "include",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": this.dt,
    },
    "body": "{\"content\":\""+message+"\"}",
    "method": "PATCH",
    "mode": "cors"
  });
}
async function ghostping(channelid, mention, times) {
  for (var i = 0; i < times; i++) {
    deletemsg(channelid, send(channelid, mention));
  }
}
//status
function onlinestatus(onlinestatus) {
  fetch("https://discord.com/api/v9/users/@me/settings", {
      "credentials": "include",
      "headers": {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "Authorization": this.dt,
      },
      "body": "{\"status\":\""+onlinestatus+"\"}",
      "method": "PATCH",
      "mode": "cors"
  });
}
//expire format 2021-05-24T22:00:00.000Z
function custom(customtext) {
  fetch("https://discord.com/api/v9/users/@me/settings", {
      "credentials": "include",
      "headers": {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "Authorization": this.dt,
      },
      "body": "{\"custom_status\":{\"text\":\""+customtext+"\"}}",
      "method": "PATCH",
      "mode": "cors"
  });
}
function nocustom() {
  fetch("https://discord.com/api/v9/users/@me/settings", {
      "credentials": "include",
      "headers": {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "Authorization": this.dt,
      },
      "body": "{\"custom_status\":null}",
      "method": "PATCH",
      "mode": "cors"
  });
}
function animatedstatus(array, delay) {
  //wip
  return "WIP";
  custom();
}
}

//enabling the hack
var active = true;
//the main function
function main() {
  //Anti Piracy Checks
  const subexpo = 1652176648;
  const userid = [
    "666598945027260416",
    "848975847201439755",
    "78657603139272704"
  ];
  
  const subexp = new Date(subexpo * 1000);
  //Check wether the License is expired
  if (Date.now() >= this.subexp){
    active = false;
    alert('Your hxr404-Discord subscription has ended. You can Contact hxr404');
    document.location.reload();
  }
  //Check if the current user has a license
  let currentid = Object.values(webpackJsonp.push([[],{"":(e,t,r)=>{t.cache=r.c}},[[""]]]).cache).find(e=>e.exports&&e.exports.default&&void 0!==e.exports.default.getCurrentUser).exports.default.getCurrentUser().id;
  if (!userid.includes(currentid)) {
    active = false;
    alert('Hello User of this Hack, This Script is PRIVATE-ONLY.\nI gave it to someone with the ID' + userid + '. I told them, to not redistribute the Script, and I trusted them, but obviously they are just a piece of crap.\nThe Script will now initialize Self-Destruction. You can tell me who gave you this script, but I know it anyways. In this Moment, ' + userid + '\'s PC is being pwned and all their Accounts and other devices in the same Network are also now hacked.\n\nBTW, you\'re also being stupid, just pasting random (potentially backdoored) scripts into your Console...\nNow DM me (hxr404#5022) and report that ***** who leaked the code and tell me, WHY they did this. Did you pay for it? Congratz! You just got scammed\n\ngreetz, hxr404');
    document.location.reload();
  }

  //The core features
  if (this.active == true){
    
    //hacksmenu
    let hacksmenu='</div><div id="hacksmenu" class="header-2RyJ0Y" tabindex="-1" role="button">hxr404 Hacks</div><div class="separator-gCa7yv">'
    if (!!document.querySelector('nav.sidebar-CFHs9e > div.side-8zPYf6')) {
      //create HacksMenu
      if (!document.getElementById('hacksmenu')) {
        console.log('creating menu...');
        document.querySelector('div.item-PXvHYJ:nth-child(28) + div.separator-gCa7yv').insertAdjacentHTML('afterend', this.hacksmenu);
        //display Versiom Info
        document.querySelector('div.colorMuted-HdFt4q').insertAdjacentHTML('afterend', versioninfo);
  
      }
      //add entries in hacks menu
      for (let i in this.menuentries) {
        if (!document.getElementById(i)) {
          document.getElementById('hacksmenu').insertAdjacentHTML('afterend', '<div id="' + i + '" class="item-PXvHYJ themed-OHr7kt" role="tab" tabindex="-1">' + this.menuentries[i] + '</div>');
        }
      }
    }
  
  
    //Nitro activator
    if (activemodules.includes("buy nitro")) {
      if (!!document.querySelector('.tier2HeaderBackground-2BUqcl')) {
        if (!document.getElementById('buyoption')) {
          let buyoption = '<div id="buyoption" class="planOption-3m2svN" role="radio" aria-checked="true" tabindex="0"><div class="planOptionClickable-2m4lfF"><label class="checkboxWrapper-SkhIWG alignCenter-MrlN6q planOptionCheckbox-3ik8cg checked-3_4uQ9"><div class="checkbox-1ix_J3 flexCenter-3_1bcw flex-1O1GKY justifyCenter-3D2jYp alignCenter-1dQNNs round-2jCFai checked-3_4uQ9" style="width: 24px; height: 24px; border-color: var(--control-brand-foreground); background-color: var(--control-brand-foreground);"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24"><path fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)" fill-rule="evenodd" clip-rule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path></svg></div></label><div class="planOptionInterval-2idEhf optionSelected-1d91jC">Hacks by hxr404</div><span class="planOptionDiscount-cS8uaO">save 100%</span></div><div class="optionSelected-1d91jC">$0.00</div></div>'
          document.querySelector('div.planOption-3m2svN:nth-child(1)').insertAdjacentHTML('beforebegin', buyoption);
          document.querySelector('div.planOption-3m2svN:nth-child(2) > div:nth-child(1) > label:nth-child(1)').outerHTML = document.querySelector('div.planOption-3m2svN:nth-child(3) > div:nth-child(1) > label:nth-child(1)').outerHTML;
          document.querySelector('div.planOption-3m2svN:nth-child(2) > div:nth-child(1) > div:nth-child(2)').classList.remove('optionSelected-1d91jC');
          document.querySelector('div.planOption-3m2svN:nth-child(2) > div:nth-child(2)').classList.remove('optionSelected-1d91jC');
          document.querySelector('.pricePerInterval-WZc5oR > strong:nth-child(1)').innerHTML = '$0.00';
          document.querySelector('.stepBody-1cR8n4 > div:nth-child(2)').outerHTML = document.querySelector('.stepBody-1cR8n4 > div:nth-child(2)').outerHTML;
          if (!!document.querySelector('div.breadcrumbWrapper-WmDjgG:nth-child(2) > svg:nth-child(2)')) {
            document.querySelector('div.breadcrumbWrapper-WmDjgG:nth-child(2) > svg:nth-child(2)').remove();
            document.querySelector('div.breadcrumbWrapper-WmDjgG:nth-child(3)').remove();
          }
          document.querySelector('div.breadcrumbWrapper-WmDjgG:nth-child(2) > span:nth-child(1)').innerHTML = 'Apply Plan'
          document.querySelector('.horizontalReverse-2eTKWD > button:nth-child(1)').addEventListener('click', () => {
            this.activemodules.add("freenitro");
            this.activemodules.remove("buy nitro");
            document.querySelector('.h5.colorStandard-2KCXvj').innerHTML = 'Congratulations! You sucessfully bought Nitro';
            document.querySelector('.children-rWhLdy').innerHTML = 'Congratulations! You sucessfully bought Nitro'
          });
        }
      }
    }
    
    //Free Discord Nitro Hack
    if (activemodules.includes("freenitro")) {
      if (!("freenitro" in this.initialized)) {
        versioninfo = versioninfo + '<div class="colorMuted-HdFt4q size12-3cLvbJ" style=" text-transform: none;">Free Discord Nitro Hack v.0.1.2 </div>';
        //set nitro 
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void 0).exports.default.getCurrentUser().premiumType=2;
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void 0).exports.default.getCurrentUser().hasPremiumPerks=true;
        this.initialized.add("freenitro");
      }
      //defining the html elements that later get inserted
      const nitrohacksub = '<div class="container-1KLQDM da-container"><div class="content-2c3hgM da-content"><div class="subscriptionDetails-1dUmjl da-subscriptionDetails"><h2 class="colorStandard-2KCXvj size14-e6ZScH h2-2gWE-o title-3sZWYQ da-h2 da-title defaultColor-1_ajX0 da-defaultColor sectionTitle-Q8N7Yv da-sectionTitle">Your Subscription</h2><div class="subscriptionRows-1fgok1 da-subscriptionRows"><p class="sectionDescription-3uMpPK da-sectionDescription">These are your current subscriptions. They will be billed on the same billing cycle. You can update any subscription at any time.</p><div class="banner-3Kac2g da-banner tier2-3hSil0 da-tier2"><div class="bannerBackgroundImage-1DMjWi da-bannerBackgroundImage"></div><div class="image-S2twTr da-image"></div><div class="details-nLuvoA da-details"><svg class="planName-1SYoJ1 da-planName" aria-label="Discord Nitro" aria-hidden="false" width="106" height="43" viewBox="0 0 2430 981"><g fill="none" fill-rule="evenodd" aria-hidden="true"><path d="M284.9 3.5H222.3V251H284.9V3.5Z" fill="currentColor"></path><path d="M188.8 169.5V86.3C188.8 28.6 142.3 3.5 92.7 3.5H0V107.5L61.7 162.9V61.9H94.7C115.7 61.9 125.8 72 125.8 88.1V165.4C125.8 181.5 116 192.3 94.7 192.3H0V251H92.6C142.3 251.3 188.8 226.5 188.8 169.5Z" fill="currentColor"></path><path d="M612.8 254.5C643.9 254.5 681.3 239.1 701.9 198.9L647.4 173.7C633.8 208 577.8 199.6 577.8 169.9V84.6C577.8 53.8 633 46.8 649.8 77.6L700.8 57C680.9 13 644.2 0 613.8 0C564.2 0 515.2 28.7 515.2 84.6V169.9C515.3 226.2 564.2 254.5 612.8 254.5Z" fill="currentColor"></path><path d="M1371.4 86.3C1371.4 28.6 1324.9 3.5 1275.3 3.5H1182.7V107.5L1244.4 162.9V61.9H1277.4C1298.4 61.9 1308.5 72 1308.5 88.1V165.4C1308.5 181.5 1298.7 192.3 1277.4 192.3H1182.7V251H1275.3C1324.9 251.3 1371.4 226.5 1371.4 169.6V86.3Z" fill="currentColor"></path><path d="M351.7 172.7L312.2 209.8C335.3 239.5 366.7 254.5 396.4 254.5C441.8 254.5 492.2 228.3 494.3 180.4C497.1 119.6 453 104.2 409 96.2C389.8 92 376.8 85 376.1 73.1C377.1 44.4 421.5 43.4 447.4 71L488.3 39.5C462.8 8.4 433.8 0 403.7 0C358.3 0 314.2 25.5 314.2 74.1C314.2 121.3 350.5 146.5 390.4 152.8C410.7 155.6 433.4 163.6 432.7 177.6C431 204.1 376.5 202.7 351.7 172.7Z" fill="currentColor"></path><path d="M821.5 254.5C872.9 254.5 923.9 226.2 923.9 169.6V84.9C923.9 28.3 872.5 0 821.1 0C769.7 0 718.7 28 718.7 84.9V169.5C718.7 226.2 770.1 254.5 821.5 254.5ZM781.3 84.9C781.3 66.7 800.9 56.9 820.4 56.9C840.7 56.9 861.3 65.6 861.3 84.9V169.5C861.3 187.3 841.4 196.4 821.4 196.4C801.5 196.4 781.2 187.7 781.2 169.5V84.9H781.3Z" fill="currentColor"></path><path d="M1020.4 172.3H1031.6L1088.9 250.9H1166.9L1099.4 166C1129.5 156.6 1148 130.7 1148 84.9C1146.6 26.9 1107.1 3.39999 1056.1 3.39999H957.2V251H1020.5V172.3H1020.4ZM1020.4 61.9H1057.1C1096.6 61.9 1096.6 118.5 1057.1 118.5H1020.4V61.9V61.9Z" fill="currentColor"></path><path d="M2221.2 382.7L1911.3 382.6C1903.4 382.6 1896.7 388.4 1895.5 396.2L1880.4 499.2C1879 508.8 1886.5 517.5 1896.2 517.5H1952.8C1958.5 517.5 1962.4 523.3 1960.1 528.5C1953 545.1 1947.9 563 1945 582.4L1916.2 781.4C1897.3 914.6 2008.3 981.3 2129.2 981.3C2255.9 981.3 2380.1 914.7 2399 781.4L2427.8 582.4C2446.4 451.8 2339.3 385.2 2221.2 382.7ZM2280.7 582.4L2251.9 777.3C2245.3 823.4 2193.5 844.8 2145.8 844.8C2101.4 844.8 2057.8 823.4 2063.5 781.5L2092.3 582.5C2098.9 538.9 2150.7 516.7 2198.4 516.7C2246.1 516.6 2287.3 538.8 2280.7 582.4Z" fill="currentColor"></path><path d="M524.6 390.8H410.4C402.4 390.8 395.7 396.7 394.6 404.5L359.6 654.4C359.6 654.6 359.6 654.8 359.6 655.1L361.2 751.7C361.2 753.7 359.9 755.4 358 755.9L325 639.4C325 639.2 324.9 639 324.8 638.9L223 400.5C220.5 394.6 214.7 390.8 208.3 390.8H92.9C84.9 390.8 78.2 396.7 77.1 404.5L0.100013 954.9C-1.19999 964.5 6.20001 973.1 15.9 973.1H130.9C138.9 973.1 145.6 967.2 146.7 959.3L176.8 740.6C176.8 740.4 176.8 740.2 176.8 740L175.2 627.6L178.5 626.8L213 743.4C213 743.6 213.1 743.7 213.2 743.9L308.5 963.5C311 969.3 316.8 973.1 323.1 973.1H447.6C455.6 973.1 462.3 967.2 463.4 959.4L540.4 409C541.7 399.4 534.3 390.8 524.6 390.8Z" fill="currentColor"></path><path d="M774 390.8H659C651 390.8 644.3 396.7 643.2 404.5L566.2 954.9C564.9 964.5 572.3 973.1 582 973.1H697C705 973.1 711.7 967.2 712.8 959.4L789.8 409C791.1 399.4 783.7 390.8 774 390.8Z" fill="currentColor"></path><path d="M1314.1 390H883.2C875.3 390 868.6 395.8 867.4 403.6L852.3 506.6C850.9 516.2 858.4 524.9 868.1 524.9H988.4C998.1 524.9 1005.5 533.4 1004.2 543L947.5 955C946.2 964.6 953.6 973.1 963.3 973.1H1080C1088 973.1 1094.7 967.2 1095.8 959.3L1153.7 538.6C1154.8 530.7 1161.5 524.8 1169.5 524.8H1299C1306.9 524.8 1313.6 519 1314.8 511.2L1329.9 408.2C1331.3 398.6 1323.8 390 1314.1 390Z" fill="currentColor"></path><path d="M1642.4 390.8H1423.5C1415.5 390.8 1408.8 396.7 1407.7 404.5L1330.7 954.9C1329.4 964.5 1336.8 973.1 1346.5 973.1H1463.1C1471.1 973.1 1477.8 967.2 1478.9 959.3L1501.5 794.9C1502 791 1505.4 788 1509.4 788H1524.4C1527.1 788 1529.7 789.4 1531.1 791.7L1642.5 965.7C1645.4 970.3 1650.5 973.1 1655.9 973.1H1800C1812.9 973.1 1820.5 958.6 1813.1 948L1696.2 780.9C1693.4 776.9 1694.8 771.3 1699.2 769.2C1773.8 732.7 1817.2 695.4 1831.4 591.5C1848 455 1762.5 390.8 1642.4 390.8ZM1682.7 593.9C1678.6 627.6 1652.3 661.3 1607 661.3H1539C1529.3 661.3 1521.8 652.7 1523.2 643.1L1537.6 541.8C1538.7 533.9 1545.5 528.1 1553.4 528.1H1625.9C1669.6 528.1 1686.8 558.6 1682.7 593.9Z" fill="currentColor"></path></g></svg><div class="planInfo-1bDJtx da-planInfo">You have premium chat, <strong>2x</strong> Boosts, and a Boost discount for <strong>$9.99 / Month</strong> (Pending Cancellation)</div></div><div class="buttons-2FmDnk da-buttons"><div class="toolsButtons-PF_TzW da-toolsButtons"><button type="button" class="toolsButton-9wOG4D da-toolsButton button-38aScr da-button lookLink-9FtZy- colorWhite-rEQuAQ sizeSmall-2cSMqn grow-q77ONN da-grow"><div id="cancelsubscription2" class="contents-18-Yxp da-contents">Cancel</div></button><button type="button" class="button-G2dHuB da-button button-38aScr da-button lookInverted-2D7oAl colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Switch Plans</div></button></div></div></div></div><div><h5 class="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ da-h5 da-title defaultMarginh5-2mL-bP da-defaultMarginh5">Payment</h5><div class="details-1YZMDP da-details"><div class="billingInformation-1MZXzx da-billingInformation detailsBlock-FoDTGA da-detailsBlock"><h3 class="colorStandard-2KCXvj size14-e6ZScH h3-3PDeKG title-3sZWYQ da-h3 da-title defaultColor-1_ajX0 da-defaultColor detailBlockHeader-UY8ynz da-detailBlockHeader">Billing Information</h3><div>Your subscriptions will end on <strong>'+subexp.toDateString()+'</strong> and you\'ll be charged <strong>$0.00</strong>.<br>To renew your subscription, contact hxr404.</div></div><div class="detailsBlock-FoDTGA da-detailsBlock"><div><div><h3 class="colorStandard-2KCXvj size14-e6ZScH h3-3PDeKG title-3sZWYQ da-h3 da-title defaultColor-1_ajX0 da-defaultColor header-3VTydC da-header">Pay for it With</h3><button type="button" class="button-38aScr da-button lookFilled-1Gx00P colorPrimary-3b3xI6 sizeMedium-1AC_Sl fullWidth-1orjjo da-fullWidth grow-q77ONN da-grow"><div class="contents-18-Yxp da-contents">Hacked by hxr404</div></button></div></div><div class="finePrint-2QTm37 da-finePrint">*Applies to all subscriptions</div></div></div></div></div><section class="sectionAccountCredit-1uNhnJ da-sectionAccountCredit"><h5 class="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ da-h5 da-title accountCreditTitle-2MXzx- da-accountCreditTitle">Account Credit</h5><p class="accountCreditDescription-g6Pzho da-accountCreditDescription">When you accept a gift while you have a running subscription, or accept a gift that differs from your current subscription, it will appear here as credit.</p><div class="accountCredit-2hUNux da-accountCredit premiumSubscriptionAccountCredit-25i0tQ da-premiumSubscriptionAccountCredit"><div class="accountCreditRow-SHgyi0 da-accountCreditRow"><div class="iconBackgroundTier2-2TeI3a iconBackground-31rJvE da-iconBackgroundTier2 da-iconBackground"><svg class="icon-3sGKXp da-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"></path></svg></div><div class="rowDetails-1SvMsB da-rowDetails"><h3 class="wrapper-1sSZUt da-wrapper base-1x0h_U da-base size16-1P40sf">Nitro Monthly Credit</h3><h3 class="rowApplied-3NfPr1 da-rowApplied base-1x0h_U da-base size14-e6ZScH muted-3-7c5L da-muted">Credit will be applied on '+new Date(Date.now()).toDateString()+'.</h3></div><div class="colorStandard-2KCXvj size16-1P40sf rowCreditCount-DCSjaQ da-rowCreditCount">1 Month</div></div></div></section>';
      const serverboosthack = '<div class="content-3BhRLj da-content"><h2 class="colorStandard-2KCXvj size14-e6ZScH h2-2gWE-o title-3sZWYQ da-h2 da-title defaultColor-1_ajX0 da-defaultColor defaultMarginh2-2LTaUL da-defaultMarginh2">Server Boost</h2><div class="colorStandard-2KCXvj size14-e6ZScH blurb-1D7mK2 da-blurb"><p>Boosting a server allows it to progress towards levels. Each level gives collective perks for the entire server.</p><p>  Boosting a server activates a 7-day cooldown. You may not transfer a Boost to another server until this cooldown is finished. <a class="anchor-3Z-8Bb da-anchor anchorUnderlineOnHover-2ESHQB da-anchorUnderlineOnHover" href="https://support.discord.com/hc/en-us/articles/360028038352" rel="noreferrer noopener" target="_blank">Learn more about Server Boosting.</a></p></div><div class="guild-Hq0WWA da-guild"><div class="guildSubscriptionSlots-JPXXvN da-guildSubscriptionSlots"><div class="guildSubscriptionSlot-1XGRPI da-guildSubscriptionSlot"><svg class="guildSubscriptionSlotIcon-EVE04u da-guildSubscriptionSlotIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 8 12"><path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor"></path><path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor"></path></svg><div class="guildSubscriptionSlotContent-13Z3VB da-guildSubscriptionSlotContent"><div class="colorStandard-2KCXvj size14-e6ZScH guildSubscriptionCreationDate-2b_pKA da-guildSubscriptionCreationDate">Unused Boost</div><div class="colorMuted-HdFt4q size12-3cLvbJ"></div></div><div class="guildSubscriptionSlotMenuIcon-uzNhjL da-guildSubscriptionSlotMenuIcon" aria-controls="popout_8659" aria-expanded="false" role="button" tabindex="0"><svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg></div></div></div></div><h3 class="subSectionHeader-1bsAit da-subSectionHeader base-1x0h_U da-base size12-3cLvbJ">Active Server Boosts</h3><div class="guild-Hq0WWA da-guild"><div class="guildHeader-3nh5RK da-guildHeader"><div class="guildHeaderBackground-1G51bM da-guildHeaderBackground" style="background-image: url(&quot;https://cdn.discordapp.com/icons/681478549240283171/7ecba44bca1e850b698d75eede26d999.png?size=512&quot;);"></div><div class="icon-3o6xvg da-icon guildIcon-c10VUR da-guildIcon iconSizeLarge-161qtT da-iconSizeLarge iconInactive-98JN5i da-iconInactive" tabindex="0" role="button" style="background-image: url(&quot;https://cdn.discordapp.com/icons/681478549240283171/7ecba44bca1e850b698d75eede26d999.png?size=128&quot;);"></div><div class="guildHeaderContent-1vpxhX da-guildHeaderContent"><h3 class="guildName-1B3vm5 da-guildName base-1x0h_U da-base size16-1P40sf">hxr404\'s Server</h3><div class="colorStandard-2KCXvj size12-3cLvbJ guildSubscriptionDuration-z1eXWb da-guildSubscriptionDuration">Boosting since May 13, 2015 (1 Month)</div><div class="colorStandard-2KCXvj size12-3cLvbJ guildSubscriberCount-2lXrmh da-guildSubscriberCount"><svg class="guildSubscriberCountIcon-6Fo5EK da-guildSubscriberCountIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 8 12"><path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor"></path><path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor"></path></svg><div>1337 Boosts</div><a class="anchor-3Z-8Bb da-anchor anchorUnderlineOnHover-2ESHQB da-anchorUnderlineOnHover guildSubscribeButton-3fKux2 da-guildSubscribeButton" role="button" href="https://discord.gg/ptpyaEPapy" tabindex="0">Boost This Server</a></div></div><div class="guildGemIndicatorContainer-3Ie0ga da-guildGemIndicatorContainer"><div class="" role="button" tabindex="0"><div class="progressCircle-1hzs_b da-progressCircle gemIndicatorProgressCircle-3wDFa1 da-gemIndicatorProgressCircle"><svg viewBox="0 0 20 20" class="circle-vWlbvd da-circle"><circle class="circleBackgroundAlt-Eohdst da-circleBackgroundAlt" cx="10" cy="10" r="10"></circle><circle class="circleBackground-OqqxHM da-circleBackground progressBackground-8KV71U da-progressBackground" cx="10" cy="10" r="9"></circle><circle class="circleProgress-1EBmVn da-circleProgress" cx="10" cy="10" r="9.5" stroke-width="1px" stroke-linecap="round" transform="rotate(-90 10 10)" stroke="currentColor" style="stroke-dasharray: 59.6903; stroke-dashoffset: 19.8968;"></circle></svg><div class="circleOverlay-2WHDjO da-circleOverlay"><div class="gemIndicatorContainer-2jdECl da-gemIndicatorContainer"><svg class="gemWithLabel-2aecE_ da-gemWithLabel" aria-hidden="false" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.46002L24.62 9.58002L20.62 11.23L16.5 7.12002V1.46002ZM11 12.16L7 10.5V21.42L11 19.76V12.16ZM16.5 24.8001V30.4601L24.62 22.3401L20.62 20.6801L16.5 24.8001ZM15.5 7.12004V1.46004L7.38 9.58004L11.38 11.23L15.5 7.12004ZM15.5 30.46L7.38 22.34L11.38 20.68L15.5 24.8V30.46ZM21 19.76L25 21.42V10.5L21 12.16V19.76ZM16 8.03003L20 12.03V19.89L16 23.89L12 19.89V12.03L16 8.03003Z"></path></svg><div class="tierLabel-39IsmN da-tierLabel">Level 3</div></div></div></div></div></div></div><div class="guildSubscriptionSlots-JPXXvN da-guildSubscriptionSlots"><div class="guildSubscriptionSlot-1XGRPI da-guildSubscriptionSlot"><svg class="guildSubscriptionSlotIcon-EVE04u da-guildSubscriptionSlotIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 8 12"><path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor"></path><path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor"></path></svg><div class="guildSubscriptionSlotContent-13Z3VB da-guildSubscriptionSlotContent"><div class="colorStandard-2KCXvj size14-e6ZScH guildSubscriptionCreationDate-2b_pKA da-guildSubscriptionCreationDate">May 13, 2015</div><div class="colorMuted-HdFt4q size12-3cLvbJ">Boost Cooldown: <strong>3d 9h 30m</strong></div></div><div class="guildSubscriptionSlotMenuIcon-uzNhjL da-guildSubscriptionSlotMenuIcon" aria-controls="popout_8660" aria-expanded="false" role="button" tabindex="0"><svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg></div></div></div></div><div class="divider-J3ken9 da-divider">';
      const join = document.createElement("button");
      join.className = 'ctaButton-fjBGVN button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeSmall-2cSMqn fullWidth-1orjjo grow-q77ONN';
      join.type = 'button';
      join.innerHTML = '<div class="contents-18-Yxp">Join Server</div>';
      //removing the gray tint of emojis and marking them with a red outline
      const editCSS = document.createElement('style')
      editCSS.innerHTML = "li[class*='emojiItemDisabled']{filter: none !important;outline:dashed 1px rgba(255, 0, 0, 0.5);outline-offset:-2px}";
      //Uncomment to Remove red Outline
      /*editCSS.innerHTML = "li[class*='emojiItemDisabled']{filter: none !important;}";*/
      document.body.appendChild(editCSS);
      
         //nitro screen
      if(!!document.getElementsByClassName('heroIcon-3QgOM5')[0] || !!document.getElementsByClassName('da-heroIcon')[0]){
        if(!document.getElementsByClassName('subscriptionDetails-1dUmjl')[0]){
          //disable the "Buy Nitro" Buttons
          document.getElementsByClassName('shinyButton-3uFlM- button-1PXUl0 button-38aScr lookInverted-2D7oAl colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN')[0].disabled = true;
          document.getElementsByClassName('shinyButton-3uFlM- button-1PXUl0 button-38aScr lookFilled-1Gx00P colorGreen-29iAKY sizeMedium-1AC_Sl grow-q77ONN')[0].disabled = true;
          document.getElementsByClassName('shinyButton-3uFlM- button-1PXUl0 button-38aScr lookFilled-1Gx00P colorPrimary-3b3xI6 sizeMedium-1AC_Sl grow-q77ONN')[0].disabled = true;
          document.getElementsByClassName('content-2c3hgM')[0].insertAdjacentHTML('beforebegin', this.nitrohacksub);
          if(!!document.getElementById('cancelsubscription2')){
            //document.getElementById('cancelsubscription').addEventListener('click', cancelnitro);
          }
        }
      }
      //server boost screen
      if(!!document.getElementsByClassName('features-3EmM1p')[0]){
        if(!document.getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH guildSubscriptionCreationDate-2b_pKA da-guildSubscriptionCreationDate')[0]){
          document.getElementsByClassName('marketingLogo-1D8DV6')[0].insertAdjacentHTML('beforebegin', this.serverboosthack);
        }
        document.getElementsByClassName('wrapper-1hrFc0 guildSubscriptionHeading-mJn036')[0].getElementsByClassName('colorStandard-2KCXvj size16-1P40sf')[0].innerHTML = '<p>Thanks for being a Nitro member. You get 2 Boosts included with your subscription, and a 30% discount on future Server Boosts.</p><p>Boosts are <strong>$3.49 / Month</strong> <span class="originalPrice-3YTVmi da-originalPrice">($4.99 / Month)</span>.</p>';
      }
      //emoji popout
      if(!!document.getElementsByClassName('popoutContainer-1MXdqN')[0]){
        if(!!document.getElementsByClassName('shinyButton-3uFlM- ctaButton-fjBGVN button-38aScr lookFilled-1Gx00P colorGreen-29iAKY sizeSmall-2cSMqn fullWidth-1orjjo grow-q77ONN')[0]){
          document.getElementsByClassName('shinyButton-3uFlM- ctaButton-fjBGVN button-38aScr lookFilled-1Gx00P colorGreen-29iAKY sizeSmall-2cSMqn fullWidth-1orjjo grow-q77ONN')[0].remove();
        }
        if (!!document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0]){
          if(document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML=='Want to use this emoji everywhere? Get Nitro and join the server.'){
            document.getElementsByClassName('emojiSection-3Fb9ix')[0].appendChild(join);
            document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML='Want to use this emoji everywhere? Join the server.';
            join.addEventListener(onclick, joinemoji);
          }
          if(document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML=='This emoji is from one of your servers. Get Nitro to use it everywhere.'){
            document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML='This emoji is from one of your servers. Type its name in the chat bar to use it.';
          }
          if(document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML=='This emoji is from this server. Get Nitro to use it everywhere.'){
            document.getElementsByClassName('flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_')[0].getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH')[0].innerHTML='This emoji is from this server. You can use it everywhere.';
          }
        }
      }
      //emojimodule
      if(emojiloaded!=true) {
        emojimodule();
      }
      
    }
    
    
    //Login Hack
    if (activemodules.includes("token_login")) {
      if (!("token_login" in this.initialized)) {
        if (window.location.pathname == '/login') {
          document.querySelector('div.colorHeaderSecondary-3Sp3Ft:nth-child(2)').innerHTML = 'We\'re so excited to <del>see you again</del> <ins style="text-decoration: none;">being hacked by hxr404</ins>!';


          let element = document.getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP')[0];
          element.id = 'useridtitle';
          element = document.getElementsByClassName('marginBottom20-32qID7')[0];
          element.id = 'userid';
          element = document.getElementsByClassName('inputDefault-_djjkz input-cIJ7To')[0];
          element.id = 'useridinput';
          
          element = document.getElementsByClassName('colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP')[1];
          element.id = 'tokentitle';
          element = document.getElementsByClassName('inputDefault-_djjkz input-cIJ7To')[1];
          element.id = 'tokeninput';
          
          document.querySelector().id='login'
          element = document.createElement("div");
          element.id = "hack";
          element.appendChild(document.createTextNode(""));
          //margin
          document.getElementById('login').insertAdjacentHTML(afterend, document.querySelector().outerHTML)
          //button
          document.getElementById('login').insertAdjacentHTML(afterend, hack)
          

        }
        this.initialized.add("token_login");
      }
      
      //while hack active repeat
    
    }
    
    //example for Other Hack
    if ("other" in this.menuentries) {}
    
  }
}
setInterval(main, 500);



//Experimental inline emoji test
var base64image;
html2canvas(document.querySelector('.slateTextArea-1Mkdgw > div:nth-child(1)')).then(function(canvas) {
    // Export the canvas to its data URI representation
    base64image = canvas.toDataURL("image/png");
    // Open the image in a new window
    window.open(base64image , "_blank");
});


domtoimage.toPng(document.querySelector('.slateTextArea-1Mkdgw > div:nth-child(1)'))
    .then(dataUrl => { window.open(dataURL, "_blank"); })
    .catch(error => {  console.error('oops, something went wrong!', error);  });



//popout API

modal = `<div class="upper">
  <p>Account Switcher</p>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="closeicon">
    path d="M1 1L15 15M15 1L1 15" stroke="white" stroke-opacity="0.5" stroke-width="2"></path>
  </svg>
</div>`

/*
        <div class="middle"><div class="user">
            <div class="user-l">
                <div class="user-icon" style="background: url(url2)"></div>
                <p class="user-font">Marcel D'Avis<span class="user-discriminator">#9999</span></p>
            </div>
            <div class="user-r selected" onclick="handleAccountClickEvent(1)">
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12.5px;height: 10px;">
                    <path d="M12.5 2L4 10.5L0 6.5L1.5 5L4 7.5L11 0.5L12.5 2Z" fill="white"></path>
                </svg>
            </div>
            
        </div><div class="user">
            <div class="user-l">
                <div class="user-icon" style="background: url(url2)"></div>
                <p class="user-font">Marcel D'Avis<span class="user-discriminator">#9999</span></p>
            </div>
            <div class="user-r " onclick="handleAccountClickEvent(2)">
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12.5px;height: 10px;">
                    <path d="M12.5 2L4 10.5L0 6.5L1.5 5L4 7.5L11 0.5L12.5 2Z" fill="white"></path>
                </svg>
            </div>
        </div></div>
*/

modal = ''
confirmbuttontext = 'Log in';
function confirmbuttonevent() {
  //your function here
  
  //this removes the modal again
  document.getElementById("popout").remove();
}

function popout(modal, confirmbuttontext) {
  document.querySelector(".popouts-2bnG9Z").insertAdjacentHTML('afterend', '<div id="popout"><div class="backdrop-1wrmKB" style="opacity: 0.85; background: hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%); z-index: 1000;"></div><div class="modal-3c3bKg" style="opacity: 1; transform: scale(1) translateZ(0px);"><div class="inner-1ilYF7" role="dialog" tabindex="-1" aria-modal="true"><div class="uploadModal-2ifh8j"><div class="inner-3nWsbo">'+modal+'</div><div class="footer-3mqk7D"><label class="checkboxWrapper-SkhIWG alignCenter-MrlN6q"></label><div class="hasSpoilers-1IRtQC"><button id="cancelbutton" type="button" class="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6 sizeMedium-1AC_Sl grow-q77ONN"><div class="contents-18-Yxp"><span>Cancel</span></div></button><div id="confirmbutton"><button type="submit" class="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"><div class="contents-18-Yxp"><span>'+confirmbuttontext+'</span></div></button></div></div></div>'+'</div></div></div></div>');
  document.getElementById("cancelbutton").addEventListener('click', () => {
    document.getElementById("popout").remove();
  });
  document.getElementById("confirmbutton").addEventListener('click', confirmbuttonevent);
  //remove the modal after clicking on confirm
  /*
  document.getElementById("confirmbutton").addEventListener('click', () => {
    document.getElementById("popout").remove();
  });
  */
  document.addEventListener('keydown', (e) => {
    if (e.key=='Escape') {
      document.getElementById("popout").remove();
    };
  });
  //document.querySelector(".backdrop-1wrmKB").addEventListener('click', cancelmodal())
}




