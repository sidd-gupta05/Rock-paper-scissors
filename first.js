let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img");
const msg = document.querySelector("#msg");
const userScoreElem = document.querySelector("#user-score");
const compScoreElem = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw! Play Again";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "Congratulations! You win";
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreElem.innerText = userScore;
    } else {
        msg.innerText = "Sorry! Better luck Next Time";
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreElem.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((img) => {
    img.addEventListener("click", () => {
        const userChoice = img.getAttribute("id");
        playGame(userChoice);
    });
});
