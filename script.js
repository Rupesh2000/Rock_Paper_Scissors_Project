const buttonChoices = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
}

// initialize the score variables to 0
let yourScore = 0;
let pcScore = 0;


const chooseButton = (button)=>{

    // hide buttons div
    let buttons = document.querySelector(".buttons") 
    buttons.style.display = "none";

    // show output div
    let output = document.querySelector(".output")
    output.style.display = "flex"
    // console.log(button)

    //show user choice 
    
    document.getElementById("showUserChoice").src = buttonChoices[button];

    let chosenButton = computerChoice();
    winner(button, chosenButton)
}

const computerChoice = ()=> {
    let buttons = ["rock","paper","scissors"]
    let chosenButton = buttons[Math.floor(Math.random() * 3)]

    // console.log("chosenbutton", chosenButton);
    document.getElementById("showPcChoice").src = buttonChoices[chosenButton];

    return chosenButton;
}

const winner = (button,chosenButton) =>{
    if (button == "paper" && chosenButton == "scissors") {
        giveResult("YOU LOST AGAINST PC");
        
        pcWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
      }
      if (button == "paper" && chosenButton == "rock") {
        giveResult("YOU WIN AGAINST PC");
        userWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
        displayNext()
      }
      if (button == "paper" && chosenButton == "paper") {
        giveResult("TIE UP");
        changeButtonText("playAgain","REPLAY")
      }
      if (button == "rock" && chosenButton == "scissors") {
        giveResult("YOU WIN AGAINST PC");
        userWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
        displayNext()
      }
      if (button == "rock" && chosenButton == "paper") {
        giveResult("YOU LOST AGAINST PC");
        
        pcWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
      }
      if (button == "rock" && chosenButton == "rock") {
        giveResult("TIE UP");
        changeButtonText("playAgain","REPLAY")
      }
      if (button == "scissors" && chosenButton == "scissors") {
        giveResult("TIE UP");
        changeButtonText("playAgain","REPLAY")
      }
      if (button == "scissors" && chosenButton == "rock") {
        giveResult("YOU LOST AGAINST PC");
        
        pcWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
      }
      if (button == "scissors" && chosenButton == "paper") {
        giveResult("YOU WIN AGAINST PC");
        userWinsGame()
        changeButtonTextBack("playAgain","PLAY AGAIN")
        displayNext()      }
}

const displayNext = () =>{
  document.querySelector(".next").style.display="flex";
  document.getElementById("next-display").style.display="flex";
}
const changeButtonText = (buttonClass, newText) =>{
  // Get the button element using the provided ID
  const buttonText = document.querySelector(".playAgain");
  
  // Change the text of the button
  buttonText.textContent = newText;
}
const changeButtonTextBack = (buttonClass, newText) =>{
  // Get the button element using the provided ID
  const buttonText = document.querySelector(".playAgain");
  
  // Change the text of the button
  buttonText.textContent = newText;
}

const giveResult = (result) => {
    // console.log(result)
    document.querySelector(".result h1").innerHTML = result;
}

const playAgainGame = () =>{
    // hide buttons div
    let buttons = document.querySelector(".buttons") 
    buttons.style.display = "flex";

    // show output div
    let output = document.querySelector(".output")
    output.style.display = "none"

    document.querySelector(".next").style.display="none";
    document.getElementById("next-display").style.display="none";
}

// Show/Hide Rules
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// increment the user score when they win a game
function userWinsGame() {
  yourScore++;
  updateScoreDisplay();
  localStorage.setItem('yourScore', yourScore);
}

// increment the computer score when it wins a game
function pcWinsGame() {
  pcScore++;
  updateScoreDisplay();
  localStorage.setItem('pcScore', pcScore);
}

// update the score displays on the page
function updateScoreDisplay() {
  const yourScoreDisplay = document.querySelector('.yourScore h1');
  const pcScoreDisplay = document.querySelector('.computerScore h1');
  yourScoreDisplay.innerText = yourScore;
  pcScoreDisplay.innerText = pcScore;
}

// retrieve the saved score values from local storage on page load
window.onload = function() {
  const savedYourScore = localStorage.getItem('yourScore');
  const savedPcScore = localStorage.getItem('pcScore');
  if (savedYourScore && savedPcScore) {
    yourScore = parseInt(savedYourScore);
    pcScore = parseInt(savedPcScore);
    updateScoreDisplay();
  }
}

function clearLocalStorage() {
  localStorage.clear();
}