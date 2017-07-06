if (typeof Georiot == 'undefined') //The shield to avoid running the code twice
{
    var Georiot = Georiot || {};

    var Genius = Genius || {};

    Georiot.getLinkType = function (currentLinkHref) {
        var appleRegex = /search.itunes.apple.com|itunes.apple.com\/\S+id[0-9]+/i;
        var tradeDoublerRegex = /clk[uk]*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F]*\itunes\.apple\.com/i;
        var linkshareRegex = /click\.linksynergy\.com\S*?\S*RD_PARM1=[https%3A%2F%2F|https%253A%252F%252F|http%253A%252F%252F|http%3A%2F%2F]*\itunes\.apple\.com/i;
        var dgmPerfRegex = /t.dgm-au.c\S+\?+\S*u=[https%3A%2F%2F|http%3A%2F%2F|https%253A%252F%252F|http%253A%252F%252F]*\itunes\.apple\.com/i;
        var amazonRegex = /^amazon\.|^amzn\.com|^amzn\.co\.uk|^amzn\.to|^smile.amazon\./;
        var amazonLocalRegex = /local\.amazon\./;
        var googleRegex = /^google\.prf\.hn|^play\.google\.com/;
        var microsoftStoreRegex = /clk.*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F].*microsoftstore\.com/i;
        var microsoftStoreRegex2 = /microsoftstore.com/i;
        var microsoftOnlineRegex = /clk.*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F].*microsoft\.com.*/i;
        var microsoftOnlineRegex2 = /microsoft.com\/.*\/store\/.*/i;

        if (currentLinkHref.indexOf("target.georiot.com") > 0 || currentLinkHref.indexOf("geni.us") > 0) {
            return "unknown";
        }

        var cleanprep = currentLinkHref.toLowerCase().replace("https://", "").replace("http://", "").replace("www.", "");
        if (appleRegex.test(currentLinkHref)) return "apple";
        else if (tradeDoublerRegex.test(currentLinkHref)) return "tradedoubler";
        else if (linkshareRegex.test(currentLinkHref)) return "linkshare";
        else if (dgmPerfRegex.test(currentLinkHref)) return "dgmperf";
        else if (amazonRegex.test(cleanprep) && !amazonLocalRegex.test(cleanprep)) return "amazon";
        else if (googleRegex.test(cleanprep)) return "google";
        else if (microsoftStoreRegex.test(cleanprep)) return "microsoft";
        else if (microsoftStoreRegex2.test(cleanprep)) return "microsoft";
        else if (microsoftOnlineRegex.test(cleanprep)) return "microsoft";
        else if (microsoftOnlineRegex2.test(cleanprep)) return "microsoft";
        else return "unknown";
    };

    Georiot.extractItunesLinkFromAffiliateUrl = function (currentLink, linkType) {
        if (currentLink.href.indexOf("?") > 0) {
            var arrParams = currentLink.href.split("?");
            var arrURLParams = arrParams[1].split("&");
            var arrParamNames = new Array(arrURLParams.length);
            var arrParamValues = new Array(arrURLParams.length);
            var i = 0;
            for (i = 0; i < arrURLParams.length; i++) {
                var sParam = arrURLParams[i].split("=");
                arrParamNames[i] = sParam[0];
                if (sParam[1] != "") {
                    arrParamValues[i] = sParam[1];

                    if (linkType == "tradedoubler" && arrParamNames[i] == "url") {
                        return arrParamValues[i];
                    } else if (linkType == "linkshare" && arrParamNames[i] == "RD_PARM1") {
                        return arrParamValues[i];
                    } else if (linkType == "dgmperf" && arrParamNames[i] == "u") {
                        return arrParamValues[i];
                    }
                } else arrParamValues[i] = "";
            }
        }
        return "";
    };

    Georiot.baseDomain = "//buy.geni.us";

    Georiot.amazon = {
        convertLinks: function(tsid, passDTB, domain) {
            Georiot.amazon.convertToGeoRiotLinks(tsid, passDTB, domain);
        },
        convertToGeoRiotLinks: function (tsid, passDTB, domain) {

            if (Georiot.utility.isThrive()) {
                return;
            }

            if (typeof domain === 'undefined') {
                 domain = Georiot.baseDomain;
            }
            //Optional params javascript
            if (passDTB == false || passDTB == true) {
            }
            else {
                passDTB = false;
            }

            var numberOfLinks = document.links.length;
            var currentLinkIndex = 0;            
            for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
                var currentLink = document.links[currentLinkIndex];
                if (currentLink.hasAttribute('georiot-ignore') && currentLink.getAttribute('georiot-ignore') == 'true')
                {
                  
                } else
                {
                  
                    var linkType = Georiot.getLinkType(currentLink.href);

                    if (linkType == "amazon") {
                        if (passDTB) {
                            currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href) + "&dtb=1";
                        }
                        else {
                            currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
                        }
                    } else continue;
                }
            }
        }
    };

    Georiot.utility = {
        scriptIncluded: function (src) {
            var scripts = document.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++)
                if (scripts[i].getAttribute('src') == src) return true;
            return false;
        },

        isThrive: function() {
            return window.location.search.indexOf('tve=true') > -1;
        }
    };

    Georiot.snippet = {
        convertLinks: function (tsid, passDTB, domain) {
            Georiot.snippet.convertToGeoRiotLinks(tsid, passDTB, domain);
        },
        convertToGeoRiotLinks: function (tsid, passDTB, domain) {

            if (typeof domain === 'undefined') {
                domain = Georiot.baseDomain;
            }
            //Optional params javascript
            if (passDTB == false || passDTB == true)
            {
            }
            else
            {
                passDTB = false;
            }

            var numberOfLinks = document.links.length;
            var currentLinkIndex = 0;

            for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
                var currentLink = document.links[currentLinkIndex];
                if (currentLink.hasAttribute('georiot-ignore') && currentLink.getAttribute('georiot-ignore') == 'true')
                {
                  
                } else
                {
                    var linkType = Georiot.getLinkType(currentLink.href);

                    if (linkType == "apple" || linkType == "amazon") {
                        if (passDTB)
                        {
                            currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href) + "&dtb=1";
                        }
                        else
                        {
                            currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
                        }
                    } else if (linkType == "linkshare" || linkType == "tradedoubler" || linkType == "dgmperf") {
                        var itunesUrl = Georiot.extractItunesLinkFromAffiliateUrl(currentLink, linkType);

                        if (itunesUrl != "") {
                            currentLink.href = domain +"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + itunesUrl;
                        }
                    } else continue;
                }
            }
        }
    };

    Georiot.itunes = {
        convertLinks: function (tsid, passDTB, domain) {
            Georiot.itunes.convertToGeoRiotLinks(tsid, passDTB, domain);
        },
        convertToGeoRiotLinks: function (tsid, passDTB, domain) {

           //Always false since we will never use it for itunes only leaving it so call is consistent with what is already shipped.
            passDTB = false;
            if (Georiot.utility.isThrive()) {
                return;
            }


            if (typeof domain === 'undefined') {
                domain = Georiot.baseDomain;
            }

            var numberOfLinks = document.links.length;
            var currentLinkIndex = 0;

            for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
                var currentLink = document.links[currentLinkIndex];
                if (currentLink.hasAttribute('georiot-ignore') && currentLink.getAttribute('georiot-ignore') == 'true')
                {
                  
                } else
                {
                    
                    var linkType = Georiot.getLinkType(currentLink.href);

                    if (linkType == "apple") {
                       currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
                        
                    } else if (linkType == "linkshare" || linkType == "tradedoubler" || linkType == "dgmperf") {
                        var itunesUrl = Georiot.extractItunesLinkFromAffiliateUrl(currentLink, linkType);

                        if (itunesUrl != "") {
                            currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + itunesUrl;
                        }
                    } else continue;
                }
            }
        }
    };

    Georiot.google = {
        convertLinks: function (tsid, domain) {
            Georiot.google.convertToGeoRiotLinks(tsid, domain);
        },
        convertToGeoRiotLinks: function (tsid, domain) {

            if (Georiot.utility.isThrive()) {
                return;
            }

            if (typeof domain === 'undefined') {
                domain = Georiot.baseDomain;
            }

            var numberOfLinks = document.links.length;
            var currentLinkIndex = 0;

            for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
                var currentLink = document.links[currentLinkIndex];
                if (currentLink.hasAttribute('georiot-ignore') && currentLink.getAttribute('georiot-ignore') == 'true') {

                } else {

                    var linkType = Georiot.getLinkType(currentLink.href);

                    if (linkType == "google") {
                        currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
                    } else continue;
                }
            }
        }
    };

    Georiot.microsoft = {
        convertLinks: function (tsid, domain) {
            Georiot.microsoft.convertToGeoRiotLinks(tsid, domain);
        },
        convertToGeoRiotLinks: function (tsid, domain) {

            if (Georiot.utility.isThrive()) {
                return;
            }

            if (typeof domain === 'undefined') {
                domain = Georiot.baseDomain;
            }

            var numberOfLinks = document.links.length;
            var currentLinkIndex = 0;

            for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
                var currentLink = document.links[currentLinkIndex];
                if (currentLink.hasAttribute('georiot-ignore') && currentLink.getAttribute('georiot-ignore') == 'true') {

                } else {

                    var linkType = Georiot.getLinkType(currentLink.href);

                    if (linkType == "microsoft") {
                        currentLink.href = domain+"/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
                    } else continue;
                }
            }
        }
    };

    Genius.amazon = Georiot.amazon;

    Genius.snippet = Georiot.snippet;

    Genius.itunes = Georiot.itunes;

    Genius.google = Georiot.google;

    Genius.microsoft = Georiot.microsoft;

    /*******************Compatibility section *****************************/
    /*This functions are floating here 
for compatability purposes with the amazon 
link engine plugin Once a new version of the plugin is out kill them with fire*/

    function convertToGeoRiotLinks(tsid) {
        var numberOfLinks = document.links.length;
        var currentLinkIndex = 0;

        for (currentLinkIndex = 0; currentLinkIndex < numberOfLinks; currentLinkIndex++) {
            var currentLink = document.links[currentLinkIndex];
            var linkType = getLinkType(currentLink.href);

            if (linkType == "amazon") {
                currentLink.href = "http://target.georiot.com/Proxy.ashx?TSID=" + tsid + "&GR_URL=" + encodeURIComponent(currentLink.href);
            } else continue;
        }
    }

    function extractItunesLinkFromAffiliateUrl(currentLink, linkType) {
        if (currentLink.href.indexOf("?") > 0) {
            var arrParams = currentLink.href.split("?");
            var arrURLParams = arrParams[1].split("&");
            var arrParamNames = new Array(arrURLParams.length);
            var arrParamValues = new Array(arrURLParams.length);
            var i = 0;
            for (i = 0; i < arrURLParams.length; i++) {
                var sParam = arrURLParams[i].split("=");
                arrParamNames[i] = sParam[0];
                if (sParam[1] != "") {
                    arrParamValues[i] = sParam[1];
                } else arrParamValues[i] = "";
            }
        }
        return "";
    }

    /* Returns link type: unknown, amazon
     */
    function getLinkType(currentLinkHref) {
        var amazonRegex = /\.amazon\./;
        var amazonLocalRegex = /local\.amazon\./;

        if (currentLinkHref.indexOf("target.georiot.com") > 0 || currentLinkHref.indexOf("geni.us") > 0) {
            return "unknown";
        }


        if (amazonRegex.test(currentLinkHref) && !amazonLocalRegex.test(currentLinkHref)) return "amazon";
        else return "unknown";
    }



    /*******************Compatibility section *****************************/
    /*********************---END---*******************************/

    /* Example usage
    
    $(document).ready(function () {
         // READ THIS!!
    // START OF REQUIRED CHANGES
    // you MUST change this value to one for your georiot account TSIDs
    var tsid = 2053;
    // If you want to convert ONLY Amazon links, remove "//" from the line below:
    // Georiot.amazon.convertToGeoRiotLinks(tsid)

    // If you want to convert ONLY iTunes links, remove "//" from the line below:
    // Georiot.itunes.convertToGeoRiotLinks(tsid)

    // If you want to convert BOTH iTunes and Amazon links, remove "//" from the link below:
    // Georiot.snippet.convertToGeoRiotLinks(tsid)

    // If you want to convert ONLY Google Play links, remove "//" from the line below:
    // Georiot.google.convertToGeoRiotLinks(tsid)

    // If you want to convert ONLY Microsoft links, remove "//" from the line below:
    // Georiot.microsoft.convertToGeoRiotLinks(tsid)

    // If you DO NOT want to override the base country's affiliate parameter, remove "//" from the line below:
    // Georiot.snippet.convertToGeoRiotLinks(tsid, true);

    // If you are using a custom Domain you can pass and extra parameter with it
      // Georiot.microsoft.convertToGeoRiotLinks(tsid, false, "http://customdomain.com")
    // END OF REQUIRED CHANGES
    // DO NOT MODIFY BELOW THIS LINE
 
     });*/

}