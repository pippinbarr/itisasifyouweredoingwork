function createDialog(_numSteps) {

  console.log(_numSteps);

  var title = generateLanguage(1,4);
  var dialogDiv = $('<div class="dialog" title="'+title+'"></div>');

  // Generate buttons
  var numButtons = _.random(1,4);
  var buttonLabels = ["X"]
  for (var i = 1; i < numButtons; i++) {
    buttonLabels.push(generateLanguage(1));
  }
  var correctButton = _.random(0,buttonLabels.length);

  var dialogOptions = {
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {},
    close: function () {
      if (buttonLabels[correctButton] == "X") {
        console.log("Correct dialog button!");
      }
      else {
        console.log("Incorrect dialog button!");
      }
    }
  };

  for (var i = 1; i < buttonLabels.length; i++) {
    dialogOptions.buttons[buttonLabels[i]] = function () {
      if (i == correctButton) {
        console.log("Correct dialog button!");
      }
      else {
        console.log("Incorrect dialog button!")
      }
      $(this).dialog("close");
    }
  }


  for (var i = 0; i < _numSteps; i++) {
    dialogDiv.append('<p>1. Select something</p>');
    var step = selectMenu(5);
    // console.log(step);
    step.appendTo(dialogDiv);
    step.selectmenu({
      appendTo: dialogDiv
    });
    step.css('z-index',200);
    step.children().css('z-index',200);
    console.log(step.css('z-index'));

    // step.element.selectmenu();

  }

  dialogDiv.append('<p>2. Click OK</p>')
  dialogDiv.dialog(dialogOptions);
  // return dialogDiv;
}



function selectMenu (_num) {
  var menu = $('<select></select>');
  console.log(_num);
  for (var i = 0; i < _num; i++) {
    var option = $('<option>'+generateLanguage(1,2)+'</option>');
    menu.append(option);
  }
  var correct = _.random(0,_num-1);
  return menu;
}


function createCheckboxRadio(_type,_num) {
  var radioGroup = $('<div></div>');
  var correct = _.random(0,_num-1);

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
