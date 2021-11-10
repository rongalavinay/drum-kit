for (x=0;x<7;x++){
  document.querySelectorAll('button')[x].addEventListener('click',function (){
    var buttonPressed=this.innerHTML;
    makeSound(buttonPressed)
    animation(buttonPressed)
  });
}

document.addEventListener('keypress',function(event){
  var keypressed=event.key;
  makeSound(keypressed)
  animation(event.key)

});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
     var tom4 = new Audio('sounds/tom-4.mp3');
     tom4.play();
     break;
    case "j":
     var snare = new Audio('sounds/snare.mp3');
     snare.play();
     break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log('wrong key pressed');
  }
}


function animation(key){
  var keypressing=document.querySelector('.'+key);
  keypressing.classList.add('clicked');
  setTimeout(function () {
    keypressing.classList.remove('clicked');
  }, 100);
}
