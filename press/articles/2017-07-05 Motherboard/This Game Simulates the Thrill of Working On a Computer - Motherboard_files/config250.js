

/* CLIENTCONFIG build v1.0.15*/
!function (n, e) { "use strict"; var t = "1.0.15", o = "NOLBUNDLE", r = 0, a = { paramPrefix: "", maxRetries: 5 }, s = { defaultNSDKV: 600, defaultSfcode: "us", subdomain: "cdn-gl", domain: "imrworldwide.com", protocol: 0 === n.location.protocol.indexOf("http:") ? "http:" : "https:", sdkUrl: "{{protocol}}//{{subdomain}}.{{domain}}/novms/js/{{sdksubpath}}/nlsSDK{{nsdkv}}.bundle.min.js" }, i = { parseNOLParams: function (n) { var e = n.replace(/^[^\#]+\#?/, ""), t = {}; if (!e) return t; var o = new RegExp("&" + a.paramPrefix, "gi"), r = "<<nol_delimeter>>", s = r + a.paramPrefix; e = e.replace(o, s); for (var i = e.split(r), l = null, c = 0; c < i.length; c++) { l = i[c].indexOf("="); var u = unescape(i[c].substr(0, l)), d = unescape(i[c].substr(l + 1)); d = d.replace(/\+/g, " "), t[u.replace(a.paramPrefix, "")] = d } return t }, findScript: function (n) { if (document.currentScript) return document.currentScript.src; console && console.log && (console.log("Config", new Date), console.log("Config", new Date)); var e = document.getElementsByTagName("script"), t = []; if (e) for (var o = null, r = "", a = null, s = new RegExp(n + ".*?.js"), i = 0; i < e.length; i++) a = e[i], r = a && a.attributes && a.attributes.src ? a.attributes.src.value : "", (o = r.match(s)) && t.push(r); return t }, loadScript: function (e, t, o) { function r(e, t, o) { var r = n.document.createElement("script"); r.async = !0, r.setAttribute("data-jsonpid", name), r.src = e, r.onload = t, r.onerror = o; var a = n.document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(r, a) } function s(n) { i < a.maxRetries ? (i++, setTimeout(function () { console && console.warn && console.warn("Retry request # " + i), r(e, t, s) }, 2e3)) : (console && console.error && console.error("Unable to load script " + e), o && o()) } var i = 0; r(e, t, s) }, getGlobalsField: function (e, t, o) { if (t && o && n[e] && n[e].configs) { var r = n[e].configs[t]; if (r && r.nol_GLOBALS) return r.nol_GLOBALS[o] } return null } }, l = { setNamespace: function (e) { return n[e] = n[e] || { nlsQ: function (t, o, r, a, s, i) { return s = w.document, a = s.createElement("script"), a.async = 1, a.src = ("http:" === n.location.protocol ? "http:" : "https:") + "//cdn-gl.imrworldwide.com/conf/" + t + ".js#name=" + o + "&ns=" + e, i = s.getElementsByTagName("script")[0], i.parentNode.insertBefore(a, i), w[o] = w[o] || { g: r, ggPM: function (n, e, t, r, a) { (w[o].q = w[o].q || []).push([n, e, t, r, a]) } }, w[o] } } }, setConfig: function (n, e, t) { t.configs = t.configs || {}, t.configs[n] = t.configs[n] || e } }, c = { getInstanceGlobals: function (e, t, o) { for (var r = { apid: t, sfcode: i.getGlobalsField(e, t, "nol_sfcode") || s.defaultSfcode, nsdkv: i.getGlobalsField(e, t, "nol_nsdkv") || s.defaultNSDKV }, a = n[e][o.name] || n[o.name], l = a ? a.g : {}, c = Object.keys(l), u = 0; u < c.length; u++) void 0 !== l[c[u]] && null !== l[c[u]] && "" !== l[c[u]] && (r[c[u]] = l[c[u]]); var d = i.getGlobalsField(e, t, "nol_sdkDebug"); return d && (r.nol_sdkDebug = d), r }, isSDKReady: function (e) { var t = n[e]; return t && t.hasOwnProperty("isBuilt") && "function" == typeof t.isBuilt && t.isBuilt() }, loadSDK: function (t, o, r, a) { try { var l = c.getInstanceGlobals(a, o, r), u = function () { try { if (t && r && r.name) { var e = n[a].getInstance(r.name, !0); e && !e.initialized && e.ggInitialize(l) } } catch (n) { } }; if (c.isSDKReady(a)) u(); else { var d = (l && l.sdkUrl ? l.sdkUrl : s.sdkUrl).replace("{{protocol}}", s.protocol).replace("{{subdomain}}", r && r.subdomain ? r.subdomain : l && l.subdomain ? l.subdomain : s.subdomain).replace("{{domain}}", r && r.domain ? r.domain : l && l.domain ? l.domain : s.domain).replace("{{sdksubpath}}", "NOLSDK" === a ? "nolsdk" : "2").replace("{{nsdkv}}", (l ? l.nsdkv : "") || e.nol_GLOBALS.nol_nsdkv || s.defaultNSDKV); i.loadScript(d, u) } } catch (n) { } }, iterateInstances: function (n, e) { if (e) { var t = i.findScript(n); if ("string" == typeof t) e(n, i.parseNOLParams(t)); else for (var o = 0; o < t.length; o++) e(n, i.parseNOLParams(t[o])) } } }, u = e && e.nol_GLOBALS ? e.nol_GLOBALS.nol_appid : ""; try { u ? c.iterateInstances(u, function (t, r) { var a = r && r.ns ? n[r.ns][r.name] : null; if (a || (a = r && r.ns ? n[r.name] : null), a && !a.initialized) { var s = l.setNamespace(r && r.ns ? r.ns : o); l.setConfig(t, e, s), c.loadSDK(s, t, r, r && r.ns ? r.ns : o) } }) : console && console.warn && console.warn("Nielsen Log: Client config structure is invalid or corrupt.") } catch (n) { } }(
    window,
	{
		"nol_GLOBALS":{

			"nol_host":"p484z",
			"nol_dma":"",
			"nol_countryCode2":"",
			"nol_countryCode3":"",
            "nol_serverTime":"1499274014",
            "nol_devGroup":"",
            "nol_osver":"NA",
            "nol_clocksrc":"S",
            "nol_osGroup":"",
            "nol_platform":"",
			"nol_md5Seed":"N!3ls3nBL",
			"nol_sdkDelimiter":"_",
            "nol_vcid":"b99",
			"nol_appid":"config250",
            "nol_channelName":"defaultChannelName",
            "nol_fbver":"1",
			"nol_clientCMSmap":{"1":"nol_aggregate","nol_assetid":"assetid","nol_assetName":"(section)","nol_category":"(program)","nol_channelName":"channelName","nol_clientid":"clientid","nol_dpr":"tv","nol_length":"length","nol_tagSrc":"dataSrc","nol_title":"((<title>))","nol_vidtype":"type"}, 
			"nol_fbCountryCode":"",
			"nol_fbDmaDCR":"",
			"nol_linearAdLoadFlag":"0",
			"nol_tagSrc":"cms",
			"nol_gpsPrecision":"1000",
			"nol_intrvlThrshld":"90",
			"nol_chnlCountThrshld":"10",
			"nol_cacheBusterLmt":"1",
			"nol_id3IntrvlGp":"15",
			"nol_useragent":"NLSDK (|![nol_osver]!|,|![nol_devtypeid]!| BUILD/|![nol_sdkver]!|) |![nol_appid]!|/|![nol_appver]!|",	
			"nol_xorSeed":"cr055pltfrm",
			"nol_unQualSegmentValue":"5",
			"nol_clientid":"",
			"nol_playerId":"|![nol_playerId]!|",
			"nol_pageURL":"",
			"nol_dfltAppid":"NA",
			"nol_defReasonCode":"",
 		    "nol_assetName":"defChnAsset",
			"nol_bgTimeOut":"5",
			"nol_duration":"30",
			"nol_encryptDevId":"true",
			"nol_devTimeZone":"",
			"nol_SDKEncDevIdFlag":"true",
			"nol_suppress": "0",
			"nol_maxStaticInstances": "5",	
			"nol_pendingPingsLimit" :"8",
			"nol_pendingPingsDelay":"1",
			"nol_reqType":"0",
		
			

			"nol_customExtension":[
				"nol_dcrVideoCustom",			
				"nol_dcrStaticCustom"			
			],
			"nol_eventFilter":{
				"onCmsDetected":[
					{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "content,preroll,midroll,postroll,ad"},  "then":{"nol_disabled": "false"}, "else": {"nol_disabled": "true"}},
					{"tagVar":{"name":"nol_product","value":"dcrstatic"},"cond":["nol_vidtype"], "is":{"type":"+", "value":"static"}, "then":{"nol_disabled":"false"}, "else":{"nol_disabled":"true"}}
					
				],
				"onDcrCmsDetected":[
				                    {"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond": ["nol_ac"],  "is": {"type":"+","value": "static"},  "then":{"nol_disabled": "false"}, "else": {"nol_disabled": "true"}}
	            ],
				"onDcrDetected":{
					"dcrStatic":[
						{"tagVar":{"name":"nol_product","value":"dcrstatic"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "preroll,midroll,postroll,ad,content"},  "then":{"nol_disabled": "true"}, "else":{"nol_disabled":"false"}}
					],
					"dcrVideo":[
						{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "preroll,midroll,postroll,ad,content"},  "then":{"nol_disabled": "false"}, "else":{"nol_disabled":"true"}},
						{"tagVar":{"name":"nol_product","value":"dcrvideo"}, "cond": ["nol_vidtype"],  "is": {"type":"+","value": "postroll"},  "then":{"nol_minWonOverride": "1"}}
					]
				},
				"onViewWon":[
					{"tagVar":{"name":"nol_cadence", "value":"interval"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"S"}, "then":{"nol_segmentPrefix":"D"}},
					{"tagVar":{"name":"nol_cadence", "value":"interval"}, "cond":["nol_segmentPrefix"], "is":{"type":"+", "value":"D"}, "then":{"nol_at":"timer"}}
				]
			  },
			 
			"nol_tagMap":{
				"nol_product":["dcrstatic", "dcrvideo"], 
				"nol_cadence":["interval", "episode", "stream", "impression", "daypart", "appstart"],  
				
				"nol_defaults":{
					"nol_creditFlag":"1",
					"nol_creditValue":"30",
					"nol_segmentLength":"5",
					"nol_segmentValue":"60",
					"nol_maxLength":"1832",
					"nol_forward":"1",
					"nol_aggregate":"1",
					"nol_tsvFlag":"99",
					"nol_rt":"video",
					"nol_accessMethod":"0",
					"nol_breakout":"00",
					"nol_currSeg":"0",
					"nol_minWonOverride":"0",
					"nol_segmentA":"NA",
					"nol_segmentB":"NA",
					"nol_segmentC":"NA",
					"nol_placement":"NA",
					"nol_content":"NA",
					"nol_adLoadType":"2",
		            "nol_sfcode":"us",
		            "nol_prefProtocol":"https",
					"nol_isFullEpisode":"yes",
					"nol_sendTime":"0"
				},
				"nol_url":[
				"|!nol_prefProtocol!|://secure-|!nol_dcrsfcode!|.imrworldwide.com/cgi-bin/gn?prd=dcr&ci=|!nol_clientid!|&ch=|!nol_clientid+nol_sdkDelimiter+[nol_vcid]+nol_sdkDelimiter+nol_assetName!|&sessionId=|![(nol_userSessionId)]!|&asn=|!nol_assetName!|&prv=1&c6=vc,|![nol_vcid]!|&ca=|!nol_content!|&c13=asid,|![nol_dfltAppid]!|&c32=segA,|![nol_segmentA]!|&c33=segB,|![nol_segmentB]!|&c34=segC,|![nol_segmentC]!|&c15=apn,|![nol_apn]!|&sup=|![nol_suppress]!|&segment2=|![nol_dma]!|&segment1=|!([nol_countryCode3])!|&forward=|![nol_forward]!|&ad=|!nol_accessMethod!|&cr=|!nol_segmentPrefix!|&c9=devid,|![nol_deviceId]!|&enc=|!nol_encryptDevId!|&c1=nuid,|![nol_nuid||nol_playerId]!|&at=|!nol_at!|&rt=|!nol_rt!|&c16=sdkv,|![nol_sdkv]!|&c27=cln,|![nol_segmentTimeSpent]!|&crs=|![nol_appCrash]!|&lat=|![nol_latitude]!|&lon=|![nol_longitude]!|&c29=plid,|![nol_playerId]!|&c30=bldv,|![nol_bldv]!|&st=dcr&c7=osgrp,|![nol_osGroup]!|&c8=devgrp,|![nol_devGroup]!|&c10=plt,|!([nol_platform])!|&c40=adbid,|![nol_adobeId]!|&c14=osver,|![(nol_osver)]!|&c26=dmap,1&dd=|![nol_dataDate]!|&hrd=|![nol_hourCode]!|&wkd=|![nol_dayId]!|&c35=adrsid,|![nol_reportSuiteID]!|&c36=cref1,|![nol_crossRefID1]!|&c37=cref2,|![nol_crossRefID2]!|&c11=agg,|!nol_aggregate!|&c12=apv,&c51=adl,|![nol_adDuration]!|&c52=noad,|![nol_adCount]!|&devtypid=|![nol_devtypeid]!|&pc=NA|![nol_dcrStaticCustom]!|&si=|![(nol_pageURL)]!|&c62=sendTime,|![nol_sendTime]!|&c73=phtype,&c74=dvcnm,&df=|![nol_defReasonCode]!|",
				""
				
				]
			}
		},
		"nol_TAGS":[
		
		
						{
							"nol_comment":"DCR browser static view",
							"nol_product":"0",
							"nol_cadence":"3",
							"nol_defaults":{"nol_maxPingCount":"1", "nol_creditFlag":"0", "nol_segmentPrefix":"V", "nol_timer":"nol_pageoffset","nol_at":"view", "nol_tagPresence":"4","nol_rt": "text","nol_segmentTimeSpent":"0","nol_adDuration":"0","nol_adCount":"0"},
							"nol_url":"0"
						},

						{
							"nol_comment":"DCR browser static duration",
							"nol_product":"0",
							"nol_cadence":"0",
							"nol_defaults":{"nol_minWonOverride":"1","nol_creditFlag":"1","nol_segmentPrefix":"D","nol_timer":"nol_pageoffset","nol_at":"timer","nol_rt": "text", "nol_tagPresence":"4","nol_segmentLength":"30","nol_segmentTimeSpent":"0","nol_adDuration":"0","nol_adCount":"0"},	
							"nol_url":"0"
						},
						
						
		]
	}
	);		
