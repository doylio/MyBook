//Constants
const mobile = window.location.href.search("m.facebook.com") > -1;


function removeNewsfeed() {
	if(mobile) {
		document.querySelector("#m_newsfeed_stream").remove();
	} else {
		document.querySelector("#stream_pagelet").lastElementChild.remove();	
	}
}

function removePostWindow() {
	if(mobile) {
		document.querySelector("#MComposer").remove();
	} else {
		document.querySelector("#pagelet_composer").remove();
		document.querySelector("#timeline_composer_container").remove();
	}
}

window.onload = function() {
	removePostWindow();
}
