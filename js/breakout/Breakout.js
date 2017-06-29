
BasicGame.Breakout = function (game) {

  //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

  this.game;      //  a reference to the currently running game (Phaser.Game)
  this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
  this.camera;    //  a reference to the game camera (Phaser.Camera)
  this.cache;     //  the game cache (Phaser.Cache)
  this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
  this.load;      //  for preloading assets (Phaser.Loader)
  this.math;      //  lots of useful common math operations (Phaser.Math)
  this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
  this.stage;     //  the game stage (Phaser.Stage)
  this.time;      //  the clock (Phaser.Time)
  this.tweens;    //  the tween manager (Phaser.TweenManager)
  this.state;     //  the state manager (Phaser.StateManager)
  this.world;     //  the game world (Phaser.World)
  this.particles; //  the particle manager (Phaser.Particles)
  this.physics;   //  the physics manager (Phaser.Physics)
  this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

  //  You can use any of these from any function within this State.
  //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

var GameState = {
  START: 'START',
  PLAY: 'PLAY',
  GAME_OVER: 'GAME_OVER',
  GAME_OVER_SCREEN: 'GAME_OVER_SCREEN',
  PAUSED: 'PAUSED',
  LOST_PADDLE: 'LOST_PADDLE'
};

BasicGame.Breakout.prototype = {

  PADDLE_SPEED: 600,
  BALL_SPEED: 150,
  BALL_X_SPEED: 300,

  BRICKS: [],
  BRICKS_Y_OFFSET: 60,

  paused: true,

  create: function () {

    console.log("Breakout.create");

    // this.game.cursor.hide();
    this.game.stage.backgroundColor = '#cccccc';
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // PADDLE

    this.paddle = this.game.add.sprite(0,0,'paddle');
    this.paddle.x = this.game.canvas.width/2 - this.paddle.width/2;
    this.paddle.y = this.game.canvas.height - 3*this.paddle.height;
    this.game.physics.enable(this.paddle, Phaser.Physics.ARCADE);
    this.paddle.body.immovable = true;


    // BALL

    this.ball = this.game.add.sprite(0,0,'ball');
    this.ball.x = this.game.canvas.width/2 - this.ball.width/2;
    this.ball.y = this.game.canvas.height/2 + this.ball.height*4;
    this.game.physics.enable(this.ball, Phaser.Physics.ARCADE);
    this.ball.body.bounce.setTo(1,1);

    this.ball.collides = false;

    this.ball.body.velocity.x = 0;
    this.ball.body.velocity.y = 0;
    this.ball.body.x = this.paddle.x + this.paddle.width/2 - this.ball.width/2;
    this.ball.body.y = this.paddle.y - 160;


    // WALLS

    this.walls = this.game.add.group();

    this.leftWall = this.game.add.sprite(-40,0,'left_wall');
    this.game.physics.enable(this.leftWall, Phaser.Physics.ARCADE);
    this.walls.add(this.leftWall);
    this.leftWall.body.immovable = true;

    this.rightWall = this.game.add.sprite(this.game.width,0,'right_wall');
    this.rightWall.x = this.game.canvas.width;
    this.rightWall.y = 0;
    this.game.physics.enable(this.rightWall, Phaser.Physics.ARCADE);
    this.walls.add(this.rightWall);
    this.rightWall.body.immovable = true;

    this.topWall = this.game.add.sprite(0,-40,'top_wall');
    this.topWall.x = 0;
    this.topWall.y = -40;
    this.game.physics.enable(this.topWall, Phaser.Physics.ARCADE);
    this.walls.add(this.topWall);
    this.topWall.body.immovable = true;

    // SOUNDS

    this.launch_wall_sfx = this.game.add.audio('launch_wall_sfx',1);
    this.paddle_sfx = this.game.add.audio('paddle_sfx',1);
    this.ball_out_sfx = this.game.add.audio('ball_out_sfx',1);

    if (!this.BRICK_SFX) {
      this.BRICK_SFX = {};
      this.BRICK_SFX["brick_blue"] = this.game.add.audio('brick_blue_sfx',1);
      this.BRICK_SFX["brick_green"] = this.game.add.audio('brick_green_sfx',1);
      this.BRICK_SFX["brick_yellow"] = this.game.add.audio('brick_yellow_sfx',1);
      this.BRICK_SFX["brick_orange"] = this.game.add.audio('brick_orange_sfx',1);
      this.BRICK_SFX["brick_oranger"] = this.game.add.audio('brick_oranger_sfx',1);
      this.BRICK_SFX["brick_red"] = this.game.add.audio('brick_red_sfx',1);
    }

    // BRICKS

    this.bricks = this.game.add.group();
    // this.resetBricks();
    // this.resetBall();

    window.addEventListener("stop-game",function () {
      console.log("Stopping the game...");
      this.paused = true;
    }.bind(this));
    window.addEventListener("start-game",function () {
      console.log("Starting the game...");
      this.resetBricks();
      this.resetBall();
      // this.resetBall();
      this.paused = false;
    }.bind(this));

  },

  update: function () {

    if (this.paused) {
      return;
    }

    this.handleInput();

    // PHYSICS

    this.physics.arcade.overlap(this.paddle,this.walls,this.handlePaddleWallColliders,null,this);
    this.physics.arcade.collide(this.ball,this.walls,this.handleBallWallColliders,null,this);

    if (this.state == GameState.PLAY) {

      this.physics.arcade.collide(this.ball,this.paddle,this.handleBallPaddleColliders,null,this);
      this.physics.arcade.overlap(this.ball,this.bricks,this.handleBallBrickColliders,null,this);

      this.checkBallOut();
    }
  },

  handleInput: function () {

    this.paddle.body.x = this.input.activePointer.x - this.paddle.body.width/2;

  },


  checkBallOut: function () {

    if (this.ball.visible && this.ball.y > this.game.canvas.height)
    {
      this.ball_out_sfx.play();
      this.resetBall();
    }

  },

  handlePaddleWallColliders: function (paddle,wall) {

    paddle.body.velocity.x = 0;

    if (wall == this.leftWall) {
      paddle.body.x = wall.body.x + wall.width;
    }
    else if (wall == this.rightWall) {
      paddle.body.x = wall.body.x - paddle.width;
    }

  },


  handleBallPaddleColliders: function (ball,paddle) {

    this.paddle_sfx.play();

    paddleMid = paddle.x + paddle.width/2;
    ballMid = ball.x + ball.width/2;
    diff = 0;

    if (ballMid < paddleMid - ball.width/2) {

      //  Ball is on the left of the bat
      diff = paddleMid - ballMid;
      var proportion = (diff / (paddle.width/2));
      ball.body.velocity.x = (-this.BALL_X_SPEED * proportion);

    }
    else if (ballMid > paddleMid + ball.width/2) {

      //  Ball on the right of the bat
      diff = ballMid - paddleMid;
      var proportion = (diff / (paddle.width/2));
      ball.body.velocity.x = (this.BALL_X_SPEED * proportion);

    }
    else {

      //  Ball is perfectly in the middle
      //  A little random X to stop it bouncing up!
      ball.body.velocity.x = 2 + Math.floor(Math.random() * 8);

    }

    console.log("Setting ball to collide...");
    this.ball.collides = true;

  },


  handleBallBrickColliders: function (ball,brick) {

    // console.log(ball,brick);

    if (!ball.collides) {
      // console.log("Ball doesn't collide.");
      return;
    }

    // console.log("Ball collides");

    // console.log("Playing sfx of brick " + brick + ", sfx is " + brick.sfx);
    // console.log("Context of sfx is " + brick.sfx.context);
    brick.sfx.play();

    ball.body.velocity.y *= -1;

    ball.collides = false;

    brick.disable();
    brick.alive = false;

    if (this.bricks.getFirstAlive() == null) {
      // They have cleared the screen!
      this.game.time.events.add(Phaser.Timer.SECOND * 1, this.resetGame, this);
    }

  },


  handleBallWallColliders: function (ball,wall) {

    if (wall == this.topWall) this.ball.collides = true;

    this.launch_wall_sfx.play();

  },


  resetGame: function () {

    this.resetBricks();
    this.resetBall();

  },

  resetBall: function () {

    // console.log("resetBall");
    this.ball.x = this.paddle.x + this.paddle.width/2 - this.ball.width/2;
    this.ball.y = this.paddle.y - 100;

    this.ball.body.velocity.x = 0;
    this.ball.body.velocity.y = 0;

    // this.ball.body.enable = false;

    // console.log("Assigned this.restartTimer");
    this.restartTimer = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restartBall, this, this.ball, this.paddle);
  },


  restartBall: function (ball,paddle) {

    // console.log("restartBall");

    // this.ball.body.enable = true;
    this.ball.body.velocity.x = 20 - Math.random() * 40;
    this.ball.body.velocity.y = this.BALL_SPEED;

    this.launch_wall_sfx.play();

    this.state = GameState.PLAY;

  },


  resetBricks: function () {

    this.BRICKS = [];

    this.addBrickRow(0,7,'brick_red');
    this.addBrickRow(1,7,'brick_oranger');
    this.addBrickRow(2,4,'brick_orange');
    this.addBrickRow(3,4,'brick_yellow');
    this.addBrickRow(4,1,'brick_green');
    this.addBrickRow(5,1,'brick_blue');

  },


  addBrickRow: function (row,value,brickImage) {

    this.BRICKS.push([]);

    brickX = this.leftWall.x + this.leftWall.width;
    brickY = this.topWall.y + this.topWall.height + this.BRICKS_Y_OFFSET + (row * 15);

    col = 0;
    while(brickX < this.rightWall.x) {

      brick = new Brick(this,brickX,brickY,row,col,brickImage,value,this.BRICK_SFX[brickImage]);

      brickX += brick.width;
      col++;
      this.game.physics.enable(brick, Phaser.Physics.ARCADE);
      brick.body.immovable = true;

      this.bricks.add(brick);
      this.BRICKS[row].push(brick);
    }

  },

  shutdown: function () {

    this.paddle.destroy();
    this.ball.destroy();
    this.walls.destroy();
    this.bricks.destroy();
    // this.scoreText.destroy();
    // this.paddlesText.destroy();

    this.game.sound.remove(this.launch_wall_sfx);
    this.game.sound.remove(this.paddle_sfx);

    for (var sfx in this.BRICK_SFX) {
      this.game.sound.remove(sfx);
    }

    // this.gameOverBG.destroy();
    // this.gameOverText.destroy();
    // this.gameOverScoreText.destroy();
    // this.gameOverScoreNumberText.destroy();

  }


};


var Brick = function (game, x, y, row, col, sprite, value, sfx) {
	this.row = row;
	this.col = col;
	this.sprite = sprite;
	this.brickColor = sprite.split('_')[1];

	this.score = value;// 7 - 3*Math.floor(row / 2);

	this.sfx = sfx;

	Phaser.Sprite.call(this, game, x, y, sprite);
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	game.add.existing(this);
};


Brick.prototype = Object.create(Phaser.Sprite.prototype);



Brick.prototype.constructor = Brick;



Brick.prototype.update = function () {

};


Brick.prototype.destroy = function () {

	Phaser.Sprite.call(this);

};


Brick.prototype.disable = function () {
  // console.log("Disabling brick")
	this.body.enable = false;
	this.visible = false;
	// this.alive = false;

};


Brick.prototype.enable = function () {

	this.body.enable = true;
	this.visible = true;
	// this.alive = true;

};
