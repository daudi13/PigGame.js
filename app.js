'use strict';

// selection of elements
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerEl = document.querySelectorAll('.player')
const diceImgEl = document.querySelector('.dice');
const newBtnEl = document.querySelector('.btn--new');
const rollBtnEl = document.querySelector('.btn--roll');
const holdBtnEl = document.querySelector('.btn--hold');

//starting defaults
score0El.textContent = 0;
score1El.textContent = 0;
diceImgEl.classList.add('hidden');


let currentScore = 0;

// rolling dice functionality
rollBtnEl.addEventListener('click', function () {
    //1. Generation of a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1
    console.log(dice);

    // 2. displaying dice
    diceImgEl.classList.remove('hidden');
    diceImgEl.src = `/images/dice-${dice}.png`

    // 3. Checking for a rolled 1; if true switch to the next player
    if (dice !== 1) {
        //add dice score to the current score 
        currentScore += dice;
        current0El.innerText = currentScore; //Change later
    } else {
        //switch to the next player

        if (dice === 1 && (player0El.classList.contains('player--active') || player1El.contains('player--active'))){
            playerEl.forEach(player => {
                if (player.classList.contains('player--active')) {
                    player.classList.remove('player--active')
                } else {
                    player.classList.add('player--active')
                }
            })
        }

        // for (let i = 0; i < playerEl.clientHeight; i++){
        //     if (playerEl[i].classList.contains('player--active')) {
        //         playerEl[i].classList.remove('player--active')
        //     } else {
        //         playerEl[i].classList.add('player--active')
        //     }
        // }
        // playerEl.forEach(player => {
        //     if (player.classList.contains('player--active')) {
        //         player.classList.remove('player--active')
        //     } else {
        //         player.classList.add('player--active')
        //     }
        // })
    }
})
