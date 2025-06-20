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
  shoes.forEach((shoe, idx) => {
    const card = document.createElement('div');
    card.className = 'card shoe-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${shoe.name}`);
    card.innerHTML = `
      <img src="${shoe.images[0]}" alt="${shoe.name}" class="image" loading="lazy" />
      <div class="name">${shoe.name}</div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `shoe.html?shoe=${encodeURIComponent(idx)}`;
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = `shoe.html?shoe=${encodeURIComponent(idx)}`;
      }
    });
    grid.appendChild(card);
  });
}

function renderProductDetail() {
  const detailSection = document.getElementById('product-detail');
  if (!detailSection) return;
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('shoe'), 10);
  if (isNaN(idx) || !shoes[idx]) {
    detailSection.innerHTML = '<p style="padding:2rem;">Product not found. <a href="index.html#shop">Back to shop</a></p>';
    return;
  }
  const shoe = shoes[idx];
  detailSection.innerHTML = `
    <div class="product-detail-card">
      <img src="${shoe.images[0]}" alt="${shoe.name}" class="product-detail-img" />
      <div class="product-detail-info">
        <h1 class="product-detail-title">${shoe.name}</h1>
        <p class="product-detail-desc">Premium California-inspired sneaker. Iconic style, all-day comfort, and a look that stands out. (Demo description)</p>
        <a href="index.html#shop" class="btn btn-secondary">Back to Shop</a>
      </div>
    </div>
  `;
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

// --- Cart logic ---
function updateCartIcon() {
  const cartIcon = document.getElementById('cartIcon');
  const cartCount = document.getElementById('cartCount');
  let count = parseInt(localStorage.getItem('kicksCartCount') || '0', 10);
  if (count > 0) {
    cartIcon.style.display = 'flex';
    cartCount.textContent = count;
  } else {
    cartIcon.style.display = 'none';
    cartCount.textContent = '0';
  }
}
function addToCart() {
  let count = parseInt(localStorage.getItem('kicksCartCount') || '0', 10);
  count++;
  localStorage.setItem('kicksCartCount', count);
  updateCartIcon();
}
// --- Product image magnifier effect for shoe.html ---
function addProductImageMagnifier() {
  const mainImg = document.getElementById('main-shoe-img');
  if (!mainImg) return;
  let magnifier;
  mainImg.addEventListener('mouseenter', function(e) {
    magnifier = document.createElement('div');
    magnifier.className = 'img-magnifier-glass';
    mainImg.parentElement.appendChild(magnifier);
    magnifier.style.backgroundImage = `url('${mainImg.src}')`;
    magnifier.style.backgroundRepeat = 'no-repeat';
    magnifier.style.backgroundSize = `${mainImg.width * 2}px ${mainImg.height * 2}px`;
    magnifier.style.display = 'block';
  });
  mainImg.addEventListener('mousemove', function(e) {
    if (!magnifier) return;
    const rect = mainImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const zoom = 2;
    magnifier.style.left = `${x - 60}px`;
    magnifier.style.top = `${y - 60}px`;
    magnifier.style.backgroundPosition = `-${x * zoom - 60}px -${y * zoom - 60}px`;
  });
  mainImg.addEventListener('mouseleave', function() {
    if (magnifier) {
      magnifier.remove();
      magnifier = null;
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  renderShoeCards();
  revealOnScroll();
  updateCartIcon();
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
  // If on shoe.html, attach to Add to Cart button
  if (window.location.pathname.endsWith('shoe.html')) {
    addProductImageMagnifier();
  }
});
