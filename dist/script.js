// DICE ROTATION

let clickableItems = document.querySelectorAll('.clickable-dice');

function activeItem(dice) {
  clickableItems.forEach((item) =>
    item.classList.remove('rotate-scale-up')
  );
  dice.classList.toggle('rotate-scale-up');
} 

clickableItems.forEach((item) =>
  item.addEventListener('click', function() {
    activeItem(this);
  })
);

//DICE SCROLLING SELECTION

let sections = document.querySelectorAll('section');
let diceIndex = 0;
initializeDice();

function initializeDice() {
  if (clickableItems.length > 0) {
    clickableItems[diceIndex].classList.add('rotate-scale-up');
  } 
}

window.onscroll = () => {
  let top = window.scrollY + window.innerHeight * 0.5;

  sections.forEach(sec => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let idSec = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`.clickable-dice[data-target='${idSec}']`);
      if (target) {
        activeItem(target);
      }
    }
  })
}


// HAMBURGER MENU
let openButton = document.querySelector('.open-btn-ctnr');

let closeButton = document.querySelector('.menu-items');

function displayMenu () {
  openButton.classList.remove('show-button');
  openButton.classList.add('hide-button');
  closeButton.classList.remove('hide-button');
  closeButton.classList.add('show-button');
};

function closeMenu (event) {
  closeButton.classList.remove('show-button');
  openButton.classList.remove('hide-button');
  closeButton.classList.add('hide-button');
  openButton.classList.add('icon-open');
}

// CONFETTI EFFECT
const confettiWord = document.getElementById('magic-confetti-effect');
const canvas = document.getElementById('confetti-canvas');

const jsConfetti = new JSConfetti();

confettiWord.addEventListener('mouseover', () => {
  jsConfetti.addConfetti( {
    emojis: ['⭐️','🌟','✨'],
    emojiSize: 20,
    confettiNumber: 1000,
  })
});