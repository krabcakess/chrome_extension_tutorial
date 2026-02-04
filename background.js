// Chrome listener that runs fucntion whenever a tab is updated
chrome.tabs.onUpdated.addListener((tabId, tab) => { // CHROME API

    // If tab has URL and includes "youtube.com/watch" phrase, run code inside
    if (tab.url && tab.url.includes("youtube.com/watch")) {

        // Get phrase after "?"
        const queryParameters = tab.url.split("?")[1];
        // Create a URLSearchParams object that eases URL parameter retrieval
        const urlParameters = new URLSearchParams(queryParameters);

        // Send message to contentScript
        chrome.tabs.sendMessage(tabId, { // CHROME API 
            type: "NEW",
            videoId: urlParameters.get("v")
        });
    };
});