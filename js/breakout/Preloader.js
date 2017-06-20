
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		// this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('paddle','js/breakout/images/paddle.png');
		this.load.image('ball','js/breakout/images/ball.png');
		this.load.image('left_wall','js/breakout/images/left_wall.png');
		this.load.image('right_wall','js/breakout/images/right_wall.png');
		this.load.image('top_wall','js/breakout/images/top_wall.png');

		this.load.image('brick_blue','js/breakout/images/brick_blue.png');
		this.load.image('brick_green','js/breakout/images/brick_green.png');
		this.load.image('brick_yellow','js/breakout/images/brick_yellow.png');
		this.load.image('brick_orange','js/breakout/images/brick_orange.png');
		this.load.image('brick_oranger','js/breakout/images/brick_oranger.png');
		this.load.image('brick_red','js/breakout/images/brick_red.png');

		this.load.audio('brick_blue_sfx',['js/breakout/sounds/0.mp3','js/breakout/sounds/0.ogg']);
		this.load.audio('brick_green_sfx',['js/breakout/sounds/1.mp3','js/breakout/sounds/1.ogg']);
		this.load.audio('brick_yellow_sfx',['js/breakout/sounds/2.mp3','js/breakout/sounds/2.ogg']);
		this.load.audio('brick_orange_sfx',['js/breakout/sounds/3.mp3','js/breakout/sounds/3.ogg']);
		this.load.audio('brick_oranger_sfx',['js/breakout/sounds/4.mp3','js/breakout/sounds/4.ogg']);
		this.load.audio('brick_red_sfx',['js/breakout/sounds/5.mp3','js/breakout/sounds/5.ogg']);
		this.load.audio('ball_out_sfx',['js/breakout/sounds/ball_out.mp3','js/breakout/sounds/ball_out.ogg']);
		this.load.audio('launch_wall_sfx',['js/breakout/sounds/launch_wall.mp3','js/breakout/sounds/launch_wall.ogg']);
		this.load.audio('paddle_sfx',['js/breakout/sounds/paddle.mp3','js/breakout/sounds/paddle.ogg']);

		// this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here


	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.


		if (this.cache.isSoundDecoded('brick_red_sfx') && this.ready == false)
		// if (this.ready == false)
		{
			this.ready = true;
			this.state.start('Breakout');
		}

	}

};
