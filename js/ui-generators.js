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

const NUM_STOCK = 17;
const UNITS_PER_CHARACTER = 2;
const UNITS_PER_DIALOG = 50;

var startupSFX;
var newDialogSFX;
var dialogSuccessSFX;
var dialogFailureSFX;
var promotionSFX;

var audioLoaded = false;

var music;

var breakoutDialog;

var quotes = [];


function loadSounds () {
  startupSFX = new Audio('assets/sounds/startup.wav');
  newDialogSFX = new Audio('assets/sounds/dialog_new.wav');
  dialogSuccessSFX = new Audio('assets/sounds/dialog_success.wav');
  dialogFailureSFX = new Audio('assets/sounds/dialog_failure.wav');
  promotionSFX = new Audio('assets/sounds/promotion.wav');
  breakSFX = new Audio('assets/sounds/break.wav');

  music = new Audio();
  music.loop = true;
  music.volume = 0.5;

  breakSFX.addEventListener('loadeddata', function () {
    console.log("Loaded audio...");
    audioLoaded = true;
  });
}

// function loadTexts () {
//   $.get("assets/texts/quotes.txt", function (text) {
//     quotes = text.split('\n');
//   });
// }

function loadIcons() {
  createIcon("display", 32, 64*1, createDesktopDialog);
  createIcon("music", 32, 64*3, createMusicDialog);
  createIcon("game", 32, 64*5, function () {
    if (state == STATE.BREAK) {
      window.dispatchEvent(new Event("start-game"));
      breakoutDialog.dialog('open');
    }
    else {
      createSimpleDialog("Uh-oh!","breakout-forbidden","You can't play Breakout unless you're on a break!","Okay",true, '400');
    }
  });
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

function createBreakoutDialog () {

  console.log("Sending stop-game event");
  window.dispatchEvent(new Event("stop-game"));

  var title = "Take a break!";
  var dialogDiv = $('<div class="dialog" id="breakout-dialog" title="'+title+'"></div>');

  dialogDiv.append($('#gameContainer'));

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    draggable: true,
    height: "auto",
    width: '480',
    modal: false,
    autoOpen: false,
    buttons: {},
    close: function () {
      window.dispatchEvent(new Event("stop-game"));
    }
  };

  breakoutDialog = createDialog(dialogDiv, dialogOptions, false);

  breakoutDialog.css({
    padding: 0,
    margin: 0
  });

}

function createMenuBar () {
  var menubar = $('<div class="menu-bar" id="menubar"></div>');
  menubar.css({
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '2px solid grey',
    fontFamily: "sans-serif",
    lineHeight: "30px",
  });


  rank = getRank();
  var menubarRank = $('<div id="menubar-rank"><b>Rank:</b> <span id="menubar-rank-text">' + rank + '</span></div>');
  menubarRank.css({
    // marginLeft: 20,
    // left: '0%',
    // width: '320px',
    width: '38%',
    display: 'inline-block',
    paddingLeft: '2%',
    // backgroundColor: 'red'
    // boxSizing: 'border-box',
    // position: 'relative',

  });

  var menubarUnits = $('<div id="menubar-units"><b>Work Units to Promotion:</b> <span id="menubar-units-text">' + workUnitsToPromotion + '</span></div>');
  menubarUnits.css({
    // left: '33%',
    // width: '320px',
    width: '38%',
    // float: 'left',
    display: 'inline-block',
    paddingLeft: '2%',
    // boxSizing: 'border-box',
    // position: 'relative',
    // marginLeft: 20
    // backgroundColor: 'grey'
  });

  var menubarUsername = $('<div id="menubar-username">'+username+'</div>');
  menubarUsername.css({
    // left: '66%',
    // width: '160px',
    width: '18%',
    display: 'inline-block',
    float: 'right',
    textAlign: 'right',
    paddingRight: '2%',
    // backgroundColor: 'green'
    // boxSizing: 'border-box',
    // position: 'relative',
    // marginRight: 20,
    // fontWeight: "bold",
  });

  menubar.append(menubarRank);
  menubar.append(menubarUnits);
  menubar.append(menubarUsername);

  $('#ui').append(menubar);
}

