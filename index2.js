var eventObjects = document.querySelectorAll(".drum");//array of elements with the class drum



for ( var i = 0; i < keyLimit; i++ ) {

  document.querySelectorAll(".drum").addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case ".a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case ".s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case ".d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case ".j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case ".k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case ".l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(`No ${buttonInnerHTML} HTML element.`);
    }//switch

  }//eventListener

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
