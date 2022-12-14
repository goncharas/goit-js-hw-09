import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
}, delay);
  });
}

form.addEventListener('submit', btnOnSubmit);

function btnOnSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount }
  } = evt.currentTarget;

  let startDelay = Number(delay.value);
  let amountNum = Number(amount.value);
  let stepDalay = Number(step.value);

  if (startDelay < 0 || amountNum < 0 || stepDalay < 0) {
    Notiflix.Notify.failure(
      '!!!Value cannot be negative!!!'
    )
    return;
  }

  for (let i = 1; i <= amountNum; i += 1) {
    createPromise( i, startDelay = i * stepDalay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    startDelay += stepDalay
  }
}