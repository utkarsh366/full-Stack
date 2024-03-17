var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = buttonColours[randomNumber];
    gamePattern.push(randomChooseColor);
    $("#" + randomChooseColor).fadeOut(100).fadeIn(100);
    $("#" + randomChooseColor).on("click", function() {
        var userChosenColour = $(this).attr("id");
        $("#" + userChosenColour).fadeOut(100).fadeIn(100);
        // Add additional logic here as needed
    });
}

// Call nextSequence to start the game
nextSequence();
