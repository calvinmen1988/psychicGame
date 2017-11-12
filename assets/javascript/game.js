//array of CPU letter
var cpuChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//var for wins, losses, guesses starting at 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//CPU selects letter from Array
var computerChoice = cpuChoose[Math.floor(Math.random() * cpuChoose.length)];

console.log(computerChoice);

//Allows user to select and determines if user guess correctly or not. If wrong, deducts from guesses left. If out of guesses, add to losses count.

document.onkeyup = function () {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userGuess === computerChoice) {
        wins++;
        alert("True Winner!")
    }
    else {
        guessesLeft--;
    }

    if (guessesLeft = 0) {
        losses++;
        alert("Take the L!");
    }
}


// Displaying progress to HTML

var html = "<h1>The Psychic Game</h1>" + "<h2>Guess what letter I\'m thinking of</h2>" + "<li>Wins: " + wins + "</li>" + "<li>Losses: " + losses + "</li>" + "<li>Guesses Left: " + guessesLeft + "</li>" + "<li>Your guesses so far: " + guessesSoFar + "</li>";

// place html into the game ID

document.querySelector("#coreGame").innerHTML = html;