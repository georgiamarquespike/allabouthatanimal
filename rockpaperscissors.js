let computerBox = document.getElementById("computerbox");
let userBox = document.getElementById("userbox");

let winnerBox = document.getElementById("victorybox");
let buttons = document.getElementById("buttons");

// random selction for computer

document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;





function user() {
    let userChoice = this.id;
    userBox.innerHTML = userChoice;

    let computerArray = ["rock", "paper", "scissors"];
    let computerGuess = computerArray[Math.floor(Math.random() * computerArray.length)];

    computerBox.innerHTML = computerGuess;


    function compare(choice1, choice2) {

        if (choice1 === 'rock') {
            if (choice2 === 'scissors') {
                winnerBox.innerHTML = "LOSER";
            } else if (choice2 === 'paper') {
                winnerBox.innerHTML = 'YOUR A WINNER BABY'
            }

        }
        if (choice1 === 'paper') {
            {
                if (choice2 === 'rock') {
                    winnerBox.innerHTML = 'LOSER';
                } else {
                    winnerBox.innerHTML = 'YOUR A WINNER BABY';
                }



            }
        }
        if (choice1 === 'scissors'){
            if (choice2 === 'paper'){
                 winnerBox.innerHTML = 'LOSER';
            }else {
                winnerBox.innerHTML = 'YOUR A WINNER BABY';
            }
                
        }
                
        if (choice1 === choice2) {
            winnerBox.innerHTML = 'the result is a tie';

        }
    }
    compare(computerGuess, userChoice);
}
