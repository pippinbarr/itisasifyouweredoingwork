$(document).ready(setup);

function setup() {


  $('body').css({
    backgroundColor: '#333',
    fontSize: '1.2em',
  });

  $('#container').css({
    height: $(window).height(),
  });

  $('body').hide();

  newLevel();
}


function newLevel() {

  $('#ui').html('');
  $('#instructionsText').html('');

  var radioOptions = [generateLanguage(5,10),generateLanguage(5,10)];
  var toSelect = Math.floor(Math.random() * radioOptions.length);

  var radio = createRadio(radioOptions,'radio','radio');
  $('#ui').append(radio);

  var buttonLabel = generateLanguage(2,5);
  var button = createButton(buttonLabel,'button','button');
  button.css('float','right');
  button.click(function () {
    if ($('input[name=radio]:checked').prop('id').indexOf(toSelect) != -1) {
      $('body').fadeOut(1000,levelDelay);
    }
  });
  $('#ui').append(button);

  $('#instructionsText').text("Select " + radioOptions[toSelect] + " and then press " + buttonLabel);

  $('body').fadeIn(1000);
}

function levelDelay() {
  setTimeout(newLevel,1000);
}

function createRadio(options, name, type) {
  var container = $('<div></div>');
  for (var i = 0; i < options.length; i++) {
    var label = $('<label for="' + name + i + '">' + options[i] + '</label>')
    var radio = $('<input id="' + name + i + '" name="' + name + '" type="' + type + '">');
    container.append(label);
    container.append(radio);
    radio.checkboxradio({
      icon: true
    });
  }
  return container;
}

function addAccordion(content) {
  var accordionContent = $('<div></div>');
  for (var i = 0; i < content.length; i++) {
    accordionContent.append('<h3>' + content[i].header + '</h3>');
    accordionContent.append('<div><p>' + content[i].content + '</p></div>');
  }
  return accordionContent;
}

function createButton(text, name, type) {
  var container = $('<div></div>');
  buttonId = type;
  button = $('<button id="' + buttonId + '" name="' + buttonId + '">'+text+'</button>');
  button.button();
  container.append(button);
  return container;
}

function addDate(field) {
  date = $('<input type="text" id="date">').datepicker();
  field.append(date);
}

function createDialog(title,message) {
  var dialog = $('<div id="dialog" title="'+title+'"><p>'+message+'</p></div>');
  dialog.dialog();
  return dialog;
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

function generateLanguage(min,max) {
  var length = min + (Math.floor(Math.random() * (max - min)));
  var chars = "█▉▊▋▌▍▎▕▖▗▘▙▚▛▜▝▞▟▔▀▁▂▃▄▅▆▇ ";
  var text = '';
  for (var i = 0; i < length; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}
