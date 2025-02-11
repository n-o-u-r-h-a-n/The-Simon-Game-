var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var test = [];
var counter = 0
var flag = false;

$("*").keypress(function(){//entering this state only at start of game 
  if(level == 0){ 
    flag = false;
    nextSequence();
  }
});

$(".btn").click(function(){
  counter++;
  var userChosenColour = $(this).attr("id");//selecting id not the whole element
  userClickedPattern.push(userChosenColour);
  //console.log(userChosenColour); TESTING
  if(userChosenColour == gamePattern[counter-1]){
    //console.log("gamepattern "+gamePattern); TESTING
    //console.log("color" + userChosenColour); TESTING
    playSound(userChosenColour);
    animatePress(userChosenColour);
  }
  else{
    $("h1").text("Game Over, Press Any Key to Restart");
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    counter = 0;
    playSound("wrong");
    $("*").addClass("game-over");
    setTimeout(function(){
      $("*").removeClass("game-over")
    }, 200);
    flag = true;
  }
  if(counter == gamePattern.length && flag == false){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
});


//function buttonClick(){ ANOTHER APPROACH
  //    while(gamePattern.length >0){
    //  test = gamePattern.slice();
      //console.log("gamepattern "+gamePattern);
      //console.log("test "+test);
      //if(gamePattern[0] != userClickedPattern[0]){
        //$("h1").text("Game Over, Press Any Key to Restart");
        //userClickedPattern = [];
        //gamePattern = [];
        //level = 0;
        //playSound("wrong");
        //$("*").addClass("game-over");
        //setTimeout(function(){
        //  $("*").removeClass("game-over")
        //}, 100);
    //  }
      //else{
        //console.log("hi");
        //playSound(userChosenColour);
        //animatePress(userChosenColour);
        //gamePattern.shift();
        //console.log("gamepattern "+gamePattern);
        //console.log(gamePattern.length);
      //}
      //}
      //userClickedPattern = [];
      //gamePattern = test.slice();
      //console.log("gamepattern "+gamePattern);
      //console.log("test "+test);
      //console.log("now"+gamePattern.length);
      //nextSequence(); 
//}


function nextSequence(){
  counter = 0;
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //flashing the button
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed")
  }, 100);
}






