
$(document).ready(function(){

// Images
$("#powerUp1").attr("src", "assets/images/mario01.png")
$("#powerUp2").attr("src", "assets/images/mario02.png")
$("#powerUp3").attr("src", "assets/images/mario03.png")
$("#powerUp4").attr("src", "assets/images/mario04.png")

// Variables
  var targetNum = 0
  var leaf = 0
  var mushroom = 0
  var flower = 0
  var star = 0

  // Game stats
  var playerScore = 0;
  var wins = 0;
  var losses = 0;

  

// Assigns a random number between 19 and 120
  targetNum = Math.floor(Math.random() * (120-19) + 19)
  $('#targetNumDiv').html(targetNum);
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
$('#powerUp1').click(function() {
  playerScore = playerScore + mushroom
  playerScore = parseInt(playerScore);
    $('#playerScoreDiv').html(playerScore);
    checkWin()
})

// Flower
$('#powerUp2').click(function() {
  playerScore = playerScore + flower
    $('#playerScoreDiv').html(playerScore);
    checkWin()
})

// Leaf
$('#powerUp3').click(function() {
  playerScore = playerScore + leaf
    $('#playerScoreDiv').html(playerScore);
    checkWin()
})

// Star
$('#powerUp4').click(function() {
  playerScore = playerScore + star
    $('#playerScoreDiv').html(playerScore);
    checkWin()
})

// Win Condition
// When playerScore === randomNum
// Alert player that they won, woo!
// add 1 to wins
// restart game



function checkWin() {
  if (playerScore === targetNum) {
    alert('You won!');
    wins++;
    $('#wins').text(wins);
      newGame();
  } else if (playerScore > targetNum) {
    alert('Game Over!');
    losses++;
    $('#losses').text(losses);
      newGame()
  }
}

function newGame() {
  $('#playerScoreDiv').empty();

  var leaf = 0
  var mushroom = 0
  var flower = 0
  var star = 0
  var playerScore = 0;
};    


}) // End of $(document).ready(function()







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




