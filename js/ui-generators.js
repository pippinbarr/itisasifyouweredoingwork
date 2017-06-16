var TYPE = {
  SELECTMENU: "selectmenu",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  SPINNER: "spinner",
  SLIDER: "slider",
  PROGRESSBAR: "progressbar",
  DATEPICKER: "datepicker",
  INPUT: "input"
}

var username = '';
var password = '';

const NUM_STOCK = 17;

var startupSFX;
var newDialogSFX;
var dialogSuccessSFX;
var dialogFailureSFX;

var music;


function loadSounds () {
  startupSFX = new Audio('assets/sounds/startup.wav');
  newDialogSFX = new Audio('assets/sounds/dialog_new.wav');
  dialogSuccessSFX = new Audio('assets/sounds/dialog_success.wav');
  dialogFailureSFX = new Audio('assets/sounds/dialog_failure.wav');

  music = new Audio();
  music.loop = true;
  music.volume = 0.5;
}

function loadIcons() {
  createIcon("display", 32, 64*1, createDesktopDialog);
  createIcon("music", 32, 64*3, createMusicDialog);
  createIcon("game", 32, 64*5, function () {});
}

function createIcon(name, x, y, callback) {
  var div = $('<div class="icon"><img src="assets/images/icons/'+name+'.png"><div class="icon-label">'+name.toUpperCase()+'</div></div>');

  div.css({
    position: 'absolute'
  });
  div.draggable();
  div.dblclick(callback);
  div.offset({
    top: y,
    left: x
  });
  $('#ui').append(div);
}

function createMenuBar () {
  var menubar = $('<div id="menubar"></div>');
  menubar.css({
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '2px solid grey',
    fontFamily: "sans-serif",
    lineHeight: "30px",
  });

  var menubarUsername = $('<span id="menubar-username">Pippin</span>');
  menubarUsername.css({
    float: 'right',
    marginRight: 20,
    fontWeight: "bold",
  })

  var menubarRank = $('<span id="menubar-rank"><b>Rank:</b> Superior Laborer</span>');
  menubarRank.css({
    marginLeft: 20
  });

  menubar.append(menubarUsername);
  menubar.append(menubarRank);

  $('#ui').append(menubar);
}

function createLoginDialog () {
  var title = "Login";
  var dialogDiv = $('<div class="dialog" title="'+title+'"></div>');
  var usernameField = $('<input id="usernameInput" type="text"></input>');
  var passwordField = $('<input id="passwordInput" type="password"></input>');
  usernameField.css('border', '1px solid black')
  passwordField.css('border', '1px solid black')


  dialogDiv.append('<div><b>It is as if you were doing work v1.0</b></div>')
  dialogDiv.append('<i>For the love of the labour™</i><p>')
  dialogDiv.append('<label id="usernameLabel">Username:</label><br />');
  dialogDiv.append(usernameField);
  dialogDiv.append('<p></p>');
  dialogDiv.append('<label id="passwordLabel">Password:</label><br />');
  dialogDiv.append(passwordField);

  var dialogOptions = {
    resizable: false,
    draggable: false,
    height: "auto",
    width: '400',
    modal: true,
    autoOpen: true,
    buttons: {
      "Login": function () {
        var usernameValue = $('#usernameInput').val();
        var passwordValue = $('#passwordInput').val();

        var fail = false;
        if (usernameValue == '') {
          usernameField.css('border', '1px solid red')
          fail = true;
        }
        else {
          usernameField.css('border', '1px solid black')
        }
        if (passwordValue == '') {
          passwordField.css('border', '1px solid red')
          fail = true;
        }
        else {
          passwordField.css('border', '1px solid black')
        }
        if (fail) return;

        username = usernameValue;
        $('#menubar-username').text(username);

        password = passwordValue;
        console.log(username,password);
        $(this).dialog('close');
        setTimeout(function () {
          setDesktop('cat');
          startGame();
        },1000);
      }
    },
  };

  createDialog(dialogDiv, dialogOptions, false);
}


