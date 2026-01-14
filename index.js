let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("rockBtn");
const paperBtn = document.querySelector("paperBtn");
const scissorsBtn = document.querySelector("scissorsBtn");

const btnList = document.querySelector("ul");

// btnList.addEventListener("click", (event) => {
// 	if (event.target.tagName === 'BUTTON') {
// 		playRound(event.target.innerText);
// 	}
// });

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
	
	if (humanChoice === computerChoice) {
		console.log("Its a tie!");
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		humanScore += 1;
		console.log("You win! Paper beats Rock");
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		humanScore += 1;
		console.log("You win! Rock beats Scissors");
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		humanScore += 1;
		console.log("You win! Scissors beats Paper");
	} else {
		computerScore += 1;
		computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
		humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	}
}

function playGame() {

	// for (let i=0; i < 5; i++) {
	// 	playRound()
	// 	console.log(`Current Score: Human: ${humanScore}, Computer: ${computerScore}`)
	// }
}

playGame()