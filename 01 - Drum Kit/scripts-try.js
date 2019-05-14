// Play the audio for each key press
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Return if there is no audio
    audio.currentTime = 0;
    audio.play();

    // Add class the to the key once pressed
    key.classList.add('playing');
}

// Remove class from each key after it has been pressed
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Return if it's not transform
    this.classList.remove('playing');
}