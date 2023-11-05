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
