//show and hide menu
//Target the menu links and buttons

const menuButton = document.getElementById('menu-btn');
const nav        = document.getElementById('main-nav');

function toggleMenu() {
  if (nav.classList.contains('hide')) {
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
  }
}

menuButton.addEventListener('click', toggleMenu);

//------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const images      = document.querySelectorAll('.gallery img');
  const modal       = document.getElementById('modal');
  const modalImg    = document.getElementById('modal-img');
  const closeButton = modal.querySelector('.close-viewer');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // turn “norris-sm.jpeg” → “norris-full.jpeg”
      const fullSrc = img.src.split('-sm').join('-full');
      modalImg.src = fullSrc;
      modalImg.alt = img.alt;
      modal.classList.remove('hide');      // show it
    });
  });

  // close on “X”
  closeButton.addEventListener('click', () => {
    modal.classList.add('hide');
  });

  // close on backdrop click
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hide');
    }
  });
});