window.addEventListener('load', init);

//Globals
//Available levels
const levels = {
  easy: 4,
  medium: 3,
  hard: 2,
}
//Change level
const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//list of Words to guess
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'quartz',
  'messy',
  'suggest',
  'present',
  'feigned',
  'clever',
  'crib',
  'wash',
  'quizzical',
  'purpose',
  'pocket',
  'victorious',
  'cuddly',
  'reach',
  'peel',
  'judge',
  'question',
  'amused',
  'rot',
  'shocking',
  'join',
  'live',
  'third',
  'nerve',
  'scary',
  'camp',
  'bump',
  'lethal',
  'horn',
  'dance',
  'pointless',
  'sneeze',
  'impress',
  'tick',
  'anger',
  'abiding',
  'refuse',
  'beg',
  'jumpy',
  'sore',
  'risk',
  'wash',
  'condemned',
  'succinct',
  'uncle',
  'collar',
  'exist',
  'tub',
  'coach',
  'distance',
];

//Init game
function init() {
  //Display numer of seconds in UI
  seconds.innerHTML = currentLevel;
  //Load word from list
  showWord(words);
  //Start matching words
  wordInput.addEventListener('input', startMatch);
  //Call countdown
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50)
}

//Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  //if score is -1 deisplay 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'CORRECT!';
    return true;
  } else {
    message.innerHTML = '...';
    return false;
  }
}

//Pick and show random word from random word
function showWord(words) {
  //Generate random
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
  //Check if time is run Out
  if (time > 0) {
    //Decrease time
    time--;
  } else if (time === 0) {
    //GAME OVER
    isPlaying = false;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'GAME OVER!';
    score = -1;
  }
}
