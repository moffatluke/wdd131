// Navbar scroll blur logic for Kicks Collection
// Adds/removes .scrolled class to .navbar when scrolling

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  function onScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll(); // run on load in case already scrolled
});
