function computerselect(max) {
  randomnumber = Math.floor(Math.random() * max);
  if (randomnumber == "0") {
    return "rock";
  } else if (randomnumber == "1") {
    return "paper";
  } else if (randomnumber == "2") {
    return "scissors";
  }
}
// Need to figure out how to assign computerselect return as comp

/*let user = prompt("Rock, Paper, Scissors?");

function game(user, comp) {
  if (user == comp) alert("you tie");
  else if (user == "rock" && comp == "paper") alert("you lose");
  else if (user == "rock" && comp == "scissors") alert("you win");
  else if (user == "paper" && comp == "rock") alert("you win");
  else if (user == "paper" && comp == "scissors") alert("you lose");
  else if (user == "scissors" && comp == "rock") alert("you lose");
  else if (user == "scissors" && comp == "paper") alert("you win");
}*/

console.log(computerselect(3));
//game(user, comp);
