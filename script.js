/* Needs some css but it is functional*/

// setting constants
let playerscorenumber = 0;
let computerscorenumber = 0;
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");
const resetbutton = document.querySelector("#reset");
//Reset button

resetbutton.addEventListener("click", () => {
  console.log("reset");
  playerscorenumber = 0;
  computerscorenumber = 0;
  results = "Pick a Weapon";
  rockbutton.disabled = false;
  scissorsbutton.disabled = false;
  paperbutton.disabled = false;
  document.getElementById("results").innerHTML = results;
  return;
});

// player selection
rockbutton.addEventListener("click", () => {
  console.log("User: rock");
  user = "Rock";
  game();
});

paperbutton.addEventListener("click", () => {
  console.log("User: paper");
  user = "Paper";
  game();
});

scissorsbutton.addEventListener("click", () => {
  console.log("User: scissors");
  user = "Scissors";
  game();
});
//disable buttons
function disablebuttons() {
  rockbutton.disabled = true;
  scissorsbutton.disabled = true;
  paperbutton.disabled = true;
}

//random select
//

function computerselect() {
  randomnumber = Math.floor(Math.random() * 3);
  if (randomnumber == "0") {
    console.log("Computer: rock");
    comp = "Rock";
  } else if (randomnumber == "1") {
    console.log("Computer: paper");
    comp = "Paper";
  } else if (randomnumber == "2") {
    console.log("Computer: scissors");
    comp = "Scissors";
  }
}
//user prompt
//

//let user = prompt("Rock, Paper, Scissors?").toLowerCase();
//game function - I simpliefied the code using or||
//
function game() {
  computerselect();

  if (user == comp) {
    //alert("you tie");
    results =
      "You Tie! <br></br>" +
      user +
      " ties " +
      comp +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
  } else if (
    (user == "Rock" && comp == "Paper") ||
    (user == "Paper" && comp == "Scissors") ||
    (user == "Scissors" && comp == "Rock")
  ) {
    //alert("you lose");
    computerscorenumber += 1;
    results =
      "You Lose! <br></br>" +
      comp +
      " beats " +
      user +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
    if (computerscorenumber == 5) {
      results = "Game Finished! The Computer has Defeated You!";
      disablebuttons();
    }
  } else if (
    (user == "Rock" && comp == "Scissors") ||
    (user == "Paper" && comp == "Rock") ||
    (user == "Scissors" && comp == "Paper")
  ) {
    //alert("you win");
    playerscorenumber += 1;
    results =
      "You Win! <br></br>" +
      user +
      " beats " +
      comp +
      "<br></br>Player score: " +
      playerscorenumber +
      "<br></br>Computer Score: " +
      computerscorenumber;
    if (playerscorenumber == 5) {
      results = "Game Finished! You have Defeated the Computer";
      disablebuttons();
    }
  }

  document.getElementById("results").innerHTML = results;
  return;
}
