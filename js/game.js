var score;
var scoreDiv;

var STATE = {
  STARTUP: "STARTUP",
  LOGIN: "LOGIN",
  READY: "READY",
  WORKING: "WORKING",
  BREAK: "BREAK"
};

var state = STATE.STARTUP;


$(document).ready(setup);

const DELAY_TIME = 1500;
const FADE_TIME = 1500;

function setup() {

  $('body').css({
    margin: 0
  })

  loadSounds();

  // createInspirationalDialog();
  // createWorkDialog();
  // createDesktopDialog();
  // createMusicDialog();

  setTimeout(function () {
    createLoginDialog();
    state = STATE.LOGIN;
  },1000);
}

function showDesktop () {
  state = STATE.READY;

  startupSFX.play();
  loadIcons();
  createMenuBar();

  console.log("About to set timeout Here.");

  setTimeout(function () {
    console.log("Here.");
    createReadyDialog();
  },1000);
}


function startWork () {
  state = STATE.WORK;

  setTimeout(newWorkDialog, 1000);
}


function startDelayedWork () {
  state = STATE.READY;

  setTimeout(createDelayedWorkDialog,1000);
}


function newWorkDialog () {
  if (Math.random() < 0.05) {
    createInspirationalDialog();
  }
  else {
    createWorkDialog();
  }

  setTimeout(newWorkDialog,_.random(1000,5000));
}
