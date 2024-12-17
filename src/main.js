'use strict';

const footerToggle = document.querySelector('.footer__toggle');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelector('.header__links');

footerToggle.addEventListener('click', () =>
  headerMenu.classList.toggle('header__menu--shown')
);
