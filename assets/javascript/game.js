//We start by defining our variables:
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The computer chooses a random letter:
var computerChoice = letters[Math.floor(Math.random()*26)]
console.log(computerChoice)
//The user presses a letter: 
document.onkeyup = function(event) {
    //The letter pressed becomes the user's guess
    var userGuess = event.key;
    console.log(computerChoice);

    //if the user didnt pick a letter, send them an alert 
    if(letters.includes(userGuess) === false) {
        alert("Oops! Try picking a letter")
    }
    //if the user already picked that letter send them an alert
    else if(guessesMade.includes(userGuess)) {
        alert("You tried that already! Try picking a different letter.")
    }
    //If the user's guess matches the computer, we will alert the user, add 1 to our total wins,  and reset the computer's choice, guesses made, and guesses left:
    else if(userGuess === computerChoice){
        alert("Congratulations! You guessed correct!")

        wins++;
        document.getElementById("wins").textContent = wins

        computerChoice = letters[Math.floor(Math.random()*26)]

        guessesMade = [];
        document.getElementById("guessesMade").textContent = guessesMade;

        guessesLeft = 9
        document.getElementById("guessesLeft").textContent = guessesLeft;
    } 
    //If the user guesses wrong, we -1 from guesses left, and record our guess to guesses made
    else {
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = guessesLeft;

        guessesMade.push(userGuess);
        document.getElementById("guessesMade").textContent = guessesMade;
    }
    //If guesses left reaches 0, we will alert the user, +1 to our toal losses, and reset our gusses made, the computer's choice, and guesses left
    if(guessesLeft === 0) {
        alert("Sorry! You ran out of guesses. Better luck next time!")

        losses++;
        document.getElementById("losses").textContent = losses;

        guessesMade = [];
        document.getElementById("guessesMade").textContent = guessesMade;

        computerChoice = letters[Math.floor(Math.random()*26)]

        guessesLeft = 9
        document.getElementById("guessesLeft").textContent = guessesLeft;
    }
}

