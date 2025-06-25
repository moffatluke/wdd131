// Example shoe data array
const shoes = [
  {
    name: "Cali Blue Palm Kicks",
    images: ["assets/imgs/calibluelowtoppalm.png"],
    price: "$75",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "A cool blue sneaker with palm tree accents, perfect for summer. Lightweight sole, breathable canvas, and a unique palm print for a laid-back California vibe.",
    reviews: [
      { user: "Alex", rating: 5, text: "Super comfy and stylish!" },
      { user: "Jordan", rating: 4, text: "Love the color and fit." }
    ]
  },
  {
    name: "Cali Mocha Fade Kicks",
    images: ["assets/imgs/browncalitransparent.png"],
    price: "$85",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Rich brown tones and a transparent fade for a unique, earthy look. Perfect for any season.",
    reviews: [
      { user: "Morgan", rating: 5, text: "Love the color!" }
    ]
  },
  {
    name: "Cali Pacific Blue Kicks",
    images: ["assets/imgs/bluewhitecali.png"],
    price: "$75",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Pacific blue colorway with crisp white accents. Flexible, comfortable, and ready for adventure.",
    reviews: [
      { user: "Jamie", rating: 5, text: "Perfect for summer!" }
    ]
  },
  {
    name: "Cali Whitewater Kicks",
    images: ["assets/imgs/caliwhiteblue.png"],
    price: "$75",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Cali style in a crisp white and blue colorway. Lightweight, flexible, and perfect for pairing with jeans or shorts.",
    reviews: [
      { user: "Pat", rating: 5, text: "Excellent arch support and cushioning." }
    ]
  },
  {
    name: "Huntington Retro Kicks",
    images: ["assets/imgs/HBRetros.png"],
    price: "$85",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Retro-inspired design with Huntington Beach vibes. Durable and stylish for any occasion.",
    reviews: [
      { user: "Riley", rating: 4, text: "Looks great with jeans or shorts. Versatile and cool." }
    ]
  },
  {
    name: "Retro Whiteout Kicks",
    images: ["assets/imgs/RetroWhiteVans.png"],
    price: "$65",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Classic whiteout look for a clean, modern style. Goes with everything!",
    reviews: [
      { user: "Taylor", rating: 5, text: "Absolutely love these shoes! Super comfortable for all-day wear." }
    ]
  },
  {
    name: "Retro Creme Dream Kicks",
    images: ["assets/imgs/RetroCremeVas.png"],
    price: "$80",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Dreamy creme tones and retro styling. A must-have for any sneakerhead.",
    reviews: [
      { user: "Alexis", rating: 5, text: "Perfect for walking and casual outings. Highly recommend!" }
    ]
  },
  {
    name: "Frogman Green Kicks",
    images: ["assets/imgs/frogvans.png"],
    price: "$80",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Fun frog-themed kicks for a playful look. Features a custom frog print, durable canvas, and a comfortable fit for all-day adventures.",
    reviews: [
      { user: "Chris", rating: 4, text: "Unique and fun!" }
    ]
  }
  // Add more shoes as needed
];

// Generic review pool
const genericReviews = [
  { user: "Taylor", rating: 5, text: "Absolutely love these shoes! Super comfortable for all-day wear." },
  { user: "Morgan", rating: 4, text: "Great style and fit. I get compliments every time I wear them." },
  { user: "Casey", rating: 5, text: "The quality is top-notch. Would definitely buy again." },
  { user: "Jordan", rating: 4, text: "Nice color and design. Runs a little big, so size down." },
  { user: "Alexis", rating: 5, text: "Perfect for walking and casual outings. Highly recommend!" },
  { user: "Sam", rating: 3, text: "Good value for the price, but wish there were more color options." },
  { user: "Chris", rating: 5, text: "Lightweight and stylish. My new favorite pair!" },
  { user: "Jamie", rating: 4, text: "Comfortable and easy to clean. Would recommend to friends." },
  { user: "Pat", rating: 5, text: "Excellent arch support and cushioning." },
  { user: "Riley", rating: 4, text: "Looks great with jeans or shorts. Versatile and cool." }
];

function getRandomReviews(count) {
  const shuffled = genericReviews.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderShoeDetail(shoe) {
  const container = document.getElementById('shoe-detail');
  container.innerHTML = `
    <div class="shoe-main">
      <div class="shoe-images">
        <img id="main-shoe-img" src="${shoe.images[0]}" alt="${shoe.name}" class="main-img" />
        <div class="thumb-list">
          ${shoe.images.map((img, i) => `<img src="${img}" class="thumb" data-idx="${i}" alt="${shoe.name} view ${i+1}">`).join('')}
        </div>
      </div>
      <div class="shoe-info">
        <h1>${shoe.name}</h1>
        <p class="shoe-price">${shoe.price}</p>
        <p>${shoe.description}</p>
        <label for="size-select">Size:</label>
        <select id="size-select">
          ${shoe.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
        </select>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  `;
  // Thumbnail click event
  container.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
      document.getElementById('main-shoe-img').src = this.src;
    });
  });
}

