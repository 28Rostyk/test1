const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

let timerId = null;

refs.start.addEventListener('click', onClickBtnChangeColor);
refs.stop.addEventListener('click', onStopBtnChangeColor);
refs.stop.setAttribute('disabled', 'disabled');

function onClickBtnChangeColor() {
  timerId = setInterval(changeColor, 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStopBtnChangeColor() {
  clearInterval(timerId);
  refs.stop.setAttribute('disabled', 'disabled');
  refs.start.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
