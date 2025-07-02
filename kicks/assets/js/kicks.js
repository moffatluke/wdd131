// Modern Kicks Main JS (merged landing + detail logic)
import { products } from './products.js';

// This file contains the main JavaScript logic for the Modern Kicks website.

// --- Landing Page: Render product cards simply ---
function renderShoeCards() {
  const grid = document.querySelector('.card-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    const shoe = products[i];
    grid.innerHTML += `
      <a href="shoe.html?shoe=${i}" class="card shoe-card card-link">
        <img src="${shoe.images[0]}" alt="${shoe.name}" class="image" loading="lazy" />
        <div class="banner">${shoe.name}</div>
      </a>
    `;
  }
}

// --- Detail Page: Render product detail ---
function renderProductDetail() {
  const detail = document.getElementById('product-detail') || document.getElementById('shoe-detail');
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('shoe'), 10);
  const shoe = products[idx];
  if (!shoe) {
    detail.innerHTML = '<p>Product not found.</p>';
    return;
  }
  detail.innerHTML = `
    <div class="product-detail-card shoe-main">
      <div class="shoe-images">
        <img src="${shoe.images[0]}" alt="${shoe.name}" class="main-img product-detail-img" loading="lazy" />
      </div>
      <div class="shoe-info product-detail-info">
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
        <a href="index.html#shop" class="btn btn-secondary">Back to Shop</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderShoeCards();
  renderProductDetail();
});
