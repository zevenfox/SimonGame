gamePattern = []
userClickedPattern =[]
buttonColours =["red", "blue", "green", "yellow"]
var level = 0;
var gameStarted = false;

function nextSequence(){
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()* 4)
    console.log(randomNumber)
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour)
    // playSound(randomChosenColour);
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
    });
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100);
}

$(document).keydown(function(){
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
    }
});