function createDesktopDialog() {

  if ($('#desktop-dialog').length != 0) {
    $('#desktop-dialog').dialog('open');
    return;
  }

  var options = ['cat','dog','nature','work'];

  var title = "Set desktop picture";
  var dialogDiv = $('<div id="desktop-dialog" class="dialog" title="'+title+'"></div>');
  var radioField = $('<fieldset id="desktop-select-fieldset"></fieldset>');

  for (var i = 0; i < options.length; i++) {
    var name = "desktop-select-"+i;

    var radio = $('<input id="' + name +'" class="radio" name="desktop-select" type="radio">');
    radio.data('label',options[i]);
    radio.click(function () {
      setDesktop($(this).data('label'));
    });
    var label = $('<label for="' + name + '">' + options[i] + '</label>');

    radioField.append(radio);
    radioField.append(label);
    radioField.append('<br />');
  }

  // radioField.checkboxradio();

  dialogDiv.append("Select desktop image:<p>");
  dialogDiv.append(radioField);

  var dialogOptions = {
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {
      "Okay": function () {
        $(this).dialog('close');
      },
    }
  };

  dialogDiv.dialog(dialogOptions);
}


function createMusicDialog () {

  if ($('#music-dialog').length != 0) {
    $('#music-dialog').dialog('open');
    return;
  }

  var options = ['none','world','jazz','classical','hiphop'];

  var title = "Choose music";
  var dialogDiv = $('<div id="music-dialog" class="dialog" title="'+title+'"></div>');
  var radioField = $('<fieldset id="music-select-fieldset"></fieldset>');

  for (var i = 0; i < options.length; i++) {
    var name = "music-select-"+i;

    var radio = $('<input id="' + name +'" class="radio" name="music-select" type="radio">');
    radio.data('label',options[i]);
    radio.click(function () {
      setMusic($(this).data('label'));
    });
    var label = $('<label for="' + name + '">' + options[i] + '</label>');

    radioField.append(radio);
    radioField.append(label);
    radioField.append('<br />');
  }

  var volumeSlider = createSlider();

  volumeSlider.slider({
    value: (music.volume*100),
    min: 0,
    max: 100,
    step: 1,
    slide: function (event, ui) {
      music.volume = (ui.value / 100)
    },
  });


  // radioField.checkboxradio();

  dialogDiv.append("Select music:<p>");
  dialogDiv.append(radioField);
  dialogDiv.append("<p>Select volume:<p>");
  volumeSlider.appendTo(dialogDiv);


  var dialogOptions = {
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {
      "Okay": function () {
        $(this).dialog('close');
      },
    }
  };

  dialogDiv.dialog(dialogOptions);
}


function setMusic(song) {
  if (song == 'none') {
    music.pause();
  }
  else {
    music.pause();
    music.src = 'assets/sounds/music/' + song + '.mp3';
    music.play();
  }
}


function setDesktop(theme) {
  $('body').css({
    backgroundImage: 'url(assets/images/desktops/'+theme+'.png)',
    backgroundSize: 'cover'
  });
}


function createInspirationalDialog() {
  newDialogSFX.play();

  var title = inspirationWorkSlogans[_.random(0,inspirationWorkSlogans.length-1)];
  var dialogDiv = $('<div class="dialog" title="'+title+'"></div>');

  var imgNumber = _.random(1,17);
  var imgFile = 'assets/images/stock/stock_' + imgNumber + '.jpg';
  var image = $('<img src="'+imgFile+'">');
  image.css({
    width: '100%',
    height: 'auto'
  })
  dialogDiv.append(image);

  var dialogOptions = {
    resizable: false,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {}
  };

  createDialog(dialogDiv, dialogOptions, true);
}

