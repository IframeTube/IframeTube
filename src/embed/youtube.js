// IframeTube - all rights reserved.
// copyright (c) 2026
// you may copy this project and modify it for personal use only.
// you may not distribute this project or any modified versions of it without explicit permission from the author.

// view the full source code and how this works here: https://github.com/IframeTube/IframeTube
// if you encounter any issues, please report them here: https://github.com/IframeTube/IframeTube/issues


// wraps everything inside an IIFE (this avoids some edge cases)
(function () {
    'use strict'; // better for debugging

    /*
    -------------- IframeTube helper functions ----------------------------
    */

    // sets a cookie
    function IframeTube_setCookie(name, value) {
        document.cookie = name + "=" + (value) + "; path=/";
    }

    // reads a cookie
    function IframeTube_readCookie(name) {
        let nameEQ = name + "=";
        let cookies = document.cookie.split(';').map(c => c.trimStart());

        for (let cookie of cookies) {
            if (cookie.startsWith(nameEQ)) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    }

    // extracts the parameters from the YouTube watch URL (e.g. videoID)
    function IframeTube_extractParams(param) {
        if (IframeTube_watchPage()) {
            let url = window.location.href;
            let params = {};

            if (url.indexOf('/watch?') !== -1) {
                let queryString = url.split('?')[1];
                let queryParts = queryString.split('&');
                for (let i = 0; i < queryParts.length; i++) {
                    let keyValue = queryParts[i].split('=');
                    params[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
                }
            }
            // some video URLS are /watch/VIDEOID or /live/VIDEOID
            else if (url.indexOf('/watch/') !== -1 || url.indexOf('/live/') !== -1) {
                let pathParts = url.split('/');
                params['v'] = pathParts[pathParts.length - 1].split('?')[0];
            }

            return params[param]
        }
    }

    // checks if we are on a YouTube watch page
    function IframeTube_watchPage() {

        // the watch pages are watch? /watch/ or /live/
        if (window.location.href.indexOf('/watch?') !== -1 || window.location.href.indexOf('/watch/') !== -1 || window.location.href.indexOf('/live/') !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    // checks if we are on a YouTube shorts watch page
    function IframeTube_shortsWatchPage() {

        if (window.location.href.indexOf('/shorts/') !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    // checks if the entered URL is a watch URL
    function IframeTube_isWatchUrl(url) {

        return (
            url.indexOf('/watch?') !== -1 ||
            url.indexOf('/watch/') !== -1 ||
            url.indexOf('/live/') !== -1
        );
    }

    // checks if we are watching an ad
    function IframeTube_WatchingAd() {
        if (IframeTube_watchPage()) {

            // checks for the ad elements (these two elements are the most reliable indicators)
            let adElement = document.querySelector('.video-ads');
            let adPlaying = document.querySelector('.ad-showing');
            // if either of them exists and is visible, we are watching an ad
            if (adElement && adElement.checkVisibility() || adPlaying && adPlaying.checkVisibility()) {
                return true;
            }
            // otherwise, we are not watching an ad
            else {
                return false;
            }
        }
    }

    // triggers a shortcut programmatically
    function IframeTube_shortcut(key) {
        let actualKey = '';
        let code = '';
        let shift = false;
        let keyCode = 0;
        let which = 0;

        // theatrer mode
        if (key === 't') {
            actualKey = 't';
            code = 'KeyT';
            shift = false;
            keyCode = 84;
            which = 84;
        }

        // next video (we do not use the API, as it causes issues with ADS)
        else if (key === 'next') {
            actualKey = 'n';
            code = 'KeyN';
            shift = true;
            keyCode = 78;
            which = 78;
        }

        // previous video (we do not use the API, as it causes issues with ADS)
        else if (key === 'previous') {
            actualKey = 'p';
            code = 'KeyP';
            shift = true;
            keyCode = 80;
            which = 80;
        }

        // dispatch the events (we dispatch all of these to make it faster and reliable)
        let focusEvent = new Event('focus', { bubbles: true, cancelable: true });
        document.body.dispatchEvent(focusEvent);

        let keydownEvent = new KeyboardEvent('keydown', {
            key: actualKey,
            code: code,
            shiftKey: shift,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(keydownEvent);

        let beforeInputEvent = new InputEvent('beforeinput', {
            inputType: 'insertText',
            data: actualKey,
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(beforeInputEvent);

        let keypressEvent = new KeyboardEvent('keypress', {
            key: actualKey,
            code: code,
            shiftKey: shift,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(keypressEvent);

        let inputEvent = new InputEvent('input', {
            inputType: 'insertText',
            data: actualKey,
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(inputEvent);

        let changeEvent = new Event('change', { bubbles: true, cancelable: true });
        document.body.dispatchEvent(changeEvent);

        let keyupEvent = new KeyboardEvent('keyup', {
            key: actualKey,
            code: code,
            shiftKey: shift,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(keyupEvent);
    }

    /*
    -------------- IframeTube global variables ----------------------------
    */

    // proxy iframe (the raw iframe element)
    let IframeTube_proxyPlayer = false;

    // the wrapper div around the proxy iframe (used for positioning)
    let IframeTube_proxyWrapper = false;

    // pip indicator
    let IframeTube_pip = false;

    // indicates if the proxy iframe has loaded
    let IframeTube_proxyLoaded = false;

    // indicates if the YouTube embedded iframe INSIDE the proxy iframe has loaded
    let IframeTube_youtubePlayerLoaded = false;

    // iframe API reference
    let IframeTube_iframe_api = false;

    // shorts API reference
    let IframeTube_shorts_api = false;

    // indicates if the quality listener for the main player has been added
    let IframeTube_qualityListenerAdded = false;

    // last URL tracker
    let IframeTube_lastURL = false;

    // last video ID tracker
    let IframeTube_lastVideoId = false;

    // this indicates if the user used the back/forward buttons (browser navigation)
    let IframeTube_historyPopped = false;

    // indicates if a video has been embedded yet (we load other videos via the iframe API)
    let IframeTube_embeddedVideo = false;

    // indicates if we are currently syncing the main player with the embedded one
    let IframeTube_syncing = false;

    // playlist indicator
    let IframeTube_playlist = false;

    // we use a cookie to store the autoplay state (also persists after a page reload)
    let IframeTube_autoPlay = IframeTube_readCookie('IframeTube_autoplay')
    if (!IframeTube_autoPlay) {
        IframeTube_autoPlay = 'true';
        IframeTube_setCookie('IframeTube_autoplay', IframeTube_autoPlay);
    }

    /*
    -------------- Youtube page functions ----------------------------
    */

    // hides ads and other unwanted elements on the page
    let IframeTube_hidePageAdsEtc_timeout = false;
    function IframeTube_hidePageAdsEtc() {
        // retry if the head does not exist yet
        if (!document.head) {
            clearTimeout(IframeTube_hidePageAdsEtc_timeout);
            IframeTube_hidePageAdsEtc_timeout = setTimeout(IframeTube_hidePageAdsEtc, 100);
            return;
        }

        let style = document.createElement('style')

        style.textContent = `
    
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
    `;
        // append the styles
        document.head.appendChild(style);
    }

    // mutes and pauses all videos on the page (e.g. the main YouTube player)
    function IframeTube_muteAndPauseVideos() {
        // only run on watch pages
        if (!IframeTube_watchPage()) {
            return;
        }

        // get all videos on the page
        let videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            // mute and pause if not already muted/paused and not watching an ad and not syncing when on the main player
            if ((!video.paused || !video.muted || video.volume !== 0) && !IframeTube_WatchingAd() && (!IframeTube_syncing || !video.closest('#movie_player'))) {
                video.muted = true;
                video.volume = 0;
                video.pause();
            }

            // unmute and play if muted/paused and watching an ad
            else if ((!video.muted || video.volume !== 0 || video.paused) && IframeTube_WatchingAd()) {
                video.muted = true;
                video.volume = 0;
                video.play();
            }
        });
    }

    // you are welcome to open a pull request or an issue on Github if you find a reliable way to support the miniplayer
    // mutes the miniplayer (miniplayer is not supported with IframeTube, sorry yall)
    function IframeTube_mute_miniplayer() {
        let miniplayer = document.querySelector('ytd-miniplayer');
        if (miniplayer) {
            let video = miniplayer.querySelector('video');
            if (video && (!video.paused || !video.muted || video.volume !== 0)) {
                video.muted = true;
                video.volume = 0;
                video.pause();
            }
        }
    }

    // creates the proxy iframe
    let IframeTube_proxyIframe_timeout = false;
    function IframeTube_proxyIframe() {
        // retry if the body does not exist yet
        if (!document.body) {
            clearTimeout(IframeTube_proxyIframe_timeout);
            IframeTube_proxyIframe_timeout = setTimeout(IframeTube_proxyIframe, 100);
            return;
        }

        // creates a wrapper which is going to be used for positioning
        let proxyWrapper = document.createElement('div');
        proxyWrapper.id = 'IframeTube_proxyWrapper';
        // hides it first
        proxyWrapper.classList.add('IframeTube_hidden');
        document.body.appendChild(proxyWrapper);

        // expose it globally
        IframeTube_proxyWrapper = proxyWrapper;

        // apply custom styles to the proxy wrapper
        let style = document.createElement('style');
        style.textContent = `
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

    `;
        // append the styles
        document.head.appendChild(style);

        // creates the proxy iframe
        let proxy = document.createElement('iframe');
        proxy.src = 'https://example.net/?IframeTubeProxy=1'; // the param (?IframeTubeProxy=1) is an indicator that this is OUR proxy URL
        proxy.setAttribute('allow', 'autoplay *; picture-in-picture *; web-share *; gyroscope *; accelerometer *; clipboard-write *; encrypted-media *;'); // allows everything needed for a Youtube video
        proxy.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin'); // set a strict referrer policy
        proxy.setAttribute('width', '100%');
        proxy.setAttribute('height', '100%');
        proxy.setAttribute('frameborder', '0'); // no border
        proxy.setAttribute('scrolling', 'yes');
        proxy.setAttribute('allowfullscreen', 'true');
        proxy.setAttribute('style', 'display: none;'); // hide for now
        proxyWrapper.appendChild(proxy);

        // expose it globablly
        IframeTube_proxyPlayer = proxy;

        // starts the repeater function (this needs to run every 100ms to catch URL changes)
        IframeTube_repeater();
        setInterval(IframeTube_repeater, 100);
    }

    // position the iframe proxy over the native player (exact size and position)
    function IframeTube_positionProxy() {
        // sanity check to make sure we are on a watch page
        if (IframeTube_watchPage()) {
            // get the known native player elements
            let players = [
                '#player.ytd-watch-flexy',
                '.player-size',
                '#ytd-player',
                '.html5-video-player'
            ];

            // loop through them until we find one that exists and is visible
            let nativePlayer = false;
            for (let i = 0; i < players.length; i++) {
                nativePlayer = document.querySelector(players[i]);
                if (nativePlayer && nativePlayer.offsetWidth > 0) {
                    break;
                }
            }

            // position the proxy over the native player (sanity check to make sure it exists and is visible)
            if (nativePlayer && nativePlayer.offsetWidth > 0) {
                // get the position and size of the native player
                let rect = nativePlayer.getBoundingClientRect();
                // set the size and position of the proxy wrapper to match the native player (take window scroll into account)
                IframeTube_proxyWrapper.style.width = rect.width + 'px';
                IframeTube_proxyWrapper.style.height = rect.height + 'px';
                IframeTube_proxyWrapper.style.top = (window.scrollY + rect.top) + 'px';
                IframeTube_proxyWrapper.style.left = (window.scrollX + rect.left) + 'px';

                // if the player was in PIP mode, make sure we remove it (sanity check)
                if (IframeTube_proxyWrapper.classList.contains('PIP')) {
                    IframeTube_proxyWrapper.classList.remove('PIP');
                }

                // show the proxy wrapper class
                IframeTube_proxyWrapper.classList.remove('IframeTube_hidden');
            }
        }
    }

    // embeds the video into the proxy iframe
    let IframeTube_embedVideo_timeout = false;
    function IframeTube_embedVideo() {
        // if the proxy is not loaded, retry until it is
        if (!IframeTube_proxyLoaded) {
            clearTimeout(IframeTube_embedVideo_timeout);
            IframeTube_embedVideo_timeout = setTimeout(IframeTube_embedVideo, 100);
            return;
        }

        // gets the current video ID from the URL
        let videoId = IframeTube_extractParams('v');

        // checks if we are on a playlist
        let playList = IframeTube_extractParams('list');
        // if we are on a playlist
        if (playList) {
            // set the playlist indicator to true
            IframeTube_playlist = true;
            // enable the previous button in the proxy player
            IframeTube_player_enablePrevButton();
        }

        // else, we are not on a playlist
        else {
            // set the playlist indicator to false
            IframeTube_playlist = false;
            // disable the previous button in the proxy player
            IframeTube_player_disablePrevButton();
        }

        // get the start param from the URL
        let startTimeNumber = 0
        let tParam = IframeTube_extractParams('t');
        // if it exists, remove the 's' at the end and set the start time number
        if (tParam) {
            startTimeNumber = tParam.replace('s', '');
        }

        // if the start time number is bigger than 0, set the start time param to it
        // we do this to safely embed the url even if the start time is 0
        let startTime = '';
        if (startTimeNumber > 0) {
            startTime = '&start=' + startTimeNumber;
        }

        // gets the language of the page (the embedded player is set to your language to make it more comfortable)
        let ytLang = document.documentElement.lang

        // extracts the language code (e.g. en from en-US)
        let IframeTube_language = ytLang.split("-")[0].toLowerCase();

        // if we did not embed a video yet, embed it now
        if (!IframeTube_embeddedVideo) {
            // copy the autoplay attribute only once on the first video embed
            IframeTube_copyAutoPlayAttribute();

            // the ?IframeTubeEmbed=1 param is an indicator that this is our embed URL
            // we use autoplay=1 to make sure the video autoplays and IframeTube_autoPlay to control the autoplay’s button state, for the language we use the hl param and also set the start time if it exists
            // send the embed url to the proxy iframe
            IframeTube_proxyPlayer.contentWindow.postMessage(
                'IframeTube_embedVideo_https://www.youtube.com/embed/' + videoId + '?IframeTubeEmbed=1&autoplay=1&IframeTube_autoPlay=' + IframeTube_autoPlay + '&hl=' + IframeTube_language + startTime,
                '*'
            );
            // set the indicator to true, as we have now embedded a video
            IframeTube_embeddedVideo = true;
        }
        // for all other cases, do NOT reload the iframe, just load a new video via the iframe API
        else {
            // sends the load video message with the video ID and start time
            IframeTube_proxyPlayer.contentWindow.postMessage(
                'IframeTube_api_' + videoId + '|' + startTime,
                '*'
            );
        }

        // sometimes even though the 't' param is 0 or does not exist, Youtube synces to the last time you left the video
        // if there is no start time param, and we are not watching a playlist, try to sync the Youtube main’s player start time
        if (startTimeNumber <= 0 && !IframeTube_playlist) {
            IframeTube_syncStart();
        }
    }

    // syncs the start time of the main Youtube player to the embedded one (if there is not t param)
    let IframeTube_syncStart_timeout = false;
    function IframeTube_syncStart() {
        // fetch the iframe api
        IframeTube_iframe_api = document.getElementById('movie_player')

        // make sure it exists and getCurrentTime is available
        if (IframeTube_iframe_api && IframeTube_iframe_api.getCurrentTime) {
            let currentTime = IframeTube_iframe_api.getCurrentTime();
            // if it’s bigger than 0
            if (currentTime > 0) {
                // call the function to sync the start time
                IframeTube_player_seekTo(currentTime);
            }
        }

        // otherwise, retry in 100ms until it is available
        else {
            clearTimeout(IframeTube_syncStart_timeout);
            IframeTube_syncStart_timeout = setTimeout(IframeTube_syncStart, 100);
            return;
        }
    }

    // sets the lowest available quality on the main Youtube player (this helps to reduce internet usage and performance impact)
    let IframeTube_setLowestQuality_timeout = false;
    function IframeTube_setLowestQuality() {

        // refetch the iframe api
        IframeTube_iframe_api = document.getElementById('movie_player')

        // make sure all the quality functions are available
        if (IframeTube_iframe_api && IframeTube_iframe_api.setPlaybackQualityRange && IframeTube_iframe_api.getAvailableQualityLevels && IframeTube_iframe_api.getPlaybackQuality) {

            // get the available qualities and then the lowest one (second last in the array, as the last one is 'auto')
            let availableQualities = IframeTube_iframe_api.getAvailableQualityLevels();
            let lowestQuality = availableQualities[availableQualities.length - 2];

            // set the playback quality range (this is needed to force the quality, as setPlaybackQuality was removed)
            IframeTube_iframe_api.setPlaybackQualityRange(lowestQuality, lowestQuality);

            // if we did not add the listener yet, add it now
            if (!IframeTube_qualityListenerAdded) {
                // whenever Youtube somehow changes the quality on the main player, immediately set it back to the lowest quality
                IframeTube_iframe_api.addEventListener('onPlaybackQualityChange', IframeTube_setLowestQuality);
                // set the indicator to true
                IframeTube_qualityListenerAdded = true;
            }
        }
        // if the api is not available yet, retry
        else {
            clearTimeout(IframeTube_setLowestQuality_timeout);
            IframeTube_setLowestQuality_timeout = setTimeout(IframeTube_setLowestQuality, 100);
            return;
        }
    }

    // the shorts player quality is synced with the main player, so we need to fix it for shorts pages
    let IframeTube_fixShortsQuality_timeout = false;
    function IframeTube_fixShortsQuality() {

        // if we are not on a shorts watch page
        if (IframeTube_shortsWatchPage()) {
            // get the shorts player api
            IframeTube_shorts_api = document.getElementById('shorts-player');
            if (!IframeTube_shorts_api) {
                clearTimeout(IframeTube_fixShortsQuality_timeout);
                IframeTube_fixShortsQuality_timeout = setTimeout(IframeTube_fixShortsQuality, 100);
                return;
            }

            // make sure all the quality functions are available
            if (IframeTube_shorts_api && IframeTube_shorts_api.setPlaybackQualityRange && IframeTube_shorts_api.getAvailableQualityLevels) {

                // get all of the available qualities, and select the highest (usually HD)
                let availableQualities = IframeTube_shorts_api.getAvailableQualityLevels();
                let highestQuality = availableQualities[0];

                // set the playback quality range to the highest quality
                IframeTube_shorts_api.setPlaybackQualityRange(highestQuality, highestQuality);

                // if the listener for quality has been added, reload the page (this is the only reliable way, as the shorts api is buggy)
                if (IframeTube_qualityListenerAdded) {
                    location.reload();
                }
            }
        }
    }

    // stop the embedded player’s playback
    let IframeTube_player_stop_timeout = false;
    function IframeTube_player_stop() {
        // if the embedded player is not loaded yet, retry
        if (!IframeTube_youtubePlayerLoaded) {
            clearTimeout(IframeTube_player_stop_timeout);
            IframeTube_player_stop_timeout = setTimeout(IframeTube_player_stop, 100);
            return;
        }

        // send the stop playback message to the embedded player
        IframeTube_proxyPlayer.contentWindow.postMessage('IframeTube_stopPlayback', '*');
    }

    // resumes the embedded player’s playback (currently unused)
    let IframeTube_player_resume_timeout = false;
    function IframeTube_player_resume() {
        if (!IframeTube_youtubePlayerLoaded) {
            clearTimeout(IframeTube_player_resume_timeout);
            IframeTube_player_resume_timeout = setTimeout(IframeTube_player_resume, 100);
            return;
        }

        IframeTube_proxyPlayer.contentWindow.postMessage('IframeTube_resumePlayback', '*');
    }

    // seeks the embedded player to a specific time
    let IframeTube_player_seekTo_timeout = false;
    function IframeTube_player_seekTo(time) {
        // if the embedded player is not loaded yet, retry in 100ms until it is
        if (!IframeTube_youtubePlayerLoaded) {
            clearTimeout(IframeTube_player_seekTo_timeout);
            IframeTube_player_seekTo_timeout = setTimeout(() => {
                IframeTube_player_seekTo(time);
            }, 100);
            return;
        }

        // send the seek message to the embedded player
        IframeTube_proxyPlayer.contentWindow.postMessage('IframeTube_seekTo_' + time, '*');
    }


    // enables the previous button when we are on a playlist
    let IframeTube_player_enablePrevButton_timeout = false;
    function IframeTube_player_enablePrevButton() {
        // if the embedded player is not loaded yet, retry
        if (!IframeTube_youtubePlayerLoaded) {
            clearTimeout(IframeTube_player_enablePrevButton_timeout);
            IframeTube_player_enablePrevButton_timeout = setTimeout(IframeTube_player_enablePrevButton, 100);
            return;
        }

        // send the enable previous button message to the embedded player
        IframeTube_proxyPlayer.contentWindow.postMessage('IframeTube_enablePrevButton', '*');
    }

    // disables the previous button when we are not on a playlist
    let IframeTube_player_disablePrevButton_timeout = false;
    function IframeTube_player_disablePrevButton() {
        // if the embedded player is not loaded yet, retry
        if (!IframeTube_youtubePlayerLoaded) {
            clearTimeout(IframeTube_player_disablePrevButton_timeout);
            IframeTube_player_disablePrevButton_timeout = setTimeout(IframeTube_player_disablePrevButton, 100);
            return;
        }
        // send the disable previous button message to the embedded player
        IframeTube_proxyPlayer.contentWindow.postMessage('IframeTube_disablePrevButton', '*');
    }

    // hides the proxy player or toggles PIP mode on home page
    function IframeTube_HidePlayer() {
        // if PIP is disabled
        if (!IframeTube_pip) {
            // remove PIP class if it exists
            if (IframeTube_proxyWrapper.classList.contains('PIP')) {
                IframeTube_proxyWrapper.classList.remove('PIP');
            }
            // hide the proxy wrapper
            IframeTube_proxyWrapper.classList.add('IframeTube_hidden');
            // stop the embedded player playback
            IframeTube_player_stop();
        }
        // else, we are in PIP mode
        else {
            // remove the hidden class and add the PIP class
            IframeTube_proxyWrapper.classList.remove('IframeTube_hidden');
            IframeTube_proxyWrapper.classList.add('PIP');
        }
    }

    // updates theater mode attribute, this is both used for language and because the theater button has two different tooltips (depending on the mode)
    let IframeTube_updateTheaterAttributes_timeout = false;
    function IframeTube_updateTheaterAttributes() {

        // get the native button
        let nativeButton = document.querySelector('#movie_player .ytp-size-button');
        // if it exists and the embedded player has loaded
        if (nativeButton && IframeTube_youtubePlayerLoaded) {
            // get the tooltip title
            let tooltipTitle = nativeButton.getAttribute('data-tooltip-title');
            // send it to the embedded player
            IframeTube_proxyPlayer.contentWindow.postMessage(
                'IframeTube_theaterButtonAttribute_' + tooltipTitle,
                '*'
            );
        }
        // otherwise, the player is not loaded yet, retry again in 100ms
        else {
            clearTimeout(IframeTube_updateTheaterAttributes_timeout);
            IframeTube_updateTheaterAttributes_timeout = setTimeout(IframeTube_updateTheaterAttributes, 100);
            return;
        }
    }

    // update the theater icon, this is because the theater button has two different icons (depending on the mode)
    let IframeTube_updateTheaterIcon_timeout = false;
    function IframeTube_updateTheaterIcon(mode) {
        let message = false;

        // if we called the function with 'theater', set the message to theater
        if (mode === 'theater') {
            message = 'IframeTube_setTheaterIcon';
        }

        // if we called the function with 'default', set the message to default
        else if (mode === 'default') {
            message = 'IframeTube_setDefaultIcon';
        }

        // if no mode was provided, get the theater attribute from the native flexy and decide based off that
        else if (!mode) {
            let flexy = document.querySelector('ytd-watch-flexy');
            if (flexy && flexy.hasAttribute('theater')) {
                message = 'IframeTube_setTheaterIcon';
            }
            else {
                message = 'IframeTube_setDefaultIcon';
            }
        }

        // if the message exists and the embedded player is loaded, send the message to it
        if (message && IframeTube_youtubePlayerLoaded) {
            IframeTube_proxyPlayer.contentWindow.postMessage(
                message,
                '*'
            );
        }
        // otherwise, retry in 100ms with the same arguments (mode)
        else {
            clearTimeout(IframeTube_updateTheaterIcon_timeout);
            IframeTube_updateTheaterIcon_timeout = setTimeout(() => {
                IframeTube_updateTheaterIcon(mode);
            }, 100);
        }
    }

    // inits the theater button on first load (the Youtube player takes a while to update the button, so we do it like this)
    let IframeTube_initTheaterButton_timeout = false;
    function IframeTube_initTheaterButton() {
        let flexy = document.querySelector('ytd-watch-flexy');

        // if the native flexy has the theater attribute, set the theater icon and copy attributes
        if (flexy && flexy.hasAttribute('theater')) {
            // wait for 100 ms to give the player time to set the correct icon and tooltip
            setTimeout(() => {
                IframeTube_updateTheaterAttributes();
                IframeTube_updateTheaterIcon('theater');
            }, 100);
        }

        // else, set the default icon and copy the tooltip
        else if (flexy && !flexy.hasAttribute('theater')) {
            // wait for 100 ms to give the player time to set the correct icon and tooltip
            setTimeout(() => {
                IframeTube_updateTheaterAttributes();
                IframeTube_updateTheaterIcon('default');
            }, 100);
        }

        // if the flexy has not loaded yet, retry in 100 ms
        else {
            clearTimeout(IframeTube_initTheaterButton_timeout);
            IframeTube_initTheaterButton_timeout = setTimeout(IframeTube_initTheaterButton, 100);
            return;
        }
    }

    // copy the native autoplay button attributes, we do this to get the attribute in the current language
    let IframeTube_copyAutoPlayAttribute_timeout = false;
    function IframeTube_copyAutoPlayAttribute() {

        // get the native button
        let nativeButton = document.querySelector('#movie_player .ytp-autonav-toggle-button');
        // get the native’s button text (tooltip is stored here)
        let nativeText = document.querySelector('.ytp-autonav-toggle');

        // if they both exist, and the text has the 'aria-label' attribute
        if (nativeButton && nativeText && nativeText.getAttribute('aria-label')) {
            // init the texts as false
            let enabledText = false;
            let disabledText = false;

            // if the button is disabled
            if (nativeButton.getAttribute('aria-checked') === 'false') {
                // click it, so it becomes enabled
                nativeButton.click();
            }

            // sanity check to make sure it is enabled
            if (nativeButton.getAttribute('aria-checked') === 'true') {
                enabledText = nativeText.getAttribute('aria-label'); // set the enabled text to the current attribute
                // click the button to disable it
                nativeButton.click();
            }

            // wait for 50ms to make sure the button was switched to disabled
            setTimeout(() => {
                // sanity check to make sure it is disabled
                if (nativeButton.getAttribute('aria-checked') === 'false') {
                    disabledText = nativeText.getAttribute('aria-label'); // set the disabled text to the current attribute
                }

                // if both texsts exists
                if (disabledText && enabledText) {
                    // sent the post message to the embedded player with the texsts
                    IframeTube_proxyPlayer.contentWindow.postMessage(
                        'IframeTube_setAutoplayAttributes_' + enabledText + '|' + disabledText,
                        '*'
                    );
                }
            }, 50);
        }
        // otherwise, retry in 100 ms until the elements are found
        else {
            clearTimeout(IframeTube_copyAutoPlayAttribute_timeout);
            IframeTube_copyAutoPlayAttribute_timeout = setTimeout(IframeTube_copyAutoPlayAttribute, 100);
            return;
        }
    }

    // play the next video
    function IframeTube_nextVideo() {
        // if auto play is enabled
        if (IframeTube_autoPlay === 'true') {
            // trigger the 'next' shortcut
            IframeTube_shortcut('next');
        }

        // else if playlist is enabled
        else if (IframeTube_playlist) {
            // trigger the 'next' shortcut as well
            IframeTube_shortcut('next');
        }
        // otherwise, do not play the next video
    }

    // IMPORTANT: WHEN AN AD IS PLAYING ON A NON PLAYLIST VIEO, WE CANNOT GET THE ATTRIBUTES! PLEASE USE A COMBO OF IframeTube + other AdBlock (e.g. uBlock Origin) TO SKIP THE AD AND GET THE TOOLTIP IMMEDIATELY!
    // if anyone has a different solution, please open a PR or an issue :) Only reliable methods will be pushed.

    // get the preview of the next video
    let IframeTube_nextVideoPreview_timeout = false;
    function IframeTube_nextVideoPreview() {
        // find the native 'next' button
        let nativeButton = document.querySelector('#movie_player .ytp-next-button');
        // if we found it
        if (nativeButton) {
            // get all the needed attributes
            let shortcutTitle = nativeButton.getAttribute('data-tooltip-title'); // shortcut, e.g. NEXT (SHIFT+N)
            let videoTitle = nativeButton.getAttribute('data-tooltip-text'); // video title
            let videoThumbnail = nativeButton.getAttribute('data-preview'); // video thumbnail
            // if they all exist, send them to the embedded player as a JSON (we do this, as people can put almost anything into the video title, and | would fail)
            if (shortcutTitle && videoTitle && videoThumbnail) {
                IframeTube_proxyPlayer.contentWindow.postMessage(
                    'IframeTube_nextVideoPreview_' + JSON.stringify({ shortcutTitle, videoTitle, videoThumbnail }),
                    '*'
                );
            }
            // otherwise, retry in 100ms until they all exist
            else {
                clearTimeout(IframeTube_nextVideoPreview_timeout);
                IframeTube_nextVideoPreview_timeout = setTimeout(IframeTube_nextVideoPreview, 100);
                return;
            }
        }
    }

    // remove the attributes of the next button for each new video (this is because it takes a while for the button to appear, and by doing this we trigger our timeout in IframeTube_nextVideoPreview)
    function IframeTube_resetNextButton() {
        let nativeButton = document.querySelector('#movie_player .ytp-next-button');
        // if the embedded player is loaded, and the native button exists
        if (IframeTube_youtubePlayerLoaded && nativeButton) {
            // remove all of these attributes
            nativeButton.removeAttribute('data-tooltip-title');
            nativeButton.removeAttribute('data-tooltip-text');
            nativeButton.removeAttribute('data-preview');
        }
    }

    // play the previous video
    function IframeTube_prevVideo() {
        // only trigger the shortcut if we are on a playlist
        if (IframeTube_playlist) {
            IframeTube_shortcut('previous');
        }
    }

    // get the preview of the previous video
    let IframeTube_prevVideoPreview_timeout = false;
    function IframeTube_prevVideoPreview() {
        // find the 'previous' button
        let nativeButton = document.querySelector('#movie_player .ytp-prev-button');
        // if we found it
        if (nativeButton) {
            // get all the needed attributes
            let shortcutTitle = nativeButton.getAttribute('data-tooltip-title'); // shortcut, e.g. PREVIOUS (SHIFT+P)
            let videoTitle = nativeButton.getAttribute('data-tooltip-text'); // video title
            let videoThumbnail = nativeButton.getAttribute('data-preview'); // video thumbnail
            // if they all exist, send them to the embedded player as a JSON (we do this, as people can put almost anything into the video title, and | would fail)
            if (shortcutTitle && videoTitle && videoThumbnail) {
                IframeTube_proxyPlayer.contentWindow.postMessage(
                    'IframeTube_prevVideoPreview_' + JSON.stringify({ shortcutTitle, videoTitle, videoThumbnail }),
                    '*'
                );
            }
            // otherwise, retry in 100ms until they all exist
            else {
                clearTimeout(IframeTube_prevVideoPreview_timeout);
                IframeTube_prevVideoPreview_timeout = setTimeout(IframeTube_prevVideoPreview, 100);
                return;
            }
        }
    }

    // remove the attributes of the previopus button for each new video (this is because it takes a while for the button to appear, and by doing this we trigger our timeout in IframeTube_prevVideoPreview)
    function IframeTube_resetPrevButton() {
        let nativeButton = document.querySelector('#movie_player .ytp-prev-button');
        // if the embedded player is loaded, and the native button exists
        if (IframeTube_youtubePlayerLoaded && nativeButton) {
            // remove all of these attributes
            nativeButton.removeAttribute('data-tooltip-title');
            nativeButton.removeAttribute('data-tooltip-text');
            nativeButton.removeAttribute('data-preview');
        }
    }

    // supports timestamp links in the description and comments
    function IframeTube_timestampLinks() {
        let links = document.querySelectorAll('.comment-content a, #description a, ytm-expandable-video-description-body-renderer a, ytd-comments .yt-core-attributed-string a');
        // loop through them
        links.forEach(link => {
            // prevent adding multiple listeners
            if (link.classList.contains('IframeTube_timestampLink')) {
                return;
            }

            // if the link href contains a timestamp (e.g. ?t=123 or &t=123)
            if (link.href && (link.href.indexOf('?t=') !== -1 || link.href.indexOf('&t=') !== -1)) {

                // add a class to indicate we added the listener
                link.classList.add('IframeTube_timestampLink');
                // add a click event listener
                link.addEventListener('click', (event) => {

                    // prevent the default browser and Youtube action
                    event.preventDefault();
                    event.stopImmediatePropagation();

                    // extract the timestamp manually
                    let time = false;
                    let url = new URL(link.href);
                    if (url.searchParams.get('t')) {
                        time = url.searchParams.get('t');
                    }

                    // if we found a timestamp, seek to it
                    if (time) {
                        IframeTube_player_seekTo(time);
                        // scrolls up to the player
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                }, true);

                link.addEventListener('mousedown', (event) => {
                    // prevent the default browser and Youtube action
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }, true);

                link.addEventListener('mouseup', (event) => {
                    // prevent the default browser and Youtube action
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }, true);
            }
        });
    }

    // add shortcuts to the page (we do this so if the user is triggering a shortcut while not focused in the embedded player, it still triggers correctly)
    function IframeTube_addShorcuts() {
        document.addEventListener('keydown', IframeTube_shortcutsHandler);
        document.addEventListener('keyup', IframeTube_shortcutsHandler);
    }

    // handle all the shortcuts
    function IframeTube_shortcutsHandler(event) {
        // if we are holding the altkey, ctrlkey, metakey, or we are NOT on the watch page, do not proceed
        if (event.altKey || event.ctrlKey || event.metaKey || !IframeTube_watchPage()) {
            return;
        }

        // define all the shortcuts we send to the player
        let shortcuts = [
            ' ',
            'k',
            'j',
            'l',
            'm',
            'f',
            'i',
            'c',
            'o',
            't',
            'arrowleft',
            'arrowright',
            'arrowup',
            'arrowdown',
            'home',
            'end',
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];

        // if the shortcut is not trusted (triggered programmatically) OR it is not included in the allowed shortcuts, do not proceed
        if (!event.isTrusted || !shortcuts.includes(event.key.toLowerCase())) {
            return;
        }

        // if we are inside a text field, do not proceed
        let isTextField = event.target;
        if (
            isTextField &&
            (
                isTextField.tagName.toLowerCase().indexOf('input') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('label') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('select') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('textarea') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('fieldset') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('legend') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('datalist') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('output') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('option') !== -1 ||
                isTextField.tagName.toLowerCase().indexOf('optgroup') !== -1
            )
        ) {
            return;
        }

        // prevent the default browser action, and the default Youtube shortcut
        event.preventDefault();
        event.stopImmediatePropagation();
        // send the shortcut to the embedded player
        IframeTube_proxyPlayer.contentWindow.postMessage(
            'IframeTube_shortcut_' + event.type + '_' + event.key + '_' + event.shiftKey + '_' + event.keyCode,
            '*'
        );
    }

    // detect if the url has changed, and load/hide the video
    function IframeTube_repeater() {

        // last and current urls
        let lastUrl = IframeTube_lastURL;
        let currentUrl = window.location.href;

        // simplify them to compare
        if (lastUrl) {
            lastUrl = lastUrl.replace(/([#&]index=.*$)|(#.*$)/, '');
        }
        if (currentUrl) {
            currentUrl = currentUrl.replace(/([#&]index=.*$)|(#.*$)/, '');
        }

        // if they DO NOT equal
        if (lastUrl !== currentUrl) {

            // update the global variable of lastURL
            IframeTube_lastURL = window.location.href;

            // if we are on a watch page
            if (IframeTube_watchPage()) {
                // get the current video id
                let currentVideoId = IframeTube_extractParams('v');

                // additional safety check to prevent double embedding and allow to play the next video if the user has used the back/forward button
                if (!(lastUrl && !IframeTube_isWatchUrl(lastUrl)) && !IframeTube_historyPopped && currentVideoId === IframeTube_lastVideoId) {
                    return;
                }

                // update the variable
                IframeTube_lastVideoId = currentVideoId;
                // embed/load the video
                IframeTube_embedVideo();
                // indicate that we are not using the back/forward buttons
                IframeTube_historyPopped = false;
            }
            // if we are not watching a video, hide the player
            else {
                IframeTube_HidePlayer();
            }
        }

        // regardless of urls, if we are on a watchpage, position the proxy and support timestamp links very 100ms
        if (IframeTube_watchPage()) {
            IframeTube_positionProxy();
            IframeTube_timestampLinks();
        }
    }

    // checks if we are using the back/forward buttons
    function IframeTube_checkPopstate() {
        if (!IframeTube_historyPopped) {
            IframeTube_historyPopped = true;
            return;
        }
    }

    // listen for messages sent from the iframes
    function IframeTube_listenForMessages(event) {
        // if the message is not valid, do not proceed
        if (typeof event.data !== 'string') {
            return;
        }

        // if the proxy iframe has loaded, set a flag to indicate that
        else if (event.data === 'IframeTube_proxyLoaded') {
            IframeTube_proxyLoaded = true;
        }

        // if the embedded Youtube iframe has loaded, set a flag to indicate that and also show the proxy player with the video in it
        else if (event.data === 'IframeTube_youtubePlayerLoaded') {
            IframeTube_youtubePlayerLoaded = true;
            IframeTube_proxyPlayer.style.display = 'block';
        }

        // theater has been set to on/off
        else if (event.data === 'IframeTube_theater') {

            // trigger the shortcut
            IframeTube_shortcut('t');

            // wait for 150 ms for the native Youtube player to update, then update the theater attribute and icon
            setTimeout(() => {
                IframeTube_updateTheaterAttributes();
                IframeTube_updateTheaterIcon();
            }, 150);

            // if we are in full screen, exit it immediately
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }

        // enables autoplay
        else if (event.data === 'IframeTube_enableAutoplay') {
            IframeTube_autoPlay = 'true'
            IframeTube_setCookie('IframeTube_autoplay', IframeTube_autoPlay);
        }

        // disables autoplay
        else if (event.data === 'IframeTube_disableAutoplay') {
            IframeTube_autoPlay = 'false'
            IframeTube_setCookie('IframeTube_autoplay', IframeTube_autoPlay);
        }

        // embed video has ended
        else if (event.data === 'IframeTube_video_ended') {
            // play the next video
            IframeTube_nextVideo();
        }

        // next video (triggered by the next button or shift+n shortcut)
        else if (event.data === 'IframeTube_nextVideo') {
            // play the next video
            IframeTube_shortcut('next');
        }

        // request the next video preview
        else if (event.data === 'IframeTube_nextVideo_preview') {
            IframeTube_nextVideoPreview();
        }

        // previous video (triggered by the previous button or shift+p shortcut)
        else if (event.data === 'IframeTube_previousVideo') {
            IframeTube_prevVideo();
        }

        // request the previous video preview if we are on a playlist
        else if (event.data === 'IframeTube_previousVideo_preview') {
            if (IframeTube_playlist) {
                IframeTube_prevVideoPreview();
            }
        }

        // pip has been entered
        else if (event.data === 'IframeTube_enteredPip') {
            IframeTube_pip = true;
        }

        // pip has been exited
        else if (event.data === 'IframeTube_leftPip') {
            IframeTube_pip = false;
            // if we are not on a watch page, hide the player
            if (!IframeTube_watchPage()) {
                IframeTube_HidePlayer();
            }
        }

        // sync the main player’s time with the embedded player’s
        // this is to keep video recommendations and watch history accurate
        // this can break if you use the IframeTube + other AdBlock combo (if the other adblock gets detected)
        else if (event.data.startsWith('IframeTube_syncPlayer')) {

            // if we are watching a video, and an ad is NOT playing
            if (IframeTube_watchPage() && !IframeTube_WatchingAd()) {

                // refetch the iframe api
                IframeTube_iframe_api = document.getElementById('movie_player');

                // get the native plaer
                let nativePlayer = document.querySelector('#movie_player video');

                // get the sync time from the post message
                let syncTime = parseFloat(event.data.split('IframeTube_syncPlayer_')[1]);

                // if the iframe api exists, and has the seek, getcurrent time feature AND the native player exists
                if (IframeTube_iframe_api && IframeTube_iframe_api.seekTo && IframeTube_iframe_api.getCurrentTime && nativePlayer) {

                    // get the current time of the native player
                    let currentTime = IframeTube_iframe_api.getCurrentTime();
                    // round the current time
                    currentTime = Math.round(currentTime);

                    // if the current rounded time does not equal the embedded video time
                    if (currentTime !== syncTime) {

                        // set the syncing flag to true
                        IframeTube_syncing = true;

                        // seek the native player to the embedded player’s time
                        IframeTube_iframe_api.seekTo(syncTime, true);
                        // play the native player’s video
                        IframeTube_iframe_api.playVideo();

                        // mute it via the iframe api, and set the volume to 0 (prevent audio leaks)
                        IframeTube_iframe_api.mute();
                        IframeTube_iframe_api.setVolume(0);

                        // also mute it via html, and set the volume to 0
                        nativePlayer.muted = true;
                        nativePlayer.volume = 0;


                        // after 500 ms (half a second), pause the video and stop syncing
                        setTimeout(() => {
                            IframeTube_iframe_api.pauseVideo();
                            IframeTube_syncing = false;
                        }, 500);
                    }
                }
            }
        }

        // get the video link from the embedded player’s end screen
        else if (event.data.startsWith('IframeTube_endScreen_')) {
            let url = event.data.replace('IframeTube_endScreen_', ''); // video url
            let videoId = url.split('v=')[1].split('&')[0]; // video id

            // if we are on a playlist, set the current url to the video url (only reliable way, playlist do not dissapear when faking it)
            if (IframeTube_playlist) {
                window.location.href = url;
            }

            // if we are going to a playlist, also set the current url to the video url
            else if (url.includes('list=')) {
                window.location.href = url;
            }

            // otherwise, if we are not on a playlist, and we are going to a normal video, fake an SPA navigation and do NOT reload the page (faster video loading)
            else {
                // loads the video by id first
                IframeTube_iframe_api = document.getElementById('movie_player');
                IframeTube_iframe_api.loadVideoById(videoId);

                // creates the yt-navigate event with the video id
                let navEvent = new CustomEvent('yt-navigate', {
                    detail: {
                        endpoint: {
                            watchEndpoint: { videoId: videoId },
                            commandMetadata: {
                                webCommandMetadata: {
                                    url: `/watch?v=${videoId}`,
                                    webPageType: 'WEB_PAGE_TYPE_WATCH'
                                }
                            }
                        }
                    },
                    bubbles: true,
                    cancelable: true,
                    composed: true
                });

                // dispatches the fake event
                document.querySelector('ytd-app').dispatchEvent(navEvent);
            }
        }
    }

    // inits IframeTube
    function IframeTube_init() {
        IframeTube_hidePageAdsEtc();
        IframeTube_muteAndPauseVideos();
        setInterval(IframeTube_muteAndPauseVideos, 100);
        IframeTube_proxyIframe();
        IframeTube_addShorcuts();
        IframeTube_setLowestQuality();
        IframeTube_fixShortsQuality();
        IframeTube_initTheaterButton();

        // adds an event listener for yt-navigate (fires whenever you navigate to a new page on Youtube)
        document.addEventListener('yt-navigate', () => {
            // if we are on a shorts page, and last URL was NOT a short
            if (IframeTube_shortsWatchPage() && !IframeTube_lastURL.includes('/shorts/')) {
                // fix shorts qualityy
                IframeTube_fixShortsQuality();
            }
            // otherwise, if we are on a wath page
            else if (IframeTube_watchPage()) {
                // reset the next button’s attributes
                IframeTube_resetNextButton();
                // if we are on a playlist, also reset the previous button’s attributes
                if (IframeTube_playlist) {
                    IframeTube_resetPrevButton();
                }
            }
            // otherwise, if we are on any other page
            else {
                // mute and pause the miniplayer 
                IframeTube_mute_miniplayer();
            }
        });

        // add a listener for messages from iframes
        window.addEventListener('message', IframeTube_listenForMessages);

        // add a listener for the back/forward browser buttons
        window.addEventListener('popstate', IframeTube_checkPopstate);
    }

    // calls the init function
    IframeTube_init();

    // end of IIFE
})();