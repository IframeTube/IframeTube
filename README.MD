# IframeTube

![Project Logo](public/icons/icon256.png)

---

## Introduction

IframeTube is a **YouTube ad blocker** designed to be used **together with another ad blocker**. It effectively removes all video buffering, and continues to work even when ad‑blocking filter lists are outdated. IframeTube is lightweight, free, and fully open source. It also returns the old player UI as a bonus :)

**Summary:**

* Works even when ad‑blocking filters are outdated
* Restores the old YouTube player UI
* Lightweight and easy on memory/CPU
* Free and open source

---

## Preview

Preview of how YouTube looks with IframeTube enabled:

[Preview](https://www.youtube.com/watch?v=X6WFM9VHyyw)

* Shows the YouTube player loading
* Showcases all the includes features inside the player
* Example of IframeTube working with uBlock Origin

---

## Installation

### Chrome

1. Go to the Chrome Web Store:
   [https://chromewebstore.google.com](https://chromewebstore.google.com)
2. Click **Add to Chrome** to install IframeTube.
3. Install any ad blocker of your choice
   *(I personally recommend uBlock Origin or uBlock Origin Lite).*
4. Open YouTube and enjoy 🙂

**Other browsers: coming soon**

---

## How does this work?

IframeTube works by using the **YouTube embedded player**. The embedded player does not contain ads and does not include the newer UI that many users dislike.

The extension injects an iframe into the page that points to `example.net`, which acts as a proxy host. This site has no restrictions, allowing the embedded player to be loaded freely. Inside that proxy iframe, the YouTube embedded player is created.

This proxy is required because placing the embedded player directly on YouTube would be detected and playback blocked. The approach works because browser extensions with the **"all frames"** permission inject content scripts into every iframe on the page.

This allows IframeTube to:

* Inject custom controls (may of which I had to completely rebuilt)
* Add custom keyboard shortcuts
* autoplay behavour
* and much more of the native stuff!

Communication between frames is handled using **postMessage**, which is used to send video IDs, button attributes, player states and more.

### Frame structure

```
Top Window (youtube.com)
└─ Watch page (youtube.js)
   └─ Proxy iframe (example.net) — proxy.js
      └─ YouTube embedded iframe — embed.js
```

**Short explanation:**
The main YouTube page creates an iframe pointing to `example.net`. The extension injects a script into that iframe, which then creates the YouTube embedded player. Another script is injected into the embedded player itself, giving full access to styles, functions, and UI logic. All frames communicate via postMessage.

For more details, see the full documentation here:
[LINK](LINK)

---

## Why is another ad blocker needed?

IframeTube can work on its own, but a second adblock is recommended for privacy and also for some features to work correctly

Without a normal ad blocker:

* Ads still play in the background (not visible, but you can still get tracked by them)

Using a normal ad blocker:

* Prevents background ad tracking
* fixes the 'next video' tooltip from not appearing on non playlist videos

---

## Support

Before contacting support, please read the common problems and fixes below.  
If nothing seems to help, use one of the options below:

- **Open an issue** (GitHub account required):  
  [GitHub Issues](https://github.com/IframeTube/IframeTube/issues)

- **Send an email to:**  
   tubeiframe@gmail.com
---

## Common problems and fixes

### 1. Next video preview above the **Next** button not appearing

Make sure this occurs on **non‑playlist** videos. If so, install a second ad blocker (for example, uBlock Origin or Lite) and enable it on YouTube.

**Why?**
YouTube does not render the next‑video preview on non‑playlist videos while an ad is playing. A normal ad blocker skips the ad in the main player, which renders the preview immediately.


#### 2. Video player not appearing

Follow these steps in order:

1. Try IframeTube in Incognito mode or another browser.

   * If it works there, another extension is the issue.
   * Disable **all** extensions, then re‑enable them one by one until the issue is found.

2. If the issue persists, run this code in the browser console:

```
let wrapper = document.getElementById('IframeTube_proxyWrapper')
if (!wrapper || wrapper.classList.contains('IframeTube_hidden')) {
    console.log('Proxy wrapper does not exist. Make sure IframeTube is enabled in the popup settings.')
}
else {
    let iframe = wrapper.querySelector('iframe')
    if (!iframe || iframe.style.display === 'none') {
        console.log('Iframe is hidden. Please open an issue, as this may be on our side.')
    }
    else {
        console.log(iframe)
    }
}
```

Open an issue in the **Question or Help** category and include the console output.


#### 3. No mini-player button

The mini‑player is currently **not supported**. You are welcome to open a PR or an issue if you want to poke it.


#### 4. Tooltips randomly disappearing

This is a known YouTube bug related to tab navigation and also occurs in the native player. Sorry, but fixing it is not planned, as I would need to recreate all the tooltips manually,
which would just complicated things.


#### 5. Random lag appearing suddenly

This behavour also exists in YouTube’s native player. Clicking timestamps in comments (which skips the player to a certain time) multiple times causes weird lag. Page reload fixes that, but I have currently no other solution or even idea what is causing it.


#### 6. Shorts reloading the entire page when opened

IframeTube sets the main players quality to the lowest available. This setting is unfortunatelly shared with the shorts player. We fix this by using the shorts api (which I randomly discovered) and set the quality back to normal. Unfortunatelly, because the API is undocumented and buggy, without refreshing the page, the quality gets sometimes set back, or similar issues happen.


#### 7. Mobile support

IframeTube is currently **not supported on mobile or tablet devices**.

* Tablet support may be added in the future
* Safari extension fees are currently too high
* Mobile support is unlikely


#### 8. Where can I find documentation?

Full documentation is available here:
[LINK](LINK)


#### 9. I though the embedded player had ads for decaded?
This is a common misunderstanding. The embedded player in Google search results (I believe) is modified by Google to include ads, tracking, etc. Then, there is the normal embedded
player, which all of the other sites use, and it’s completely ad-free.

#### 10. Theater button sometimes has the wrong icon/tooltip?
This is caused by the random lags the Youtube page includes, which I cannot count for. Simply said, each other 100ms loop I add causes more lag, meaning there is no reliable way
to check for theater without loops/observers. I want this to be as effective and as lightweight as it can possibly be. Its pretty rare for this to happen anyways.

#### 11. Will this remain free forever?
Yes. I do not plan to make this paid/closed source in the future. Simply said, I do not see the point of paying for something that blocks ads. Plus, there are normal adblockers
that you can just use for free. I want this to finally become a solution and prevent the annoying video buffering/adblockers not allowed popups. I only have optional donations.

## DONATION
This project was entirely developed by me, and I spent weeks debugging the page and recreating features. Any donation, no matter the amount, would be greately appreciated :).

You can donate here:
[LINK](LINK) 

## Copyright

IframeTube - all rights reserved. Copyright © 2026.
You may copy this project and modify it for personal use only.
You may not distribute this project or any modified versions of it without explicit permission from the author.