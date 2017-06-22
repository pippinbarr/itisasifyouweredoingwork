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

var workDialogTimer;


$(document).ready(setup);

const DELAY_TIME = 1500;
const FADE_TIME = 1500;

function setup() {

  loadSounds();

  // createBreakDialog();
  createInspirationalDialog();

  setTimeout(startBreak,2000);
  createBreakoutDialog();
  // setTimeout(function () {
  //   breakoutDialog.dialog('open');
  //   window.dispatchEvent(new Event("start-game"));
  // },1000);
  // console.log(breakoutPhaserGame);

  // createWorkDialog();
  // createEmailDialog();
  // createDocumentDialog();
  // createInspirationalDialog();
  // createDesktopDialog();
  // createMusicDialog();
  return;

  setTimeout(function () {
    createLoginDialog();
    state = STATE.LOGIN;
  },2000);
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

  breakTimer = setTimeout(startBreak, 10000);

  createDocumentDialog();
  workDialogTimer = setTimeout(newWorkDialog, 3000);
}


function startBreak () {
  $('.dialog').dialog('close');

  if (workDialogTimer) {
    clearTimeout(workDialogTimer);
  }

  state = STATE.BREAK;
  setTimeout(createBreakDialog,1000);
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

  workDialogTimer = setTimeout(newWorkDialog,_.random(8000,12000));
}
