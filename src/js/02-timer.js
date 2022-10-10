import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('button');
const nowTime = Date.now();
let dateChoose = 0
const spanTime = document.querySelectorAll('.value');
btnStart.disabled = true;

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    dateChoose = fp.selectedDates[0].getTime();
    if (dateChoose < nowTime) {
      Notiflix.Notify.failure("!!! PLEASE CHOOSE A DATE IN FUTURE !!!")
      return;
    };
    btnStart.disabled = false;
  }
});

btnStart.addEventListener('click', () => {
  const timer = setInterval(() => {
    let timeOver = dateChoose - Date.now();
    if (dateChoose < Date.now()) {
      Notiflix.Notify.failure('!!!SALE FINISHED !!!');
      return clearInterval(timer);
    };
    const { days, hours, minutes, seconds } = convertMs(timeOver);
    spanTime[0].textContent = `${days}`;
    spanTime[1].textContent = `${hours}`;
    spanTime[2].textContent = `${minutes}`;
    spanTime[3].textContent = `${seconds}`;
  }, 1000);
});

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}