import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const data = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

returnSavedData();

function onInput(e) {
  if (e.target.name === 'email') {
    console.log('email:', e.target.value);
    data.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  if (e.target.name === 'message') {
    console.log('message:', e.target.value);
    data.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (data.email && data.message) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    data.email = '';
    data.message = '';
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    return alert('Необхідно заповнити усі поля!');
  }
}

function returnSavedData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    form[0].value = savedData.email ? savedData.email : ' ';
    form[1].value = savedData.message ? savedData.message : ' ';
    data.email = savedData.email;
    data.message = savedData.message;
  }
}
