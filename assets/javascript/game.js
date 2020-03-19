// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, 
// the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Arrays:
// var random number at the start of the game between 19 and 120
// Four buttons that need to have a random value between 1-12
// Players score is hidden until they click a button
// score displays in the score box

// Start of game
// Display empty stats

// Variables
var wins = 0;
var losses = 0;
var playerScore = 0;
var randomNum = Math.floor(Math.random() * (120-19) + 19);

console.log(randomNum)


// reset game
// clears players score
// picks a new random number 
// picks new numbers for object

$(document).ready(function(){

// When the game starts assign a random number to randomNum div
  var randomNumDiv = document.getElementById('randomNum');
    randomNumDiv.textContent = randomNum;






});
