// checks if the script is enabled in the extension settings
if (chrome.storage.local) {
    chrome.storage.local.get("IframeTubeEnabled", (result) => {
        let enabled = result.IframeTubeEnabled;
        // if there is no cookie, enable by default
        if (enabled === undefined) {
            enabled = true;
            chrome.storage.local.set({ "IframeTubeEnabled": true });
        }
        // if enabled, inject the script
        if (enabled) {
            // Escapes the sandbox by injecting a script into the page context
            let script = document.createElement('script');
            script.src = chrome.runtime.getURL('embed/youtube.js');
            // immediately inject the script
            document.documentElement.appendChild(script);
        }
    });
}