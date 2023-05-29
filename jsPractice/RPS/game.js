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
            computerCount++;
        }else{
            console.log("You win");
            playerCount++;
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You win");
            playerCount++;
        }else if(computerSelection === "paper"){
            console.log("Tie");
        }else{
            console.log("You lose");
            computerCount++;
        }
    }else{
        if(computerSelection === "rock"){
            console.log("You lose");
            computerCount++;
        }else if(computerSelection === "paper"){
            console.log("You win");
            playerCount++;
        }else{
            console.log("Tie");
        }
    }
  }

  function playGame(count){
    for(let i = 0; i<count; i++){
        let playerSelection = prompt("Pick rock, paper, or scissors");
        if(playerSelection!== "rock" && playerSelection!== "paper" && playerSelection!== "scissor"){
            console.log("Please enter a valid input");
            process.exit(0);
        }
        const computerSelection = getComputerChoice(options);
        console.log("The computer picked " + computerSelection);
  console.log("You picked " + playerSelection);
        playRound(playerSelection, computerSelection);
    }
  }
  let playerCount = 0;
  let computerCount = 0;
  playGame(5);
  if(playerCount > computerCount){
    console.log("You win the game!");
  }else if(computerCount > playerCount){
    console.log("You lost the game...");
  }else{
    console.log("Tie?");
  }