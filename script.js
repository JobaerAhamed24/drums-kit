let totalButton = document.querySelectorAll('.grid-box');
for (let i = 0; i < totalButton.length; i++) {
  totalButton[i].addEventListener('click',function(){
    
    // button making soun

    var key = this.innerHTML;
    soundAnimatio(key)

    // button animation
    this.classList.add('button-animation')
    setTimeout(() => {
      this.classList.remove('button-animation')
    }, 100);
    })
  
    
    

}

function soundAnimatio(key){
  switch (key) {
    case "w": 
      new Audio("sounds/tom-1.mp3").play();
      this.backgroundColor = 'blue'
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break; 

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/crash.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
      

    default: console.log(key); 
  
  }
 
}

