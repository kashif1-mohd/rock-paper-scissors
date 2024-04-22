console.log("Hello World");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  console.log(random);
  return choices[random];
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "paper")
  ) {
    return "Human Wins";
  } else {
    return "Computer Wins";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

const buttonRock = document.querySelector("#rockButton");
const buttonPaper = document.querySelector("#paperButton");
const buttonScissors = document.querySelector("#scissorsButton");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

buttonRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const result = playRound("rock", computerSelection);
  resultsDiv.textContent = result;

  if (result === "Computer Wins") {
    computerScore++;
  } else if (result === "Human Wins") {
    playerScore++;
  }

  updateScore();
});

buttonPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const result = playRound("paper", computerSelection);
  resultsDiv.textContent = result;

  if (result === "Computer Wins") {
    computerScore++;
  } else if (result === "Human Wins") {
    playerScore;
  }
  updateScore();
});

buttonScissors.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("scissors", computerSelection);
  resultsDiv.textContent = result;

  if (result === "Computer Wins") {
    computerScore++;
  } else if (result === "Human Wins") {
    playerScore++;
  }
  updateScore();
});

function updateScore() {
  scoreDiv.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    scoreDiv.textContent = `${
      playerScore > computerScore ? "Player Wins" : "Computer Wins"
    } with a final score of ${playerScore} - ${computerScore}`;
    resultsDiv.innerText = "";
  }
}
