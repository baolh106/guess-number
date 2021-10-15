'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
};
//When you check
document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('input').value);
   //When value error
   if (!guess) {
      displayMessage('No number!');
   }
   //When you win
   else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('body').style =
         'background: linear-gradient(68.66deg, #24AD49 0%, #E0DA3C 100%)';
      document.querySelector('.secret-number span').textContent = secretNumber;
      if (score > highScore) {
         highScore = score;
         document.querySelector('.highscore span').textContent = highScore;
      }
   }
   //When you wrong
   else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
         score--;
         document.querySelector('.score span').textContent = score;
      } else {
         displayMessage('You lost the game!');
         document.querySelector('.score span').textContent = 0;
      }
   }
});

document.querySelector('.btn-again').addEventListener('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   displayMessage('START GUESSING!');
   document.querySelector('.score span').textContent = score;
   document.querySelector('body').style =
      'background: linear-gradient(68.66deg, #1A2A6C 0%, #B21F1F 51.04%, #FDBB2D 100%)';
   document.querySelector('.secret-number span').textContent = '?';
   document.querySelector('input').value = '';
});
