// IframeTube - all rights reserved.
// copyright (c) 2026
// you may copy this project and modify it for personal use only.
// you may not distribute this project or any modified versions of it without explicit permission from the author.

// view the full source code and how this works here: https://github.com/IframeTube/IframeTube
// if you encounter any issues, please report them here: https://github.com/IframeTube/IframeTube/issues

// get the tabs
let tabSettings = document.getElementById("tab-settings");
let tabIssues = document.getElementById("tab-issues");
let tabDonate = document.getElementById("tab-donate");

// get the panels
let panelSettings = document.getElementById("panel-settings");
let panelIssues = document.getElementById("panel-issues");
let panelDonate = document.getElementById("panel-donate");
let panelLearn = document.getElementById("panel-learn");
let panelLearn2 = document.getElementById("panel-learn-2");

// get the buttons
let buttonToggle = document.getElementById("button-toggle");
let buttonRate = document.getElementById("button-rate");
let buttonDonate = document.getElementById("button-donate");
let buttonLearn = document.getElementById("learn-more-button");
let buttonNextPage = document.getElementById("next-page-button");

// add an event listener to each tab
tabSettings.addEventListener("click", () => {
    // disable previous active tabs and panels
    disablePreviousTabPanels();
    // enable the clicked tab and its panel
    tabSettings.classList.add("active");
    panelSettings.classList.add("active");
});

tabIssues.addEventListener("click", () => {
    disablePreviousTabPanels();
    tabIssues.classList.add("active");
    panelIssues.classList.add("active");
});

tabDonate.addEventListener("click", () => {
    disablePreviousTabPanels();
    tabDonate.classList.add("active");
    panelDonate.classList.add("active");
});

// disable all previously active tabs and panels
function disablePreviousTabPanels() {
    let active = document.querySelectorAll('.active');
    active.forEach((element) => {
        element.classList.remove("active");
    });
}

// set the text of the toggle button based on the state
function updateTogglebutton(enabled) {
    if (enabled) {
        // enabled message
        buttonToggle.textContent = 'Disable IframeTube'
    }

    else {
        // disabled message
        buttonToggle.textContent = 'Enable IframeTube'
    }
}

// init the toggle button state
chrome.storage.local.get("IframeTubeEnabled", (result) => {
    let enabled;
    // if the cookie does not exist, set it to true by default
    if (result.IframeTubeEnabled === undefined) {
        enabled = true;
        chrome.storage.local.set({ "IframeTubeEnabled": true });
    }
    // otherwise, use the stored value
    else {
        enabled = result.IframeTubeEnabled;
    }
    // update the button text
    updateTogglebutton(enabled);
});

// add event listeners to the buttons
buttonToggle.addEventListener("click", () => {
    // get the current state
    chrome.storage.local.get("IframeTubeEnabled", (result) => {
        let current;
        // if the cookie does not exist, fallback to true
        if (result.IframeTubeEnabled === undefined) {
            current = true;
        }
        // otherwise, use the stored value
        else if (result.IframeTubeEnabled === true) {
            current = true;
        }
        else {
            current = false;
        }

        // toggle the state (invert it)
        let newState = !current;

        // save the new state
        chrome.storage.local.set({ "IframeTubeEnabled": newState }, () => {
            // update the button text
            updateTogglebutton(newState);

            // show the reload icon
            let reloadIcon = document.getElementById("reload-icon");
            reloadIcon.style.display = "inline-block";

            // add an event listener to the reload icon
            reloadIcon.addEventListener('click', () => {
                // get all youtube tabs and reload them
                chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
                    tabs.forEach((tab) => {
                        chrome.tabs.reload(tab.id);
                        // focus the Youtube tab
                        chrome.tabs.update(tab.id, { active: true });
                    });
                });
                // hide the reload icon after being clicked
                reloadIcon.style.display = 'none'
            });
        });
    });
});

// opens the Chrome Web Store rate page
buttonRate.addEventListener("click", () => {
    window.open("chromewebstore.google.com/detail/iframetube-youtube-adbloc/popbfaalnmahdonefnbbogalimefpcnm/reviews", "_blank", "noopener,noreferrer");
});

// shows the learn more panel
buttonLearn.addEventListener("click", () => {
    tabSettings.classList.remove("active");
    panelSettings.classList.remove("active");
    panelLearn.classList.add("active");
});

// shows the next page in the learn more panel
buttonNextPage.addEventListener("click", () => {
    panelLearn.classList.remove("active");
    panelLearn2.classList.add("active");
});

// opens the donation page (Buy Me A Coffee)
buttonDonate.addEventListener("click", () => {
    window.open("https://www.buymeacoffee.com/iframetube", "_blank", "noopener,noreferrer");
});