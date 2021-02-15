let  btn = document.querySelectorAll('.drum');
let  audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  });
}

document.addEventListener('keydown', (event) => {
  keyPressed(event.key);
  btnAnimate(event.key);
});

let keyPressed = (key) => 
  { 
    let crashAudio = new Audio('sounds/crash.mp3');
    let kickAudio = new Audio('sounds/kick-bass.mp3');
    let snareAudio = new Audio('sounds/snare.mp3');
    let tom1Audio = new Audio('sounds/tom-1.mp3');
    let tom2Audio = new Audio('sounds/tom-2.mp3');
    let tom3Audio = new Audio('sounds/tom-3.mp3');
    let tom4Audio = new Audio('sounds/tom-4.mp3');

    key === 'w' ? crashAudio.play()

    : (key === 'a' ? kickAudio.play()

    : (key === 's' ? snareAudio.play()

    : (key === 'd' ? tom1Audio.play()

    : (key === 'j' ? tom2Audio.play()

    : (key === 'k' ? tom3Audio.play()

    : (key === 'l' ? tom4Audio.play()
    
    : null))))))
}

let keyClick = (btnInnerHtml) => 
{
  let clickcrashAudio = new Audio('sounds/crash.mp3');
  let clickkickAudio = new Audio('sounds/kick-bass.mp3');
  let clicksnareAudio = new Audio('sounds/snare.mp3');
  let clicktom1Audio = new Audio('sounds/tom-1.mp3');
  let clicktom2Audio = new Audio('sounds/tom-2.mp3');
  let clicktom3Audio = new Audio('sounds/tom-3.mp3');
  let clicktom4Audio = new Audio('sounds/tom-4.mp3');

    btnInnerHtml === 'w' ? clickcrashAudio.play()

    : (btnInnerHtml === 'a' ? clickkickAudio.play()

    : (btnInnerHtml === 's' ? clicksnareAudio.play()

    : (btnInnerHtml === 'd' ? clicktom1Audio.play()

    : (btnInnerHtml === 'j' ? clicktom2Audio.play()

    : (btnInnerHtml === 'k' ? clicktom3Audio.play()

    : (btnInnerHtml === 'l' ? clicktom4Audio.play()
    
    : null))))))

}

 let btnAnimate = (currentKey) => {
  let btnActive = document.querySelector('.' + currentKey);
  btnActive.classList.add('active');
  setTimeout( () => {
    btnActive.classList.remove('active');
  }, 100);
}
