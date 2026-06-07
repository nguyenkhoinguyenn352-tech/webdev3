'use strict';

const calculationInput = document.getElementById('calculation');
const calculateBtn = document.getElementById('calculate');
const resultP = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const str = calculationInput.value.trim();
  let res = 0;

  if (str.includes('+')) {
    const parts = str.split('+');
    res = parseInt(parts[0]) + parseInt(parts[1]);
  } else if (str.includes('-')) {
    const parts = str.split('-');
    res = parseInt(parts[0]) - parseInt(parts[1]);
  } else if (str.includes('*')) {
    const parts = str.split('*');
    res = parseInt(parts[0]) * parseInt(parts[1]);
  } else if (str.includes('/')) {
    const parts = str.split('/');
    res = parseInt(parts[0]) / parseInt(parts[1]);
  }

  resultP.textContent = res;
});
