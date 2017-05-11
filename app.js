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
var answers = ['y','yes','n', 'no' ];
var output = [];
var questions = [
  'Do I play an instrument?',
  'Do I speak a foreign language?',
  'Do I like to gorge?',
  'Do I drive a rust bucket?',
  'Do I like scandanavian death metel?',
  'Do you believe in rock and roll?',
  'Can music save your mortal soul?',
  'And can you teach me how to dance real slow?'
];

function quiz(genOutput, turns, quest, sol, right) {
  for (var i = 0, l = turns; i < l; i++) {
    while (true) {
      var userInput = prompt(quest).toLowerCase();
      console.log ('user reponse: ', userInput);
      if (sol.includes(userInput)) {
        output.push(userInput);
        alert(right);
        return null
      } else {
        alert(genOutput);
        break;
      }
    }
  }
}

for (var i = 0; i < 5; i++) {
  quiz('That is not a valid reponse.', 1, questions[i], answers, 'Thank you.');
}

quiz('Nope.', 6, 'What languages do I speak?', languages, 'You got it right.')
alert('the correct answers were: ' + languages.join(", "))

var randNum = Math.floor(Math.random() * 20 + 1);
var count = 0
 quiz('You got it wrong.', 4, 'Guess a number between 1 and 20', [randNum], 'Good job, you got it right. ')

var correct = 0;
for (var i =0, l = output.length; i < l; i++) {
  if (['y', 'yes'].includes(output[i])) {
    correct += 1;
  }
}

alert('Congratulations ' + userName + '!!! You got ' + correct + ' question correct');
