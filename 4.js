'use strict';

const target4 = document.getElementById('target');

students.forEach(student => {
  const option = document.createElement('option');
  option.value = student.id;       
  option.textContent = student.name;
  target4.appendChild(option);
});
