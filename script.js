let openButton = document.querySelector('.icon-open');
let closeButton = document.querySelector('.icon-close');
let menu = document.querySelector('.menu-items');
let inactive = document.querySelector('.inactive');
let maxWidth = 700;

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

closeMenu(function() {
  window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth > maxWidth) {
      openButton.style.display = 'none';
      menu.classList.remove('inactive');
    } else {
      openButton.style.display = 'block';
    }
  })
})