function createWorkDialog() {
  newDialogSFX.play();

  var title = generateLanguage(1,4);
  var dialogDiv = $('<div class="dialog" title="'+title+'"></div>');

  var option = 1;
  var numSteps = _.random(0,1);

  var elements = [];

  for (option = 1; option <= numSteps; option++) {

    var keys = Object.keys(TYPE)
    type = TYPE[keys[ keys.length * Math.random() << 0]];

    var type = TYPE.SLIDER;

    switch (type) {

      // SELECT MENU
      case TYPE.SELECTMENU:
      var selectMenu = createSelectMenu(3);

      var selectString = '<p>' + option + '. Select ' + selectMenu.data('correct') + '</p>';

      dialogDiv.append(selectString);
      selectMenu.appendTo(dialogDiv);
      selectMenu.selectmenu({
        appendTo: dialogDiv
      });

      elements.push(selectMenu);
      break;

      // CHECKBOX
      case TYPE.CHECKBOX:
      var checkboxes = createCheckbox(3,option);

      var selectString = '<p>' + option + '. Select ';
      for (var i = 0; i < checkboxes.data('correct').length; i++) {
        selectString += checkboxes.data('correct')[i];
        if (i == checkboxes.data('correct').length - 2) selectString += ' and ';
        else if (checkboxes.data('correct').length != 1) selectString += ', ';
      }

      dialogDiv.append(selectString);
      checkboxes.appendTo(dialogDiv);

      elements.push(checkboxes);
      break;

      // RADIO
      case TYPE.RADIO:
      var radios = createRadio(3,option);

      var selectString = '<p>' + option + '. Select ' + radios.data('correct') + '</p>';

      dialogDiv.append(selectString);
      radios.appendTo(dialogDiv);

      elements.push(radios);
      break;

      // SPINNER
      case TYPE.SPINNER:
      var spinner = createSpinner();

      var selectString = '<p>' + option + '. Set spinner to ' + spinner.data('correct') + '</p>';

      dialogDiv.append(selectString);
      spinner.appendTo(dialogDiv);

      spinner.spinner({
        value: _.random(0,100)
      });
      spinner.bind("keydown", function (event) {
        event.preventDefault();
      });

      elements.push(spinner);
      break;

      // SLIDER
      case TYPE.SLIDER:
      var slider = createSlider();

      var sliderStartValue = _.random(0,100);
      var sliderValueSpan = $('<span>'+sliderStartValue+'</span>')
      var instruction = $('<p>' + option + '. Set slider to ' + slider.data('correct') + ' (currently </p>');
      instruction.append(sliderValueSpan);
      instruction.append(')');
      dialogDiv.append(instruction);

      slider.appendTo(dialogDiv);

      slider.slider({
        value: sliderStartValue,
        min: 0,
        max: 100,
        step: 1,
        slide: function (event, ui) {
          sliderValueSpan.text(ui.value);
        },
      });


      elements.push(slider);
      break;

      // PROGRESS BAR
      case TYPE.PROGRESSBAR:
      var progressbar = createProgressBar();

      var instruction = '<p>' + option + '. Wait for progress bar to complete</p>';

      dialogDiv.append(instruction);
      progressbar.appendTo(dialogDiv);

      progressbar.progressbar({
        value: 0,
        max: 100,
      });

      // Set up increasing progress bar
      setInterval(function () {
        var val = $(this).progressbar('value');
        val += _.random(0,2);
        $(this).progressbar('value',val);
      }.bind(progressbar),150);

      elements.push(progressbar);
      break;

      // DATE PICKER
      case TYPE.DATEPICKER:
      var datepicker = createDatepicker();

      var date = new Date(datepicker.data('correct'));
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var dateString = date.getDate() + ' ' + months[(date.getMonth())] + ' ' + date.getFullYear()
      var instruction = '<p>' + option + '. Set date to '+ dateString + '</p>';

      dialogDiv.append(instruction);
      datepicker.appendTo(dialogDiv);

      datepicker.datepicker();

      elements.push(datepicker);
      break;

      // INPUT
      case TYPE.INPUT:
      var input = createInput();

      var instructions = '<p>' + option + '. Write "'+ input.data('correct') +'" in the input field</p>';
      dialogDiv.append(instructions);
      input.appendTo(dialogDiv);

      elements.push(input);
      break;
    }
  }

  // BUTTONS

  // Generate buttons
  var numButtons = _.random(1,3);
  var buttonLabels = []
  for (var i = 0; i < numButtons; i++) {
    buttonLabels.push(generateLanguage(1));
  }
  var correctButton = _.random(0,buttonLabels.length-1);

  var dialogOptions = {
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {},
  };


  // EVALUATION

  var dialogCorrect = true;

  for (var i = 0; i < buttonLabels.length; i++) {
    if (!dialogCorrect) break;
    if (i == correctButton) {
      dialogOptions.buttons[buttonLabels[i]] = function () {
        for (var j = 0; j < elements.length; j++) {
          if (!dialogCorrect) break;
          var element = elements[j];
          switch (element.data('type')) {

            case TYPE.SELECTMENU:
            if (element.data('correct') == element.val()) {
              console.log("ELEMENT CORRECT");
            }
            else {
              console.log("ELEMENT INCORRECT");
              dialogCorrect = false;
              break;
            }
            break;

            case TYPE.CHECKBOX:
            var correct = true;
            element.children().each(function () {
              if (!correct) return;
              if ($(this).hasClass('correct')) {
                if (!$(this).is(':checked')) {
                  correct = false;
                  return;
                }
              }
              else {
                if ($(this).is(':checked')) {
                  correct = false;
                  return;
                }
              }
            });
            if (correct) {
              console.log("CHECKBOX CORRECT");
            }
            else {
              console.log("CHECKBOX INCORRECT");
              dialogCorrect = false;
              break;
            }

            break;

            case TYPE.RADIO:
            var correct = false;
            element.children().each(function() {
              if ($(this).hasClass('correct')) {
                if ($(this).is(':checked')) {
                  correct = true;
                }
              }
            });
            if (correct) {
              console.log("RADIO CORRECT");
            }
            else {
              console.log("RADIO INCORRECT");
              dialogCorrect = false;
              break;
            }
            break;

            case TYPE.SPINNER:
            if (element.spinner('value') == element.data('correct')) {
              console.log("SPINNER CORRECT");
            }
            else {
              console.log("SPINNER INCORRECT");
              dialogCorrect = false;
              break;
            }

            break;

            case TYPE.SLIDER:
            console.log(element.slider('value'));
            if (element.slider('value') == element.data('correct')) {
              console.log("SLIDER CORRECT");
            }
            else {
              console.log("SLIDER INCORRECT");
              dialogCorrect = false;
              break;
            }
            break;

            case TYPE.PROGRESSBAR:
            console.log(element.progressbar('value'));
            if (element.progressbar('value') >= 100) {
              console.log("PROGRESSBAR COMPLETE");
            }
            else {
              console.log("PROGRESSBAR NOT COMPLETE");
              dialogCorrect = false;
              break;
            }
            break;

            case TYPE.DATEPICKER:
            console.log("Entered date: " + element.val());
            console.log("Correct date: " + element.data('correct'));
            if (element.val() == element.data('correct')) {
              console.log("DATE CORRECT");
            }
            else {
              console.log("DATE INCORRECT");
              dialogCorrect = false;
              break;
            }
            break;

            case TYPE.INPUT:
            if (element.val() == element.data('correct')) {
              console.log("INPUT CORRECT");
            }
            else {
              console.log("INPUT INCORRECT");
              dialogCorrect = false;
              break;
            }
            break;
          }
        }

        if (!dialogCorrect) {
          dialogFailureSFX();
          $(this).parent().effect('shake',function () {
            $(this).dialog("close");
          }.bind(this));
        }
        else {
          dialogSuccessSFX.play();
          $(this).dialog("close");
        }
      }
    }
    else {
      dialogOptions.buttons[buttonLabels[i]] = function () {
        console.log("Incorrect dialog button!");
        dialogFailureSFX.play();
        $(this).parent().effect('shake', function () {
          $(this).dialog('close');
        }.bind(this));
      }
    }
  }

  dialogDiv.append('<p>'+(option)+'. Click ' + buttonLabels[correctButton] + '</p>')

  createDialog(dialogDiv, dialogOptions, true);

  ///////// HACK /////////
  // Make select menu expand the dialog box on open...
  $('.ui-selectmenu-menu').css({
    position: 'relative'
  });

  // $('.radio, .checkbox').checkboxradio({
  //   icon: true
  // });

  // $(".radio, .checkbox").change(function () {
  //   if ($(this)[0].checked) {
  //     if ($(this).hasClass("correct")) {
  //       console.log("Selected correct radio/checkbox!");
  //     }
  //     else {
  //       console.log("Selected incorrect radio/checkbox!");
  //     }
  //   }
  // });


  //////// ENDHACK ///////
}

