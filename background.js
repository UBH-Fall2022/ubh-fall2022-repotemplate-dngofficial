// background.js

async function myBackgroundFunction(message) {
    var url = "https://youtubefetch.onrender.com/url";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userUrl: message }),
        });
        console.log(response);
        const data_1 = await response.json();
        console.log(data_1);
        return data_1;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name === "content-script");

    // Listen for messages from the content script
    port.onMessage.addListener(function (msg) {
        if (msg.action === "callBackgroundFunction") {
            myBackgroundFunction(msg.message)
                .then((result) => {
                    console.log("Result from myBackgroundFunction:", result);
                })
                .catch((error) => {
                    console.error("Error in myBackgroundFunction:", error);
                });
        }
    });
});
// chrome.runtime.onInstalled.addListener(function () {
//     console.log("STARTED")
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var activeTab = tabs[0];
//         var tabUrl = activeTab.url;

//         console.log("Active tab URL:", tabs);

//         // Add your initialization logic here, using the tabUrl if needed
//     });
// })
chrome.tabs.onActivated.addListener(function (activeInfo) {
    // Get the URL of the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var url = tabs[0].url;

        // Store the URL in a variable or object
        url = url.split("=")[1]
        if (url.includes("&")) {
            url = url.split("&")[0]
        }
        var videoId = url
        console.log(videoId)
        url = "https://youtubefetch.onrender.com/url"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userUrl: videoId }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    });
});