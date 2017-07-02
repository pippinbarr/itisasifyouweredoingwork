var STATE = {
  WINDOW_CHECK: "WINDOW_CHECK",
  STARTUP: "STARTUP",
  LOGIN: "LOGIN",
  READY: "READY",
  WORKING: "WORKING",
  BREAK: "BREAK"
};

const DELAY_TIME = 1500;
const FADE_TIME = 1500;
var WORK_UNITS_FOR_PROMOTION = 500;
var WORK_UNITS_PER_CHARACTER = 2;
var WORK_UNITS_PER_DIALOG = 50;

const WORK_TIME = 3*60*1000;
const BREAK_TIME = 1*60*1000;
const PROGRESS_INTERVAL = 1000;


var state = STATE.WINDOW_CHECK;

var miniWorkDialogTimer;
var maxiWorkDialogTimer;
var inspirationalDialogTimer;

var username = 'Unknown';
var password = '';
var jobTitleSubjectIndex = -1;
var jobTitlePositionIndex = 0;
var jobTitle = 'Intern';
var workUnitsToPromotion = WORK_UNITS_FOR_PROMOTION;
var windowSizeDialog = null;

$(document).ready(create);


function create() {

  loadSounds();
  checkWindowSize();
  $(window).resize(checkWindowSize);

}

function setup() {

  createBreakoutDialog();

  // createBreakDialog();
  // createInspirationalDialog();

  // setTimeout(startBreak,2000);
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
  // createAboutDialog();
  // createMenuBar();
  // return;

  startGame();
}

function startGame () {
  setTimeout(function () {
    if (audioLoaded) {
      createLoginDialog();
      state = STATE.LOGIN;
    }
    else {
      startGame();
    }
  },2000);
}

function checkWindowSize () {
  if ($(window).width() < 800) {
    if (!windowSizeDialog) {
      $('#window-size-overlay').show();
      windowSizeDialog = createWindowSizeDialog();
    }
    windowSizeDialog.dialog('option','position',{my: 'center', at: 'center', of: window});
  }
  else {
    $('#window-size-overlay').hide();
    if (windowSizeDialog) windowSizeDialog.dialog('destroy');
    windowSizeDialog = null;
    if (state == STATE.WINDOW_CHECK) {
      state = STATE.STARTUP;

      setup();
    }
  }
}

function showDesktop () {
  state = STATE.READY;

  startupSFX.play();
  loadIcons();
  createMenuBar();

  setTimeout(function () {
    console.log("Here.");
    createReadyDialog();
  },2000);

}


function startWork () {
  state = STATE.WORK;

  breakTimer = setTimeout(startBreak, WORK_TIME);

  maxiWorkDialogTimer = setTimeout(newMaxiWorkDialog, 1000);
  miniWorkDialogTimer = setTimeout(newMiniWorkDialog, _.random(10000,15000));
  inspirationalDialogTimer = setTimeout(newInspirationalDialog, _.random(15000,20000));

  // Re-open any closed dialogs
  $('.work-dialog, .document-dialog, .email-dialog, .promotion-dialog, .simple-dialog, .inspirational-dialog').dialog('open');
}


function startBreak () {
  state = STATE.BREAK;

  // $('.work-dialog, .document-dialog, .email-dialog, .promotion-dialog, .simple-dialog').dialog('destroy');
  $('.work-dialog, .document-dialog, .email-dialog, .promotion-dialog, .simple-dialog, .inspirational-dialog').dialog('close');

  if (miniWorkDialogTimer) {
    clearTimeout(miniWorkDialogTimer);
  }

  if (maxiWorkDialogTimer) {
    clearTimeout(maxiWorkDialogTimer);
  }

  if (inspirationalDialogTimer) {
    clearTimeout(inspirationalDialogTimer);
  }

  playSound(breakSFX);

  setTimeout(createBreakDialog,5000);
}


function startDelayedWork () {
  state = STATE.READY;

  setTimeout(createDelayedWorkDialog,1000);
}


function newMiniWorkDialog () {
  if ($('.work-dialog').length < 2) {
    createWorkDialog();
  }

  miniWorkDialogTimer = setTimeout(newMiniWorkDialog,_.random(10000,20000));
}


function newInspirationalDialog () {
  if ($('.inspirational-dialog').length < 2) {
    createInspirationalDialog();
  }

  inspirationalDialogTimer = setTimeout(newInspirationalDialog,_.random(20000,60000));
}


function newMaxiWorkDialog () {
  var numMaxiWork = $('.document-dialog, .email-dialog').length;
  if (numMaxiWork == 1 && Math.random() < 0.65) {

  }
  else if (numMaxiWork < 2) {
    if (Math.random() < 0.5) {
      createEmailDialog();
    }
    else {
      createDocumentDialog();
    }
  }

  maxiWorkDialogTimer = setTimeout(newMaxiWorkDialog, _.random(10000,25000));
}
