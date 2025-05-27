document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const menuButton = document.getElementById('menu-btn');
  const menu = document.querySelector('#main-nav .menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('hide');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1000) {
        menu.classList.remove('hide');
      } else {
        menu.classList.add('hide');
      }
    });

    // Call once on load to match initial window size
    if (window.innerWidth < 1000) {
      menu.classList.add('hide');
    } else {
      menu.classList.remove('hide');
    }
  }

  // Array of articles
  const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      title: "Belgariad Book One: Pawn of Prophecy",
      date: "Feb 12, 2022",
      description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
      imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      imgAlt: "Book cover for Pawn of Prophecy",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐⭐"
    }
  ];

  // Render articles
  const main = document.querySelector('#maincontent');

function renderArticle(item, index) {
  const article = document.createElement('article');
  article.classList.add('review');

  article.innerHTML = `
    <div class="columnOne">
      <p>${item.date}</p>
      <p>${item.ages}</p>
      <p>${item.genre}</p>
      <p>${item.stars}</p>
    </div>
    <div class="columnTwo">
      <h2>${item.title}</h2>
      <img src="${item.imgSrc}" alt="${item.imgAlt}">
      <p>${item.description}</p>
    </div>
    ${index === 0 ? `
      <div class="columnThree">
        <aside>
          <button id="toggle-filter" aria-label="Toggle book filter form">Show Filters</button>
          <form id="filter-form">
            <label for="genre">Genre:</label>
            <select id="genre" name="genre">...</select><br><br>

            <label for="age">Age Range:</label>
            <select id="age" name="age">...</select><br><br>

            <label for="rating">Rating:</label>
            <select id="rating" name="rating">...</select><br><br>

            <label for="year">Year:</label>
            <select id="year" name="year">...</select>
          </form>
        </aside>
      </div>` : ""}
  `;

  main.appendChild(article);
}

  articles.forEach(renderArticle);
});
