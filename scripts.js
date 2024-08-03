//have machine randomly generate computer selection of rock, paper, or scissors
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


// declare variables to keep track of scores, initialize with 0
let humanScore = 0;
let computerScore = 0;



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

    //user selects rock and computer selects paper:
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
    
    //display scores
    console.log("The computer's score is "+ computerScore)
    console.log("Your score is "+ humanScore)
    }



//Play game function
function playGame() {
    //play 5 rounds
for (let i = 1; i <=5; i += 1) {
        //player choices:
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }      
}




playGame();



//human and computer choice are the same

//human chooses paper, computer chooses rock

//human chooses rock, computer chooses scissors




//determine which value wins in the comparison
//display winner and message 
//store user's and computer's score for each round