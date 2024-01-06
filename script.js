let openButton = document.querySelector('.icon-open');
let closeButton = document.querySelector('.icon-close');
let menu = document.querySelector('.menu-items');

openButton.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);
window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

function displayMenu () {
  menu.classList.remove('menu-items');
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

  setTimeout(() => {
    menu.classList.remove('inactive');
    menu.classList.add('menu-items');
  }, 300);
}

function checkWindowWidth() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxWidth = 700;

  if (windowWidth > maxWidth) {
    openButton.style.display = 'none';
    menu.classList.remove('inactive');
  } else {
    openButton.style.display = 'block';
  }
}

