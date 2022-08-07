// setting constants
//
const comp = computerselect;
//random select
//
function computerselect() {
  randomnumber = Math.floor(Math.random() * 3);
  if (randomnumber == "0") {
    return "rock";
  } else if (randomnumber == "1") {
    return "paper";
  } else if (randomnumber == "2") {
    return "scissors";
  }
}
//user prompt
//
let user = prompt("Rock, Paper, Scissors?").toLowerCase();
//game function
//
function game(user, comp) {
  comp = computerselect();
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
console.log(computerselect());
game(user, comp);
