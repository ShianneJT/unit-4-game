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
  var targetNum = 0
  var leaf = 0
  var mushroom = 0
  var flower = 0
  var star = 0

  // Game stats
  var playerScore = 0
  var wins = 0;
  var losses = 0;

  // Images
  $("#powerUp1").attr("src", "assets/images/mario01.png")
  $("#powerUp2").attr("src", "assets/images/mario02.png")
  $("#powerUp3").attr("src", "assets/images/mario03.png")
  $("#powerUp4").attr("src", "assets/images/mario04.png")

// Assigns a random number between 19 and 120
  targetNum = Math.floor(Math.random() * (120-19) + 19)
  $('#targetNum').html(targetNum);
  console.log(`Target number ${targetNum}`);

// Assigns a hidden value between 1 and 12 to each power up 
  mushroom = Math.floor(Math.random() * 11 + 1);
  flower = Math.floor(Math.random() * 11 + 1);
    if (flower === mushroom) {
      flower += 1;
    }  
  leaf = Math.floor(Math.random() * 11 + 1);
    if (leaf === mushroom || leaf === flower) {
      leaf += 2;
    }
  star = Math.floor(Math.random() * 11 + 1);
    if (star === mushroom || star === flower || star === leaf) {
      star += 3;
    }

// For testing --- REMOVE ~~~~~~~~~~~~~!!
    console.log(`mushroom: ${mushroom}`)  
    console.log(`flower: ${flower}`)
    console.log(`leaf: ${leaf}`) 
    console.log(`star: ${star}`)

// Game starts when the user clicks an image, adding the value of the object to the playerScore
// Mushroom
$('powerUp1').click(function() {
  playerScore = playerScore + mushroom
    $('#currentScore');
})

// Flower
$('powerUp2').click(function() {
  playerScore = playerScore + flower
    $('#currentScore');
})

// Leaf
$('powerUp3').click(function() {
  playerScore = playerScore + leaf
    $('#currentScore');
})

// Star
$('powerUp4').click(function() {
  playerScore = playerScore + star
    $('#currentScore');
})






  $('#playerScore').html(playerScore);





  




}); // End of: $(document).ready(function()





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










// var randomNum = Math.floor(Math.random() * (120-19) + 19);
// var objOne = Math.ceil(Math.random() * 12);
// var objTwo = Math.ceil(Math.random() * 12);
// var objThree = Math.ceil(Math.random() * 12);
// var objFour = Math.ceil(Math.random() * 12);


// console.log(`Random Number: ${randomNum}`);
// console.log(`Object One: ${objOne}`);
// console.log(`Object Two: ${objTwo}`);
// console.log(`Object Three: ${objThree}`);
// console.log(`Object Four: ${objFour}`);





  // $('#two').on('click', function() {
  //   $('playerScore').text(objTwo);
  //     console.log(objTwo);
  // })

  // $('#three').on('click', function() {
  //   $('playerScore').text(objThree);
  //     console.log(objThree);
  // })

  // $('#four').on('click', function() {
  //   $('playerScore').text(objFour);
  //     console.log(objFour);
  // })




