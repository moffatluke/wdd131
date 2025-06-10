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
