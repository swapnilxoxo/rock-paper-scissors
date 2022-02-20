function computerPlay(){
   const options = ["rock", "paper", "scissor"];
   return options[Math.floor(Math.random() * 3)];
};

    const playerSelection = prompt("Chosse rock, paper or scissor").toLowerCase();
    const computerSelection = computerPlay();
    let computerScore = 0;
    let playerScore = 0;

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "You Lose! paper beats rock";
    }else if (playerSelection == "scissor" && computerSelection == "rock"){
        computerScore++;
        return "You Lose! rock beats Scissor";
    }else if (playerSelection == "paper" && computerSelection == "scissor"){
        computerScore++;
        return "You Lose! scissor beats paper";
    }else if (playerSelection == "rock" && computerSelection == "scissor"){
        playerScore++;
        return "You Win! rock beats scissor";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "You Win! paper beats rock";
    }else if (playerSelection == "scissor" && computerSelection == "paper"){
        playerScore++;
        return "You Win! scissor beats paper";
    }else{
        return "It's a Draw";
    }
};

console.log(`Computer chose: ${computerSelection}`);
console.log(`You chose: ${playerSelection}`);
console.log(playRound(playerSelection, computerSelection));
console.log(`Computer Score ${computerScore}`)
console.log(`Your Score ${playerScore}`)

function game(){
    for (let i = 0; i < 5; i++){

        
    }
   
}






