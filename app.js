'use strict';

function over() {
  this.style.backgroundColor ='white';
  this.style.color = 'black';
}

function out() {
  this.style.backgroundColor ='black';
  this.style.color = 'white';
}
for (var i = 1; i < 5; i++) {
  document.getElementById('button' + i).addEventListener('mouseover', over);
  document.getElementById('button' + i).addEventListener('mouseout', out);
}

// My do while loop is included at the bottom in the stretch section
var userName = prompt('What\'s your name????');
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
  for (var i = 0, l = turns; i < l; i++) {

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
};

for (var i = 0, l = questions.length; i < 5; i++) {
  quesGen(questions[i][0] + ' Answer y or n!', questions[i][1], 'Nope, that ain\'t the right anwser', 'Yup, you got it!', 1, ['y', 'n', 'no', 'yes']);
}

quesGen("what languages do I speak?", languages, 'Nope, try again', 'Nice job! you got lucky', 6, undefined);
alert('the correct answers were: ' + languages.join(", "));

var randNum = Math.floor(Math.random() * 20 + 1).toString();
quesGen('Guess a number between 1 and 20', [randNum], "Nope try again!", 'Hell yeah dawg, you got it!', 4, undefined);

var correct = output.length;

alert('Congratulations ' + userName + '!!! You got ' + correct + ' question correct');
