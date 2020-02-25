      // Variables:
      var computerChoices = ["a", "b", "c", "d", "e", "f", "g",
          "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
          "u", "v", "w", "x", "y", "z" ];
      var wins = 0;
      var losses = 0;
      var GuessesLeft = 9;
      var userGuesses = [];
      var userChoiceText = document.getElementById("userchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var GuessesLeftText = document.getElementById("Guesses-Left");
      var GuessesUsedText = document.getElementById("Guesses-Used:");
      var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
      //restart Function
      var restart = function() {
        GuessesLeft = 9;
        userGuesses = [];
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }
  
      //when player presses a button: 
      document.onkeyup = function(event) {
        var userGuess = event.key; 
        GuessesLeft--;
        var user = GuessesLeft;
        userGuesses.push(userGuess);
  
        //if statement  
        if (userGuess === computerChoice) {
            wins++;
            restart ();
          } else if (GuessesLeft === 0) {
            losses++;
            restart ();
          }
  
          //outputs 
          userChoiceText.textContent = "You choose: " + userGuess;
          winsText.textContent = "Wins: " + wins;
          lossesText.textContent = "Losses: " + losses;
          GuessesLeftText.textContent = "Guesses Left: " + GuessesLeft;
          GuessesUsedText.textContent = "Current Keys Pressed: " + userGuesses;
        }