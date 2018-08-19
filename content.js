


	window.addEventListener('load', function () {

function(){
	chrome.tabs.query({'active': true}, function(tabs) {
		if(tabs.url=="http://www.google.com")
    chrome.tabs.update(tabs[0].id, {url: "http://www.facebook.com"});
 console.log(tabs);
});}


}, false);
	console.log("check");