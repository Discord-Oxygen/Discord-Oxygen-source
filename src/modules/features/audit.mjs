export var name = "API Auditing";
export var description = "Monitor the API for malicious actions";
export var long_description = "Protect yourself from malicious scripts by auditing the webpackChunkdiscord API. This script will notify you when a readout is detected.";
export var version = "dev-0.0.1";
export var detectable = 0
export var unstable = false;
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

export const config = [];
config.vigliantmode = false; //change to true for enabling strict mode (alert on every webpack update)

export var totalbundled = window.webpackChunkdiscord_app.length; //save length of Discord's Webpack array globally scoped
export function checkAccess(strict = false) {
  var e = false; //local var for exit code
  if (window.webpackChunkdiscord_app.length > totalbundled) {
    if (strict == true) {
      e = true; //trigger detection if array became bigger
    } else {
      //this else part checks if the recently added object is an array and contrains three objects. Most console hacks use this pushed array to access the webpack API
      if (Array.isArray((window.webpackChunkdiscord_app[window.webpackChunkdiscord_app.length - 1]))) {
        if ((window.webpackChunkdiscord_app[window.webpackChunkdiscord_app.length - 1].length === 3)) {
          e = true;
        }
      }
    }
  }
  totalbundled = window.webpackChunkdiscord_app.length; //This is reset so that the user only gets notified once
  return e;
}
export var AuditService;

export function startAuditService() {
  AuditService = setInterval(() => {
    if (checkAccess(config.vigliantmode)) {
      alert("Something accessed Discord's Webpack API!"); //exact message still needs to be decided on
    }
  }, 1000);
}

export function stopAuditService() {
  clearInterval(AuditService);
}

export function tokenAlerter() {
  //DiscordChunk
}