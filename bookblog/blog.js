document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const menuButton = document.getElementById('menu-btn');
  const menu = document.querySelector('#main-nav .menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('hide');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1000) {
        menu.classList.remove('hide');
      } else {
        menu.classList.add('hide');
      }
    });

    // Call once on load to match initial window size
    if (window.innerWidth < 1000) {
      menu.classList.add('hide');
    } else {
      menu.classList.remove('hide');
    }
  }
});
