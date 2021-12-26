const newYear = "1 Jan 2022";

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = fixZero(hours);
    minutesElement.innerHTML = fixZero(minutes);
    secondsElement.innerHTML = fixZero(seconds);

}

countdown();

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);