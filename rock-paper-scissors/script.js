console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  console.log(random);
  return choices[random];
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie.");
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
