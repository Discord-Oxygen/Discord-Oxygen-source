if(!document.querySelector("#OX_STYLE")) {
	let css = `li[class*='emojiItemDisabled'] { 
		outline: dotted 1px rgba(255, 0, 0, 0.3); 
		outline-offset: -2px; 
		filter: none !important; 
		cursor: pointer; 
	}
	
	li[class*='emojiItemDisabled'] > img { 
		 filter: none; 
	}`;
	let el = document.createElement("style");
	el.innerHTML = css;
	document.head.appendChild(el);
}

function downloadIMG(id) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
	  		var reader = new FileReader();
	  		reader.onloadend = function() {
				resolve(reader.result);
	  		}
			reader.onerror = reject;
	  		reader.readAsDataURL(xhr.response);
		};
		xhr.onerror = reject;
		xhr.open('GET', `https://cdn.discordapp.com/emojis/${id}.png?size=22`);
		xhr.responseType = 'blob';
		xhr.send();
	})
}

let webpackExports;
if (webpackChunkdiscord_app != null) {
  let ids = ["__extra_id__"];
  webpackChunkdiscord_app.push([ids,{},(req) => {webpackExports = req;ids.length = 0;},]);
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

let parser = findModuleProps(['parse', 'parsePreprocessor', 'unparse']);
let original_parse = parser.parse;
let attempt = 1;
parser.parse = function() {
    let result = original_parse.apply(this, arguments);
	console.log("RESULT: ", result, "ATTEMPT:", attempt);
	if(attempt == 1) {
		attempt++;
		return result;
	}
	if(attempt == 2) {
		attempt = 1;
	}
	
	let textparts = result.content.split(/<a??:\w+:\d{18}>?/g).filter(m=>m!="")
	let emojiparts = result.content.match(/<a??:\w+:\d{18}>?/g)
	if(!emojiparts) {
		return result;
	}
	console.log("EMOJIPARTS: ", emojiparts)
	console.log("TEXTPARTS: ", textparts)
	if(emojiparts.length == 1 && textparts.length == 0) {
		result.content = `https://cdn.discordapp.com/emojis/${emojiparts[0].emoji}.png?size=48`
		return result;
	}
	main(textparts, emojiparts, result);
	result.content = "";
	return result;
};

let channel = findModuleProps(['getChannelId', 'getVoiceChannelId', 'getLastSelectedChannelId']);
let uploader = findModuleProps(['upload', 'cancel', 'instantBatchUpload'])
//let search = findModuleProps(['getDisambiguatedEmojiContext', 'searchWithoutFetchingLatest']);
let picker = findModuleProps(['useEmojiSelectHandler']);

/*let original_search = search.searchWithoutFetchingLatest;
search.searchWithoutFetchingLatest = () => {
	let res = original_search.apply(this, arguments);
	res.unlocked.push(...res.locked);
	res.locked = [];
	return res;
}*/

let original_selectHandler = picker.useEmojiSelectHandler;
picker.useEmojiSelectHandler = function(args) {
	const { onSelectEmoji, closePopout } = args;
	const originalHandler = original_selectHandler.apply(this, arguments);
	return function(data, state) {
		if(state.toggleFavorite)
			return originalHandler.apply(this, arguments);

		const emoji = data.emoji;
		if(emoji != null) {
			onSelectEmoji(emoji, state.isFinalSelection);
			if(state.isFinalSelection) closePopout();
		}
	};
};

async function main(textparts, emojiparts, result) {
	let output = [];
	for(i=0;i<(textparts.length + emojiparts.length)/2;i++) {
	    if(textparts[i] != "") output.push({"text":textparts[i]})
    	if(emojiparts[i]) output.push({"emoji":await downloadIMG(emojiparts[i].match(/<a??:\w+:(\d{18})>?/)[1])});
	}
	attempt = 1;
	uploader.uploadFiles(channel.getChannelId(), [
		{
		  "id": "upload174",
		  "classification": "image",
		  "isImage": true,
		  "isVideo": false,
			  "item":{
				  "file": await srcToFile(await render(output), "unknown.png", "image/png"),
				  "platform":1
			  },
		  "filename": "unknown.png",
		  "showLargeMessageDialog": false,
		  "spoiler": false,
		  "description": null
		}
	  ], 
	  0, 
	  result, 
	  {"stickerIds": []}
	);
}

let measure = document.createElement("canvas");
let measurectx = measure.getContext("2d");
measure.width = 1000;
measure.height = 22;
measurectx.font = "16px Whitney";

function getWidth(txt) {
  return measurectx.measureText(txt).width;
}

async function render(arr) {
	let canvas = document.createElement("canvas");
	document.body.appendChild(canvas);

	let ctx = canvas.getContext("2d");
	canvas.height = 22;
	let width = 0;
	for(let elem of arr) {
		if(elem.text) width += getWidth(elem.text);
		if(elem.emoji) width += 22;
	}
	canvas.width = width;
	ctx.fillStyle = "rgb(220, 221, 222)";
	ctx.font = "16px Whitney";
	width = 0;
	for(let elem of arr) {
		if(elem.text) {
			console.log("TEXT: " + elem.text);
			ctx.fillText(elem.text, width, 16);
			width += getWidth(elem.text);
		}
		if(elem.emoji) {
			console.log("EMOJI: " + elem.emoji)
			await renderEmoji(ctx, width, elem.emoji);
			width += 22;
		}
	}

	return canvas.toDataURL();
}

function renderEmoji(ctx, distance, imgdata) {
	return new Promise((resolve, reject) => {
		let image = new Image(22, 22);
		image.src = imgdata;
		image.onload = () => {
			ctx.drawImage(image, distance, 0)
			resolve()
		}
		image.onerror = reject;
	})
}

function srcToFile(src, fileName, mimeType){
    return (fetch(src)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], fileName, {type:mimeType});})
    );
}
