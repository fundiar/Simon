
const buttonColors = ["red", "blue", "green", "yellow"]; //array with fixed colors
var rndnbr; //Store random number to chose a random color from above array
var randomChosenColor; //Translate random color to actual color

var gamePattern = []; //Store game pattern
var userClickedPattern = []; //Store user clicked pattern
var userClickedColor; //User clicked translated color
var gameLevel = 0; // track game level


$(this).on("keypress", function () {
    rndnbr = nextSequence();
    randomChosenColor = buttonColors[rndnbr];
    gamePattern.push(randomChosenColor);

    flashButton("#" + randomChosenColor);
    playColorAudio(randomChosenColor);
   

    $('.btn').on("click", function () {
    
        playColorAudio($(this).attr("id"));
        flashButton("#" + $(this).attr("id"));
    
    })

});



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
 
    $("#level-title").text("Level 0");
    return randomNumber;
}

function playColorAudio(color) {
    var audio = new Audio("sounds/"+color + ".mp3");
    audio.play();
}

function flashButton(color) {
    $(color).addClass("pressed");
    setTimeout(function () {
        $(color).removeClass("pressed");
    }, 100);
}
