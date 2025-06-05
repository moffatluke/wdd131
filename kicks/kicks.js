// Kicks Landing Page Animations
// Reveal shoe cards on scroll
function revealOnScroll() {
  const cards = document.querySelectorAll('.shoe-card');
  const trigger = window.innerHeight * 0.92;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Fun confetti on CTA click
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function() {
    const confettiColors = ['#fbbf24', '#f472b6', '#6366f1', '#fff', '#a5b4fc'];
    for (let i = 0; i < 32; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'fixed';
      conf.style.width = '12px';
      conf.style.height = '12px';
      conf.style.borderRadius = '50%';
      conf.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-24px';
      conf.style.opacity = 0.85;
      conf.style.zIndex = 9999;
      document.body.appendChild(conf);
      setTimeout(() => {
        conf.style.transition = 'top 1.2s cubic-bezier(.22,1,.36,1), left 1.2s cubic-bezier(.22,1,.36,1), opacity 0.7s';
        conf.style.top = 80 + Math.random() * 20 + 'vh';
        conf.style.left = (parseFloat(conf.style.left) + (Math.random() - 0.5) * 30) + 'vw';
        conf.style.opacity = 0.1 + Math.random() * 0.3;
      }, 10);
      setTimeout(() => {
        conf.remove();
      }, 1800);
    }
  });
}

// Rotating shoe and fade-in text on scroll
const shoe = document.getElementById('shoe');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const rotate = scrollY * 0.3;
  shoe.style.transform = `rotateY(${rotate}deg)`;

  if (scrollY > 200 && scrollY < 800) {
    text1.classList.add('active');
  } else {
    text1.classList.remove('active');
  }

  if (scrollY > 900 && scrollY < 1400) {
    text2.classList.add('active');
  } else {
    text2.classList.remove('active');
  }
});
