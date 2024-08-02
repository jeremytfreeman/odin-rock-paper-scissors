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

console.log(getComputerChoice());

//testing selecting random number calculations
let randomNumber = Math.random() * 3 + 1;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);
//console.log(Math.random())


//capture user input of rock, paper, or scissors
function getHumanChoice() {
    //prompt user and capture input in variable
    let userPrompt = prompt("Rock, paper, or scissors?");
    //return user input
    return userPrompt;
}

console.log(getHumanChoice());


//compare the computer value to user value 

//playRound() {

//human and computer choice are the same

//human chooses paper, computer chooses rock

//human chooses rock, computer chooses scissors




//determine which value wins in the comparison
//display winner and message 
//store user's and computer's score for each round