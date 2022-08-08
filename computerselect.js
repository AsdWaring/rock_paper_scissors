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

console.log(computerselect());

// I really like this below peice of code

/*function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
} */
