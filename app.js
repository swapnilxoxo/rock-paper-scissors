function computerPlay(){
   const options = ["rock", "paper", "scissor"];
   return options[Math.floor(Math.random() * 3)];
};

    let playerSelection = "";
    let computerSelection = computerPlay();
    let computerScore = 0;
    let playerScore = 0;

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore = computerScore + 1;
        return "You Lose! paper beats rock";
    }else if (playerSelection == "scissor" && computerSelection == "rock"){
        computerScore = computerScore + 1;
        return "You Lose! rock beats Scissor";
    }else if (playerSelection == "paper" && computerSelection == "scissor"){
        computerScore = computerScore + 1;
        return "You Lose! scissor beats paper";
    }else if (playerSelection == "rock" && computerSelection == "scissor"){
        playerScore = playerScore + 1;
        return "You Win! rock beats scissor";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore = playerScore + 1;
        return "You Win! paper beats rock";
    }else if (playerSelection == "scissor" && computerSelection == "paper"){
        playerScore = playerScore + 1;
        return "You Win! scissor beats paper";
    }else{
        playerScore = playerScore;
        computerScore = computerScore;
        return "It's a Draw";
    }
};

// console.log(`Computer chose: ${computerSelection}`);
// console.log(`You chose: ${playerSelection}`);
// console.log(playRound(playerSelection, computerSelection));
// console.log(`Computer Score ${computerScore}`)
// console.log(`Your Score ${playerScore}`)




function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Chosse rock, paper or scissor").toLowerCase();
        let computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose: ${playerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Computer Score ${computerScore}`)
        console.log(`Your Score ${playerScore}`)
        console.log(i);    
        
    }
    if(computerScore > playerScore){
        console.log("Computer WON!")
        return "Computer WON!"; 
    }else if (computerScore < playerScore){
        console.log("You WON!")
        return "You WON!";
    }else{
        return "it's a Tie."
    }
}