function createLoginDialog () {
  var title = "Login";
  var dialogDiv = $('<div class="dialog" id="login-dialog" title="'+title+'"></div>');
  var usernameField = $('<input id="usernameInput" type="text" maxlength="10"></input>');
  var passwordField = $('<input id="passwordInput" type="password"></input>');
  usernameField.css('border', '1px solid black')
  passwordField.css('border', '1px solid black')


  dialogDiv.append('<div><h3>It is as if you were doing work v1.0</h3></div>')
  dialogDiv.append('<div><p>Please login with your work credentials</p></div>')
  dialogDiv.append('<label id="usernameLabel">Username:</label><br />');
  dialogDiv.append(usernameField);
  dialogDiv.append('<p></p>');
  dialogDiv.append('<label id="passwordLabel">Password:</label><br />');
  dialogDiv.append(passwordField);

  var dialogOptions = {
    appendTo: '#ui',
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
        $(this).dialog('destroy');
        setTimeout(function () {
          setDesktop('cat');
          showDesktop();
        },1000);
      }
    },
  };

  createDialog(dialogDiv, dialogOptions, false, true);

  dialogDiv.parent().find(".ui-dialog-titlebar-close").hide();
}


function createReadyDialog () {
  var title = "Start Work!";
  var dialogDiv = $('<div class="dialog" id="ready-dialog" title="'+title+'"></div>');
  dialogDiv.append("<p>Ready to start work?</p>")

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    draggable: false,
    height: "auto",
    width: '400',
    modal: true,
    autoOpen: true,
    buttons: {
      "Let's go!": function () {
        startWork();
        $(this).dialog('destroy');
      },
      "Not yet...": function () {
        startDelayedWork();
        $(this).dialog('destroy');
      }
    }
  };

  createDialog(dialogDiv, dialogOptions, false);

  dialogDiv.parent().find(".ui-dialog-titlebar-close").hide();
}


function createDelayedWorkDialog () {
  var title = "Get Ready!";
  var dialogDiv = $('<div class="dialog" id="work-delay-dialog" title="'+title+'"></div>');
  dialogDiv.append("<p>Work will start when the progress bar is full!</p>")

  var progressbar = createProgressBar();

  progressbar.appendTo(dialogDiv);

  progressbar.progressbar({
    value: 0,
    max: 100,
  });

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    draggable: false,
    height: "auto",
    width: '400',
    modal: true,
    autoOpen: true,
    buttons: {},
    closeOnEscape: false
  }

  createDialog(dialogDiv, dialogOptions, false);

  dialogDiv.parent().find(".ui-dialog-titlebar-close").hide();

  // Set up increasing progress bar
  var progressInterval = setInterval(function () {
    var val = $(this).progressbar('value');
    val += 1;
    $(this).progressbar('value',val);

    if (val >= 100) {
      $(this).parent().dialog('destroy');
      clearTimeout(progressInterval);
      startWork();
    }
  }.bind(progressbar),100);
}



