
$(document).ready(setup);

const DELAY_TIME = 1500;
const FADE_TIME = 1500;

var correctSelectionText;
var correctButtonLabel;

function setup() {
  newLevel();
}


function newLevel() {

  console.log("New level.");
  $('#ui').html('');

  var dialog = createDialog(1);
}

function levelDelay() {
  setTimeout(newLevel,DELAY_TIME);
}
