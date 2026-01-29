// Escapes the sandbox by injecting a script into the page context
let script = document.createElement('script');
script.src = chrome.runtime.getURL('embed/proxy.js');
// immediately append the script
document.documentElement.appendChild(script);