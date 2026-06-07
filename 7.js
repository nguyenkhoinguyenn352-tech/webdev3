'use strict';

const trigger = document.getElementById('trigger');
const targetImg = document.getElementById('target');

trigger.addEventListener('mouseover', () => {
  targetImg.src = 'picB.jpg';
});

trigger.addEventListener('mouseout', () => {
  targetImg.src = 'picA.jpg';
});
