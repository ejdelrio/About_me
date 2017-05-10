'use strict';
// My do whil loop is included at the bottom in the stretch section
var answers = ['y','yes','n', 'no' ];
var output = [];
var questions = [
  'play an instrument',
  'speak a foreign language',
  'know how to dance',
  'have any children',
  'like scandanavian death metel',
  'like the backstreet boys',
  'Do you believe in rock and roll?',
  'Can music save your mortal soul?',
  'And can you teach me how to dance real slow?'
];

for (var i = 0; i < 6; i++) {
  while (true) {
      var userInput = prompt('Do you ' + questions[i] + '?\n Please enter y or n.').toLowerCase();
      console.log('user response: ', userInput)
      if (answers.includes(userInput)) {
          ouput.push(userInput);
          break;
      } else {
          alert("That is an not a valid response. Try again.");
      }
    }
}



//These are the stretch goals from github

var randNum = Math.floor(Math.random() * 20 + 1);
var count = 0
 do {
  var numGuess = parseInt(prompt("Guess a number between 1 and 20!!!"));
  console.log('users guess: ', numGuess)
    if (numGuess === randNum) {
      alert('Congratulations!!! You guessed correctly');
      break;
    } else {
      alert('Nope. You have ' + (5 - (count + 1)) + ' tries left');
    }
    if (count === 4) {
      alert('You\'re all out of turns. You lose!! :D')
    }
    count ++
} while (count != 5);
