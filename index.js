var eventObjects = document.querySelectorAll(".drum");//array of elements with the class drum
var buttonLimit = eventObjects.length;
var soundUrl = "";

function playSound(soundUrl) {
  var sound = new Audio(soundUrl);//sounds
  return sound.play();
}

function handleClick() {
    playSound(soundUrl);
}//handleClick


for ( var i = 0; i < buttonLimit; i++ ) {

  var soundUrl = "";
  var currObj = eventObjects[i];

  //Check for div moniker on current element
  //Set sound file
  if ( i === 0 ) { soundUrl = "sounds/tom-1.mp3"; }//currObj === "button.w.drum" "button.w.drum"


  if ( i === 1 ) { soundUrl = "sounds/tom-2.mp3"; }//currObj === "button.a.drum"


  if ( i === 2 ) { soundUrl = "sounds/tom-3.mp3"; }//currObj === "button.s.drum"


  if ( i === 3 ) { soundUrl = "sounds/tom-4.mp3"; }//currObj === "button.d.drum"


  if ( i === 4  ) { soundUrl = "sounds/crash.mp3"; }//currObj === "button.j.drum"


  if ( i === 5 ) { soundUrl = "sounds/kick-bass.mp3"; }//currObj === "button.k.drum"


  if ( i === 6 ) { soundUrl = "sounds/snare.mp3"; }//currObj === "button.l.drum"

  //Listen for click on cuurent element
  currObj.addEventListener("click",handleClick);

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
