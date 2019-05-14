// Play sound when the key is pressed
function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Return if there is no audio element
    audio.currentTime = 0;
    audio.play();

    // Add class to key element
    key.classList.add('playing');

}


// Remove transition from the key
function removTransition(e) {
    if (e.propertyName !== 'transform') return; // Return if it's not transfor,m
    this.classList.remove('playing');
}

// Look for the key is pressed
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removTransition));

// Play the sound
window.addEventListener('keydown', playSound);