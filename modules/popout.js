modal = `<div class="upper">
  <p>Account Switcher</p>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="closeicon">
    path d="M1 1L15 15M15 1L1 15" stroke="white" stroke-opacity="0.5" stroke-width="2"></path>
  </svg>
</div>`


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
