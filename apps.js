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

// My do while loop is included at the bottom in the stretch section
var languages = ['english', 'spanish', 'thai'];
var output = [];
var questions = [
  ['Do I play an instrument?', ['yes', 'y']],
  ['Do I speak a foreign language?', ['yes', 'y']],
  ['Am I from Seattle?', ['no', 'n']],
  ['Do I drive a rust bucket?', ['yes', 'y']],
  ['Do I like country music?', ['no', 'n']]
];

function quesGen(ques, sol, wrong, right, turns, reqs) {
  /*function that takes 6 arguements; a prompt for a question, an array of solutions,
  an alert for a correct answer, an alert for an incorrect answer,
  the number of turns, and an array of restricted answers */
  if (!reqs) {
    reqs = undefined;
  }
  for (var i = 0, l = turns; i < l; i++) {
    //While loop is intentional. Linter error is unavoidable
    while (true) {

      var userInput = prompt(ques).toLowerCase();
      console.log ('user reponse: ', userInput);

      if (sol.includes(userInput)) {
        output.push('correct');
        alert(right);
        return;
      } else if (reqs !== undefined && reqs.includes(userInput) === false) {
        alert('That is not a valid respnse');
      } else {
        alert(wrong);
        break;
      }
    }
  }
}

function quizClick() {
  var userName = prompt('What\'s your name????');

  for (var i = 0, l = questions.length; i < l; i++) {
    quesGen(questions[i][0] + ' Answer y or n!', questions[i][1], 'Nope, that ain\'t the right anwser', 'Yup, you got it!', 1, ['y', 'n', 'no', 'yes']);
  }

  quesGen('what languages do I speak?', languages, 'Nope, try again', 'Nice job! you got lucky', 6);
  alert('the correct answers were: ' + languages.join(', '));

  var randNum = Math.floor(Math.random() * 20 + 1).toString();
  quesGen('Guess a number between 1 and 20', [randNum], 'Nope try again!', 'Hell yeah dawg, you got it!', 4);

  alert('Congratulations ' + userName + '!!! You got ' + output.length + ' question correct');
}

navButtons[2].addEventListener('click', quizClick);
