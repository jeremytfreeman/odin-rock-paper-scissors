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

//player choices:
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// create function to play a round 
function playRound(humanChoice, computerChoice) {
    //intro
    console.log("Yay! rock, paper, scissors!");
    //human choice
    console.log("You selected " + humanChoice);
    //computer choice
    console.log("The computer selected " + computerChoice);

    //compare the computer value to user value 

    //user and computer have same result:
    if (humanChoice == computerChoice)
         console.log("This round is a draw!");

    //user selects rock and computer selects paper:
    if (humanChoice == "rock" && computerChoice == "paper")
        console.log("Paper covers rock, the computer wins :(");

    if (humanChoice == "rock" && computerChoice == "scissors")
        console.log("Rock smashes scissors, you win!");

    if (humanChoice == "paper" && computerChoice == "rock")
        console.log("Paper covers rock, you win!");

    if (humanChoice == "paper" && computerChoice == "scissors")
        console.log("Scissors cut paper, the computer wins :(");

    if (humanChoice == "scissors" && computerChoice == "rock")
        console.log("Rock smashes scissors, the computer wins :(");

    if (humanChoice == "scissors" && computerChoice == "paper")
        console.log("Scissors cut paper, you win!");
    }




//Play round
playRound(humanChoice, computerChoice);





//human and computer choice are the same

//human chooses paper, computer chooses rock

//human chooses rock, computer chooses scissors




//determine which value wins in the comparison
//display winner and message 
//store user's and computer's score for each round