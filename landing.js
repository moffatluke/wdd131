// Animation for landing page links and main card

document.addEventListener('DOMContentLoaded', () => {
  // Animate main card fade-in and scale
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = 0;
    main.style.transform = 'scale(0.95)';
    setTimeout(() => {
      main.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
      main.style.opacity = 1;
      main.style.transform = 'scale(1)';
    }, 100);
  }

  // Animate links with staggered fade/slide
  const links = document.querySelectorAll('ul li a');
  links.forEach((link, i) => {
    link.style.opacity = 0;
    link.style.transform = 'translateY(30px)';
    setTimeout(() => {
      link.style.transition = 'opacity 0.5s cubic-bezier(.4,2,.6,1), transform 0.5s cubic-bezier(.4,2,.6,1)';
      link.style.opacity = 1;
      link.style.transform = 'translateY(0)';
    }, 400 + i * 120);
  });
});
