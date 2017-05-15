'use strict';

function over() {
  //Inverts the color of an element when the mouse is over it.
  this.style.background = 'white';
  this.style.color = 'black';
}

function off() {
  //Returns to original color when mouse is removed from element.
  this.style.background = 'black';
  this.style.color = 'white';
}

var navButtons = document.getElementsByClassName('nav_button');

for (var i = 0, l = navButtons.length; i < l; i++) {
  navButtons[i].addEventListener('mouseover', over);
  navButtons[i].addEventListener('mouseout', off);
}

document.getElementById('submit').addEventListener('mouseover', over);
document.getElementById('submit').addEventListener('mouseout', off);

// My do while loop is included at the bottom in the stretch section
var languages = ['english', 'spanish', 'thai'];
var correct = 0;
var randNum = Math.floor(Math.random() * 10 + 1).toString();
var questions = [
  'yes',
  'yes',
  'no',
  'yes',
  'no'
];
var buttons = ['first_q', 'second_q', 'third_q', 'fourth_q', 'fifth_q'];
var button_outputs = [];
for (i = 0; i < 5; i++) {
  for (l = 0; l < 2; l++) {
    if (document.getElementsByName(buttons[i])[l].checked) {
      button_outputs.push(document.getElementsByName(buttons[i])[l]);
    }
  }
}


function quesGen(solution, input) {
  console.log(input);
  console.log(solution);
  if (solution === input) {
    correct += 1;
  }
}

function submitClick() {
  for (i = 0, l = button_outputs.length; i < l; i++) {
    quesGen(questions[i], button_outputs[i].value);
  }
  var multipeChoice = document.getElementsByClassName('w3-input');
  if (languages.includes((multipeChoice[0].value).toLowerCase)) {
    correct += 1;
  }
  quesGen(randNum, multipeChoice[1].value);

  alert('Out of 7 questions you got ' + correct + ' correct!!');
}

document.getElementById('submit').addEventListener('click', submitClick);
