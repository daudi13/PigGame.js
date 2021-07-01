'use strict';

//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//defaults
score0El.textContent = 0;
score1El.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

let playing = true

//rolling the dice function 

btnRoll.addEventListener('click', () => {

    if (playing) {
        
    
        //1. generating a random dice roll

        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. display roll dice 

        diceElement.classList.remove('hidden');
        diceElement.src = `/images/dice-${dice}.png`;

        //3. check for rollers 1: if true, swith to next player

        if (dice !== 1) {
            //add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //switch to the next player
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        
    
        //1.add current score to active 
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        //scores[1] = scores[1]
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //check if player's score is >=100 
        if (scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');

        } else {
            switchPlayer()
        }
        //switch to the next player 
    

        //finish the game
        
    }
})


function switchPlayer() {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}