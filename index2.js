var drumObj = document.querySelectorAll(".drum");
var keyLimit = drumObj.length;

for ( var i = 0; i < keyLimit; i++ ) {

  drumObj[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {

		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
      this.style.color = "white";
			break;

		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
      this.style.color = "white";
			break;

		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
      this.style.color = "white";
			break;

		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
      this.style.color = "white";
			break;

		case "j":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
      this.style.color = "white";
			break;

		case "k":
			var kickBass = new Audio("sounds/kick-bass.mp3");
			kickBass.play();
      this.style.color = "white";
			break;

		case "l":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
      this.style.color = "white";
			break;

        default:
			console.log(`No ${buttonInnerHTML} HTML element.`);

    }//switch

  });//eventListener

  doucment.addEventListener("keydown", function() { this.alert("Key was pressed.") });

}//for
