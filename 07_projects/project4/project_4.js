
let randomNumber=parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');
let prevGuess=[];
let numGuess=0;
let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess<1){
    alert('Please enter a number more than 1');
  }
  else if(guess>100){
    alert('Please enter a number less than 100')
  }
  else{
    prevGuess.push(guess);
    if(numGuess===9){
      displayguess(guess);
      displayMessage(`Game Over. random number is ${randomNumber}`);
      endGame();
    }
    else{
      displayguess(guess);
      // numGuess++;
      checkguess(guess);
    }
  }
}
function checkguess(guess){
  if(guess===randomNumber){
    displayMessage(`You Guessed it right`);
    endGame();
  }
  else if(guess<randomNumber){
    displayMessage(`The guessed number is TOO LOW`);
  }
  else if(guess>randomNumber){
    displayMessage(`The Guessed number is TOO HIGH`);
  }
}
function displayguess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess}, `;
  numGuess++;
  remaining.innerHTML=`${10-numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start a new game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}
function newGame(){
  const newGamebutton=document.querySelector('#newGame');
  newGamebutton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${10-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
}