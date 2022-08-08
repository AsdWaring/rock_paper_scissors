/* got the game to work at button push, need to create a counter
that displays who score and have it out of five games*/

// setting constants
let playerscorenumber = 0;
let computerscorenumber = 0;
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
//game function - I simpliefied the code using ||
//
function game() {
  computerselect();

  if (user == comp) {
    alert("you tie");
    results =
      "You tie <br></br>" +
      user +
      " ties " +
      comp +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
  } else if (
    (user == "rock" && comp == "paper") ||
    (user == "paper" && comp == "scissors") ||
    (user == "scissors" && comp == "rock")
  ) {
    alert("you lose");
    computerscorenumber += 1;
    results =
      "You lose <br></br>" +
      comp +
      " beats " +
      user +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
  } else if (
    (user == "rock" && comp == "scissors") ||
    (user == "paper" && comp == "rock") ||
    (user == "scissors" && comp == "paper")
  ) {
    alert("you win");
    playerscorenumber += 1;
    results =
      "You win <br></br>" +
      user +
      " beats " +
      comp +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
  }
  document.getElementById("results").innerHTML = results;
  return;
}
//run game
//
