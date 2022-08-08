/* I am making good progress, but I need to understand
how to start the game with the the selection of the user buttons
I am learning something new each time I tackle this problem 
player selection may need to be converted into a function?*/

// setting constants
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");
// player selection
rockbutton.addEventListener("click", () => {
  console.log("User: rock");
  user = "rock";
  game();
});

paperbutton.addEventListener("click", () => {
  console.log("User: paper");
  user = "paper";
  game();
});

scissorsbutton.addEventListener("click", () => {
  console.log("User: scissors");
  user = "scissors";
  game();
});
//random select
//

function computerselect() {
  randomnumber = Math.floor(Math.random() * 3);
  if (randomnumber == "0") {
    console.log("Computer: rock");
    comp = "rock";
  } else if (randomnumber == "1") {
    console.log("Computer: paper");
    comp = "paper";
  } else if (randomnumber == "2") {
    console.log("Computer: scissors");
    comp = "scissors";
  }
}
//user prompt
//

//let user = prompt("Rock, Paper, Scissors?").toLowerCase();
//game function
//
function game() {
  computerselect();
  if (user == comp) alert("you tie");
  else if (user == "rock" && comp == "paper") alert("you lose");
  else if (user == "rock" && comp == "scissors") alert("you win");
  else if (user == "paper" && comp == "rock") alert("you win");
  else if (user == "paper" && comp == "scissors") alert("you lose");
  else if (user == "scissors" && comp == "rock") alert("you lose");
  else if (user == "scissors" && comp == "paper") alert("you win");
}
//run game
//
