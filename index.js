// let humanScore = 0;
// let computerScore = 0;
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");

const btnList = document.querySelector("ul");

btnList.addEventListener("click", playerSelects);

function playerSelects(event) {
	if (event.target.tagName === "BUTTON") {
		playRound(event.target.innerText);
	}
}

function getComputerChoice() {
	let choice = Math.random()*3;

	if (choice < 1) {
		return "rock";
	} else if (choice < 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	let choice = prompt("Choose Rock, Paper, or Scissors: ");

	return choice.toLowerCase();
}


function playRound(humanChoice) {
	let computerChoice = getComputerChoice();
	// let humanChoice = getHumanChoice();
	humanChoice = humanChoice.toLowerCase();

	let hScore = parseInt(humanScore.innerText);
	let cScore = parseInt(computerScore.innerText);
	
	if (humanChoice === computerChoice) {
		console.log("Its a tie!");
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		hScore += 1;
		console.log("You win! Paper beats Rock");
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		hScore += 1;
		console.log("You win! Rock beats Scissors");
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		hScore += 1;
		console.log("You win! Scissors beats Paper");
	} else {
		cScore += 1;
		computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
		humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	}

	humanScore.innerText = hScore;
	computerScore.innerText = cScore;
}

function playGame() {

	// for (let i=0; i < 5; i++) {
	// 	playRound()
	// 	console.log(`Current Score: Human: ${humanScore}, Computer: ${computerScore}`)
	// }
}