function createDialog(div, options, random) {
  div.dialog(options);

  if (random) {
    var x = _.random(0,$(window).width() - div.width());
    var y = _.random(0,$(window).height() - div.height());
    div.parent().offset({
      top: y,
      left: x
    });
  }
}



/*******************************************************
********************************************************
SELECT MENU
********************************************************
********************************************************/

function createSelectMenu (_num) {
  var menu = $('<select style="z-index: 100"></select>');
  var correct = _.random(0,_num-1);
  var correctItem;
  for (var i = 0; i < _num; i++) {
    var text = generateLanguage(1,2);
    var option = $('<option>'+text+'</option>');
    if (i == correct) {
      menu.data('correct',text);
    }
    menu.append(option);
  }

  menu.data('type',TYPE.SELECTMENU);

  return menu;
}


/*******************************************************
********************************************************
CHECKBOX
********************************************************
********************************************************/

function createCheckbox(_numOptions,_index) {

  var div = $('<fieldset></fieldset>');
  var name = 'checkbox'+_index;
  var type = 'checkbox';

  var correctElements = [];
  for (var i = 0; i < _numOptions; i++) {
    var text = generateLanguage(1,3);
    var boxName = (name+i);

    var label = $('<label for="' + (name+i) + '">' + text + '</label>');
    var checkbox = $('<input id="'+ (name+i) +'" class="'+ type + '" name="' + boxName + '" type="' + type + '">');

    if (Math.random() < 0.5 || (correctElements.length == 0 && i == (_numOptions-1))) {
      checkbox.addClass("correct");
      correctElements.push(text);
    }

    div.append(checkbox);
    div.append(label);
    if (i != _numOptions - 1) {
      div.append('<br />');
    }
  }

  div.data('correct',correctElements);
  div.data('type',TYPE.CHECKBOX);

  return div;
}


