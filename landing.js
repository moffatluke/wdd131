// Animate cards on hover and click
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.landing-card');
  cards.forEach((card, i) => {
    // Fade-in animation
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }, 200 + i * 120);
    // Click to navigate
    card.addEventListener('click', () => {
      window.location.href = card.getAttribute('data-link');
    });
    // Ripple effect on click
    card.addEventListener('mousedown', e => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.offsetX + 'px';
      ripple.style.top = e.offsetY + 'px';
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
    // Keyboard accessibility for flip
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('flipped');
      }
    });
    card.setAttribute('tabindex', '0');
  });
  // Flip on hover/focus
  document.querySelectorAll('.landing-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('flipped'));
    card.addEventListener('mouseleave', () => card.classList.remove('flipped'));
    card.addEventListener('focus', () => card.classList.add('flipped'));
    card.addEventListener('blur', () => card.classList.remove('flipped'));
  });
});
