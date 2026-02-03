// IframeTube - all rights reserved.
// copyright (c) 2026
// you may copy this project and modify it for personal use only.
// you may not distribute this project or any modified versions of it without explicit permission from the author.

// view the full source code and how this works here: https://github.com/IframeTube/IframeTube
// if you encounter any issues, please report them here: https://github.com/IframeTube/IframeTube/issues


let IframeTube_initProxy_timeout = false;
function IframeTube_initProxy() {
    'use strict';  // better for debugging

    // if document body does not exist yet, retry in 100ms until it does
    if (!document.body) {
        clearTimeout(IframeTube_initProxy_timeout);
        IframeTube_initProxy_timeout = setTimeout(IframeTube_initProxy, 100);
        return;
    }

    // hide all other elements
    let elements = document.querySelectorAll('body > *');
    elements.forEach(el => {
        el.style.display = 'none';
    });

    // make sure the page fills our entire view port, 'example.net' is weirdly configured, this fixes it
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.padding = '0';
    document.body.style.margin = '0';

    // black background
    document.body.style.background = '#000000';

    document.body.style.overflow = 'hidden';

    // creates the Youtube embedded iframe
    let embedIframe = document.createElement('iframe');
    embedIframe.setAttribute('allow', 'autoplay *; picture-in-picture *; web-share *; gyroscope *; accelerometer *; clipboard-write *; encrypted-media *;'); // allows everything needed for a Youtube video
    embedIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin'); // set a strict referrer policy
    embedIframe.setAttribute('width', '100%');
    embedIframe.setAttribute('height', '100%');
    embedIframe.setAttribute('frameborder', '0'); // no border
    embedIframe.setAttribute('scrolling', 'yes');
    embedIframe.setAttribute('allowfullscreen', 'true');
    embedIframe.setAttribute('id', 'IframeTube_embedVideo'); // set an ID, so we can access it
    document.body.appendChild(embedIframe);

    // add an event listener for messages from the top window
    window.addEventListener('message', function (event) {
        // if the message is not valid, do not proceed
        if (typeof event.data !== 'string') {
            return;
        }

        // refetch the embedded iframe (solves some edge cases)
        let embedIframe = document.getElementById('IframeTube_embedVideo');
        // if it exists
        if (embedIframe) {
            // if the data starts with the embedded URL (from the IframeTube_embedVideo() function)
            if (event.data.startsWith('IframeTube_embedVideo_')) {
                // replace the embedded iframe source with the Youtube url
                embedIframe.contentWindow.location.replace(event.data.replace('IframeTube_embedVideo_', ''));
            }
            // otherwise, pass all other messages to the embedded iframe (e.g. stop playback or copy native autoplay attributes)
            else {
                embedIframe.contentWindow.postMessage(event.data, '*');
            }
        }
    });

    // tell the top window (youtube.com) that the proxy iframe has loaded
    window.top.postMessage('IframeTube_proxyLoaded', '*');

    // end of IIFE
}

// inits the proxy
IframeTube_initProxy();