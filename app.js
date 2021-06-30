'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');

//defaults
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

//rolling the dice 
