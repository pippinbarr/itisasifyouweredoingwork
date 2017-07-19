var sharethefacts_scanned = false;

// Borrowed from http://www.html5rocks.com/en/tutorials/cors/
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

sharethefacts_replaceElement = function(element, uuid){
	var xhttp = createCORSRequest("GET", "https://dhpikd1t89arn.cloudfront.net/html-"+uuid+".html", true);
	xhttp.onload = function() {
	  if (xhttp.readyState == 4 && xhttp.status == 200) {
	    var embed_element = document.createElement('div');
	    embed_element.innerHTML = xhttp.responseText;
	    element.parentElement.replaceChild(embed_element, element);

	  	var e = document.createElement('script');
		  e.src = 'https://dhpikd1t89arn.cloudfront.net/js/sharethefacts-embed.js';
  		//e.src = '/js/sharethefacts-embed.js';
	  	e.async = true;
		  embed_element.appendChild(e);
	  }
	};
	xhttp.send();
};

sharethefacts_add_oembed_discovery = function(uuid){
	link=document.createElement('link');
	link.type='text/json+oembed';
	link.rel='alternate';
	link.href='https://www.sharethefacts.co/services/oembed?uuid=' + uuid;
	document.getElementsByTagName('head')[0].appendChild(link);
}

sharethefacts_locateLinks = function(){
	var list = document.getElementsByTagName("a");

	for(i = 0; i < list.length; i++){
		var link = list[i];    
		var href = link.href
		var search_string = 'sharethefacts.co/share/'
		var index_of_uuid = href.lastIndexOf(search_string);
		if(index_of_uuid !== -1){      	
			uuid = href.substring(index_of_uuid + search_string.length, href.length);
			sharethefacts_replaceElement(link, uuid);
			sharethefacts_add_oembed_discovery(uuid);
		}
	}
}

sharethefacts_locatemicrodata_embed = function(){
	var elements = [];
	
	var element_by_id = document.getElementById("sharethefacts_microdata_embed");
	if(element_by_id){
		elements.push(element_by_id);
	}

	var elements_by_class = document.getElementsByClassName("sharethefacts_microdata_embed");
	for(var i = 0; i < elements_by_class.length; i++){
		elements.push(elements_by_class[i]);
	}

	for(var i = 0; i < elements.length; i++){
		var element = elements[i];
		var uuid = element.getAttribute("data-sharethefacts-uuid")
		if(uuid){
			sharethefacts_replaceElement(element, uuid);
			sharethefacts_add_oembed_discovery(uuid);
		}
	}
}

sharethefacts_embed = function(){
  if(!sharethefacts_scanned){
    sharethefacts_scanned = true;
		sharethefacts_locatemicrodata_embed();
  	sharethefacts_locateLinks();
  }
}

document.onreadystatechange = function(){
  if(document.readyState == "interactive") {
    sharethefacts_embed();
  }
}  