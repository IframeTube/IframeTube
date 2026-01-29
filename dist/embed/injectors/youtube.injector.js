chrome.storage.local&&chrome.storage.local.get("IframeTubeEnabled",r=>{let e=r.IframeTubeEnabled;if(e===void 0&&(e=!0,chrome.storage.local.set({IframeTubeEnabled:!0})),e){let t=document.createElement("script");t.src=chrome.runtime.getURL("embed/youtube.js"),document.documentElement.appendChild(t)}});
//# sourceMappingURL=youtube.injector.js.map
