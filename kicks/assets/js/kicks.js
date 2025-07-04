// Modern Kicks Main JS (merged landing + detail logic)
import { products, reviews } from './products.js';

function renderProductCards() {
  const grid = document.querySelector('.card-grid');
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach((shoe, i) => {
    const card = document.createElement('a');
    card.href = `shoe.html?shoe=${i}`;
    card.className = 'card shoe-card card-link';
    card.id = `product-card-${i}`;

    const img = document.createElement('img');
    // Use smallImage if available, otherwise fallback to main image
    img.src = shoe.smallImage ? shoe.smallImage : shoe.images[0];
    img.alt = shoe.name;
    img.className = 'image';
    img.loading = 'lazy';
    img.width = 180;
    img.height = 130;

    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.textContent = shoe.name;

    card.appendChild(img);
    card.appendChild(banner);
    grid.appendChild(card);
  });
}

function renderProductDetail() {
  const detail = document.getElementById('shoe-detail');
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('shoe'), 10);
  const shoe = products[idx];
  if (!shoe) {
    detail.innerHTML = '<p>Product not found.</p>';
    return;
  }
  detail.innerHTML = `
    <div class="product-detail-card">
      <div class="shoe-images">
        <img src="${shoe.images[0]}" alt="${shoe.name}" class="main-img product-detail-img" loading="lazy" width="340" height="340" />
      </div>
      <div class="shoe-info">
        <h1>${shoe.name}</h1>
        <div class="shoe-price">$${shoe.price.toFixed(2)}</div>
        <p>${shoe.description}</p>
        <label for="size-select">Size</label>
        <select id="size-select">
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
        </select>
        <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderReviews() {
  const reviewList = document.getElementById('review-list');
  if (!reviewList || !reviews || reviews.length === 0) return;
  // Shuffle and pick 5
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);
  reviewList.innerHTML = selected.map(r => `
    <div class="review-card">
      <div class="review-header">
        <span class="review-stars">${r.stars}</span>
        <span class="review-client">${r.clientName}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-body">${r.statement}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('shoe-detail')) {
    renderProductDetail();
  }
  if (document.getElementById('review-list')) {
    renderReviews();
  }
  if (document.querySelector('.card-grid')) {
    renderProductCards();
  }
});
