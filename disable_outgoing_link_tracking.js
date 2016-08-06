
/* 
Disable Reddit's ability to track which out-going links are clicked.

Methods
1. Change expiration time of outbound links.
2. Replace outbound URL with the real URL.
*/

var anchors = document.getElementsByTagName("a");

for (i=0;i<anchors.length;i++) {
	var thisAnchor = anchors[i];

	thisAnchor.dataset.outboundExpiration = 1337; 

	if (thisAnchor.getAttribute("data-outbound-url") && thisAnchor.getAttribute("data-href-url")) {
		thisAnchor.setAttribute("data-outbound-url", thisAnchor.getAttribute("data-href-url"));
	}

}

