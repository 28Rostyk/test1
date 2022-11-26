import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';

let timerId = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notify.info('Please choose a date in the future'),
        (refs.start.disabled = true))
      : (refs.start.disabled = false);
    userDate = selectedDates[0];
  },
};

const pickr = flatpickr('#datetime-picker', options);

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  daysUI: document.querySelector('[data-days]'),
  minutesUI: document.querySelector('[data-minutes]'),
  hoursUI: document.querySelector('[data-hours]'),
  secondsUI: document.querySelector('[data-seconds]'),
};

window.addEventListener('click', startTimer);

function startTimer(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  timerId = setInterval(countDownTimer, 1000);
  refs.start.disabled = true;
  refs.input.disabled = true;
}

function countDownTimer() {
  userDate = Date.parse(refs.input.value);
  const diff = userDate - Date.now();
  let { days, hours, minutes, seconds } = getTimeComponents(diff);
  if (userDate <= Date.now()) {
    Notify.info('Please choose a date in the future');
    clearInterval(timerId);
    refs.input.disabled = false;
  }
  if (diff <= 1000) {
    clearInterval(timerId);
    seconds = getTimeComponents(0).seconds;
    minutes = getTimeComponents(0).minutes;
    hours = getTimeComponents(0).hours;
    days = getTimeComponents(0).days;
    refs.input.disabled = false;
  }
  updateCountTimeUI({ seconds, minutes, hours, days });
}

function getTimeComponents(time) {
  return convertMs(time);
}

function updateCountTimeUI({ seconds, minutes, hours, days }) {
  refs.secondsUI.textContent = seconds;
  refs.minutesUI.textContent = minutes;
  refs.hoursUI.textContent = hours;
  refs.daysUI.textContent = days;
}
