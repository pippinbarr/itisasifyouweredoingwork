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

  loadSounds();
  // createInspirationalDialog();
  createBreakoutDialog();
  // setTimeout(function () {
  //   window.dispatchEvent(new Event("start-game"));
  //   breakoutDialog.dialog('open');
  // },1000);
  // console.log(breakoutPhaserGame);

  // createWorkDialog();
  // createEmailDialog();
  // createDocumentDialog();

  // createInspirationalDialog();
  // createDesktopDialog();
  // createMusicDialog();
  // return;

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

  createDocumentDialog();
  setTimeout(newWorkDialog, 3000);
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

  setTimeout(newWorkDialog,_.random(8000,12000));
}
