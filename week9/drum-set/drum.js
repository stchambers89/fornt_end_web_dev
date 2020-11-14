function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; //stop function

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(event){

    if(event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);