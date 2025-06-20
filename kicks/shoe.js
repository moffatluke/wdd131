// Example shoe data array
const shoes = [
  {
    name: "Cali Blue Palms",
    images: [
      "imgs/cali-blue-palms.png",
      "imgs/bluewhitecali.png",
      "imgs/caliwhiteblue.png"
    ],
    price: "$65",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "A cool blue sneaker with palm tree accents, perfect for summer. Features a lightweight sole, breathable canvas, and a unique palm print for a laid-back California vibe. Great for everyday wear or a day at the beach.",
    reviews: [
      { user: "Alex", rating: 5, text: "Super comfy and stylish!" },
      { user: "Jordan", rating: 4, text: "Love the color and fit." }
    ]
  },
  {
    name: "Retro White Vans",
    images: [
      "imgs/RetroWhiteVans.png",
      "imgs/RetroCremeVas.png"
    ],
    price: "$65",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Classic white Vans with a retro vibe for everyday style. Durable rubber sole, cushioned insole, and timeless design make these a must-have for any sneaker collection.",
    reviews: [
      { user: "Sam", rating: 5, text: "Goes with everything!" },
      { user: "Taylor", rating: 4, text: "Clean and comfortable." }
    ]
  },
  {
    name: "Retro Pink Vans",
    images: [
      "imgs/RetroPink.png"
    ],
    price: "$70",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Stand out with these bold retro pink Vans. Soft suede upper, classic waffle outsole, and a pop of color for those who like to make a statement.",
    reviews: [
      { user: "Morgan", rating: 5, text: "Love the color!" }
    ]
  },
  {
    name: "Frog Vans",
    images: [
      "imgs/frogvans.png"
    ],
    price: "$80",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Fun frog-themed Vans for a playful look. Features a custom frog print, durable canvas, and a comfortable fit for all-day adventures.",
    reviews: [
      { user: "Chris", rating: 4, text: "Unique and fun!" }
    ]
  },
  {
    name: "Cali White Blue",
    images: [
      "imgs/caliwhiteblue.png",
      "imgs/bluewhitecali.png"
    ],
    price: "$75",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "Cali style in a crisp white and blue colorway. Lightweight, flexible, and perfect for pairing with jeans or shorts. Inspired by the West Coast lifestyle.",
    reviews: [
      { user: "Jamie", rating: 5, text: "Perfect for summer!" }
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
  const section = document.getElementById('reviews');
  section.innerHTML = `
    <h2>Reviews</h2>
    <div class="review-list">
      ${reviews.length ? reviews.map(r => `
        <div class="review">
          <strong>${r.user}</strong> <span class="rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
          <p>${r.text}</p>
        </div>
      `).join('') : '<p>No reviews yet.</p>'}
    </div>
  `;
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

document.addEventListener('DOMContentLoaded', function() {
  const idx = getShoeIndexFromQuery();
  const shoe = shoes[idx] || shoes[0];
  renderShoeDetail(shoe);
  renderReviews(shoe);
  renderOtherProducts(idx);
});
