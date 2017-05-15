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


function quesGen(solution, input) {
  console.log(input);
  console.log(solution);
  if (solution === input) {
    correct += 1;
    console.log(correct);
  }
}

function submitClick() {
  for (var i = 0; i < 5; i++) {
    var numButton = document.getElementsByName(buttons[i]);
    console.log(numButton);
    for (var l = 0; l < 2; l++) {
      if (numButton[l].checked) {
        quesGen(questions[i], numButton[l].value);
      }
    }
  }
  if (languages.includes((document.getElementsByClassName('w3-input')[0].value).toLowerCase())) {
    correct += 1;
  }
  if (document.getElementsByClassName('w3-input')[1].value === randNum.toString()) {
    correct += 1;
  }
  alert('Thanks for the quiz. You got ' + correct + ' questions correct.');
  correct = 0;
}


document.getElementById('submit').addEventListener('click', submitClick);
