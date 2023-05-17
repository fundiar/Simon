
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

//gameStarted
var gameStarted = 0;


//Start Game
$(this).on("keypress", function () {
    if (!gameStarted) {

        gameStarted = 1;

        $("#level-title").text("Level: " + gameLevel);
        
        //first color in the sequence
        nextSequence();
    }
});

userInput();


//Select next sequence in the pattern
function nextSequence() {
    //Set game level on screen
    
    
    //Chose random color
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    
    //Populate color into pattern
    gamePattern.push(randomChosenColor);

    //display game pattern
    for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(function () {
            flashButton("#" + gamePattern[i]);
            playColorAudio(gamePattern[i]);
        }, 500);
    }
}

//Capture user input
function userInput() {
    $('.btn').on("click", function () {
       
        userClickedPattern.push($(this).attr("id"));

        for (let i = 0; i < gamePattern.length; i++) {
            if (userClickedPattern[i] == gamePattern[i]) {
                playColorAudio($(this).attr("id"));
                flashButton("#" + $(this).attr("id"));  
            } else {
                playWrong();
                $("#level-title").text("Game Over!");
                gameStarted = 0;
                return 0;
            }
        }
        $("#level-title").text("Level: " + gamePattern.length);
        setTimeout(function () {
            nextSequence();
        },100);
    })
}



//Play the right audio for each color
function playColorAudio(color) {
    var audio = new Audio("sounds/"+color + ".mp3");
    audio.play();
}

function playWrong(color) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}

//Flash the right button for each color. 
function flashButton(color) {
    $(color).addClass("pressed");
    setTimeout(function () {
        $(color).removeClass("pressed");
    }, 100);
}
