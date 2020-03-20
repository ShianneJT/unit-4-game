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


// var random number at the start of the game between 19 and 120
// Four buttons that need to have a random value between 1-12
// Players score is hidden until they click a button
// score displays in the score box
$(document).ready(function(){

// Variables
var randomNum = Math.floor(Math.random() * (120-19) + 19);
var objOne = Math.ceil(Math.random() * 12);
var objTwo = Math.ceil(Math.random() * 12);;
var objThree = Math.ceil(Math.random() * 12);
var objFour = Math.ceil(Math.random() * 12);
var wins = 0;
var losses = 0;
var playerScore = 0;

console.log(`Random Number: ${randomNum}`);
console.log(`Object One: ${objOne}`);
console.log(`Object Two: ${objTwo}`);
console.log(`Object Three: ${objThree}`);
console.log(`Object Four: ${objFour}`);



  $('#one').on('click', function() {
    playerScore = objOne
    $('#playerScore').val(objOne).text(objOne);
    console.log(playerScore)
  })

  $('#two').on('click', function() {
    $('playerScore').text(objTwo);
      console.log(objTwo);
  })

  $('#three').on('click', function() {
    $('playerScore').text(objThree);
      console.log(objThree);
  })

  $('#four').on('click', function() {
    $('playerScore').text(objFour);
      console.log(objFour);
  })



})

// reset game
// clears players score
// picks a new random number 
// picks new numbers for object

  //When a button is clicked it should add the randomly generated number to the player score
  // The game is won when the players score is equal to the random number
  // +1 to wins
  // The game is lost when the player score exceeds the random number
  // + 1 to losses
  // 
  // This will choose new numbers and clear the player score

// Game start
// Clicking a button adds its value to the player score

// Win Condition
// When playerScore === randomNum
// Alert player that they won, woo!
// add 1 to wins
// restart game

// Loss Condition
// If player score > randomNum
// alert player that they lost
// add 1 to losses
// restart game