var playerInput = prompt("Choose your weapon: rock, paper, or scissors. Type EXIT to exit the app.");

// LOOP TO MAKE THE PROMPT REAPPEAR
while (playerInput !="EXIT") {

  // THE COMPUTER'S RANDOM MOVE
  var computerMove = Math.random();
  if (computerMove < 0.34){
    computerMove = "rock";
  }
  else if (computerMove <= 0.67){
    computerMove = "paper";
  }
  else {
    computerMove = "scissors";
  }

// COMPARING THE TWO SCORES TO SEE WHO'S WON
  function checkScore(playerInput, computerMove){

    if (playerInput === computerMove){
      alert("It's a draw!");
    }
    else if (playerInput === "rock" && computerMove === "scissors"){
      alert("Rock beats scissors: you win a point!");
      var playerPoint = 1;
    }
    else if (playerInput === "paper" && computerMove === "rock"){
      alert("Paper beats rock: you win a point!");
      var playerPoint = 1;
    }
    else if (playerInput === "scissors" && computerMove === "paper"){
      alert("Scissors beats paper: you win a point!");
      var playerPoint = 1;
    }
    else if (playerInput === "scissors" && computerMove === "rock"){
      alert("Rock beats scissors: I win a point!");
      var computerPoint = 1;
    }
    else if (playerInput === "rock" && computerMove === "paper"){
      alert("Paper beats rock: I win a point!")
      var computerPoint = 1;
    }
    else if (playerInput === "paper" && computerMove === "scissors"){
      alert("Scissors beats paper: I win a point!");
      var computerPoint = 1;
    }
    else {
      alert("Please enter a valid option.");
    } //END OF IF STATEMENT

    // I put this inside the function because what's outside cannot see what's inside.
  var displayScore = "Your score is " + playerPoint + " My score is " + computerPoint;
  alert(displayScore);



  } //END OF FUNCTION CHECKSCORE

  checkScore(playerInput, computerMove);








  playerInput = prompt("Choose your weapon: rock, paper, or scissors. Type EXIT to exit the app.");

 } //END OF MASSIVE LOOP
