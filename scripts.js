// declare variables to keep track of scores, initialize with 0
let humanScore = 0;
let computerScore = 0;
let round = 0;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const results = document.getElementById("results");

//have computer randomly generate computer selection of rock, paper, or scissors
function getComputerChoice() {
  //generate a random integer
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  //assign rock/paper/scissors to computer generated number
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    //invalid response
  }
}

//console.log(getComputerChoice());

//testing selecting random number calculations
let randomNumber = Math.random() * 3 + 1;
randomNumber = Math.floor(randomNumber);
//console.log(randomNumber);
//console.log(Math.random())

/* 
//capture user input of rock, paper, or scissors
function getHumanChoice() {
    //prompt user and capture input in variable
    let userPrompt = prompt("Rock, paper, or scissors?");
    //return user input
    return userPrompt.toLowerCase();
}
*/

// create function to play a round
function playRound(humanChoice, computerChoice) {
  if (round < 5) {
    //increment the round
    round++;
    let resultsStandard =
      "Round " +
      round +
      "<br>" +
      "You selected " +
      humanChoice +
      "<br>" +
      "Computer selected " +
      computerChoice +
      "<br>" +
      "The computer's score is " +
      computerScore +
      "<br>" +
      "Your score is " +
      humanScore +
      "<br>";

    //human choice
    console.log("You selected " + humanChoice);
    //computer choice
    console.log("The computer selected " + computerChoice);

    //user and computer have same result:
    if (humanChoice == computerChoice) {
      results.innerHTML = resultsStandard + "This round is a draw!";
      console.log("This round is a draw!");
    }

    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("Paper covers rock, the computer wins :(");
      computerScore++;
      results.innerHTML =
        resultsStandard + "Paper covers rock, the computer wins :(";
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("Rock smashes scissors, you win!");
      humanScore++;
      results.innerHTML = resultsStandard + "Rock smashes scissors, you win!";
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("Paper covers rock, you win!");
      humanScore++;
      results.innerHTML = resultsStandard + "Paper covers rock, you win!";
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("Scissors cut paper, the computer wins :(");
      computerScore++;
      results.innerHTML =
        resultsStandard + "Scissors cut paper, the computer wins :(";
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("Rock smashes scissors, the computer wins :(");
      computerScore++;
      results.innerHTML =
        resultsStandard + "Rock smashes scissors, the computer wins :(";
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("Scissors cut paper, you win!");
      humanScore++;
      results.innerHTML = resultsStandard + "Scissors cut paper, you win!";
    }

    //display result of the round
    console.log("The computer's score is " + computerScore);
    console.log("Your score is " + humanScore);

    console.log(round);
  }

  if (round == 5) {
    //compare final scores and declare a winner
    if (humanScore > computerScore) {
      console.log("Congrats you're the winner of the game!");
      document.getElementById("finalResults").innerHTML = "Congrats you're the winner of the game!";
    }

    if (humanScore == computerScore) {
      console.log("This game is a draw!");
      document.getElementById("finalResults").innerHTML = "This game is a draw!";
    }

    if (humanScore < computerScore) {
      console.log("So sorry, you lose :(");
      document.getElementById("finalResults").innerHTML = "So sorry, you lose :(";
    }
  }
}

rockBtn.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

/*
//play five rounds and declare winner of the game
function playGame() {
    //loop 5 rounds
    for (let n = 1; n <= 5; n++) {
      //get player choices:
      let humanChoice = getHumanChoice();
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  
    //compare final scores and declare a winner
    if (humanScore > computerScore) {
      console.log("Congrats you're the winner of the game!");
    }
  
    if (humanScore == computerScore) {
      console.log("This game is a draw!");
    }
  
    if (humanScore < computerScore) {
      console.log("So sorry, you lose :(");
    }
  }

  */
