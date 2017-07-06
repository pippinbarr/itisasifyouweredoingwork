(function() {
	"use strict";
	var SKTG = {
		noisey: 'RedCont/KulturUndFreizeit/Musik/vice.com',
		alps: {
			static: {
				fallback: 'RedCont/Nachrichten/Nachrichtenueberblick/vice.com',
				home: 'RedCont/Homepage/Homepage/vice.com',
				about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com',
				jobs: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com',
				shop: 'Ecommerce/OnlineShop/Shopueberblick/vice.com',
				contests: 'UnterhaltungGames/Games/Gewinnspiele/vice.com'
			},
			categories: {
				videos: 'RedCont/Nachrichten/Nachrichtenueberblick/vice.com',
				news: 'RedCont/Nachrichten/Nachrichtenueberblick/vice.com',
				music: 'RedCont/KulturUndFreizeit/Musik/vice.com',
				fashion: 'RedCont/Lifestyle/Mode/vice.com',
				photos: 'RedCont/Nachrichten/Nachrichtenueberblick/vice.com',
				travel: 'RedCont/Reisen/Reiseueberblick/vice.com',
				tech: 'RedCont/ComputerUndTechnik/ComputerUndTechnikUeberblick/vice.com',
				magazine: 'RedCont/Lifestyle/LifestyleUeberblick/vice.com',
				nsfw: 'RedCont/Lifestyle/LifestyleUeberblick/vice.com',
				dnd: 'RedCont/Lifestyle/LifestyleUeberblick/vice.com'
			}
		},
		motherboard: {
			static: {
				home: 'RedCont/ComputerUndTechnik/ComputerUndTechnikUeberblick/vice.com',
				videos: 'RedCont/ComputerUndTechnik/ComputerUndTechnikUeberblick/vice.com'
			},
			categories: {
				videos: 'RedCont/ComputerUndTechnik/ComputerUndTechnikUeberblick/vice.com',
				maschinen: 'RedCont/ComputerUndTechnik/technologischeEntwicklungen/vice.com',
				politik: 'RedCont/ComputerUndTechnik/Sonstiges/vice.com',
				zukunft: 'RedCont/ComputerUndTechnik/technologischeEntwicklungen/vice.com',
				natur: 'RedCont/ComputerUndTechnik/Sonstiges/vice.com',
				kultur: 'RedCont/ComputerUndTechnik/Sonstiges/vice.com',
				entdeckungen: 'RedCont/ComputerUndTechnik/ComputerUndTechnikUeberblick/vice.com'
			}
		},
		news: {
			all: 'RedCont/Nachrichten/Nachrichtenueberblick/vice.com',
			about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
		},
		munchies: {
			all: 'RedCont/Lifestyle/EssenUndtrinken/vice.com',
			about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
		},
		fightland: {
			all: 'RedCont/Sport/SportUeberblick/vice.com',
			about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
		},
		tcp: {
			all: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
			about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
		},
		thump: {
			all: 'RedCont/KulturUndfreizeit/Musik/vice.com',
			about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
		},
		id: {
			static: {
				home: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
				videos: 'RedCont/KulturUndfreizeit/FilmUndKino/vice.com',
				about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
			},
			categories: {
				fashion: 'RedCont/Lifestyle/Mode/vice.com',
				musik: 'RedCont/KulturUndfreizeit/Musik/vice.com',
				kultur: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
				news: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
				meinung: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
				id35: 'RedCont/KulturUndfreizeit/KulturUeberblick/vice.com',
				coverarchive: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
			}
		},
		sports: {
			static: {
				home: 'RedCont/Sport/SportUeberblick/vice.com',
				about: 'Service/Unternehmenskomunikation/Unternehmenskomunikation/vice.com'
			},
			categories: {
				action: 'RedCont/Sport/SportUeberblick/vice.com',
				baseball: 'RedCont/Sport/USsport/vice.com',
				basketball: 'RedCont/Sport/Basketball/vice.com',
				football: 'RedCont/Sport/USsport/vice.com',
				hockey: 'RedCont/Sport/Eishockey/vice.com',
				soccer: 'RedCont/Sport/Fussball/vice.com',
				collegesports: 'RedCont/Sport/USsport/vice.com',
				moresports: 'RedCont/Sport/SportUeberblick/vice.com'
			}
		},
		amuse: {
			static: {
				all: 'RedCont/Lifestyle/LifestyleUeberblick/vice.com'
			}
		},
		broadly: {
			static: {
				all: 'RedCont/Lifestyle/LifestyleUeberblick/vice.com'
			}
		}
	};
	var countryCodeUrl = window.location.protocol + "//geoip-lookup.vice.com/lookup/countrycode";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", countryCodeUrl, true);
	xhr.onload = function( /* e */ ) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				
				if (response.data.country.code === 'AT') {
					determineSite();
				} else if(response.data.country.code === 'CH'){
					createWEMFBox();
				}
			}
		}
	};
	
	xhr.send(null);
	
	function createWEMFBox() {
		if (isSmallScreen()) {
			window.szmopt={mobile:true};
		}
		
		window.NETMX = window.location.protocol + "//vice" + (window.location.protocol == 'https:' ? '-ssl' : '') + ".wemfbox.ch/cgi-bin/ivw/CP";
		
		var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		var img = document.createElement('img');
		var survey = document.createElement('script');
		
		window.szmvars="vice//CP//";
		
		// construct image src
		var imageSrc = window.NETMX + "?r=" + encodeURI(document.referrer) + "&d=" + (Math.random() * 100000) + "&x=" + screenWidth + "x" + screenHeight;
		
		// set image src and insert into body
		img.setAttribute('src', imageSrc);
		img.setAttribute('width', 1);
		img.setAttribute('height', 1);
		
		document.body.appendChild(img);
		
		// construct survey src
		var surveySrc = window.location.protocol + "//vice" + (window.location.protocol == 'https:' ? '-ssl' : '') + ".wemfbox.ch/2004/01/survey.js";
		
		// set survey src and insert into body
		survey.setAttribute('src', surveySrc);
		document.body.appendChild(survey);	
	};

	function determineSite() {
		var href = window.location.href;
		switch (true) {
			case href.indexOf('www.vice.com') !== -1 || href.indexOf('www.vice.cn') !== -1 || href.indexOf('jp.vice.com') !== -1:
				determineAlpsPath();
				break;
			case href.indexOf('noisey.vice.com') !== -1:
				determineNoiseyPath();
				break;
			case href.indexOf('motherboard.vice.com') !== -1:
				determineMotherboardPath();
				break;
			case href.indexOf('news.vice.com') !== -1:
				determineNewsPath();
				break;
			case href.indexOf('munchies.vice.com') !== -1:
				determineMunchiesPath();
				break;
			case href.indexOf('fightland.vice.com') !== -1:
				determineFightlandPath();
				break;
			case href.indexOf('thecreatorsproject.vice.com') !== -1:
				determineTcpPath();
				break;
			case href.indexOf('thump.vice.com') !== -1:
				determineThumpPath();
				break;
			case href.indexOf('sports.vice.com') !== -1:
				determineSportsPath();
				break;
			case href.indexOf('amuse-i-d.vice.com') !== -1:
				determineAmusePath();
				break;
			case href.indexOf('i-d.vice.com') !== -1:
				determineIdPath();
				break;
			case href.indexOf('broadly.vice.com') !== -1:
				determineBroadlyPath();
				break;
		}
	}
	
	function determineAmusePath(){
		createVars(SKTG.amuse.static.all);
	}
	
	function determineBroadlyPath(){
		createVars(SKTG.broadly.static.all);
	}

	function determineSportsPath() {
		if((window.location.pathname.match(/\//g) || []).length == 1){
			createVars(SKTG.sports.static.home);
			return;
		}

		var section = document.querySelectorAll('meta[name="keywords"]');
		var others = true;
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.sports.static.about);
			others = false;
		} else if (section.length) { // category page
			var tags = section[0].attributes.content.value.split(',');
			for (var i = 0, ilen = tags.length; i < ilen; i++) {
				var tag = tags[i].toLowerCase().trim();
				switch (tag) {
					case 'action sports on vice sports' || 'action sports':
						tag = 'action';
						break;
					case 'baseball on vice sports':
						tag = 'basketball';
						break;
					case 'basketball on vice sports':
						tag = 'basketball';
						break;
					case 'football on vice sports':
						tag = 'football';
						break;
					case 'hockey on vice sports':
						tag = 'hockey';
						break;
					case 'soccer on vice sports':
						tag = 'soccer';
						break;
					case 'college sports':
						tag = 'collegesports';
						break;
					case 'more sports':
						tag = 'moresports';
						break;
				}
				if (SKTG.sports.categories.hasOwnProperty(tag)) {
					createVars(SKTG.sports.categories[tag]);
					others = false;
					return;
				}
			}
		}
		if (others) {
			createVars(SKTG.sports.static.home);
		}
	}

	function determineIdPath() {
		var section = document.querySelectorAll('meta[name="keywords"]');
		if (window.location.pathname.indexOf('/videos') !== -1) {
			createVars(SKTG.id.static.videos);
		} else if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.id.static.about);
		} else if (section.length) { // category page
			var tags = section[0].attributes.content.value.split(',');
			for (var i = 0, ilen = tags.length; i < ilen; i++) {
				var tag = tags[i].toLowerCase().trim();
				tag = (tag == ('the 35th birthday issue') ? 'id35' : tag);
				if (SKTG.id.categories.hasOwnProperty(tag)) {
					createVars(SKTG.id.categories[tag]);
					return;
				}
			}

			createVars(SKTG.id.static.home);
		} else {
			createVars(SKTG.id.static.home);
		}
	}

	function determineThumpPath() {
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.thump.about);
		} else {
			createVars(SKTG.thump.all);
		}
	}

	function determineTcpPath() {
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.tcp.about);
		} else {
			createVars(SKTG.tcp.all);
		}
	}

	function determineFightlandPath() {
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.fightland.about);
		} else {
			createVars(SKTG.fightland.all);
		}
	}

	function determineMunchiesPath() {
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.munchies.about);
		} else {
			createVars(SKTG.munchies.all);
		}
	}

	function determineNewsPath() {
		if (window.location.pathname.indexOf('/about') !== -1) {
			createVars(SKTG.news.about);
		} else {
			createVars(SKTG.news.all);
		}
	}

	function determineAlpsPath() {
		var section = document.querySelectorAll('meta[name="og:article:section"]');
		if (section.length) {
			var category = section[0].attributes.content.value;
			
			if (SKTG.alps.categories.hasOwnProperty(category)) { //is a defined category
				createVars(SKTG.alps.categories[category]);
			} else {
				createVars(SKTG.alps.static.fallback);
			}
		} else if (isViceHome()) { // home
			createVars(SKTG.alps.static.home);
		} else {
			//check for static page
			for (var page in SKTG.alps.static) {
				if (SKTG.alps.static.hasOwnProperty(page)) {
					if (window.location.pathname.indexOf(page) !== -1) {
						createVars(SKTG.alps.static[page]);
						return;
					}
				}
			}
			// check for category overview
			for (page in SKTG.alps.categories) {
				if (SKTG.alps.categories.hasOwnProperty(page)) {
					if (window.location.pathname.indexOf(page) !== -1) {
						createVars(SKTG.alps.categories[page]);
						return;
					}
				}
			}
			
			createVars(SKTG.alps.static.fallback);
		}
	}
	
	function isViceHome(){
		var pathName = window.location.pathname.replace(/\/+$/, '');
		
		var homePaths = [
			'/',
			'/alps',
			'/en_au',
			'/be',
			'/pt_br',
			'/en_ca',
			'/cs',
			'/es_co',
			'/en_dk',
			'/de',
			'/es',
			'/fr',
			'/gr',
			'/it',
			'/es_mx',
			'/nl',
			'/en_se',
			'/pl',
			'/pt',
			'/ro',
			'/ru',
			'/rs',
			'/en_uk',
			'/en_us'
		];
		
		for(var i = 0, ilen = homePaths.length; i < ilen; i++){
			if(homePaths[i] == pathName){
				return true;
			}
		}
		
		return false;
	}

	function determineNoiseyPath() {
		createVars(SKTG.noisey);
	}

	function determineMotherboardPath() {
		var section = document.querySelectorAll('meta[name="keywords"]');
		if (window.location.pathname.indexOf('/videos') !== -1) {
			createVars(SKTG.motherboard.static.videos);
		} else if (section.length) { // category page
			var tags = section[0].attributes.content.value.split(',');
			for (var i = 0, ilen = tags.length; i < ilen; i++) {
				var tag = tags[i].toLowerCase().trim();
				if (SKTG.motherboard.categories.hasOwnProperty(tag)) {
					createVars(SKTG.motherboard.categories[tag]);
					return;
				}
			}

			createVars(SKTG.motherboard.static.home);
		} else {
			createVars(SKTG.motherboard.static.home);
		}
	}

	function createVars(path){
		var s = "vice";
		var cp = generateCP(path);

		window.OEWA = {
			"s": s,
			"cp": cp
		};

		window.oewaq = window.oewaq || [];

		window.oewaq.push(window.OEWA);

		insertOEWAScript();
	}

	function generateCP(path){
		return path + (isSmallScreen() ? '/moewa' : '');
	}

	function insertOEWAScript(){
		var scr = document.createElement('script');
		scr.type = 'text/javascript';
		scr.async = true;
		scr.src = (window.location.protocol === 'https:' ? 'https' : 'http') + '://dispatcher.oewabox.at/oewa.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(scr, s);
	}

	function isSmallScreen() {
		return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024;
	}
})();