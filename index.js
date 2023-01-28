gamePattern = []

buttonColours =["red", "blue", "green", "yellow"]

// for more understanding of how this works, see:
// let randomIndex = Math.floor(Math.random() * buttonColours.length);
// var randomChosenColour = buttonColours[randomIndex];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()* 4)
    console.log(randomNumber)
    // for more understanding of how this works, see:
    // let randomIndex = Math.floor(Math.random() * buttonColours.length);
    // var randomChosenColour = buttonColours[randomIndex];
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
}

