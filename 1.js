'use strict';

const target1 = document.getElementById('target');

// Thêm danh sách vào HTML
target1.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

// Thêm class 'my-list' (class này trùng khớp với file 1.css mày chụp)
target1.classList.add('my-list');
