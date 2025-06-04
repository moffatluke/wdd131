// Animation for card-back sliding behind card-front on desktop
function animateCardTransition() {
  const cardBack = document.querySelector('.card-back');
  if (!cardBack) return;

  // Remove any previous transition
  cardBack.style.transition = '';

  // Detect if we're switching to desktop layout
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  if (isDesktop) {
    // Start with card-back in mobile position
    cardBack.style.transform = 'translateY(0)';
    // Force reflow for transition
    void cardBack.offsetWidth;
    // Animate to desktop position (slide up and left, more smooth)
    cardBack.style.transition = 'transform 1.1s cubic-bezier(.22,1,.36,1), box-shadow 0.7s cubic-bezier(.22,1,.36,1)';
    cardBack.style.transform = 'translate(-48px, -48px) scale(0.98)';
    cardBack.style.boxShadow = '0 8px 32px rgba(99,102,241,0.18)';
  } else {
    // Reset for mobile
    cardBack.style.transition = 'transform 0.7s cubic-bezier(.22,1,.36,1), box-shadow 0.5s cubic-bezier(.22,1,.36,1)';
    cardBack.style.transform = 'translateY(0) scale(1)';
    cardBack.style.boxShadow = '';
  }
}

window.addEventListener('resize', animateCardTransition);
window.addEventListener('DOMContentLoaded', animateCardTransition);

// Confetti animation on submit
function launchConfetti() {
  const confettiColors = ['#6366f1', '#4f8cff', '#6ee7b7', '#f472b6', '#fff', '#a5b4fc'];
  const form = document.querySelector('form');
  if (!form) return;
  const confettiContainer = document.createElement('div');
  confettiContainer.setAttribute('aria-hidden', 'true');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.left = 0;
  confettiContainer.style.top = 0;
  confettiContainer.style.width = '100vw';
  confettiContainer.style.height = '100vh';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = 9999;
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 42; i++) {
    const conf = document.createElement('div');
    conf.style.position = 'absolute';
    conf.style.width = '12px';
    conf.style.height = '12px';
    conf.style.borderRadius = '3px';
    conf.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.top = '-24px';
    conf.style.opacity = 0.85;
    conf.style.transform = `rotate(${Math.random()*360}deg)`;
    confettiContainer.appendChild(conf);
    // Animate
    setTimeout(() => {
      conf.style.transition = 'top 1.2s cubic-bezier(.22,1,.36,1), left 1.2s cubic-bezier(.22,1,.36,1), opacity 0.7s';
      conf.style.top = 80 + Math.random() * 20 + 'vh';
      conf.style.left = (parseFloat(conf.style.left) + (Math.random() - 0.5) * 30) + 'vw';
      conf.style.opacity = 0.1 + Math.random() * 0.3;
    }, 10);
  }
  setTimeout(() => {
    confettiContainer.remove();
  }, 1800);
}

// Accessibility: focus visible for button
const submitBtn = document.querySelector('button[type="submit"]');
if (submitBtn) {
  submitBtn.addEventListener('keydown', e => {
    if (e.key === 'Tab') submitBtn.classList.add('focus-visible');
  });
  submitBtn.addEventListener('blur', () => submitBtn.classList.remove('focus-visible'));
}

// Listen for submit and launch confetti if valid
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    // If you want to only show confetti on valid, you can check for errors here
    setTimeout(launchConfetti, 100);
  });
}
