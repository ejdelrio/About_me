'use strict';

var answers = [];
var questions = [
  'play an instrument',
  'speak a foreign language',
  'know how to dance',
  'have any children',
  'like scandanavian death metel',
  'Do you believe in rock and roll?',
  'Can music save your mortal soul?',
  'And can you teach me how to dance real slow?'
]

for (var i = 0; i < 5; i++) {

}


//These are the stretch goals from github

var randNum = Math.floor(Math.random() * 20 + 1);
for (var i = 0; i < 5; i++) {
  var numGuess = prompt("Guess a number between 1 and 20!!!");
  console.log('users guess: ', numGuess)
    if (numGuess === randNum) {
      alert('Congratulations!!! You guessed correctly');
      break;
    } else {
      alert('Nope. You have ' + (5 - ( i + 1 )) + ' tries left');
    }
    if (i === 4) {
      alert('You\'re all out of turns. You lose!! :D')
    }
}
