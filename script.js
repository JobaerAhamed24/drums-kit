let totalButton = document.querySelectorAll('.grid-box');
for (let i = 0; i < totalButton.length; i++) {
  totalButton[i].addEventListener('click',function(){
    
    // button making soun

    var key = this.innerHTML;
    soundAnimatio(key,this)

    // button animation
    this.classList.add('button-animation')
    setTimeout(() => {
      this.classList.remove('button-animation')
    }, 100);
    })
  
    
    
    console.log(this)
}

function soundAnimatio(key){
  switch (key,this) {
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
      new Audio("sounds/tom-5.mp3").play();
      break;

    case "k":
      new Audio("sounds/tom-6.mp3").play();
      break;

    case "l":
      new Audio("sounds/tom-7.mp3").play();
      break;
      

    default: console.log(key); 
  
  }
 
}

