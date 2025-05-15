// cool-pics.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu toggle & responsive behavior
  const menuButton = document.querySelector('#menu-btn');
  const menu       = document.querySelector('#main-nav .menu');

  function toggleMenu() {
    menu.classList.toggle('hide');
  }


  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove('hide');
    } else {
      menu.classList.add('hide');
    }
  }

  menuButton.addEventListener('click', toggleMenu);
  window.addEventListener('resize', handleResize);
  handleResize();

  // 2. Image viewer modal
  const gallery = document.querySelector('.gallery');

  function viewerTemplate(src, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer" aria-label="Close viewer">x</button>
        <img id="modal-img" src="${src}" alt="${alt}">
      </div>
    `;
  }

  function viewHandler(e) {
    // only proceed if you clicked on an <img>
    if (e.target.tagName !== 'IMG') return;

    const thumbSrc = e.target.getAttribute('src');

    // insert "-full" just before the extension
    const fullSrc = thumbSrc.replace(/-sm(?=\.\w+$)/, '-full');

    // pop in the modal HTML
    document.body.insertAdjacentHTML(
      'afterbegin',
      viewerTemplate(fullSrc, e.target.alt)
    );

    // wire up the close button
    document.querySelector('.close-viewer')
      .addEventListener('click', () => {
        document.querySelector('.viewer').remove();
      });
  }

  // ← this actually hooks clicks on your thumbnails into viewHandler
  gallery.addEventListener('click', viewHandler);
});