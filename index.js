gamePattern = []
userClickedPattern =[]
buttonColours =["red", "blue", "green", "yellow"]
var level = 0;
var gameStarted = false;
var highScore = 0;

function nextSequence(){
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()* 4)
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name){
    audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function userInput(){
    $(".btn").on("click", function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour)
        console.log(userClickedPattern)
        playSound(userChosenColour)
        animatePress(userChosenColour)
        //check user value by index click
        var currentClickIndex = userClickedPattern.length-1
        checkAnswer(currentClickIndex);
    });
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100);
}


function checkAnswer(currentClickIndex) {
    // parameter "currentClickIndex" always update when user click
    if (userClickedPattern[currentClickIndex] === gamePattern[currentClickIndex]) {
        console.log("success");
        if (currentClickIndex+1 === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function startOver(){
    userClickedPattern = [];
    gamePattern = [];
    if(level>highScore){
        highScore = level;
    }
    level = 0;
    gameStarted = false;
    $("#high-score").text("High Score: " + highScore);
}

$(document).ready(function(){
    $("#high-score").text("High Score: " + highScore);
});

$(document).keydown(function(){
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
    }
});


userInput()