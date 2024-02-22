// DICE ROTATION

let clickableItems = document.querySelectorAll('.clickable');

clickableItems.forEach(function(item) {
  item.addEventListener('click', function() {
    clickableItems.forEach(function (item) {
      item.classList.remove('rotate-scale-up');
    })
    item.classList.toggle('rotate-scale-up');
  })
})


// HAMBURGER MENU
let openButton = document.querySelector('.icon-open');
let closeButton = document.querySelector('.icon-close');
let menu = document.querySelector('.menu-items');

function displayMenu () {
  openButton.classList.remove('show-button');
  openButton.classList.add('hide-button');
  menu.classList.remove('hide-button');
  menu.classList.add('show-button');
};

function closeMenu (event) {
  menu.classList.remove('show-button');
  openButton.classList.remove('hide-button');
  menu.classList.add('hide-button');
  openButton.classList.add('icon-open');
  event.preventDefault();
}
