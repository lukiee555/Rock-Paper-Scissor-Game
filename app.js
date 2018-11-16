var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
 
function main(){
    rock_div.addEventListener('click',() => game("rock"));
    
    paper_div.addEventListener('click',() => game("paper"));
    
    scissor_div.addEventListener('click',() =>game("scissor"));
}

main();

function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber ];
}

function win(user,comp){
    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${userWord} beats ${comp}${compWord}. You Win!! 🔥 `;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("green-glow");
    },300);
}

function lose(user,comp){
    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${userWord} loses ${comp}${compWord}. You Lost!! 💩`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() =>{
        document.getElementById(user).classList.remove("red-glow");
    },300);
}

function draw(user,comp){
    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${user}${userWord} equals ${comp}${compWord}. It's a Draw.`;
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(()=>{
        document.getElementById(user).classList.remove("gray-glow");
    },300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice,computerChoice);
            break;
    }
    
}

