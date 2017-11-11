//array of CPU letter
var cpuChoose = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

//Setting user score to 0 
var wins = 0;
var losses = 0;
var guesses = 10;

//CPU selects letter from Array
var computerChoice = cpuChoose[Math.floor(Math.random() * cpuChoose.length)];

    console.log(computerChoice)

//Allows user to randomly select

//If loss, deducts from chance

    //If chance reaches 0 game ends.

//If loss, add to lose count

//If win, add to win count