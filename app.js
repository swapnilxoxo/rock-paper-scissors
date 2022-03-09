let originalHtml = document.body.innerHTML;
function computerPlay(){
   const options = ["rock", "paper", "scissors"];
   return options[Math.floor(Math.random() * 3)];
};
    let computerSelection = computerPlay();
    let playerSelection;
    let computerScore = 0;
    let playerScore = 0;



function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore = computerScore + 1;
        document.getElementById('5').innerHTML = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore = computerScore + 1;
        document.getElementById('5').innerHTML = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore = computerScore + 1;
        document.getElementById('5').innerHTML = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore = playerScore + 1;
        document.getElementById('5').innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore = playerScore + 1;
        document.getElementById('5').innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore = playerScore + 1;
        document.getElementById('5').innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
    }else{
        playerScore = playerScore;
        computerScore = computerScore;
        document.getElementById('5').innerHTML = `It's a Tie.`;
    }

};


let buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () =>{
                playerSelection = button.className;
                computerSelection = computerPlay();
                computerScore;
                playerScore;
                playRound(playerSelection, computerSelection);
                document.getElementById('1').innerHTML = `You Chose: ${playerSelection}`;
                document.getElementById('2').innerHTML = `Computer Chose: ${computerSelection}`; 
                document.getElementById('3').innerHTML = `Computer Score: ${computerScore}`;
                document.getElementById('4').innerHTML = `Your Score: ${playerScore}`;
                if (computerScore === 3 && playerScore < 3){
                    return document.getElementById('6').innerHTML = "Computer Won!!";

                }else if (playerScore === 3 && computerScore < 3){
                    return document.getElementById('6').innerHTML = "You Won!!";
                }        
        })    
        
    })

    

    let reset = document.querySelectorAll('a');
    reset.addEventListener('click', () => {
        location.reload();
    })

