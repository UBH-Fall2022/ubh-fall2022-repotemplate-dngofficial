// content.js

// Establish a connection with the background script
var port = chrome.runtime.connect({ name: "content-script" });

// Send a message to the background script to call the function
port.postMessage({ action: "callBackgroundFunction", message: videoId });
