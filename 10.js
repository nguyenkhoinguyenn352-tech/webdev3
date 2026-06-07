'use strict';

const form = document.getElementById('source');
const targetText = document.getElementById('target');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;

  targetText.textContent = `Your name is ${firstName} ${lastName}`;
});
