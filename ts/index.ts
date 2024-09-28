const btn1: HTMLButtonElement = document.getElementById("btn1") as HTMLButtonElement;
const btn2: HTMLButtonElement = document.getElementById("btn2") as HTMLButtonElement;
const randomNumber1: HTMLElement = document.getElementById("randomNumber1") as HTMLElement;
const randomNumber2: HTMLElement = document.getElementById("randomNumber2") as HTMLElement;
const score1Element: HTMLElement = document.getElementById("score1") as HTMLElement;
const score2Element: HTMLElement = document.getElementById("score2") as HTMLElement;
const modal: HTMLElement = document.getElementById("modal") as HTMLElement;
const winner: HTMLElement = document.getElementById("winner") as HTMLElement; 
const restartButton: HTMLElement = document.getElementById("restartButton") as HTMLElement; 

let currentPlayer: number = 1;
let score1: number = 0;
let score2: number = 0;

function getRandomNumber(): number {
    return Math.floor(Math.random() * 9) + 1; 
}

function checkWinner(): void {
    if (score1 >= 100) {
        winner.textContent = "Player 1 win 🥳"; 
        modal.classList.remove("hidden");
    } else if (score2 >= 100) {
        winner.textContent = "Player 2 win 🥳"; 
        modal.classList.remove("hidden");
    }
}

btn1.addEventListener("click", function () {
    if (currentPlayer === 1) {
        const randomNum: number = getRandomNumber();
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
        const randomNum: number = getRandomNumber();
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
