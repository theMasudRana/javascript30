// Select the hands
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

// Set date for the clock
function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const minite = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((minite / 60) * 360) + 90;
    const minDegrees = ((seconds / 60) * 360) + 90;
    const hourDegrees = ((hour / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000);