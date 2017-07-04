/**
 * Async DFP
 *
 * Copyright 2014-2016 Gamer Network
 */

(function($, window, undefined) {

    $.fn.getDFPads = function(options) {

        // Default options
        var defaults = $.extend({
            dfp_instance: '43340684',
            dfp_id: 'data-dfp-id',
            dfp_sizes: 'data-dfp-sizes',
            dfp_ad_targeting: 'data-dfp-targeting',
            dfp_outofpage: 'data-dfp-outofpage',
            dfp_collapse: 'data-dfp-collapse',
            dfp_responsive: 'data-dfp-responsive',
            custom_variables: '',
            size_mappings: '',
            acceptable_ads_show: true,
            acceptable_ads_file: 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDLnryPQhABGAEoATIICS_YcvEHF-lA6c7RwQU',
            adblock_message: '',
            bottom_bar: false,
            trade: false,
            piiCheck: false,
            callback: function() {}
        }, options);

        var ads = $(this).filter(':visible');
        var get_ads = false;
        var openx_json = defaults.openx_json;

        var zones = [];
        var zone_groups = [];
        var tags = [];
        var rendered = 0;

        getDimensions = function($adUnit) {

            var dimensions = [],
                dimensionsData = $adUnit.data('dfp-sizes');
            if (dimensionsData) {

                var dimensionGroups = dimensionsData.split(',');

                $.each(dimensionGroups, function(k, v) {

                    var dimensionSet = v.split('x');
                    dimensions.push([parseInt(dimensionSet[0], 10), parseInt(dimensionSet[1], 10)]);

                });

            } else {

                dimensions.push([$adUnit.width(), $adUnit.height()]);

            }

            return dimensions;

        },

        loadDFP = function() {

            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';

            var useSSL = 'https:' === document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);

        },

        ghostAds = function() {
            $(document.body).addClass("blocked");
            if (defaults.adblock_message) {
                confirm(defaults.adblock_message);
            }

            // DFP audience pixel for Adblockers with acceptable ads turned on
            var axel = Math.random() + '';
            var a = axel * 10000000000000;
            $('body').append('<img src="//pubads.g.doubleclick.net/activity;dc_iu=/43340684/DFPAudiencePixel;ord=' + a + ';dc_seg=383836808?" width=1 height=1 border=0/>');

            if (typeof yafaIt == 'function') { 
                yafaIt(); 
            }

            defaults.callback.call(this);
        },

        urlToArray = function(url) {
            var request = {};
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
                if(!pairs[i])
                    continue;
                var pair = pairs[i].split('=');
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
             }
             return request;
        },

        isEmail = function(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },

        createAds = function() {

            urlArray = urlToArray(window.location.search);

            $.each(urlArray, function(k, v) {
                if(isEmail(v)) {
                    defaults.piiCheck = true;
                }
            });

            if(!defaults.piiCheck) {

                $(ads).each(function() {
                    if ($(this).css('display') == 'block' || $(this).css('display').indexOf('box') >= 0) {
                        var dfpId = $(this).attr(defaults.dfp_id);
                        var zoneId = $(this).attr('id');
                        
                        if($(this).data('dfp-sizes') == 'fluid') {
                            var dimensions = 'fluid';
                        } else {
                            var dimensions = getDimensions($(this));
                        }
                        
                        var ad_targeting = $(this).attr(defaults.dfp_ad_targeting);
                        var outofpage = $(this).attr(defaults.dfp_outofpage);
                        var collapse = $(this).attr(defaults.dfp_collapse);
                        var responsive = $(this).attr(defaults.dfp_responsive);
                        zones.push(zoneId);

                        // Spit out some useful stuff in the console
                        //console.log('\n***** Ad Slot Defined: ' + zoneId + ' *****');
                        //console.log('Dimensions: ' + dimensions);

                        // Define ad slot in DFP
                        window.googletag.cmd.push(function() {

                            if(outofpage) {
                                dfpSlot = window.googletag.defineOutOfPageSlot('/' + defaults.dfp_instance + '/' + dfpId, zoneId).addService(window.googletag.pubads());
                            } else {
                                dfpSlot = window.googletag.defineSlot('/' + defaults.dfp_instance + '/' + dfpId, dimensions, zoneId).addService(window.googletag.pubads());
                            }

                            // Ad slot specific targeting
                            if (ad_targeting) {
                                var targeting = [];

                                var targetingGroups = ad_targeting.split(',');

                                $.each(targetingGroups, function(k, v) {
                                    var targetingSet = v.split('=');
                                    //console.log('Slot Targeting: ' + targetingSet[0] + ' is ' + targetingSet[1]);
                                    dfpSlot.setTargeting(targetingSet[0], targetingSet[1]);
                                });
                            }

                            if (collapse == "true") {
                                dfpSlot.setCollapseEmptyDiv(true);
                            }

                            // Map responsive sizes
                            if (responsive && defaults.size_mappings[responsive]) {

                                var map = googletag.sizeMapping();
                                $.each(defaults.size_mappings[responsive], function (k, v) {
                                    map.addSize(v.viewport, v.ad_sizes);
                                });

                                dfpSlot.defineSizeMapping(map.build());

                            }

                        });
                    };
                });

            }

            //console.log('\n***** General DFP Settings *****');

            window.googletag.cmd.push(function() {

                window.googletag.pubads().enableSingleRequest();

                if (defaults.custom_variables) {

                    $.each(defaults.custom_variables, function(key, val) {
                        //console.log('Targeting Rule: ' + key + ' is ' + val);
                        window.googletag.pubads().setTargeting(key, val);
                    });

                }

                if(!defaults.custom_variables['url']) {
                    window.googletag.pubads().setTargeting('url', window.location.pathname.substring(0, 40));
                }

                window.googletag.pubads().addEventListener('slotRenderEnded', function(event) {

                    rendered++;

                });

                window.googletag.enableServices();

            });

        },

        displayAds = function() {

            $.each(zones, function(key, val) {
                window.googletag.cmd.push(function() {
                    window.googletag.display(val);
                });
            });
            defaults.callback.call(this);

        },

        displayBottomBar = function() {
            $.getJSON("//cdn.gamer-network.net/2015/plugins/bottom_bar/bar.json?v=1.2", function(data){

                var bottomBarStyles = document.createElement('link');
                bottomBarStyles.setAttribute("rel", "stylesheet");
                bottomBarStyles.setAttribute("href", "//images.eurogamer.net/2015/plugins/bottom_bar/bar.css?v=1");
                bottomBarStyles.setAttribute("type", "text/css");
                bottomBarStyles.setAttribute("media", "screen");
                document.getElementsByTagName('head')[0].appendChild(bottomBarStyles);
        
        if(defaults.trade)
        {
            var notifText = data["trade_text"];
        }
        else
        {
            var notifText = data["bar_text"];
        }
        
                var buttonText = data["button_text"];
                var logo = data["logo"];
                  var ctaLink = data["cta_link"];

                var bottomBar = document.createElement('div');
                bottomBar.setAttribute("class", "notif-bar");

                var contentContainer = document.createElement('div');
                contentContainer.setAttribute("class", "content-container");

                var iconLogo = document.createElement('img');
                iconLogo.src = logo;
                iconLogo.setAttribute("class", "logo");

                var textContent = document.createElement('div');
                textContent.setAttribute("class", "text-content");
                textContent.appendChild(document.createTextNode(notifText));

                var rightBlock = document.createElement('div');
                rightBlock.setAttribute("class", "right-block");

                var ctaButtonAnchor = document.createElement('a');
                ctaButtonAnchor.setAttribute("href", ctaLink);
                ctaButtonAnchor.setAttribute("target", "_blank");

                var ctaButton = document.createElement('div');
                ctaButton.setAttribute("class", "cta-button");
                ctaButton.appendChild(document.createTextNode(buttonText));

                var closeButton = document.createElement('img');
                closeButton.setAttribute("src", "//cdn.gamer-network.net/2015/plugins/egx/tickets/close.jpg");
                closeButton.setAttribute("class", "close-button");

                ctaButtonAnchor.appendChild(ctaButton);

                rightBlock.appendChild(ctaButtonAnchor);
                rightBlock.appendChild(closeButton);

                contentContainer.appendChild(iconLogo);
                contentContainer.appendChild(textContent);
                contentContainer.appendChild(rightBlock);

                bottomBar.appendChild(contentContainer);

                document.getElementsByTagName('body')[0].appendChild(bottomBar);

                closeButton.addEventListener("click", function(){document.getElementsByTagName('body')[0].removeChild(bottomBar); setBottomBarCookie("bottombar", "closed", 30);});

            });
        },

        setBottomBarCookie = function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
        },

        loadDFP();

        if (defaults.acceptable_ads_show) {

            var block_script = document.createElement('script');
            block_script.onload = function() {
                createAds();
                displayAds();
            };
            block_script.onerror = function() {
                document.body.classList.add('scriptblocked');
                ghostAds();
            };
            block_script.src = "https://c.amazon-adsystem.com/aax2/apstag.js";
            document.getElementsByTagName('head')[0].appendChild(block_script);

            //checkImage("https://images.eurogamer.net/2017/takeovers/fu-1.jpg", 
            //     function(){
            //         createAds();
            //         displayAds();
            //     }, 
            //     function(){ 
            //         ghostAds();
            //     }
            // );

        } else {

            createAds();
            displayAds();

        }

        if(defaults.bottom_bar)
        {
            if (document.cookie.indexOf("bottombar") == -1)
            {
        if($(window).width() > 1025)
        {
            displayBottomBar();
        }
            }
        }

    },

    checkImage = function(imageSrc, dfp, adblock) {
        var img = new Image();
        img.onload = dfp; 
        img.onerror = adblock;
        img.src = imageSrc;
    }

})(window.jQuery, window);
