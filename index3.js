function playSound(char) {

	var sound = '';
	var sounds = {
		"w": "sounds/tom-1.mp3",
		"a": "sounds/tom-2.mp3",
		"s": "sounds/tom-3.mp3",
		"d": "sounds/tom-4.mp3",
		"j": "sounds/crash.mp3",
		"k": "sounds/kick-bass.mp3",
		"l": "sounds/snare.mp3"
	}

	if sounds.includes(char) { sound = sounds.char; }
	else { console.log("${char} not found"); }
	var soundToPlay = new Audio(sound);
	soundToPlay.play();
	this.style.color = "white";
}//playSound


function focusObject(char) {

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

    }//switch

}//focusObject



for ( var i = 0; i < keyLimit; i++ ) {

  drumObj[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    focusObject(buttonInnerHTML);

}//for
