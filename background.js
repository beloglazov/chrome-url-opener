function openUrls() {
    var urls = localStorage['urls'].split('\n');
    for (i=0; i<urls.length; i++) {
	if (urls[i].length > 0) {
	    chrome.tabs.create({url: urls[i]});
	}
    }
}

chrome.browserAction.onClicked.addListener(openUrls);