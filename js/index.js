"use strict";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const randomNumber1 = document.getElementById("randomNumber1");
const randomNumber2 = document.getElementById("randomNumber2");
const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");
const modal = document.getElementById("modal");
const winner = document.getElementById("winner");
const restartButton = document.getElementById("restartButton");
let currentPlayer = 1;
let score1 = 0;
let score2 = 0;
function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}
function checkWinner() {
    if (score1 >= 100) {
        winner.textContent = "Player 1 win 🥳";
        modal.classList.remove("hidden");
    }
    else if (score2 >= 100) {
        winner.textContent = "Player 2 win 🥳";
        modal.classList.remove("hidden");
    }
}
btn1.addEventListener("click", function () {
    if (currentPlayer === 1) {
        const randomNum = getRandomNumber();
        randomNumber1.textContent = randomNum.toString();
        score1 += randomNum;
        score1Element.textContent = score1.toString();
        btn1.disabled = true;
        btn2.disabled = false;
        currentPlayer = 2;
        checkWinner();
    }
});
btn2.addEventListener("click", function () {
    if (currentPlayer === 2) {
        const randomNum = getRandomNumber();
        randomNumber2.textContent = randomNum.toString();
        score2 += randomNum;
        score2Element.textContent = score2.toString();
        btn2.disabled = true;
        btn1.disabled = false;
        currentPlayer = 1;
        checkWinner();
    }
});
restartButton.addEventListener("click", function () {
    score1 = 0;
    score2 = 0;
    score1Element.textContent = score1.toString();
    score2Element.textContent = score2.toString();
    randomNumber1.textContent = "0";
    randomNumber2.textContent = "0";
    btn1.disabled = false;
    btn2.disabled = true;
    currentPlayer = 1;
    modal.classList.add("hidden");
});
