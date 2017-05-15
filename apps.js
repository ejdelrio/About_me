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
//For loop adds eventlistener with over and off function to nav buttons
for (var i = 0, l = navButtons.length; i < l; i++) {
  navButtons[i].addEventListener('mouseover', over);
  navButtons[i].addEventListener('mouseout', off);
}
//Adds event listener with over and off functions to subit button
document.getElementById('submit').addEventListener('mouseover', over);
document.getElementById('submit').addEventListener('mouseout', off);

// My do while loop is included at the bottom in the stretch section
var lanGuess = 4; //Turns for language input
var numGuess = 6; //Turns for number inout
var languages = ['english', 'spanish', 'thai']; //Solutions for language input
var correct = 0; //counter used for correct answers
var randNum = Math.floor(Math.random() * 20 + 1).toString();
var questions = [
  'yes',
  'yes',
  'no',
  'yes',
  'no'
];
var buttons = ['first_q', 'second_q', 'third_q', 'fourth_q', 'fifth_q'];


function quesGen(solution, input) {
  //Function that compares answer to input and adds one to score if true;
  if (solution === input) {
    correct += 1;
  }
}

function submitClick() {

  for (var i = 0; i < 5; i++) {
    var numButton = document.getElementsByName(buttons[i]);
    for (var l = 0; l < 2; l++) {
      //Enters checked radio button values into quesGen function with questions array items
      //If a turn is used on the raio buttons, their disabled value becomes true.
      if (numButton[l].checked) {
        quesGen(questions[i], numButton[l].value);
        document.getElementsByName(buttons[i])[0].disabled = true;
        document.getElementsByName(buttons[i])[1].disabled = true;
      }
    }
  }

  //Assigns input values to easy to read variables
  var langValue = document.getElementsByClassName('w3-input')[0].value;
  var numValue = document.getElementsByClassName('w3-input')[1].value;

  //compares language question input to language array to see if includes === true
  if (languages.includes(langValue.toLowerCase())) {
    correct += 1;
  }// Checks number question input to see if input === randonmly generated number
  if (numValue.value === randNum.toString()) {
    correct += 1;
  }
  alert('Thanks for the quiz. You got ' + correct + ' questions correct.');
  //Resets correct value after every click of the submit button
  correct = 0;
  //if statements prevent turn counter from becoming negative numbers
  //Also checks to see if input is empty, if true, turn counter remains contstant
  if (numGuess != 0 && numValue != '') {
    numGuess -= 1;
  }
  if (lanGuess != 0 && langValue != ''){
    lanGuess -= 1;
  }
  //Changes the innerHTML to display the remaining amount of turns for input questions.
  document.getElementsByClassName('question multiple')[0].childNodes[7].innerHTML = 'You have ' + lanGuess + ' turns left.';
  document.getElementsByClassName('question multiple')[1].childNodes[7].innerHTML = 'You have ' + numGuess + ' turns left.';
  //Disables input when turns = 0 for each element
  if (numGuess === 0) {
    document.getElementsByClassName('w3-input')[1].disabled = true;
  }
  if (lanGuess === 0) {
    document.getElementsByClassName('w3-input')[0].disabled = true;
  }
}

//Event listener for submit button to tally score.
document.getElementById('submit').addEventListener('click', submitClick);
