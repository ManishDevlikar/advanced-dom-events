let playerOneCurrent = document.getElementById("payer-1-currentscore");
let playerTwoCurrent = document.getElementById("payer-2-currentscore");

let playerOneDiv = document.querySelector(".player-1-div");
let playerTwoDiv = document.querySelector(".player-2-div");

let playerOneTotal = document.getElementById("player-1-totalscore");
let playerTwoTotal = document.getElementById("player-2-totalscore");

const dice = document.getElementById("dice-btn");

let winner = document.querySelector(".winner");

let playerOneTotalValue = 0;
let playerTwoTotalValue = 0;

let playerOne = true;

playerOneDiv.classList.add("active");
dice.addEventListener("click", function () {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  console.log(diceValue);
  if (playerOne && playerOneTotalValue <= 25 && playerTwoTotalValue <= 25) {
    checkWinner();
    playerOneDiv.classList.remove("active");
    playerTwoDiv.classList.add("active");
    playerOneCurrent.value = diceValue;
    playerOneTotalValue = playerOneTotalValue + diceValue;
    playerOneTotal.value = playerOneTotalValue;
    playerOne = false;
    checkWinner();
  } else if (
    !playerOne &&
    playerOneTotalValue <= 25 &&
    playerTwoTotalValue <= 25
  ) {
    checkWinner();
    playerOneDiv.classList.add("active");
    playerTwoDiv.classList.remove("active");
    playerTwoCurrent.value = diceValue;
    playerTwoTotalValue = playerTwoTotalValue + diceValue;
    playerTwoTotal.value = playerTwoTotalValue;
    playerOne = true;
    checkWinner();
  }
  checkWinner();
});

function checkWinner() {
  if (playerOneTotalValue >= 25) {
    winner.textContent = "player one wins!";
    return;
  } else if (playerTwoTotalValue >= 25) {
    winner.textContent = "player two wins!";
    return;
  }
}

const reset = function () {
  playerOneCurrent.value = 0;
  playerTwoCurrent.value = 0;
  playerOneDiv.classList.remove("active");
  playerTwoDiv.classList.remove("active");
  playerOneTotal.value = 0;
  playerTwoTotal.value = 0;
  playerOneTotalValue = 0;
  playerTwoTotalValue = 0;
  winner.textContent = "";
  playerOne = true;
  playerOneDiv.classList.add("active");
};

document.querySelector("#reset").addEventListener("click", reset);
