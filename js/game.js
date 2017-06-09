
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


  // createDialog(createProgressBar());

  selectMenu();
  createIcons();
}

function levelDelay() {
  setTimeout(newLevel,DELAY_TIME);
}


function createIcons() {
  var toDrag = $('<img src="images/icon.png">');
  toDrag.offset({
    left: Math.floor(_.random(0,$(window).width())),
    top: Math.floor(_.random(0,$(window).height()))
  });
  toDrag.draggable();
  toDrag.selectable();

  var toDrop = $('<img src="images/trash.png">');
  toDrop.css('position','absolute');
  toDrop.offset({
    left: Math.floor(_.random(0,$(window).width())),
    top: Math.floor(_.random(0,$(window).height()))
  });
  toDrop.droppable({
    drop: function( event, ui ) {
      ui.draggable.remove();
    }
  });


  $('#ui').append(toDrop);
  $('#ui').append(toDrag);


}

function selectMenu () {
  var div = $('<div></div>')
  var menu = $('<select></select>');
  menu.append('<option>Slower</option>');
  menu.append('<option>Slow</option>');
  menu.append('<option>Medium</option>');
  menu.append('<option>Fast</option>');
  menu.append('<option>Faster</option>');
  div.append(menu);
  createDialog(div);
  menu.selectmenu();
}


function createCheckboxRadio(_type,numOptions) {
  var radioGroup = $('<div></div>');
  var correct = _.random(0,numOptions-1);

  var name = 'radio';
  var type = _type;

  for (var i = 0; i < numOptions; i++) {
    var text = generateLanguage(1,3);
    var label = $('<label for="' + name + i + '">' + text + '</label><br />')
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

  return radioGroup;

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


function createSpinner () {
  var spinner = $('<div><input id="spinner" name="value"></div>');
  $('body').append(spinner);

  spinner.spinner();
  spinner.spinner('enable');
  spinner.spinner('value',5);
  // return spinner;
}


function createSlider () {
  var slider = $('<div></div>');
  slider.slider({
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    slide: function (event, ui) {
      console.log(ui.value);
    }
  });
  return slider;
}


function createProgressBar () {
  var bar = $('<div></div>');
  bar.progressbar();
  setInterval(function () {
    var val = bar.progressbar('value');
    val++;
    bar.progressbar('value',val);
  },150);
  return bar;
}


function createDatepicker () {
  var datepicker = $('<div></div>');
  datepicker.datepicker();
  return datepicker;
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


function createDialog(content) {

  var title = generateLanguage(1,4);
  var message = content;
  var wrong = generateLanguage(1,2);
  var correct = generateLanguage(1,2);

  var container = $('<div id="dialogBox" title="'+title+'"></div>');
  container.append(content);

  var dialogOptions = {
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
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
  menu.menu();
  return menu;
}

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ullamcorper dolor, non pharetra urna mollis vitae. Proin blandit ipsum nec nisi scelerisque cursus. Donec pellentesque malesuada ex, non dignissim mi vestibulum sed. Donec malesuada dignissim leo sit amet sodales. In vel dapibus nulla. Sed mattis tempor velit, eu tincidunt enim feugiat et. Donec dignissim tellus vitae semper commodo. Proin eu gravida nibh, vel facilisis leo. Sed imperdiet dui enim, nec pretium nulla iaculis eget. Donec ac efficitur mi. Etiam volutpat enim odio, eget ornare augue bibendum sit amet. Vestibulum posuere metus id mauris viverra, non hendrerit magna aliquam. Sed viverra, nisi ac maximus elementum, orci nunc mattis ante, id viverra mauris justo in tortor.";

function generateLanguage(numWords) {
  var loremIpsumArray = loremIpsum.split(" ");
  var text = "";
  var startIndex = Math.floor(Math.random() * loremIpsumArray.length);
  for (var i = 0; i < numWords; i++)
  {
    var index = (startIndex + i) % loremIpsumArray.length;
    text += " " + loremIpsumArray[index];
  }
  text = text.trim();
  if (text.charAt(text.length-1) == ",") {
    text = text.slice(0,text.length-2);
  }
  if (text.charAt(text.length-1) != ".") {
    text += ".";
  }
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text;
}