/*******************************************************
********************************************************
RADIO
********************************************************
********************************************************/

function createRadio(_numOptions,_index) {
  var div = $('<fieldset></fieldset>');

  var type = 'radio';
  var name = type+_index;

  var correct = _.random(0,_numOptions-1);

  var correctElements = [];
  for (var i = 0; i < _numOptions; i++) {
    var text = generateLanguage(1,3);
    var boxName = name;
    var radio = $('<input id="'+ (name+i) +'" class="'+ type + '" name="' + boxName + '" type="' + type + '">');

    if (i == correct) {
      radio.addClass("correct");
      correctText = text;
    }

    var label = $('<label for="' + (name+i) + '">' + text + '</label>');

    div.append(radio);
    div.append(label);
    if (i != _numOptions - 1) {
      div.append('<br />');
    }
  }

  div.data('correct',correctText);
  div.data('type',TYPE.RADIO);

  return div;
}



/*******************************************************
********************************************************
SPINNER
********************************************************
********************************************************/

function createSpinner () {
  var spinner = $('<input id="spinner" name="value">');
  var correct = _.random(-50,50);

  spinner.data('correct',correct);
  spinner.data('type',TYPE.SPINNER);

  return spinner;
}


/*******************************************************
********************************************************
SLIDER
********************************************************
********************************************************/

