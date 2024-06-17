/**
* Just a basic Logger
*/
class Logger {
	prefix;
	basecolor;
	constructor(prefix, basecolor) {
		this.prefix = prefix;
		this.basecolor = basecolor;
	}
	log(message) {
		console.log(`%c[${this.prefix}] %c${message}`, `color:${this.basecolor};font-weight:bold`, "");
	}
	warn(message) {
		console.warn(`%c[${this.prefix}] %c${message}`, `color:${this.basecolor};font-weight:bold`, "");
	}
	error(message) {
		console.error(`%c[${this.prefix}] %c${message}`, `color:${this.basecolor};font-weight:bold`, "");
	}
}

const C = new Logger("Oxygen", "#5865f2")


/**
* The Base class of Oxygen
* @param {Oxygen} modules Intern modules (Module-Object) passed in Array
*/
class Oxygen {
  version;
  modules;
  constructor(modules) {
	this.onload();
	for(m in modules) {
		this.load(m);
	}
  }
  onload() {
	C.log("LOADING DISCORD OXYGEN")
  }
  load(module) {
	C.log(`[Modules] Loading ${module.name} - v${module.version}...`)
	try {
		module.load();
		C.log(`[Modules] [OK] Loaded ${module.name} - v${module.version}`)
	} catch(error) {
		C.log(`[Modules] [FAILED] ${module.name} seems to be broken!\nError message:\n${error}`);
	}
  }
}

class Module {
	name;
	description;
	enabled;
	setting;
	author;
	version;
	updateURL;
	constructor(name, description, author, version, updateURL) {
		if((name, description, author, version) == null)
			throw Error("Not enough Paramaters given!")
		this.name = name;
		this.author = author;
		this.enabled = false;
		this.name = name;
		this.version = version;
		this.updateURL = updateURL;
		this.description = description;
	}
	on()
	onEnable()
	onDisable()
	onUpdate()
	settings()
}

class API {
	screenWidth;
	screenHeight;
	modules;
	folder; //deprecated, only used for bd support

	inject(uid, type, content)
	injectURL(uid, type, url)
	remove(uid)
	
	//webpack
	findModule(filter)
	findAllModules(filter)
	findModuleByProps(...props)
	findModuleByPrototypes(...protos)
	findModuleByDisplayName(name)
	patch(uid, module, options)
	
	getCore() //not recommended
	
	//storage
	setStorage(key, value)
	getStorage(key)
	
	//events
	addListener(uid, type)
	removeListener(uid, type)
	
	//ui
	modal(title, content, options)
	toast(content, options)
	
	//util
	testJSON(json)
	toggleSetting(uid)
	getSettings()
	isEnabled(module)
	enable(module)
	disable(module)
	toggle(module)
}
