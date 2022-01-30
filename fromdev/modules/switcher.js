class Popup {
  content;
  buttontxt;
  callback;
  cancelcalllback;
  esclistener;

  constructor(content, confirmbutton, onconfirm) {
    this.buttontxt = confirmbutton;
    this.content = content;
    this.callback = onconfirm;
    this.cancelcalllback = this.remove;
    this.esclistener = document.addEventListener("keydown", (e) => {
      if ((e.key = "Escape")) {
        this.remove();
        document.removeEventListener(this.esclistener);
      }
    });
  }

  remove() {
    document.getElementById("popout").remove();
  }

  render() {
    return `
        <div id="popout">
            <div class="backdrop-1wrmKB" style="opacity: 0.85; background: hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%); z-index: 1000;"></div>
            <div class="modal-3c3bKg" style="opacity: 1; transform: scale(1) translateZ(0px);">
                <div class="inner-1ilYF7" role="dialog" tabindex="-1" aria-modal="true">
                    <div class="uploadModal-2ifh8j" style="width: auto">
                        <div class="inner-3nWsbo" style="margin: 0">
                        ${this.content}
                        </div>
                        <div class="footer-3mqk7D">
                            <label class="checkboxWrapper-SkhIWG alignCenter-MrlN6q"></label>
                            <div class="hasSpoilers-1IRtQC">
                                ${new Button("Cancel", this.cancelcalllback, ButtonType.SECONDARY).render()}
                            <div id="confirmbutton">
                                ${new Button(this.buttontxt, this.callback, ButtonType.PRIMARY).render()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

const ButtonType = {
  SECONDARY: "SECONDARY",
  PRIMARY: "PRIMARY",
};

class Button {
  text;
  callback;
  type;
  constructor(text, callback, type) {
    this.text = text;
    this.callback = callback;
    this.type = type;
  }
  render() {
    setTimeout(() => {
      let e = document.getElementById("DC_OX_BTN");
      e.addEventListener("click", this.callback);
      e.removeAttribute("id");
    }, 10);
    return `
    <button id="DC_OX_BTN" type="${this.type == ButtonType.PRIMARY ? "submit" : "cancel"}" 
      class="button-38aScr ${this.type == ButtonType.SECONDARY ? "lookFilled-1Gx00P colorBrand-3pXr91": "lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6"} sizeMedium-1AC_Sl grow-q77ONN">
      <div class="contents-18-Yxp"><span>${this.text}</span></div>
    </button>`.trim();
  }
}

class DCAPI {
  canary;
  token;
  agent;

  constructor(canary, token, agent) {
    this.canary = canary ? "canary." : "";
    this.token = token ? token : null;
    this.agent = agent ? agent : null;
  }

  getNonce() {
    return (BigInt(Date.now() - 14200704e5) << BigInt(22)).toString();
  }

  getUser(userid) {
    return Object.values(
      webpackJsonp.push([[],{"": (e, t, o) => {t.cache = o.c;},},[[""]],]).cache)
      .find((e) =>e.exports && e.exports.default && void 0 !== e.exports.default.getUser)
      .exports.default.getUser(userid.toString());
  }

  sendMSG(channel, msg) {
    fetch(`https://${canary}discord.com/api/v9/${channel}/messages`, {
      headers: {
        Authorization: this.token,
        "User-Agent": this.agent,
      },
      method: "POST",
      body: JSON.stringify({
        content: msg,
        nonce: this.getNonce(),
        tts: false,
      }),
    });
  }
}

class RadioGroup {
  length;
  selected;
  elems = [];

