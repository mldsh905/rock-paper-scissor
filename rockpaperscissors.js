let playerWinTimes = 0;
let computerWinTimes = 0;
let playerChoice;
let computerChoice;
let tieTimes = 0;

const h1 = document.querySelector(".h1");
h1.style.backgroundColor = "pink";
h1.style.display = "flex";
h1.style.justifyContent = "center"

const image = document.querySelector(".image");
image.style.display = "flex";
image.style.justifyContent = "center"

const rock = document.querySelector("#rock");
rock.addEventListener("click",()=>
{playerChoice="rock",findWinner()});

const paper = document.querySelector("#paper");
paper.addEventListener("click",()=>
{playerChoice="paper",findWinner()});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click",()=>
{playerChoice="scissors",findWinner()});



const playerWin = document.querySelector(".playerWin");
playerWin.textContent = "You win "+playerWinTimes;

const computerWin = document.querySelector(".computerWin");
computerWin.textContent = "Computer win " + computerWinTimes;

const tie = document.querySelector(".tie");
tie.textContent = "tie " + tieTimes;


function computerPlay() {
    let action = ["rock","paper","scissors"];
    let number = Math.floor(Math.random()*3);
    return action[number]
}

function findWinner() {
    computerChoice = computerPlay();
    if (playerChoice==="rock"&&computerChoice==="paper"||
        playerChoice==="paper"&&computerChoice==="scissors"||
        playerChoice==="scissors"&&computerChoice==="rock"){
        computerWinTimes++
    }else if(playerChoice===computerChoice){
        tieTimes++;
    }else{
        playerWinTimes++;
    }
    playerWin.textContent = "You win "+playerWinTimes;
    computerWin.textContent = "Computer win " + computerWinTimes;
    tie.textContent = "tie " + tieTimes;
    finishedAndAgain()
}

function finishedAndAgain() {
    if(playerWinTimes>=5){
        alert("You win!!! You win "+playerWinTimes);
        playerWinTimes=0;
        computerWinTimes=0;
        tieTimes=0;
    }else if(computerWinTimes>=5){
        alert("You lose!!! Computer win " + computerWinTimes);
        playerWinTimes=0;
        computerWinTimes=0;
        tieTimes=0;
    }
}