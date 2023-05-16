
//Available colors for patterns
const buttonColors = ["red", "blue", "green", "yellow"];

 //Store random number to chose a random color from above array
var rndnbr;

//Translate random color to actual color
var randomChosenColor; 

//Store game pattern
var gamePattern = []; 

 //Store user clicked pattern
var userClickedPattern = [];

//User clicked translated color
var userClickedColor;

// track game level
var gameLevel = 0; 


//Start Game
$(this).on("keypress", function () {
    //new color in the sequence
    rndnbr = nextSequence();
    randomChosenColor = buttonColors[rndnbr];
    gamePattern.push(randomChosenColor);

    //flash & sound for new color in sequence
    flashButton("#" + randomChosenColor);
    playColorAudio(randomChosenColor);
   
    //capture user input
    $('.btn').on("click", function () {
    
        playColorAudio($(this).attr("id"));
        flashButton("#" + $(this).attr("id"));
    
    })
});

//Select next sequence in the pattern
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
 
    $("#level-title").text("Level 0");
    return randomNumber;
}

//Play the right audio for each color
function playColorAudio(color) {
    var audio = new Audio("sounds/"+color + ".mp3");
    audio.play();
}

//Flash the right button for each color. 
function flashButton(color) {
    $(color).addClass("pressed");
    setTimeout(function () {
        $(color).removeClass("pressed");
    }, 100);
}
