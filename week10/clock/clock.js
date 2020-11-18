const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    //second
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    //minute
    const minutes = now.getMinutes();
    const minuteDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    //hour
    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate, 1000);