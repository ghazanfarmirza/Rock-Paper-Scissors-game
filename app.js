let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p")
const rock_Div = document.getElementById("r");
const paper_Div = document.getElementById("p");
const scissors_Div = document.getElementById("s");


function getCompChoice() {
  const choices = ['r','p','s'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];

}

function convertToWord(letter) {
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice,computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(4).sup();
  const smallCompWord = "comp".fontsize(4).sup();
  resultP.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You won!`
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")},300);
}

function lose(userChoice,computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(4).sup();
  const smallCompWord = "comp".fontsize(4).sup();
  resultP.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You lost!`
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")},300);

}
function draw(userChoice,computerChoice) {
  const smallUserWord = "user".fontsize(4).sup();
  const smallCompWord = "comp".fontsize(4).sup();
  resultP.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} It's a draw!`
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")},300);
}

function game(userChoice){
  const computerChoice = getCompChoice();
  // console.log("User choice => " + userChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
  }
}

game();

function main(){
  rock_Div.addEventListener('click',function(){
    game('r')
  })

  paper_Div.addEventListener('click',function(){
    game('p')
  })

  scissors_Div.addEventListener('click',function(){
    game('s')
  })
}

main();
