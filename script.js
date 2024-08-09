let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let gameText = document.querySelector(".innerB");
let userChoice = null;
let originalText;
let score = 0;
let totalGames = 0;
rock.addEventListener("click", () => {
    userChoice = 'Rock';
    totalGames += 1;
});
paper.addEventListener("click", () => {
    userChoice = "Paper";
    totalGames += 1;
});
scissor.addEventListener("click", () => {
    userChoice = "Scissor";
    totalGames += 1;
});

document.onclick = () => {
    if(userChoice != null){
    gameLogic();
    updateScore(score,totalGames);
    changeTextbackToOriginal();
    userChoice = null
    }
}

function gameLogic() {
    let computerChoice = generateRandomNumber();
    if (computerChoice === userChoice) {
        gameText.innerText = "Draw!!! Try Again";
    }
    else if (userChoice === "Rock") {
        if (computerChoice === "Scissor") {
            gameText.innerText = "You Won!!! " + userChoice + " Beats " + computerChoice;
            score += 1;
        } else {
            gameText.innerText = "You Lost!!! " + computerChoice + " Beats " + userChoice;
        }
    }

    else if (userChoice === "Scissor") {
        if (computerChoice === "Paper") {
            gameText.innerText = "You Won!!! " + userChoice + " Beats " + computerChoice;
            score += 1;
        } else {
            gameText.innerText = "You Lost!!! " + computerChoice + " Beats " + userChoice;
        }
    }
    
    else if (userChoice === "Paper") {
        if (computerChoice === "Rock") {
            gameText.innerText = "You Won!!!" + userChoice + " Beats " + computerChoice;
            score += 1;
        } else {
            gameText.innerText = "You Lost!!!" + computerChoice + " Beats " + userChoice;
        }
    }
}
function changeTextbackToOriginal() {
    originalText = setTimeout(() => {
        gameText.innerText = "Choose from above";
    }, 3000);
};

function generateRandomNumber(){
    let randomNum = Math.floor((Math.random() * 3) + 1);
    let obj = {
        1: "Rock",
        2: "Paper",
        3: "Scissor"
    };
    return obj[randomNum];
}

function updateScore(score,totalGames){
    let scoreHtml = document.querySelector(".updateScore");
    let totalHtml = document.querySelector(".updateTotal");
    scoreHtml.innerText = score + "";
    totalHtml.innerText = totalGames + "";
}
