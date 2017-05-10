'use strict';
// My do while loop is included at the bottom in the stretch section
var userName = prompt('What\'s your name????');
var languages = ['english', 'spanish', 'thai'];
var answers = ['y','yes','n', 'no' ];
var output = [];
var questions = [
  'play an instrument',
  'speak a foreign language',
  'like to gorge',
  'drive a rust bucket',
  'like scandanavian death metel',
  'Do you believe in rock and roll?',
  'Can music save your mortal soul?',
  'And can you teach me how to dance real slow?'
];


for (var i = 0; i < 5; i++) {
  while (true) {
      var userInput = prompt('Do I ' + questions[i] + '?\n Please enter y or n.').toLowerCase();
      console.log('user response: ', userInput)
      if (answers.includes(userInput)) {
          output.push(userInput);
          break;
      } else {
          alert("That is an not a valid response. Try again.");
      }
    }
}

for (var i =0; i < 6; i++) {
  var languageGuess = prompt('Can you guess what languages I speak?').toLowerCase();
  if (languages.includes(languageGuess)) {
    alert('Correct! I You got lucky.');
    output.push('y')
    break
  } else {
    alert('Nope!')
  }
}
alert('the correct answers were: ' + languages.join(", "))

var randNum = Math.floor(Math.random() * 20 + 1);
var count = 0
 do {
  var numGuess = parseInt(prompt("Guess a number between 1 and 20!!!"));
  console.log('users guess: ', numGuess)
    if (numGuess === randNum) {
      alert('Congratulations!!! You guessed correctly');
      output.push('y')
      break;
    } else {
      alert('Nope. You have ' + (4 - (count + 1)) + ' tries left');
    }
    if (count === 3) {
      alert('You\'re all out of turns. You lose!! :D')
    }
    count ++
} while (count != 4);

var correct = 0;
for (var i =0, l = output.length; i < l; i++) {
  if (['y', 'yes'].includes(output[i])) {
    correct += 1;
  }
}

alert('Congratulations ' + userName + '!!! You got ' + correct + ' question correct');


alert('last questions. I promise!!')
for (var i = 5, l = questions.length; i < l; i++){
  prompt(questions[i] + '?');
}
