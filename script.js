let openButton = document.querySelector('.icon-open');
let closeButton = document.querySelector('.icon-close');
let menu = document.querySelector('.menu-items');
let inactive = document.querySelector('.inactive');
// let maxWidth = 700;

openButton.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);

function displayMenu () {
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
  menu.classList.remove('inactive');
  menu.classList.add('active');
};

function closeMenu (callback) {
  closeButton.style.display = 'none';
  openButton.style.display = 'block';
  menu.classList.remove('active');
  menu.classList.add('inactive');

  callback();
}

function checkWindowWidth() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxWidth = 700;

  if (windowWidth > maxWidth) {
    openButton.style.display = 'none';
    menu.classList.remove('inactive');
    menu.classList.add('none');
  } else {
    openButton.style.display = 'block';
  }
}

window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

