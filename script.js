let openButton = document.querySelector('.icon-open');
let closeButton = document.querySelector('.icon-close');
let menu = document.querySelector('.menu-items');


openButton.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);

window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

function displayMenu () {
  openButton.classList.remove('icon-open');
  openButton.classList.add('hide-button');
  closeButton.classList.remove('hide-button');
  closeButton.classList.add('show-button');
  menu.classList.remove('inactive');
  menu.classList.add('active');
};

function closeMenu () {
  closeButton.classList.remove('show-button');
  openButton.classList.remove('hide-button');
  closeButton.classList.add('hide-button');
  openButton.classList.add('icon-open');
  menu.classList.remove('active');
  menu.classList.add('inactive');
}

