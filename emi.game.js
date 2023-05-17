
const simonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var randomColor = "";
var randomNumber = 0;
var clickedColor = "";
var gameStarted = false;
var gameLevel = -1;
var i = 0;

$(this).on("keydown", function () {
    if (!gameStarted) {
        gameLevel = 0;
        $("#level-title").text("Level: " + gameLevel);
        nextSequence();
        gameStarted = true;

        showPattern(gamePattern, 1000);
    }
});

$('.btn').on("click", function () {
    userClickedColor = $(this).attr("id");
    userClickedPattern.push(userClickedColor);

    flashButton(userClickedColor);
    playColorAudio(userClickedColor);

    //check answer
    checkAnswer(gameLevel);
});


function checkAnswer(currentLevel) {
    for (let i = 0; i <= currentLevel; i++){
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("Same: " + gamePattern[currentLevel]);
            gameLevel++;
            nextSequence();
        } else {
            console.log("Wrong, game over");
            playWrong();
        }
    }
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomColor = simonColors[randomNumber];
    gamePattern.push(randomColor);
    
    console.log("Pattern: "+gamePattern);
}

//show patrtern
function showPattern(arr, delay) {
    let index = -1;

    const interval = setInterval(function () {
        if (++index === arr.length) {
            clearInterval(interval);
            return;
        }

        flashButton(arr[index]);
        playColorAudio(arr[index]);

    }, delay);
}

//Play the right audio for each color
function playColorAudio(color) {
    var audio = new Audio("sounds/"+color + ".mp3");
    audio.play();
}

function playWrong() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}

//Flash the right button for each color. 
function flashButton(color) {
    $("#"+color).addClass("pressed");
    setTimeout(function () {
        $("#"+color).removeClass("pressed");
    }, 100);
}
