// We are also adding previous guesses and Guessues remaining in the project 
// So we are gonna update the previous guesses and store the guesses in an array 
// We are also adding the guesses remaining in the project 
// -------------------------------------------------------

// First we have an form , and then a div in which we have previous guesses and guesses remaining 

// To generate random number we have Math.random

let randomNumber = parseInt(Math.random() * 100 + 1)
// We are using parse int to basically remove the float value , and also we are adding 1 so that number cant be 0
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const guessesRemaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// This is an array which will store the valye of user previous guesses so that user dont choose same number again
let prevGuess = []
let numberofGuesses = 1

let playGame = true;
// if play game is true then game will start
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}
// this function is basically to check whether the number enetered by the user is valid or not

function validateGuess(guess){
    //isNan - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
   if(isNaN(guess)){ 
    alert('Please enter a valid Number')
   }
   else if(guess<1){
    alert('Please enter a number greater than 0')
   }
   else if(guess>100){
    alert('Please enter a number less than 100')
   }
   else{
    prevGuess.push(guess)
    if(numberofGuesses === 11){
    displayGuess(guess);
    displayMessage(`Game Over . Random number was ${randomNumber}`)
    endGame();
    }else{
        displayGuess(guess);
    checkGuess(guess);
    }
   }
}
function checkGuess(guess){
    // it will basically tell whether the guess is right or not and low or high
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is Toooo low')
    }
    else if(guess  > randomNumber){
        displayMessage('Number is Toooo high')

    }
}

function cleanUpGuess(guess){
    // clean the previous values , update the array , display low or high
    userInput.valuev = ''  // cleanup method
    guessSlot.innerHTML += `${guess}, ` // pushing the guess value in innerhtml of guesSlot
    numberofGuesses++ // we have to update the number the guesses 
    guessesRemaining.innerHTML = `${11 - numberofGuesses}`
}

function displayMessage(message){
    // all the dom manipulation will take place in this method like reduing the number of guesses and displaying message 
   lowOrHi.innerHTML = `<h2>${message}</h2>`;

}


function endGame(){
// 
userInput.value ='' // value clean krdi saari
// set attribute is a two parameter method , but we are gonna oly add one and add '' this in other parameter
userInput.setAttribute('disabled' , '')
p.classList.add('button')
p.innerHTML = '<h2 id = "newGame">Start new game </h2>';
startOver.appendChild(p)
playGame= false
newGame()
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numberofGuesses = 1
    guessSlot.innerHTML = ''
    guessesRemaining.innerHTML = `${11 - numberofGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
