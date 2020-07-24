//primary variables
var drumObj = document.querySelectorAll(".drum");
var keyLimit = drumObj.length;

//play a sound
function playSound(char) {

  var sound;
  var sounds = {
    "w": "https://assets.codepen.io/2736276/tom-1.mp3",
    "a": "https://assets.codepen.io/2736276/tom-2.mp3",
    "s": "https://assets.codepen.io/2736276/tom-3.mp3",
    "d": "https://assets.codepen.io/2736276/tom-4.mp3",
    "j": "https://assets.codepen.io/2736276/crash.mp3",
    "k": "https://assets.codepen.io/2736276/kick-bass.mp3",
    "l": "https://assets.codepen.io/2736276/snare.mp3"
  };


 Object.entries(sounds).forEach( ([key,value]) => {

    if ( key === char ) {
    	console.log(value);
    	sound = value;
    } else {
      console.log("${char} not found");
    }//if

  });//for

  var soundToPlay = new Audio(sound);
  soundToPlay.play();
  //var Obj = document.innerHTML = char;
  //obj.style.color = "white";
} //playSound

//identify sound to play by char
function eventMonitor(char) {

  switch (char) {

    case "w":
      playSound(char);
      break;

    case "a":
      playSound(char);
      break;

    case "s":
      playSound(char);
      break;

    case "d":
      playSound(char);
      break;

    case "j":
      playSound(char);
      break;

    case "k":
      playSound(char);
      break;

    case "l":
      playSound(char);
      break;

    default:
      console.log(`No ${char} HTML element.`);

  } //switch

} //evenMonitor


//monitor user certain actions
for (var i = 0; i < keyLimit; i++) {
  var focusObj = drumObj[i];

  //play sound on mouse click
  focusObj.addEventListener("click", function() {var buttonInnerHTML = this.innerHTML; this.style.color = "white"; eventMonitor(buttonInnerHTML);
    console.log(this.style.color);
  });
} //for


//monitor the document & play sound on key entry
document.addEventListener("keydown", function(event) {
return eventMonitor(event.key);
});
