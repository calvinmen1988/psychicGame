//array of CPU letter
var cpuChoose = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

//var for wins, losses, guesses
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft=10;

//CPU selects letter from Array
var computerChoice = cpuChoose[Math.floor(Math.random()+cpuChoose.length)];

    console.log(cpuChoose);

//Allows user to select and determines if user guess correctly or not. If wrong, deducts from guesses left. If out of guesses, add to losses count.

document.onkeypress = function(event) {
    var userGuess = event.key;

        if (userGuess === computerChoice) {
            wins++;
            } else {
                guesses--;
                }

        if (guesses = 0) {
                losses++;
                }
        
    display ();
            }
// Counts are update

function display () {
            documents.getElementById("wins") = "Wins: " + wins;
            document.getElementById("losses") = "Losses: " + losses;
            document.getElementById("guesses") = "Guesses Left: " + guesses;
}