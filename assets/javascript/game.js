//array of CPU letter
var cpuChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//var for wins, losses, guesses starting at 0
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft=10;

//CPU selects letter from Array
var computerChoice = cpuChoose[Math.floor(Math.random()*cpuChoose.length)];

    console.log(computerChoice);

//Allows user to select and determines if user guess correctly or not. If wrong, deducts from guesses left. If out of guesses, add to losses count.

document.onkeyup = function() {
   
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (userGuess === computerChoice) {
            wins++;
            alert("True Winner!")}
             else {
                guesses--;
                }

            if (guesses = 0) {
                losses++;
                alert("Take the L!");
                }
        }
                

        
//Counts are update

function display () {
        documents.getElementById("wins") = "Wins: " + wins;
        document.getElementById("losses") = "Losses: " + losses;
        document.getElementById("guesses") = "Guesses Left: " + guesses;
}