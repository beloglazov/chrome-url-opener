function saveOptions() {
    localStorage['urls'] = document.getElementById('urls').value.replace(/ /g, '').replace(/^\s*$[\n\r]{1,}/gm, '');
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