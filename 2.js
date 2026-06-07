'use strict';

const target2 = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];

items.forEach((text, index) => {
  const li = document.createElement('li');
  li.textContent = text;
  
  if (index === 1) {
    li.classList.add('my-item');
  }
  
  target2.appendChild(li);
});
