let randomNumber = Math.floor(Math.random() * 9) + 1;
let numGuesses = 0;

function guessNumber() {
    let guess = document.getElementById("inputGuess").value;
    numGuesses++;

   if(guess == randomNumber) {
    document.getElementById("output5").innerHTML = "Congratulations, you guessed the number in " + numGuesses + " tries!";
   } else if(numGuesses == 3) {
    document.getElementById("output5").innerHTML = "Sorry, you used up all your guesses. The number was " + randomNumber + ".";
   } else {
    document.getElementById("output5").innerHTML = "Sorry, that is not the number. You have " + (3 - numGuesses) + " guesses left.";
   }
}