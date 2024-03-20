let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// 3. to generate computer choice
const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// 4. To show draw game
const drawGame = () => {
    // console.log("Draw Game!");
    msg.innerText = "Draw Game! Play again";
    msg.style.backgroundColor = "#081b31";
}


// 5. to show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("You Won..!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won..! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        // console.log("You Lost..!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost..! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// 2. to get random choice by computer
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        // to show winner
        showWinner(userWin, userChoice, compChoice);
    }

};

//  1.
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        // to get random choice by computer
        playGame(userChoice);
    });
});