const options = ['rock','paper','scissor'];

function getComputerChoice(options){
    let rand = Math.floor(Math.random() * options.length);
    return options[rand]; 
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            console.log("Tie");
        }else if(computerSelection === "paper"){
            console.log("You lose");
        }else{
            console.log("You win");
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You win");
        }else if(computerSelection === "paper"){
            console.log("Tie");
        }else{
            console.log("You lose");
        }
    }else{
        if(computerSelection === "rock"){
            console.log("You lose");
        }else if(computerSelection === "paper"){
            console.log("You win");
        }else{
            console.log("Tie");
        }
    }
  }
  // let playerSelection = prompt("Pick rock, paper, or scissors");
// if(playerSelection!== "rock" || playerSelection!== "paper" || playerSelection!== "scissor"){
//     console.log("Please enter a valid input");
//     process.exit(0);
// }
  let playerSelection = "rock";
  const computerSelection = getComputerChoice(options);
  console.log("The computer picked " + computerSelection);
  console.log("You picked " + playerSelection);
  playRound(playerSelection, computerSelection);