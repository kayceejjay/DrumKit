//
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( i=0; i < numberOfDrumButtons; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var buttonInnerHTML = this.innerHTML;

    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

  document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event) {
    //anonymous function
    playSound(event.key);
    buttonAnimation(event.key);

  });


}//for


  function playSound() {

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

  }//playSound

  function buttonAnimation(currentKey) {
    var classKey = `.${currentKey}`;

    var activeButton = document.querySelector(classKey);
    const onOff = () => {activeButton.classList.toggle("pressed")};

    setTimeOut( function() { onOff(); },250 );

  }//buttonAnimation
