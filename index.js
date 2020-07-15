var eventObjects = document.querySelectorAll(".drum");//array of elements with the class drum
var classKeys = [".w",".a",".s",".d",".j",".k",".l",]
var keyLimit = classKeys.length;
var soundUrl = "";

function playSound(soundUrl) {
  //var soundUrl = "";
  //var sounds = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3"];
  //soundUrl = sounds(index);

  var sound = new Audio(soundUrl);//sounds
  sound.play();
}

function handleClick() {
  playSound(index);
}//handleClick


for ( var i = 0; i < keyLimit; i++ ) {


  var currObj = classKeys[i];
  var index = i;
  console.log(`index: ${index}\n\relement: ${currObj}`);

  //Check for div moniker on current element
  //Set sound file

  switch (currObj) {
    case ".w":
      document.querySelector(currObj).addEventListener("click", function() {
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
      });

    case ".a":
      document.querySelector(currObj).addEventListener("click", function() {
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
      });
    case ".s":
    document.querySelector(currObj).addEventListener("click", function() {
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
    });
    case ".d":
    document.querySelector(currObj).addEventListener("click", function() {
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
    });
    case ".j":
    document.querySelector(currObj).addEventListener("click", function() {
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
    });
    case ".k":
    document.querySelector(currObj).addEventListener("click", function() {
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
    });
    case ".l":
    document.querySelector(currObj).addEventListener("click", function() {
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
    });
    default:
      console.log(`No ${currObj} HTML element.`);
  }//switch

  //Listen for click on cuurent element
  //currObj.addEventListener("click",handleClick);

}//for


//Using anonymous function
//eventObject.addEventListener("click", function () { alert("I got clicked!"); });

/*
get an array of all buttons
iterate through them
For each button reached in the iteration
run event listener
*/

/*
var eventObjects = document.querySelectorAll("button");//array of button elements
var objectOne = eventObjects[0];
var objectTwo = eventObjects[1];
var objectThree = eventObjects[2];
var objectFour = eventObjects[3];
var objectFive = eventObjects[4];
var objectSix = eventObjects[5];
var objectSeven = eventObjects[6];

objectOne.addEventListener("click", handleClick);
objectTwo.addEventListener("click", handleClick);
objectThree.addEventListener("click", handleClick);
objectFour.addEventListener("click", handleClick);
objectFive.addEventListener("click", handleClick);
objectSix.addEventListener("click", handleClick);
objectSeven.addEventListener("click", handleClick);
*/
