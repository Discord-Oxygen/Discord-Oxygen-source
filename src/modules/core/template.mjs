export var name = "[Unknown Module]";
export var description = "Description not written yet, sorry.";
export var long_description = "This Module is so early in development, it doesn't even have a description yet...";
export var version = "dev-0.0.1";
export var detectable = 0;
export var unstable = false; //if this module breaks discord
//export var usage = "" probably will be some kind of JSON to be parsed & displayed in a help menu

//export const config = [];

/* DOCUMENTATION: 

detectable flag levels

------Stealth-------- (only detectable if you share information on your own)
Level 0: Undetectable. These Modules could only be noticed by inspecting the source code in the Browser cache.
Level 1: Client-side only changes. Can only be detected if sharing screenshot.
Level 2: Client-side only, but severe changes. Can only be detected if sharing screenshots or revealing information. For example if you say the names of hidden channels or know what devices people are using, it might reveal the fact that you are using hacks.
-----Normal-------- (Everything that is not entirely client-side qualifies for this category)
Level 3: Really unlikely to get noticed. Discord must actively watch everything you do to see this, and even if they do its unlikely they'll notice something.
Level 4: Unless someone reports you, you most likely don't get banned.
Level 5: Discord's automatic Systems won't flag your account, but for example Moderation Bots can notice it automatically. Additionally you'd get banned really quickly if someone reports you.
-----Critical------ (things you shouldn't do with your real IP and especially not on your main account)
Level 6: Your Account "is kinda sus" and you'll be voted out first
Level 7: If you use these Modules for a longer period of time, you'll probably get ~~ejected~~ banned at the next ~~meeting~~ ban wave
Level 8: Changes are high that you get banned right away. "EMERGENCY MEETING!"

unstable flag

if set to true, it means that this module is highly unstable, has many bugs and leads to unexpected behaviour.
For example you might experience more crashes or random logouts.




*/