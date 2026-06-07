'use strict';

const form = document.getElementById('source');
const targetText = document.getElementById('target');

form.addEventListener('submit', (event) => {
  // Chặn sự kiện reload lại trang mặc định của form
  event.preventDefault(); 

  // Lấy giá trị từ 2 ô input dựa theo attribute selector [name="..."]
  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;

  // In kết quả ra thẻ p
  targetText.textContent = `Your name is ${firstName} ${lastName}`;
});