function createBreakDialog () {
  var title = "Time for a break!";
  var dialogDiv = $('<div class="dialog" id="break-dialog" title="'+title+'"></div>');
  dialogDiv.append("<p>It's time for a well-deserved break!</p>");
  dialogDiv.append("<p>Break time is over when the progress bar is full!</p>");

  var progressbar = createProgressBar();

  progressbar.appendTo(dialogDiv);

  progressbar.progressbar({
    value: 0,
    max: 100,
  });

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    draggable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {},
    closeOnEscape: false
  }

  createDialog(dialogDiv, dialogOptions, false);


  dialogDiv.parent().find(".ui-dialog-titlebar-close").hide();

  // Set up increasing progress bar
  var progressInterval = setInterval(function () {
    var val = $(this).progressbar('value');
    val += 100/(BREAK_TIME/PROGRESS_INTERVAL);
    $(this).progressbar('value',val);

    if (val >= 100) {
      $(this).parent().dialog('destroy');
      $('#breakout-dialog').dialog('close');
      clearTimeout(progressInterval);
      startWork();
    }
  }.bind(progressbar),PROGRESS_INTERVAL);
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
    appendTo: '#ui',
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {
      "Okay": function () {
        playSound(dialogSuccessSFX);
        updateWorkUnits(UNITS_PER_DIALOG);
        $(this).dialog('close');
      },
    }
  };

  createDialog(dialogDiv, dialogOptions, true);


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
    appendTo: '#ui',
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {
      "Okay": function () {
        playSound(dialogSuccessSFX);
        updateWorkUnits(UNITS_PER_DIALOG);
        $(this).dialog('close');
      },
    }
  };

  createDialog(dialogDiv, dialogOptions, true);
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
  // playSound(newDialogSFX);

  var title = inspirationWorkSlogans[_.random(0,inspirationWorkSlogans.length-1)];
  var dialogDiv = $('<div class="dialog inspirational-dialog" title="'+title+'"></div>');

  var imgNumber = _.random(1,17);
  var imgFile = 'assets/images/stock/stock_' + imgNumber + '.jpg';
  var image = $('<img src="'+imgFile+'">');
  image.css({
    width: '100%',
    height: 'auto'
  })
  dialogDiv.append(image);

  var dialogOptions = {
    appendTo: '#ui',
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
  // playSound(newDialogSFX);

  var title = technologies[_.random(0,technologies.length-1)];
  var dialogDiv = $('<div class="dialog work-dialog" title="'+title+'"></div>');

  var option = 1;
  var numSteps = _.random(0,1);

  var elements = [];

  for (option = 1; option <= numSteps; option++) {

    var keys = Object.keys(TYPE)
    type = TYPE[keys[ keys.length * Math.random() << 0]];

    // var type = TYPE.SLIDER;

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
  var buttonsArray = []

  for (var i = 0; i < numButtons; i++) {
    var labelDuplicate = true;
    while (labelDuplicate) {

      var label = buttonLabels[_.random(0,buttonLabels.length)];
      labelDuplicate = false;

      for (var j = 0; j < buttonsArray.length; j++) {
        if (buttonsArray[j] == label) {
          labelDuplicate = true;
          break;
        }
      }

    }
    buttonsArray.push(label);
  }
  var correctButton = _.random(0,buttonsArray.length-1);

  var dialogOptions = {
    appendTo: '#ui',
    resizable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {},
    beforeClose: function () {
      console.log("Before close");
      if (!$(this).parent().data('correct')) {
        playSound(dialogFailureSFX);
        $(this).parent().effect('shake',{distance:4});
        return false;
      }
    }
  };


  // EVALUATION

  var dialogCorrect = true;

  for (var i = 0; i < buttonsArray.length; i++) {
    if (!dialogCorrect) break;
    if (i == correctButton) {
      dialogOptions.buttons[buttonsArray[i]] = function () {
        dialogCorrect = true;

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
          dialogDiv.parent().data('correct',false);
          playSound(dialogFailureSFX);
          $(this).parent().effect('shake',{distance:4});
        }
        else {
          dialogDiv.parent().data('correct',true);
          playSound(dialogSuccessSFX);
          updateWorkUnits(UNITS_PER_DIALOG);
          $(this).dialog("destroy");
        }
      }
    }
    else {
      dialogOptions.buttons[buttonsArray[i]] = function () {
        console.log("Incorrect dialog button!");
        playSound(dialogFailureSFX);
        $(this).parent().effect('shake',{distance:4});
      }
    }
  }

  dialogDiv.append('<p>'+(option)+'. Click ' + buttonsArray[correctButton] + '</p>')

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

function createWindowSizeDialog () {
  var d = createSimpleDialog("Window too small!","window-size-dialog","<p>You can't get any work done with a browser width that narrow!</p><p>Make it bigger!</p>",null,false,'80%',true,'#wrapper');

  d.parent().css('z-index',1001);

  return d;
}

function createSimpleDialog (title, id, content, closeButtonName, random, width, center, appendTo) {
  var div = $('<div class="dialog simple-dialog" id="'+id+'" title="'+title+'">'+content+'</div>');
  if (!appendTo) appendTo = '#ui';
  var options = {
    appendTo: appendTo,
    resizable: false,
    height: "auto",
    width: width,
    modal: false,
    autoOpen: true,
    buttons: {},
  };

  if (closeButtonName) {
    options.buttons[closeButtonName] = function () {
      playSound(dialogSuccessSFX);
      updateWorkUnits(UNITS_PER_DIALOG);
      $(this).dialog('destroy');
    }
  }
  var d = createDialog(div,options,random);

  div.parent().find(".ui-dialog-titlebar-close").hide();

  return div;
}


function createDialog(div, options, random, stationary) {

  options.open = function () {
    playSound(newDialogSFX);
  }

  var dialog = div.dialog(options);

  if (random) {
    var x = _.random(0,$(window).width() - div.parent().width());
    var y = _.random($('.menu-bar').height(),$(window).height() - div.parent().height());
    div.parent().offset({
      top: y,
      left: x
    });
  }

  if (stationary) return;

  div.parent().draggable({
    containment: [0, $('.menu-bar').height(), $(window).width() - div.parent().width() - 10, $(window).height() - div.parent().height()]
  });

  return dialog;
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
    var text = technologies[_.random(0,technologies.length)];
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
    var text = technologies[_.random(0,technologies.length)];
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
    var text = technologies[_.random(0,technologies.length)];
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

  input.data('correct',technologies[_.random(0,technologies.length)]);
  input.data('type',TYPE.INPUT);

  return input;
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


function createDocumentDialog () {
  var title = inspirationWorkSlogans[_.random(0,inspirationWorkSlogans.length-1)];
  var div = $('<div class="dialog document-dialog" title="'+ title + '"></div>');
  var requiredCharacters = _.random(200,1000);
  var instruction1 = $('<span>Write and save a document of at least '+ requiredCharacters +' characters (currently </span>');
  var charactersSpan = $('<span>0</span>');
  var instruction2 = $('<span>)</span>');
  var input = $('<textarea class="document-input"></textarea>');

  var quoteIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  var quoteChar = 0;
  var characters = 0;

  var instruction = $('<p></p>');
  instruction.append(instruction1, charactersSpan, instruction2);
  div.append(instruction);
  div.append(input);

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    // position: {
    //   my: 'right center',
    //   at: 'right center',
    //   of: window
    // },
    height: "auto",
    width: '600',
    modal: false,
    autoOpen: true,
    buttons: {
      "Save": function () {
        if (characters >= requiredCharacters) {
          updateWorkUnits(UNITS_PER_DIALOG);
          playSound(dialogSuccessSFX);
          $(this).dialog('destroy');
        }
        else {
          playSound(dialogFailureSFX);
          $(this).parent().effect('shake',{distance:4});
        }
      },
    },
    beforeClose: function () {
      console.log("Before close");
      if (!$(this).parent().data('correct')) {
        playSound(dialogFailureSFX);
        $(this).parent().effect('shake',{distance:4});
        return false;
      }
    }

  };

  createDialog(div,dialogOptions,true);

  input.on('keypress', function (e) {
    e.preventDefault();
    var char = inspirationalQuotes[quoteIndex].charAt(quoteChar);
    input.append(char);
    quoteChar++;
    characters++;
    $(this).parent().data('correct',(characters >= requiredCharacters));
    input.scrollTop(9999999);
    charactersSpan.text(characters);
    updateWorkUnits(UNITS_PER_CHARACTER);
    if (quoteChar == inspirationalQuotes[quoteIndex].length) {
      quoteChar = 0;
      quoteIndex = _.random(0,inspirationalQuotes.length-1);
      if (Math.random() < 0.5) {
        input.append('\n\n');
      }
      else {
        input.append(' ');
      }
    }
  });
  input.on('copy paste cut', function (e) {
    e.preventDefault();
    return false;
  });
}


function createEmailDialog () {

  var title = "Email";
  var div = $('<div class="dialog email-dialog" title="'+ title + '"></div>');
  var requiredCharacters = _.random(200,1000);
  var instruction1 = $('<span>Write and send an email of at least '+ requiredCharacters +' characters (currently </span>');
  var charactersSpan = $('<span>0</span>');
  var instruction2 = $('<span>)</span>');

  var email = technologies[_.random(0,technologies.length-1)].replace(/ /g,".").toLowerCase();
  email += "@" + technologies[_.random(0,technologies.length-1)].replace(/ /g,"").toLowerCase();
  email += ".com";

  var to = $('<span name="email-to-field" class="email-field">'+email+'</span>');

  var subjectText = "Re: " + technologies[_.random(0,technologies.length-1)];
  var subject = $('<span name="email-subject-field" class="email-field">'+subjectText+'</span>')
  var input = $('<textarea class="email-input"></textarea>');

  var quoteIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  var quoteChar = 0;
  var characters = 0;

  var instruction = $('<p></p>');
  instruction.append(instruction1, charactersSpan, instruction2);
  div.append(instruction);
  div.append('<p>')
  div.append('<label for="email-to-field" class="email-field-label">To:</label>',to);
  // div.append('<p>')
  div.append('<label for="email-subject-field" class="email-field-label">Subject:</label>',subject);
  div.append('<p></p>');
  div.append(input);

  var dialogOptions = {
    appendTo: '#ui',
    resizable: true,
    height: "auto",
    width: '600',
    modal: false,
    autoOpen: true,
    buttons: {
      "Save": function () {
        if (characters >= requiredCharacters) {
          updateWorkUnits(UNITS_PER_DIALOG);
          playSound(dialogSuccessSFX);
          $(this).dialog('destroy');
        }
        else {
          playSound(dialogFailureSFX);
          $(this).parent().effect('shake',{distance:4});
        }
      },
    },
    beforeClose: function () {
      console.log("Before close");
      if (!$(this).parent().data('correct')) {
        playSound(dialogFailureSFX);
        $(this).parent().effect('shake',{distance:4});
        return false;
      }
    }

  };

  createDialog(div, dialogOptions, true);

  input.on('keypress', function (e) {
    e.preventDefault();
    $(this).append(inspirationalQuotes[quoteIndex].charAt(quoteChar));
    quoteChar++;
    characters++;
    $(this).parent().data('correct',(characters >= requiredCharacters));
    charactersSpan.text(characters);
    updateWorkUnits(UNITS_PER_CHARACTER);
    input.scrollTop(9999999);

    if (quoteChar == inspirationalQuotes[quoteIndex].length) {
      quoteChar = 0;
      quoteIndex = _.random(0,inspirationalQuotes.length-1);
      if (Math.random() < 0.5) {
        input.append('\n\n');
      }
      else {
        input.append(' ');
      }
    }
  });
  input.on('copy paste cut', function (e) {
    e.preventDefault();
    return false;
  });
}

function getRank() {
  var intensifier = jobTitler.intensifier[_.random(0,jobTitler.intensifier.length-1)]
  var subject = jobTitler.subject[_.random(0,jobTitler.subject.length-1)]
  var action = jobTitler.action[_.random(0,jobTitler.action.length-1)]
  return intensifier + ' ' + subject + ' ' + action;
}


function updateWorkUnits(num) {
  workUnitsToPromotion -= num;
  $('#menubar-units-text').text(workUnitsToPromotion);
  if (workUnitsToPromotion <= 0) {
    givePromotion();
    resetWorkUnits();
  }
}

function givePromotion() {
  playSound(promotionSFX);
  rank = getRank();
  $('#menubar-rank-text').text(rank);
  createPromotionDialog(rank);
}


function resetWorkUnits () {
  workUnitsToPromotion = WORK_UNITS_FOR_PROMOTION;
  $('#menubar-units-text').text(workUnitsToPromotion);
}


function createPromotionDialog (newRank) {

  var dialogDiv = $('<div class="dialog promotion-dialog" title="Promotion!"></div>');
  dialogDiv.append("<p>You got a promotion!</p>");
  dialogDiv.append("<p>Now you're a <b>" + newRank + "</b>!<p>");
  dialogDiv.append("<p>Keep working hard!<p>");

  var dialogOptions = {
    appendTo: '#ui',
    resizable: false,
    draggable: true,
    height: "auto",
    width: '400',
    modal: false,
    autoOpen: true,
    buttons: {
      "Okay": function () {
        playSound(dialogSuccessSFX);
        updateWorkUnits(UNITS_PER_DIALOG);
        $(this).dialog('destroy');
      }
    },
    closeOnEscape: false
  }

  createDialog(dialogDiv,dialogOptions,true);

  dialogDiv.parent().find(".ui-dialog-titlebar-close").hide();
}


function playSound (sound) {
  sound.currentTime = 0;
  sound.play();
}
