
$(document).ready(setup);

const DELAY_TIME = 1500;
const FADE_TIME = 1500;

var correctSelectionText;
var correctButtonLabel;

function setup() {

  $('body').css({
    backgroundColor: '#333',
    fontSize: '1.2em',
  });

  $('#container').css({
    height: $(window).height(),
  });

  $('#wrapper').hide();

  newLevel();
}


function newLevel() {

  console.log("New level.");
  $('#ui').html('');

  createRadio(5);
  // createAccordion(5);
  // createDialog();

  $('#wrapper').fadeIn(FADE_TIME);
}

function levelDelay() {
  setTimeout(newLevel,DELAY_TIME);
}

function createRadio(numOptions) {
  var radioGroup = $('<div></div>');
  var correct = _.random(0,numOptions-1);

  var name = 'radio';
  var type = 'radio';

  for (var i = 0; i < numOptions; i++) {
    var text = generateLanguage(1,3);
    var label = $('<label for="' + name + i + '">' + text + '</label>')
    var radio = $('<input id="' + name + i + '" name="' + name + '" type="' + type + '">');
    if (i == correct) {
      label.addClass('correct');
      correctSelectionText = text;
    }
    radioGroup.append(label);
    radioGroup.append(radio);
    radio.checkboxradio({
      icon: true
    });
  }

  var button = createButton();
  button.click(function () {
    // if ($('input[name=radio]:checked').hasClass('correct')) {
    if ($('.ui-state-active').hasClass('correct')) {
      $('#wrapper').fadeOut(FADE_TIME,levelDelay);
    }
  });

  $('#ui').append(radioGroup);
  $('#ui').append(button);

  $('#instructionsText').text("Select " + correctSelectionText + " and press " + correctButtonLabel);
}


function createAccordion (numOptions) {
  var accordionContent = $('<div></div>');
  var correct = _.random(0,numOptions-1);
  for (var i = 0; i < numOptions; i++) {
    var headerString = generateLanguage(1,5);
    var header = $('<h3>' + headerString + '</h3>');
    if (i == correct) {
      header.addClass('correct');
      correctSelectionText = headerString;
    }

    var contentString = generateLanguage(10,40);
    var content = $('<div><p>' + contentString + '</p></div>');

    accordionContent.append(header);
    accordionContent.append(content);
  }
  accordionContent.accordion({
    heightStyle: 'content'
  });
  return accordionContent;
}


function createButton() {
  var container = $('<div></div>');
  correctButtonLabel = generateLanguage(1,2);
  buttonId = 'button';
  button = $('<button id="' + buttonId + '" name="' + buttonId + '">'+correctButtonLabel+'</button>');
  button.button();
  container.append(button);
  return container;
}


function createDialog() {
  var title = generateLanguage(1,4);
  var message = generateLanguage(10,30);
  var wrong = generateLanguage(1,2);
  var correct = generateLanguage(1,2);

  // var dialog = $('<div id="dialog" title="'+title+'"><p>'+message+'</p></div>');
  var container = $('<div id="dialogBox" title="'+title+'"><p>'+message+'<p></div>');
  // var container = $('<div id="dialogBox" title="HACKING"><p>Are you sure you want to hack this hard?</p></div>')

  var dialogOptions = {
    resizable: false,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    show: {
      effect: "fade",
      duration: FADE_TIME
    },
    hide: {
      effect: "fade",
      duration: FADE_TIME
    },
    buttons: {}
  };

  if (Math.random() < 0.5) {
    dialogOptions.buttons[correct] = function() {
      $(this).dialog("close");
      $('#wrapper').fadeOut(FADE_TIME,levelDelay);
    };
    dialogOptions.buttons[wrong] = function() {
      $(this).dialog("close");
    };
  }
  else {
    dialogOptions.buttons[wrong] = function() {
      $(this).dialog("close");
    };
    dialogOptions.buttons[correct] = function() {
      $(this).dialog("close");
      $('#wrapper').fadeOut(FADE_TIME,levelDelay);
    };
  }
  container.dialog(dialogOptions);

  correctButtonLabel = correct;
  $('#instructionsText').text("Press " + correctButtonLabel);

}

function createMenu(depth,maxItems,subMenuChance) {
  if (depth == 0) return;
  var menu = $('<ul></ul>');
  var numItems = 1 + Math.floor(Math.random()*maxItems);
  for (var i = 0; i < numItems; i++) {
    var item = $('<li></li>');
    item.append('<div>Item</div>');
    if (Math.random() < subMenuChance) {
      item.append(createMenu(depth-1,maxItems,subMenuChance));
    }
    menu.append(item);
  }
  return menu.menu();
}

function generateLanguage(numWords) {
  var min = 3;
  var max = 7;
  var chars = "█▉▊▋▌▍▎▕▖▗▘▙▚▛▜▝▞▟▔▀▁▂▃▄▅▆▇";
  var text = '';
  for (var i = 0; i < numWords; i++) {
    var wordLength = _.random(min,max);
    for (var j = 0; j < wordLength; j++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    text += ' ';
  }
  return text;
}
