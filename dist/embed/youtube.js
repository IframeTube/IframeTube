(function(){function I(e,t){document.cookie=e+"="+t+"; path=/"}function ue(e){let t=e+"=",r=document.cookie.split(";").map(a=>a.trimStart());for(let a of r)if(a.startsWith(t))return a.substring(t.length);return null}function b(e){if(s()){let t=window.location.href,r={};if(t.indexOf("/watch?")!==-1){let o=t.split("?")[1].split("&");for(let u=0;u<o.length;u++){let y=o[u].split("=");r[decodeURIComponent(y[0])]=decodeURIComponent(y[1])}}else if(t.indexOf("/watch/")!==-1||t.indexOf("/live/")!==-1){let a=t.split("/");r.v=a[a.length-1].split("?")[0]}return r[e]}}function s(){return window.location.href.indexOf("/watch?")!==-1||window.location.href.indexOf("/watch/")!==-1||window.location.href.indexOf("/live/")!==-1}function L(){return window.location.href.indexOf("/shorts/")!==-1}function se(e){return e.indexOf("/watch?")!==-1||e.indexOf("/watch/")!==-1||e.indexOf("/live/")!==-1}function v(){if(s()){let e=document.querySelector(".video-ads"),t=document.querySelector(".ad-showing");return!!(e&&e.checkVisibility()||t&&t.checkVisibility())}}function p(e){let t="",r="",a=!1,o=0,u=0;e==="t"?(t="t",r="KeyT",a=!1,o=84,u=84):e==="next"?(t="n",r="KeyN",a=!0,o=78,u=78):e==="previous"&&(t="p",r="KeyP",a=!0,o=80,u=80);let y=new Event("focus",{bubbles:!0,cancelable:!0});document.body.dispatchEvent(y);let ge=new KeyboardEvent("keydown",{key:t,code:r,shiftKey:a,keyCode:o,which:u,bubbles:!0,cancelable:!0});document.body.dispatchEvent(ge);let we=new InputEvent("beforeinput",{inputType:"insertText",data:t,bubbles:!0,cancelable:!0});document.body.dispatchEvent(we);let xe=new KeyboardEvent("keypress",{key:t,code:r,shiftKey:a,keyCode:o,which:u,bubbles:!0,cancelable:!0});document.body.dispatchEvent(xe);let Pe=new InputEvent("input",{inputType:"insertText",data:t,bubbles:!0,cancelable:!0});document.body.dispatchEvent(Pe);let ke=new Event("change",{bubbles:!0,cancelable:!0});document.body.dispatchEvent(ke);let Ae=new KeyboardEvent("keyup",{key:t,code:r,shiftKey:a,keyCode:o,which:u,bubbles:!0,cancelable:!0});document.body.dispatchEvent(Ae)}let n=!1,l=!1,g=!1,C=!1,d=!1,i=!1,f=!1,w=!1,x=!1,S=!1,h=!1,V=!1,P=!1,c=!1,m=ue("IframeTube_autoplay");m||(m="true",I("IframeTube_autoplay",m));function de(){let e=document.createElement("style");e.textContent=`
    
    /* we use this class to hide elements via JS */
    .IframeTube_hidden {
        display: none !important;
    }

    /* hides the miniplayer */
    ytd-miniplayer {
        display: none !important;
    }

    /* hides the native player, but not the shorts player */
    #player-full-bleed-container,
    #player:not(.ytd-shorts) {
        visibility: hidden !important;
    }

    /* hides the channel player (not supported yet, sorry yall) */
    ytd-channel-video-player-renderer {
        display: none !important;
    }

    /* hides page ads (this was taken from: https://greasyfork.org/ru/scripts/447802-youtube-web-tweaks/code, huge thanks to xX_LegendCraftd_Xx :) */
    .ytd-search ytd-shelf-renderer,
    ytd-reel-shelf-renderer,
    ytd-merch-shelf-renderer,
    ytd-action-companion-ad-renderer,
    ytd-display-ad-renderer,
    ytd-rich-section-renderer,
    ytd-video-masthead-ad-advertiser-info-renderer,
    ytd-video-masthead-ad-primary-video-renderer,
    ytd-in-feed-ad-layout-renderer,
    ytd-ad-slot-renderer,
    ytd-statement-banner-renderer,
    ytd-banner-promo-renderer-background ytd-ad-slot-renderer,
    ytd-in-feed-ad-layout-renderer,
    .ytwPanelAdHeaderImageLockupViewModelHost,
    ytd-ads-engagement-panel-content-renderer,
    #content.ytd-ads-engagement-panel-content-renderer,
    ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"],
    ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer),
    .ytd-video-masthead-ad-v3-renderer,
    div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
    div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
    div#main-container.style-scope.ytd-promoted-video-renderer,
    div#player-ads.style-scope.ytd-watch-flexy,
    #clarify-box,
    ytm-rich-shelf-renderer,
    ytm-search ytm-shelf-renderer,
    ytm-button-renderer.icon-avatar_logged_out,
    ytm-companion-slot,
    ytm-reel-shelf-renderer,
    ytm-merch-shelf-renderer,
    ytm-action-companion-ad-renderer,
    ytm-display-ad-renderer,
    ytm-rich-section-renderer,
    ytm-video-masthead-ad-advertiser-info-renderer,
    ytm-video-masthead-ad-primary-video-renderer,
    ytm-in-feed-ad-layout-renderer,
    ytm-ad-slot-renderer,
    ytm-statement-banner-renderer,
    ytm-banner-promo-renderer-background ytm-ad-slot-renderer,
    ytm-in-feed-ad-layout-renderer,
    ytm-rich-item-renderer:has(> #content > ytm-ad-slot-renderer) .ytm-video-masthead-ad-v3-renderer,
    div#root.style-scope.ytm-display-ad-renderer.yt-simple-endpoint,
    div#sparkles-container.style-scope.ytm-promoted-sparkles-web-renderer,
    div#main-container.style-scope.ytm-promoted-video-renderer,
    div#player-ads.style-scope.ytm-watch-flexy,
    ytm-pivot-bar-item-renderer:has(> .pivot-shorts),
    ytd-compact-movie-renderer,
    yt-about-this-ad-renderer,
    masthead-ad,
    ad-slot-renderer,
    yt-mealbar-promo-renderer,
    statement-banner-style-type-compact,
    ytm-promoted-sparkles-web-renderer,
    tp-yt-iron-overlay-backdrop,
    #masthead-ad {
    display: none !important;
    }

    .style-scope[page-subtype="channels"] ytd-shelf-renderer,
    .style-scope[page-subtype="channels"] ytm-shelf-renderer {
        display: block !important;
    }
    `,document.head.appendChild(e)}function W(){if(!s())return;document.querySelectorAll("video").forEach(t=>{(!t.paused||!t.muted||t.volume!==0)&&!v()&&(!P||!t.closest("#movie_player"))?(t.muted=!0,t.volume=0,t.pause()):(!t.muted||t.volume!==0||t.paused)&&v()&&(t.muted=!0,t.volume=0,t.play())})}function me(){let e=document.querySelector("ytd-miniplayer");if(e){let t=e.querySelector("video");t&&(!t.paused||!t.muted||t.volume!==0)&&(t.muted=!0,t.volume=0,t.pause())}}let B=!1;function O(){if(!document.body){clearTimeout(B),B=setTimeout(O,100);return}let e=document.createElement("div");e.id="IframeTube_proxyWrapper",e.classList.add("IframeTube_hidden"),document.body.appendChild(e),l=e;let t=document.createElement("style");t.textContent=`
        /* IframeTube Proxy Iframe Styles */
        #IframeTube_proxyWrapper {
            border-radius: 12px; /* rounded corners */
            background: transparent;
            position: absolute; /* we position it absolutely */
            top: 0;
            left: 0;
            z-index: 999;
            overflow: hidden; /* hides anything that slips out of bounds */
        }

        /* hide the iframe on home page when in PIP to keep the PIP player still playing */
        #IframeTube_proxyWrapper.PIP {
            position: fixed;
            width: 1px;
            height: 1px;
            opacity: 0;
            pointer-events: none;
            left: -9999px;
            top: -9999px;
            overflow: hidden;
        }

    `,document.head.appendChild(t);let r=document.createElement("iframe");r.src="https://example.net/?IframeTubeProxy=1",r.setAttribute("allow","autoplay *; picture-in-picture *; web-share *; gyroscope *; accelerometer *; clipboard-write *; encrypted-media *;"),r.setAttribute("referrerpolicy","strict-origin-when-cross-origin"),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("frameborder","0"),r.setAttribute("scrolling","yes"),r.setAttribute("allowfullscreen","true"),r.setAttribute("style","display: none;"),e.appendChild(r),n=r,le(),setInterval(le,100)}function fe(){if(s()){let e=["#player.ytd-watch-flexy",".player-size","#ytd-player",".html5-video-player"],t=!1;for(let r=0;r<e.length&&(t=document.querySelector(e[r]),!(t&&t.offsetWidth>0));r++);if(t&&t.offsetWidth>0){let r=t.getBoundingClientRect();l.style.width=r.width+"px",l.style.height=r.height+"px",l.style.top=window.scrollY+r.top+"px",l.style.left=window.scrollX+r.left+"px",l.classList.contains("PIP")&&l.classList.remove("PIP"),l.classList.remove("IframeTube_hidden")}}}let q=!1;function Q(){if(!C){clearTimeout(q),q=setTimeout(Q,100);return}let e=b("v");b("list")?(c=!0,F()):(c=!1,J());let r=0,a=b("t");a&&(r=a.replace("s",""));let o="";r>0&&(o="&start="+r);let y=document.documentElement.lang.split("-")[0].toLowerCase();V?n.contentWindow.postMessage("IframeTube_api_"+e+"|"+o,"*"):(te(),n.contentWindow.postMessage("IframeTube_embedVideo_https://www.youtube.com/embed/"+e+"?IframeTubeEmbed=1&autoplay=1&IframeTube_autoPlay="+m+"&hl="+y+o,"*"),V=!0),r<=0&&N()}let M=!1;function N(){if(i=document.getElementById("movie_player"),i&&i.getCurrentTime){let e=i.getCurrentTime();e>0&&E(e)}else{clearTimeout(M),M=setTimeout(N,100);return}}let K=!1;function k(){if(i=document.getElementById("movie_player"),i&&i.setPlaybackQualityRange&&i.getAvailableQualityLevels&&i.getPlaybackQuality){let e=i.getAvailableQualityLevels(),t=e[e.length-2];i.setPlaybackQualityRange(t,t),w||(i.addEventListener("onPlaybackQualityChange",k),w=!0)}else{clearTimeout(K),K=setTimeout(k,100);return}}let R=!1;function A(){if(L()){if(f=document.getElementById("shorts-player"),!f){clearTimeout(R),R=setTimeout(A,100);return}if(f&&f.setPlaybackQualityRange&&f.getAvailableQualityLevels){let t=f.getAvailableQualityLevels()[0];f.setPlaybackQualityRange(t,t),w&&location.reload()}}}let U=!1;function D(){if(!d){clearTimeout(U),U=setTimeout(D,100);return}n.contentWindow.postMessage("IframeTube_stopPlayback","*")}let H=!1;function E(e){if(!d){clearTimeout(H),H=setTimeout(()=>{E(e)},100);return}n.contentWindow.postMessage("IframeTube_seekTo_"+e,"*")}let $=!1;function F(){if(!d){clearTimeout($),$=setTimeout(F,100);return}n.contentWindow.postMessage("IframeTube_enablePrevButton","*")}let z=!1;function J(){if(!d){clearTimeout(z),z=setTimeout(J,100);return}n.contentWindow.postMessage("IframeTube_disablePrevButton","*")}function X(){g?(l.classList.remove("IframeTube_hidden"),l.classList.add("PIP")):(l.classList.contains("PIP")&&l.classList.remove("PIP"),l.classList.add("IframeTube_hidden"),D())}let Y=!1;function T(){let e=document.querySelector("#movie_player .ytp-size-button");if(e&&d){let t=e.getAttribute("data-tooltip-title");n.contentWindow.postMessage("IframeTube_theaterButtonAttribute_"+t,"*")}else{clearTimeout(Y),Y=setTimeout(T,100);return}}let j=!1;function _(e){let t=!1;if(e==="theater")t="IframeTube_setTheaterIcon";else if(e==="default")t="IframeTube_setDefaultIcon";else if(!e){let r=document.querySelector("ytd-watch-flexy");r&&r.hasAttribute("theater")?t="IframeTube_setTheaterIcon":t="IframeTube_setDefaultIcon"}t&&d?n.contentWindow.postMessage(t,"*"):(clearTimeout(j),j=setTimeout(()=>{_(e)},100))}let G=!1;function Z(){let e=document.querySelector("ytd-watch-flexy");if(e&&e.hasAttribute("theater"))setTimeout(()=>{T(),_("theater")},100);else if(e&&!e.hasAttribute("theater"))setTimeout(()=>{T(),_("default")},100);else{clearTimeout(G),G=setTimeout(Z,100);return}}let ee=!1;function te(){let e=document.querySelector("#movie_player .ytp-autonav-toggle-button"),t=document.querySelector(".ytp-autonav-toggle");if(e&&t&&t.getAttribute("aria-label")){let r=!1,a=!1;e.getAttribute("aria-checked")==="false"&&e.click(),e.getAttribute("aria-checked")==="true"&&(r=t.getAttribute("aria-label"),e.click()),setTimeout(()=>{e.getAttribute("aria-checked")==="false"&&(a=t.getAttribute("aria-label")),a&&r&&n.contentWindow.postMessage("IframeTube_setAutoplayAttributes_"+r+"|"+a,"*")},50)}else{clearTimeout(ee),ee=setTimeout(te,100);return}}function ce(){(m==="true"||c)&&p("next")}let re=!1;function ae(){let e=document.querySelector("#movie_player .ytp-next-button");if(e){let t=e.getAttribute("data-tooltip-title"),r=e.getAttribute("data-tooltip-text"),a=e.getAttribute("data-preview");if(t&&r&&a)n.contentWindow.postMessage("IframeTube_nextVideoPreview_"+JSON.stringify({shortcutTitle:t,videoTitle:r,videoThumbnail:a}),"*");else{clearTimeout(re),re=setTimeout(ae,100);return}}}function ye(){let e=document.querySelector("#movie_player .ytp-next-button");d&&e&&(e.removeAttribute("data-tooltip-title"),e.removeAttribute("data-tooltip-text"),e.removeAttribute("data-preview"))}function pe(){c&&p("previous")}let ie=!1;function oe(){let e=document.querySelector("#movie_player .ytp-prev-button");if(e){let t=e.getAttribute("data-tooltip-title"),r=e.getAttribute("data-tooltip-text"),a=e.getAttribute("data-preview");if(t&&r&&a)n.contentWindow.postMessage("IframeTube_prevVideoPreview_"+JSON.stringify({shortcutTitle:t,videoTitle:r,videoThumbnail:a}),"*");else{clearTimeout(ie),ie=setTimeout(oe,100);return}}}function be(){let e=document.querySelector("#movie_player .ytp-prev-button");d&&e&&(e.removeAttribute("data-tooltip-title"),e.removeAttribute("data-tooltip-text"),e.removeAttribute("data-preview"))}function he(){document.querySelectorAll(".comment-content a, #description a, ytm-expandable-video-description-body-renderer a, ytd-comments .yt-core-attributed-string a").forEach(t=>{t.classList.contains("IframeTube_timestampLink")||t.href&&(t.href.indexOf("?t=")!==-1||t.href.indexOf("&t=")!==-1)&&(t.classList.add("IframeTube_timestampLink"),t.addEventListener("click",r=>{r.preventDefault(),r.stopImmediatePropagation();let a=!1,o=new URL(t.href);o.searchParams.get("t")&&(a=o.searchParams.get("t")),a&&(E(a),window.scrollTo({top:0,behavior:"smooth"}))},!0),t.addEventListener("mousedown",r=>{r.preventDefault(),r.stopImmediatePropagation()},!0),t.addEventListener("mouseup",r=>{r.preventDefault(),r.stopImmediatePropagation()},!0))})}function Te(){document.addEventListener("keydown",ne),document.addEventListener("keyup",ne)}function ne(e){if(e.altKey||e.ctrlKey||e.metaKey||!s())return;let t=[" ","k","j","l","m","f","i","c","o","t","arrowleft","arrowright","arrowup","arrowdown","home","end","0","1","2","3","4","5","6","7","8","9"];if(!e.isTrusted||!t.includes(e.key.toLowerCase()))return;let r=e.target;r&&(r.tagName.toLowerCase().indexOf("input")!==-1||r.tagName.toLowerCase().indexOf("label")!==-1||r.tagName.toLowerCase().indexOf("select")!==-1||r.tagName.toLowerCase().indexOf("textarea")!==-1||r.tagName.toLowerCase().indexOf("fieldset")!==-1||r.tagName.toLowerCase().indexOf("legend")!==-1||r.tagName.toLowerCase().indexOf("datalist")!==-1||r.tagName.toLowerCase().indexOf("output")!==-1||r.tagName.toLowerCase().indexOf("option")!==-1||r.tagName.toLowerCase().indexOf("optgroup")!==-1)||(e.preventDefault(),e.stopImmediatePropagation(),n.contentWindow.postMessage("IframeTube_shortcut_"+e.type+"_"+e.key+"_"+e.shiftKey+"_"+e.keyCode,"*"))}function le(){let e=x,t=window.location.href;if(e&&(e=e.replace(/([#&]index=.*$)|(#.*$)/,"")),t&&(t=t.replace(/([#&]index=.*$)|(#.*$)/,"")),e!==t)if(x=window.location.href,s()){let r=b("v");if(!(e&&!se(e))&&!h&&r===S)return;S=r,Q(),h=!1}else X();s()&&(fe(),he())}function _e(){if(!h){h=!0;return}}function Ie(e){if(typeof e.data=="string"){if(e.data==="IframeTube_proxyLoaded")C=!0;else if(e.data==="IframeTube_youtubePlayerLoaded")d=!0,n.style.display="block";else if(e.data==="IframeTube_theater")p("t"),setTimeout(()=>{T(),_()},150),document.fullscreenElement&&document.exitFullscreen();else if(e.data==="IframeTube_enableAutoplay")m="true",I("IframeTube_autoplay",m);else if(e.data==="IframeTube_disableAutoplay")m="false",I("IframeTube_autoplay",m);else if(e.data==="IframeTube_video_ended")ce();else if(e.data==="IframeTube_nextVideo")p("next");else if(e.data==="IframeTube_nextVideo_preview")ae();else if(e.data==="IframeTube_previousVideo")pe();else if(e.data==="IframeTube_previousVideo_preview")c&&oe();else if(e.data==="IframeTube_enteredPip")g=!0;else if(e.data==="IframeTube_leftPip")g=!1,s()||X();else if(e.data.startsWith("IframeTube_syncPlayer")){if(s()&&!v()){i=document.getElementById("movie_player");let t=document.querySelector("#movie_player video"),r=parseFloat(e.data.split("IframeTube_syncPlayer_")[1]);if(i&&i.seekTo&&i.getCurrentTime&&t){let a=i.getCurrentTime();a=Math.round(a),a!==r&&(P=!0,i.seekTo(r,!0),i.playVideo(),i.mute(),i.setVolume(0),t.muted=!0,t.volume=0,setTimeout(()=>{i.pauseVideo(),P=!1},500))}}}else if(e.data.startsWith("IframeTube_endScreen_")){let t=e.data.replace("IframeTube_endScreen_",""),r=t.split("v=")[1].split("&")[0];if(c)window.location.href=t;else if(t.includes("list="))window.location.href=t;else{i=document.getElementById("movie_player"),i.loadVideoById(r);let a=new CustomEvent("yt-navigate",{detail:{endpoint:{watchEndpoint:{videoId:r},commandMetadata:{webCommandMetadata:{url:`/watch?v=${r}`,webPageType:"WEB_PAGE_TYPE_WATCH"}}}},bubbles:!0,cancelable:!0,composed:!0});document.querySelector("ytd-app").dispatchEvent(a)}}}}function ve(){de(),W(),setInterval(W,100),O(),Te(),k(),A(),Z(),document.addEventListener("yt-navigate",()=>{L()&&!x.includes("/shorts/")?A():s()?(ye(),c&&be()):me()}),window.addEventListener("message",Ie),window.addEventListener("popstate",_e)}ve()})();
//# sourceMappingURL=youtube.js.map
