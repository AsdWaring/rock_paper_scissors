//Player Select

const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");

rockbutton.addEventListener("click", () => {
  console.log("user: rock");
  user = "rock";
});

paperbutton.addEventListener("click", () => {
  console.log("user: paper");
  user = "paper";
});

scissorsbutton.addEventListener("click", () => {
  console.log("user: scissors");
  user = "scissors";
});
