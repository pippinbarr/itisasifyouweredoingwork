$(document).ready(setup);

function setup() {

  var label = "Label";

  $('body').css('background-color','#333');

  // button = $('<button id="button">' + label + '</button>');
  // button.button();
  // $('#ui').append(button);

  var fieldset = $('<fieldset></fieldset>');

  radioField = $('<div></div>');
  addRadio(radioField, "Test", 1, "radiotest", "radio");
  addRadio(radioField, "Best", 2, "radiotest", "radio")
  fieldset.append(radioField);

  checkField = $('<div></div>');
  addRadio(checkField, "Test", 1, "checktest", "checkbox");
  addRadio(checkField, "Best", 2, "checktest", "checkbox")
  fieldset.append(checkField);

  buttonField = $('<div></div>');
  addButton(buttonField, "Test", 1, "button", "button");
  addButton(buttonField, "Best", 2, "button", "button")
  fieldset.append(buttonField);

  dateField = $('<div></div>');
  addDate(dateField);
  fieldset.append(dateField);

  // theDialog = $('<div></div>');
  // theDialog.append(createDialog("Title","Message"));
  // fieldset.append(theDialog);

  menu = createMenu(8,10,0.5);
  fieldset.append(menu);

  accordionContent = [
    {
      header: "Heading",
      content: "Lorem ipsum dolitor est molitor and so on and so forth"
    },
    {
      header: "Heading",
      content: "Content"
    },
    {
      header: "Heading",
      content: "Content"
    },
  ]
  accordionDiv = addAccordion(accordionContent);
  accordionDiv.accordion();
  fieldset.append(accordionDiv);

  $('#ui').append(fieldset);
  $('#ui').controlgroup();
}

function addRadio(field, text, number, name, type) {
  radioName = type + number;
  label = $('<label for="' + radioName + '">' + text + '</label>')
  radio = $('<input id="' + radioName + '" name="' + name + '" type="' + type + '">');
  field.append(label);
  field.append(radio);
  radio.checkboxradio({
    icon: true
  });
}

function addAccordion(content) {
  var accordionContent = $('<div></div>');
  for (var i = 0; i < content.length; i++) {
    accordionContent.append('<h3>' + content[i].header + '</h3>');
    accordionContent.append('<div><p>' + content[i].content + '</p></div>');
  }
  return accordionContent;
}

function addButton(field, text, number, name, type) {
  buttonId = type + number;
  button = $('<button id="' + buttonId + '" name="' + buttonId + '">'+text+'</button>');
  button.button();
  field.append(button);
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
