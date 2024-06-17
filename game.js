    let userScore = 0;
    let compScore = 0;
    let choices = document.querySelectorAll(".choice");
    const message = document.querySelector(".message");
    const userpoint = document.querySelector("#userScore");
    const comppoint = document.querySelector("#compScore");

    const generateComputerChoice = () => {
    let option = ["rock", "sissors", "paper"];
    const ramdomInd = Math.floor(Math.random() * 3);
    return option[ramdomInd];
    };

    const drawGame = () => {
    message.innerText = "the game is draw! play again";
    message.style.backgroundColor = "#081b31";
    };

    const win = (userWin,choiceId,compChoice) => {
    if (userWin) {
        userScore += 1;
        userpoint.innerText = userScore;

        message.innerText = `You win your ${choiceId} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore += 1;
        comppoint.innerText = compScore;
        message.innerText = `you loose ${compChoice} beats your ${choiceId}`;
        message.style.backgroundColor = "red";
     
    }
    
    gameover(userScore,compScore);
    };

    const playGame = (choiceId) => {
    const compChoice = generateComputerChoice();

    if ( choiceId === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (choiceId === "rock") {
        userWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
        userWin = compChoice === "sissors" ? false : true;
        } else {
        userWin = compChoice === "rock" ? false : true;
        }
    
        win(userWin,choiceId ,compChoice );
    }
    };

    choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId= choice.getAttribute("id");
        playGame(choiceId);
    });
    });


    let gameover=(choiceId,compScore,)=>{

  if(userScore===10){
    alert("you won the game");
    location.reload();
}else if(compScore===10){
    alert("you loose the game");
    location.reload();
  }
    };
