


var buttonColours = ["red", "blue", "green", "yellow"];
var userClickPattern = [];
var gamePattern = [];
var start = false;
var level = 0;


$(document).keypress(function() {
    if (!start) {
        $("#level-title").text("level "+ level);
         nextSequence();
         start = true;
     }

});



$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickPattern.length - 1);

 });

 
 function checkAnswer(currentLevel){
    if(gamePattern [currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);
    }
      }
    else {

    
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
      
        
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

    startOver();
}}








function nextSequence() {
    userClickPattern = [];

    level ++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColour);
   
  } 

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $ ("#"+ currentColour).addClass("pressed");

   
        setTimeout(function() {
        $ ("#"+ currentColour).removeClass("pressed");
    }, 100);
}




function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}