function renderReviews(shoe) {
  // Use shoe.reviews if present, otherwise random generic reviews
  let reviews = shoe.reviews && shoe.reviews.length ? shoe.reviews : getRandomReviews(5);
  const section = document.getElementById('review-list');
  section.innerHTML = reviews.length ? reviews.map(r => `
    <div class="review">
      <strong>${r.user}</strong> <span class="rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
      <p>${r.text}</p>
    </div>
  `).join('') : '<p>No reviews yet.</p>';
}

function renderOtherProducts(currentIdx) {
  const grid = document.getElementById('other-products-grid');
  grid.innerHTML = shoes
    .map((shoe, idx) => {
      if (idx === currentIdx) return '';
      return `
        <a href="#" class="card-link" aria-label="${shoe.name}" data-idx="${idx}">
          <div class="card">
            <img class="image" src="${shoe.images[0]}" alt="${shoe.name}">
            <div class="name">${shoe.name}</div>
          </div>
        </a>
      `;
    })
    .join('');
  // Card click: reload page with shoe index
  grid.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const idx = this.getAttribute('data-idx');
      window.location.href = `shoe.html?shoe=${idx}`;
    });
  });
}

function getShoeIndexFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('shoe')) || 0;
}

// --- Product image magnifier effect for shoe.html ---
function addProductImageMagnifier() {
  const mainImg = document.getElementById('main-shoe-img');
  if (!mainImg) return;
  let magnifier;
  const glassSize = 60; // radius in px
  const zoom = 2;
  mainImg.addEventListener('mouseenter', function(e) {
    magnifier = document.createElement('div');
    magnifier.className = 'img-magnifier-glass';
    mainImg.parentElement.appendChild(magnifier);
    magnifier.style.backgroundImage = `url('${mainImg.src}')`;
    magnifier.style.backgroundRepeat = 'no-repeat';
    magnifier.style.backgroundSize = `${mainImg.width * zoom}px ${mainImg.height * zoom}px`;
    magnifier.style.width = magnifier.style.height = `${glassSize * 2}px`;
    magnifier.style.display = 'block';
    magnifier.style.position = 'absolute';
    magnifier.style.pointerEvents = 'none';
  });
  mainImg.addEventListener('mousemove', function(e) {
    if (!magnifier) return;
    const rect = mainImg.getBoundingClientRect();
    // Mouse position relative to image
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    // Clamp so the glass stays within the image
    x = Math.max(glassSize, Math.min(mainImg.width - glassSize, x));
    y = Math.max(glassSize, Math.min(mainImg.height - glassSize, y));
    // Position the magnifier absolutely relative to the image container
    magnifier.style.left = `${x - glassSize}px`;
    magnifier.style.top = `${y - glassSize}px`;
    // Set background position for zoom effect
    magnifier.style.backgroundPosition = `-${(x * zoom) - glassSize}px -${(y * zoom) - glassSize}px`;
  });
  mainImg.addEventListener('mouseleave', function() {
    if (magnifier) {
      magnifier.remove();
      magnifier = null;
    }
  });
}

// --- Cart logic for shoe.html ---
function updateCartIcon() {
  const cartIcon = window.parent && window.parent.document.getElementById('cartIcon') || document.getElementById('cartIcon');
  const cartCount = window.parent && window.parent.document.getElementById('cartCount') || document.getElementById('cartCount');
  let count = parseInt(localStorage.getItem('kicksCartCount') || '0', 10);
  if (cartIcon && cartCount) {
    if (count > 0) {
      cartIcon.style.display = 'flex';
      cartCount.textContent = count;
    } else {
      cartIcon.style.display = 'none';
      cartCount.textContent = '0';
    }
  }
}
function addToCart() {
  let count = parseInt(localStorage.getItem('kicksCartCount') || '0', 10);
  count++;
  localStorage.setItem('kicksCartCount', count);
  updateCartIcon();
}

document.addEventListener('DOMContentLoaded', function() {
  const idx = getShoeIndexFromQuery();
  const shoe = shoes[idx] || shoes[0];
  renderShoeDetail(shoe);
  renderReviews(shoe);
  renderOtherProducts(idx);
  addProductImageMagnifier();
  updateCartIcon();
  document.body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('btn-primary') && e.target.textContent.match(/add to cart/i)) {
      addToCart();
    }
  });
});
