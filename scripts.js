// declare variables to keep track of scores, initialize with 0
let humanScore = 0;
let computerScore = 0;

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

//testing selecting random number calculations
let randomNumber = Math.random() * 3 + 1;
randomNumber = Math.floor(randomNumber);
//console.log(randomNumber);
//console.log(Math.random())

//capture user input of rock, paper, or scissors
function getHumanChoice() {
    //prompt user and capture input in variable
    let userPrompt = prompt("Rock, paper, or scissors?");
    //return user input
    return userPrompt.toLowerCase();
}

// create function to play a round 
function playRound(humanChoice, computerChoice) {
    //human choice
    console.log("You selected " + humanChoice);
    //computer choice
    console.log("The computer selected " + computerChoice);

    //compare the computer value to user value 

    //user and computer have same result:
    if (humanChoice == computerChoice) {
         console.log("This round is a draw!");
        }

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Paper covers rock, the computer wins :(");
        computerScore++;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Rock smashes scissors, you win!");
        humanScore ++;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper covers rock, you win!");
        humanScore ++;
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Scissors cut paper, the computer wins :(");
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Rock smashes scissors, the computer wins :(");
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors cut paper, you win!");
        humanScore ++;
        }
    
    //display result of the round
    console.log("The computer's score is "+ computerScore)
    console.log("Your score is "+ humanScore)
    }


//play five rounds and declare winner of the game
function playGame() {
   
    //loop 5 rounds
for (let n = 1; n <=5; n++ ) {
        //get player choices:
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }      
    
    //compare final scores and declare a winner
    if (humanScore > computerScore) {
        console.log("Congrats you're the winner of the game!")
    }

    if (humanScore == computerScore) {
        console.log("This game is a draw!")
    }

    if (humanScore < computerScore) {
        console.log("So sorry, you lose :(")
    }
  
}

playGame();