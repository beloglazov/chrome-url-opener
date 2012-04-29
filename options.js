function formatUrl(url) {
    if (url.substring(0, 7) != 'http://' && url.substring(0, 8) != 'https://') {
	url = 'http://' + url;
    }
    return url;
}

function saveOptions() {
    var urls = document.getElementById('urls').value.split('\n');
    var urlsFormatted = '';
    for (i=0; i<urls.length; i++) {
	if (urls[i].length > 0) {
	    urlsFormatted += formatUrl(urls[i].replace(/ /g, '')) + '\n';	    
	}
    }
    document.getElementById('urls').value = urlsFormatted;
    localStorage['urls'] = urlsFormatted;
    document.getElementById('status').innerHTML = 'Saved!';
    setTimeout(function() {
	document.getElementById('status').innerHTML = '';
    }, 1500);
}

function init() {
    document.getElementById('save').addEventListener('click', saveOptions);
    var urls = localStorage['urls'];
    if (!urls) {
	return;
    }
    document.getElementById('urls').value = urls;
}

document.addEventListener('DOMContentLoaded', init);
