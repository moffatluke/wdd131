// Modern Kicks Landing Page JS
// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a, .btn-primary, .btn-secondary');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Card hover ripple effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousedown', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = e.offsetX + 'px';
    ripple.style.top = e.offsetY + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Button click animation
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener('mousedown', function() {
    btn.style.transform = 'scale(0.96)';
  });
  btn.addEventListener('mouseup', function() {
    btn.style.transform = '';
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = '';
  });
});

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

const shoes = [
  {
    name: "Cali Blue Palm Kicks",
    images: ["imgs/calibluelowtoppalm.png"]
  },
  {
    name: "Cali OG Classic Kicks",
    images: ["imgs/caliShoesNoBackground.png"]
  },
  {
    name: "Cali Mocha Fade Kicks",
    images: ["imgs/browncalitransparent.png"]
  },
  {
    name: "Cali Coastline Kicks",
    images: ["imgs/featuredcalivan.png"]
  },
  {
    name: "Cali Pacific Blue Kicks",
    images: ["imgs/bluewhitecali.png"]
  },
  {
    name: "Cali Whitewater Kicks",
    images: ["imgs/caliwhiteblue.png"]
  },
  {
    name: "Huntington Retro Kicks",
    images: ["imgs/HBRetros.png"]
  },
  {
    name: "Retro Whiteout Kicks",
    images: ["imgs/RetroWhiteVans.png"]
  },
  {
    name: "Retro Pink Pop Kicks",
    images: ["imgs/RetroPink.png"]
  },
  {
    name: "Retro Creme Dream Kicks",
    images: ["imgs/RetroCremeVas.png"]
  },
  {
    name: "Frogman Green Kicks",
    images: ["imgs/frogvans.png"]
  }
];

// Render product cards dynamically
function renderShoeCards() {
  const grid = document.querySelector('.card-grid');
  if (!grid) return;
  grid.innerHTML = '';
  shoes.forEach(shoe => {
    const card = document.createElement('div');
    card.className = 'card shoe-card';
    card.innerHTML = `
      <img src="${shoe.images[0]}" alt="${shoe.name}" class="image" loading="lazy" />
      <div class="name">${shoe.name}</div>
    `;
    grid.appendChild(card);
  });
}

// Typing animation for hero title
function runHeroTypingAnimation() {
  const text = "Live Coastal. Step Bold.";
  const el = document.getElementById('hero-typing');
  if (!el) return;
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}

// Page fade-in animation
function runPageFadeIn() {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 0.8s cubic-bezier(.22,1,.36,1)';
  window.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 1;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderShoeCards();
  revealOnScroll();
  // Mobile nav menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  runHeroTypingAnimation();
  runPageFadeIn();
});
