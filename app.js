    let choice = document.querySelectorAll(".choice");
    const message = document.querySelector(".message");
    let userscore = document.querySelector("#userScore");
    let compScore = document.querySelector("#compScore");
    userpoint = 0;
    comppoint = 0;

    choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
    });

    let generateComputerChoice = () => {
    const option = ["rock", "paper", "sissors"];
    let ramdomInd = Math.floor(Math.random() * 3);
    return option[ramdomInd];
    };

    let playGame = (userChoice) => {
    let compChoice = generateComputerChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
        userWin = compChoice === "sissors" ? true : false;
        } else if (userChoice === "sissors") {
        userWin = compChoice === "paper" ? true : false;
        } else {
        userWin = compChoice === "sissors" ? false : true;
        }
        gameWin(userWin, compChoice, userChoice);
    }
    };

    let drawGame = () => {
    message.innerText = `Game draw play again`;
    message.style.backgroundColor = "#081b31";
    };

    let gameWin = (userWin, compChoice, userChoice) => {
    if (userWin === true) {
        userpoint++;
        userscore.innerText = userpoint;
        message.innerText = `You win your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        comppoint++;
        compScore.innerText = comppoint;
        message.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
    };
