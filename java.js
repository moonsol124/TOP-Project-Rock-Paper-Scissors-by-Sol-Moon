    let userS = 0;
    let computerS = 0;
    let roundCount = 0;
    
    function computerPlay(){
    //this function randomly return either rock, paper or scissors.
        const options = ["rock", "paper", "scissors"];
    // randomly choose one of the three values
        const computerchoice = options[Math.floor(Math.random() * options.length)];
    // return it
        return computerchoice;
    }

    function printResults() {
        let winMessage = "";
        if (roundCount > 5) {
            if (userS > computerS) {
                winMessage = "You won the game!";
            }
            else if (userS < computerS) {
                winMessage = "You lost the game!";
            }
            else {
                winMessage = "game draw!";
            } 
            alert (winMessage);
            userS = 0;
            computerS = 0;
            roundCount = 0;
        }

        let userScore = document.querySelector('#userScore');
        let computerScore = document.querySelector('#computerScore');
        let round = document.querySelector('#round');
        let resultFinal = document.querySelector('#resultFinal');
        
        userScore.textContent = userS;
        computerScore.textContent = computerS;
        round.textContent = roundCount;
    }
    
    function playRound(userBet) {
        let paraResult = document.querySelector('#result');
        let message = "";
        
        let computerchoice = computerPlay(); 
        let userchoice = userBet;
        
        if (userchoice == "rock") {
            if (computerchoice == "rock") {
                message = "draw!";
            }
            else if (computerchoice == "paper") {
                message = "Round lost!";
                computerS++;
            }
            else {
                message = "round won!";
                userS++;
            }
        }

        else if (userchoice == "paper") {
            if (computerchoice == "rock") {
                message = "round won!";
                userS++;
            }
            else if (computerchoice == "paper") {
                message = "draw!";
            }
            else {
                message = "round lost!";
                computerS++;
            }
        }

        else {
            if (computerchoice == "rock") {
                message = "round lost!";
                computerS++;
            }
            else if (computerchoice == "paper") {
                message = "round won!";
                userS++;
            }
            else {
                message = "draw!";
            }
        }
        roundCount++;
        paraResult.textContent = message;
        //print final result
        printResults();
    }

    //button for rock
    const btnRock = document.querySelector('#r');
    btnRock.addEventListener ('click', () => {
        playRound('rock');
    })
    //button for paper
    const btnPaper = document.querySelector('#p');
    btnPaper.addEventListener ('click', () => {
        playRound('paper');
    })
    //button for scissors
    const btnScissors = document.querySelector('#s');
    btnScissors.addEventListener ('click', () => {
        playRound('scissors');
    })
