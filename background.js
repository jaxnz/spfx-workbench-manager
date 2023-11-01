chrome.tabs.onActivated.addListener(tab => {
    getTab().then(url => {
        console.log(url);
        if (url.split('#')[0].endsWith('_layouts/15/workbench.aspx')) {
            chrome.scripting.executeScript({
                target: { tabId: tab.tabId, allFrames: true },
                files: ['./foreground.js'],
            }, );
        }
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        getTab().then(url => {
            if (url.split('#')[0].endsWith('_layouts/15/workbench.aspx')) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId, allFrames: true },
                    files: ['./foreground.js'],
                }, );
            }
        });
    }
});


async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].url;
}
