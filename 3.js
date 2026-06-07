'use strict';
// File gốc của thầy đã có sẵn: const names = ['John', 'Paul', 'Jones'];

const target3 = document.getElementById('target');
let htmlContent = '';

// Chạy vòng lặp for qua mảng names có sẵn
for (let i = 0; i < names.length; i++) {
  htmlContent += `<li>${names[i]}</li>`;
}

target3.innerHTML = htmlContent;
