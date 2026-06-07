'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate');
const resultP = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  const op = operation.value;
  let res = 0;

  switch (op) {
    case 'add': res = n1 + n2; break;
    case 'sub': res = n1 - n2; break;
    case 'mul': res = n1 * n2; break;
    case 'div': res = n1 / n2; break;
  }

  resultP.textContent = res;
});
