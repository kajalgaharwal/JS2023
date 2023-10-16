let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
 function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter valid number please!!');   
    }
    else if(guess<1){
        alert('Enter value greater than 1!!');   
    }
    else if(guess>100){
        alert('Enter value less than 100!!');   
    }
    else{
        prevGuess.push(guess);
        if(numGuess ===10){
            displayGuess(guess)
            displayMsg(`GAME OVER !! Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
 }
 function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`Its Great! You have won.`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMsg(`Your guessed number is low.`);
    }
    else if(guess > randomNumber){
        displayMsg(`Your guessed number is high.`);
    }

 }
 function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

 }
 function displayMsg(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
 }
 function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      console.log(randomNumber);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p); 
      playGame = true;
    });
}