const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;

btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop); 
let timer = null;

function onClickBtnStart() {
    timer = setInterval(() => {
        const randomColors = getRandomHexColor();
        console.log(randomColors);
        body.style.backgroundColor = randomColors;
    }, 1000);
     btnStart.disabled = true;
     btnStop.disabled = false;
}

function onClickBtnStop() {
    clearInterval(timer);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};