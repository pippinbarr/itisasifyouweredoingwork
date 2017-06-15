var score;
var scoreDiv;


$(document).ready(setup);

const DELAY_TIME = 1500;
const FADE_TIME = 1500;

var correctSelectionText;
var correctButtonLabel;

function setup() {

  $('body').css({
    margin: 0
  })

  loadSounds();
  createMenuBar();

  // createInspirationalDialog();
  // createWorkDialog();
  createDesktopDialog();
  // createLoginDialog();


}

function startGame () {

  startupSFX.play();

  setTimeout(newDialog,1000);

  // createWorkDialog();

}


function newDialog () {
  if (_.random(0,1)) {
    createInspirationalDialog();
  }
  else {
    createWorkDialog();
  }

  setTimeout(newDialog,_.random(1000,5000));
}