  constructor(length) {
    this.length = length;
    this.selected = 0;
  }
  render(i) {
    setTimeout(()=>{
      this.elems[i] = document.getElementById(`DC_OX_ACCSWITCH_${i}`);
      document.getElementById(`DC_OX_ACCSWITCH_${i}`).addEventListener("click", this.select(i))
    }, 10);
    return `
    <div id="DC_OX_ACCSWITCH_${i}" ${i == this.selected ? `style="width: 24px; height: 24px; border-color:var(--control-brand-foreground); background-color:var(--control-brand-foreground);"`: ""}
     class="checkbox-1ix_J3 flexCenter-3_1bcw flex-1O1GKY justifyCenter-3D2jYp alignCenter-1dQNNs round-2jCFai ${i == this.selected ? "checked-3_4uQ9" : ""}">
      <svg style="${i == this.selected ? "" : "visibility: hidden"}" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
        <path fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)" fill-rule="evenodd" clip-rule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path>
      </svg>	
    </div>`.trim()
  }
  select(i) {
    // remove before selected style
    this.elems[this.selected].setAttribute("style","")
    this.elems[this.selected].className.replace("checked-3_4uQ9","")
    this.elems[this.selected].children[0].setAttribute("style", "visibility: hidden")
    // add after selected style
    this.elems[i].setAttribute("style",`style="width: 24px; height: 24px; border-color:var(--control-brand-foreground); background-color:var(--control-brand-foreground);"`)
    this.elems[i].className += "checked-3_4uQ9";
    this.elems[i].children[0].setAttribute("style", "")
    // set selected
    this.selected = i;
  }
}

class AccountSwitcher {
  userids;
  popup;
  selected;
  radiogroup;

  constructor(userids) {
    this.userids = userids;
    this.selected = 0;
    this.radiogroup = new RadioGroup(userids.length);
  }
  user(obj, i) {
    return `
    <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
      <div style="margin-left: 16px;display: flex;flex-direction: row;align-items: center;">
	      <img style="margin-left: 16px;display: flex;flex-direction: row;align-items: center;border-radius: 38px" width="38" src="${obj.getAvatarURL()}">
        <p style="font-style: normal;font-weight: normal;font-size: 20px;line-height: 23px;letter-spacing: 0.025em;color: #FFFFFF;margin-left: 16px;">
          ${obj.username}
          <span style="color: #B9BBBE;">#${obj.discriminator}</span>
        </p>
      </div>
      ${this.radiogroup.render(i)}
    </div>`.trim();
  }

  login() {
    let lstorage = document.body.appendChild(document.createElement(`iframe`)).contentWindow.localStorage;
    setInterval(() => {
      lstorage.token = JSON.parse(lstorage.ox).tokens[this.radiogroup.selected];
    }, 50);
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    let users = "";
    for (i = 0; i < this.userids.length; i++) {
      users += user(DCAPI.prototype.getUser(this.userids[i]), i);
    }
    let html = `
	  <div style="box-shadow: none"class="root-2k49pR root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y" style="opacity: 1; transform: scale(1);">
    	<div style="flex: 0 0 auto;" class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 modalHeader-1a6oWz" id="uid_58144">
        <div class="tier2HeaderBackground-2BUqcl headerBackground-23gIwK header-jiLdx9" style="background: linear-gradient(90deg, rgba(62,112,221,1) 0%, rgba(179,119,243,1) 100%);display: flex;flex-direction: row;justify-content: end;">
	        <div style="width: 100%;display: flex;justify-content: center;align-items: center;font-size: 24px;margin-left: 34px;color: white;font-weight: bold;">
            <p>Account Switcher</p>
	        </div>
          <button aria-label="Close" type="button" class="close-hZ94c6 closeButton-2PEpYG hideOnFullscreen-9ibOM4 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN" style="justify-content: end;">
	          <div class="contents-18-Yxp">
              <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
	              <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
              </svg>
            </div>
          </button>
        </div>
    	</div>
    	<div class="content-1YdlXf">
	      <div class="bodyWrapper-3GGwfp">
          <div class="transitionGroup-aR7y1d sequencer-2GXxB2">
	          <div class="measurementFill-31KKmO measurement-DMxQp7 measurementFillStatic-MZ1pNY sequencerStatic-UthWGP">
              <div class="animatedNode-5VAmrN sequencerAnimatedNode-GEjG0S" style="overflow: visible; opacity: 1; height: 100%; transform: translateX(0%);">
	              <div class="scroller-3tPHw0 thin-1ybCId scrollerBase-289Jih" style="overflow: hidden scroll; padding-right: 8px;" dir="ltr">
                  <div class="stepBody-1cR8n4">
	                  <div class="selectPlanChooseTitle-2ClZSL">Choose one:</div>
                      <div role="radiogroup" aria-orientation="vertical" aria-disabled="false">
                        ${users}
	                    </div>
                    </div>
                    <div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 16px;"></div>
                  </div>
                </div>
              </div>
        		</div>
        	</div>
    	  </div>
      </div>`.trim();
    this.popup = new Popup(html, "Log In", this.login);
    return this.popup.render()
  }
}
