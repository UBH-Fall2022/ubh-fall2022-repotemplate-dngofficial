chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log("started")

        chrome.storage.sync.get(['customfilterarray'], function(result) {
            {
                console.log("master array: " + results.key)
            }

        });

    }
  });
  