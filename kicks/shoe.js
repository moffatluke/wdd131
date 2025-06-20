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
    description: "A cool blue sneaker with palm tree accents, perfect for summer.",
    reviews: [
      { user: "Alex", rating: 5, text: "Super comfy and stylish!" },
      { user: "Jordan", rating: 4, text: "Love the color and fit." }
    ]
  }
  // Add more shoes as needed
];

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
  const reviews = shoe.reviews || [];
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

function getShoeIndexFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('shoe')) || 0;
}

document.addEventListener('DOMContentLoaded', function() {
  const idx = getShoeIndexFromQuery();
  const shoe = shoes[idx] || shoes[0];
  renderShoeDetail(shoe);
  renderReviews(shoe);
});