function createSlider () {
  var slider = $('<div></div>');
  slider.data('correct',_.random(0,100));
  slider.data('type',TYPE.SLIDER);

  return slider;
}


/*******************************************************
********************************************************
PROGRESS BAR
********************************************************
********************************************************/

function createProgressBar () {
  var bar = $('<div></div>');

  bar.data('type',TYPE.PROGRESSBAR);

  return bar;
}


/*******************************************************
********************************************************
DATE PICKER
********************************************************
********************************************************/

function createDatepicker () {
  var datepicker = $('<div></div>');

  datepicker.data('type',TYPE.DATEPICKER);
  var day = _.random(1,28);
  day = day < 10 ? '0'+day : day;
  var month = _.random(1,12);
  month = month < 10 ? '0'+month : month;
  var year = _.random(2016,2018);
  var correctDate = month + '/' + day + '/' + year;
  datepicker.data('correct',correctDate);
  return datepicker;
}


/*******************************************************
********************************************************
INPUT
********************************************************
********************************************************/

function createInput () {
  var input = $('<input></input>');

  input.data('correct',generateLanguage(4,5));
  input.data('type',TYPE.INPUT);

  return input;
}


/*******************************************************
********************************************************
BUTTON
********************************************************
********************************************************/

function createButton() {
  var container = $('<div></div>');
  correctButtonLabel = generateLanguage(1,2);
  buttonId = 'button';
  button = $('<button id="' + buttonId + '" name="' + buttonId + '">'+correctButtonLabel+'</button>');
  button.button();
  container.append(button);
  return container;
}




// function createMenu(depth,maxItems,subMenuChance) {
//   if (depth == 0) return;
//   var menu = $('<ul></ul>');
//   var numItems = 1 + Math.floor(Math.random()*maxItems);
//   for (var i = 0; i < numItems; i++) {
//     var item = $('<li></li>');
//     item.append('<div>Item</div>');
//     if (Math.random() < subMenuChance) {
//       item.append(createMenu(depth-1,maxItems,subMenuChance));
//     }
//     menu.append(item);
//   }
//   menu.menu();
//   return menu;
// }

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
  var toDrag = $('<img src="assets/images/icon.png">');
  toDrag.offset({
    left: Math.floor(_.random(0,$(window).width())),
    top: Math.floor(_.random(0,$(window).height()))
  });
  toDrag.draggable();
  toDrag.selectable();

  var toDrop = $('<img src="assets/images/trash.png">');
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



var inspirationWorkSlogans = [
  "Be so good they can't ignore you",
  "Success is no accident",
  "Love what you do",
  "Stay positive and happy",
  "Be happy now",
  "Sweat, determination, and hard work",
  "Stay true to yourself",
  "Never give up",
  "Keep your dreams alive",
  "Work like you don't need the money",
  "Work hard",
  "Stay positive",
  "Follow your passion",
  "Work hard, be kind",
  "It's commitment",
  "Strive",
  "Keep going",
  "Hard work means working hard",
  "There is no substitute for hard work",
  "Teamwork",
  "We're in this together",
  "No one ever drowned in sweat",
  "Let passion drive you",
  "Hard work helps",
  "Don't wish it was easier",
  "Embrace the pain, inherit the gain",
  "Everything yields to dilligence",
  "Together everyone achieves more",
  "There is no elevator to success",
  "One person can make a difference",
  "Make the days count",
  "Nothing worth having comes easy",
  "Work hard, stay humble",
  "The harder you work, the luckier you get",
  "Keep calm and work hard",
  "Work hard, be patient",
  "There is joy in work",
  "Hard work beats talent",
  "Do it the right way every day",
  "Let success make the noise"
];
