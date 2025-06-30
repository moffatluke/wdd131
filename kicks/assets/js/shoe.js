// Kicks Shoe Detail Page JS
// Uses the same shoes array as kicks.js
const shoes = [
  {
    name: "Cali Blue Palm Kicks",
    images: ["assets/imgs/calibluelowtoppalm.png"]
  },
  {
    name: "Cali Mocha Fade Kicks",
    images: ["assets/imgs/browncalitransparent.png"]
  },
  {
    name: "Cali Pacific Blue Kicks",
    images: ["assets/imgs/bluewhitecali.png"]
  },
  {
    name: "Cali Whitewater Kicks",
    images: ["assets/imgs/caliwhiteblue.png"]
  },
  {
    name: "Huntington Retro Kicks",
    images: ["assets/imgs/HBRetros.png"]
  },
  {
    name: "Retro Whiteout Kicks",
    images: ["assets/imgs/RetroWhiteVans.png"]
  },
  {
    name: "Retro Creme Dream Kicks",
    images: ["assets/imgs/RetroCremeVas.png"]
  },
  {
    name: "Frogman Green Kicks",
    images: ["assets/imgs/frogvans.png"]
  },
  {
    name: "Cali Creme Logo Sweatshirt",
    images: ["assets/imgs/kicks_creme_sweatshirt.png"]
  }
];

function renderShoeDetail() {
  const detailDiv = document.getElementById('shoe-detail');
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('shoe'), 10);
  if (isNaN(idx) || !shoes[idx]) {
    detailDiv.innerHTML = '<p style="padding:2rem;">Product not found. <a href="index.html#shop">Back to shop</a></p>';
    return;
  }
  const shoe = shoes[idx];
  detailDiv.innerHTML = `
    <div class="shoe-main">
      <div class="shoe-images">
        <img src="${shoe.images[0]}" alt="${shoe.name}" class="main-img" id="main-shoe-img" />
      </div>
      <div class="shoe-info">
        <h1>${shoe.name}</h1>
        <div class="shoe-price">$99.99</div>
        <label for="size-select">Size</label>
        <select id="size-select">
          <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option>
        </select>
        <button class="btn btn--primary" onclick="addToCart()">Add to Cart</button>
        <p>Premium California-inspired sneaker. Iconic style, all-day comfort, and a look that stands out. (Demo description)</p>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderShoeDetail);
