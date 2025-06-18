const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };
// DOM elements
const nameDiv = document.querySelector('.name');
const classSpan = document.getElementById('class');
const levelSpan = document.getElementById('level');
const healthSpan = document.getElementById('health');
const image = document.querySelector('.image');
const log = document.getElementById('log');

// Render function
function renderCharacter() {
  nameDiv.textContent = character.name;
  classSpan.textContent = character.class;
  levelSpan.textContent = character.level;
  healthSpan.textContent = character.health;
  image.src = character.image;
}

// Button event listeners
const attackedBtn = document.getElementById('attacked');
const levelupBtn = document.getElementById('levelup');

attackedBtn.addEventListener('click', () => {
  const prevHealth = character.health;
  character.attacked();
  if (character.health < prevHealth) {
    log.textContent = `${character.name} was attacked! -20 health, -1 level.`;
  } else if (character.health < 20) {
    log.textContent = `${character.name} died!`;
  }
  renderCharacter();
});

levelupBtn.addEventListener('click', () => {
  character.levelUp();
  log.textContent = `${character.name} leveled up! +1 level, +20 health.`;
  renderCharacter();
});

// Initial render
renderCharacter();

document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
  });
});

// 3D tilt and holo effect for Invincible card
const container = document.querySelector('.card-container');
const card      = container.querySelector('.card');
const maxTilt   = 10; // degrees

container.addEventListener('mousemove', e => {
  const rect      = container.getBoundingClientRect();
  const x         = e.clientX - rect.left;
  const y         = e.clientY - rect.top;
  const halfW     = rect.width  / 2;
  const halfH     = rect.height / 2;

  // normalize to [ -maxTilt … +maxTilt ]
  const rotateY = ((x - halfW) / halfW) * maxTilt;
  const rotateX = ((halfH - y) / halfH) * maxTilt;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Holo card mousemove effect for all cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = Math.abs(Math.floor(100 / rect.width * x)-100);
    const py = Math.abs(Math.floor(100 / rect.height * y)-100);
    const pa = (50-px)+(50-py);
    const lp = (50+(px - 50)/1.5);
    const tp = (50+(py - 50)/1.5);
    const px_spark = (50+(px - 50)/7);
    const py_spark = (50+(py - 50)/7);
    const p_opc = 20+(Math.abs(pa)*1.5);
    const ty = ((tp - 50)/2) * -1;
    const tx = ((lp - 50)/1.5) * .5;
    card.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    card.style.setProperty('--grad-pos', `${lp}% ${tp}%`);
    card.style.setProperty('--spark-pos', `${px_spark}% ${py_spark}%`);
    card.style.setProperty('--spark-opc', p_opc/100);
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--grad-pos', '50% 50%');
    card.style.setProperty('--spark-pos', '50% 50%');
    card.style.setProperty('--spark-opc', 0.7);
  });
});
