'use strict';

const picturesSection = document.getElementById('pictures');

picArray.forEach(item => {

  const article = document.createElement('article');
  article.classList.add('card');

  article.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="${item.medium_image}" alt="${item.title}">
      <figcaption>${item.caption}</figcaption>
    </figure>
    <p>${item.description}</p>
  `;

  picturesSection.appendChild(article);
});
