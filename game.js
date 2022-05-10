

let computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0){
        return "rock";
    } else if (randomNum == 1){
        return "paper";
    } else {
        return "scissors";
    }
}



let computerChoiceImage = document.getElementById('computerChoiceImg');
let playerChoiceImage = document.getElementById('playerChoiceImg');

let rockButton = document.getElementById('rockButton');
let paperButton = document.getElementById('paperButton');
let scissorsButton = document.getElementById('scissorsButton');
let result = document.getElementById('resultMessage');

let playerScoreText = document.getElementById('playerScore');
let computerScoreText = document.getElementById('computerScore');
let roundText = document.getElementById('round');

let resetButton = document.getElementById('resetButton');

let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound (player, computer){
    if ((player == "paper" && computer == "rock") || 
    (player == "scissors" && computer == "paper") || 
    (player == "rock" && computer == "scissors")){
        playerScore += 1; 
        round += 1;
        return " You win! " + player + " beats " + computer;
    } else if ( player == computer){
        playerScore += 1;
        computerScore += 1;
        round += 1;
        return "Tie!";
    } else {
        computerScore += 1;
        round += 1;
        return "You lose! " + computer + " beats " + player;
    }
}


function updateChoice (player, computer){
    switch(player){
        case 'rock':
            playerChoiceImage.src = "../rock.png";
            break;
        case 'paper':
            playerChoiceImage.src = "../paper.png";
            break;
        case 'scissors':
            playerChoiceImage.src = "../scissors.png";
            break;
    }

    switch(computer){
        case 'rock':
            computerChoiceImage.src = "../rock.png";
            break;
        case 'paper':
            computerChoiceImage.src = "../paper.png";
            break;
        case 'scissors':
            computerChoiceImage.src = "../scissors.png";
            break;
    }


}

function updateScore (){
    playerScoreText.innerHTML = "Player: " + playerScore;
    computerScoreText.innerHTML = "computer: " + computerScore;
    roundText.innerHTML = "Round: " + round;
}

function handleClick(player,computer){

    if (player == 'reset'){
        resetButtonClicked();
        playerChoiceImage.src = "../question.png";
        computerChoiceImage.src = "../question.png";
        updateScore();

    }else{
    result.textContent = playRound(player,computer);
    updateChoice(player,computer);
    updateScore();
    }




}

function isGameOver (){
    return rounds == 5;
}

function resetButtonClicked(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
}



rockButton.addEventListener('click', () => {handleClick('rock',computerPlay())});
paperButton.addEventListener('click', () => {handleClick('paper',computerPlay())});
scissorsButton.addEventListener('click', () => {handleClick('scissors',computerPlay())});
resetButton.addEventListener('click', () => {handleClick('reset',computerPlay())});








