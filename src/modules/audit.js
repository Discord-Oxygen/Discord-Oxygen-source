var DiscordOxygen.config.AuditStrictmode = false; //change to true for enabling strict mode (alert on every webpack update)

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
let AuditService = setInterval(()=>{
  if (checkAccess(DiscordOxygen.config.AuditStrictmode)) {
    alert("Something accessed Discord's Webpack API!"); //exakt message still needs to be decided on
  }
}, 1000);