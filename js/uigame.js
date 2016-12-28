$(document).ready(setup);

function setup() {

  var label = "Label";

  $('body').css('background-color','#333');

  // button = $('<button id="button">' + label + '</button>');
  // button.button();
  // $('#ui').append(button);

  radioField = $('<fieldset></fieldset>');
  addRadio(radioField, "Test", 1, "radiotest", "radio");
  addRadio(radioField, "Best", 2, "radiotest", "radio")
  $('#ui').append(radioField);

  checkField = $('<fieldset></fieldset>');
  addRadio(checkField, "Test", 1, "checktest", "checkbox");
  addRadio(checkField, "Best", 2, "checktest", "checkbox")
  $('#ui').append(checkField);

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
return;
  setTimeout(function () {
    // Trying to work out how to style the dot in the radio button
    // $('ui-widget').css('border-width','20px');
    $('.ui-checkboxradio-label').css("border-width","2px")
    $('.ui-checkboxradio-label').css("background-color","red")
    $('.ui-checkboxradio-label').css("color","red")
    // $('.ui-checkboxradio-label').css("margin-right","20px")

    $('.ui-checkboxradio-label.ui-state-active').css("margin-right","20px")

    $('.ui-checkboxradio-icon').css("color","red")
    $('.ui-checkboxradio-icon').css("background-color","red")
  },10);
}
