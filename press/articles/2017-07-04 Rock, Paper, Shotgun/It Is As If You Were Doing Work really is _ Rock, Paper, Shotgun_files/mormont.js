window['mormontConfig'] = {
  "endpoint": "//mormont.gamer-network.net/api/measurement/v2/register_pageview",
};
// The pageview that we are setting up
window['mormontPageview'] = {
  "url": window.location.hostname + window.location.pathname,
};
if (document.referrer) {
  window['mormontPageview']['referrer_url'] = document.referrer;
}

/*
 * Set a mormont multi-value field, given a key and a value.
 */
function setMormontMultiValue(key, value) {
  var valueConcat = value.join('||');
  window['mormontPageview'][key] = valueConcat;
}

/*
 * Get an encoded querystring representing this assoc array.
 */
function getQuerystring(obj) {
  var str = [];
  for(var p in obj)
  if (obj.hasOwnProperty(p)) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
  return str.join("&");
}

/*
 * Send the pageview to the analytics API.
 */
function sendPageview() {
  var track = new Image();
  var params = getQuerystring(window['mormontPageview']);
  var url = window['mormontConfig']['endpoint'] + '?' + params;
  // Asynchronously call our URL by setting the image src
  track.src = url;
}

/*
 * Single point of manipulation of mormont analytics.
 *
 * Usage:
 *  mormont('set', 'language', 'en'); // set a dimension on the pageview
 *  mormont('configure', 'endpoint', '// path.to.endpoint/api/url'); //configure moromont.js
 *  mormont('send', 'pageview'); // trigger a send of the pageview
 *
 */
function mormont(action, key, value) {
  if (action == 'set') {
    switch (key) {
      case "platforms":
        setMormontMultiValue("platforms", value);
        break;
      case "tags":
        setMormontMultiValue("tags", value);
        break;
      default:
        window['mormontPageview'][key] = value;
    }
  }
  if (action == 'configure') {
    window['mormontConfig'][key] = value;
  }
  if (action == 'send' && key == 'pageview') {
    sendPageview();
  }
}
