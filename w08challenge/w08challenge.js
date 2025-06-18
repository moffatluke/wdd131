const ditto = {
  id: 132,
  name: "ditto",
  type: "normal",
  abilities: ["limber", "imposter"],
  base_experience: 101,
  height: 3,
  weight: 40,
  stats: {
    hp: 48,
    attack: 48,
    defense: 48,
    special_attack: 48,
    special_defense: 48,
    speed: 48
  },
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  shiny: false,
  transform: function(){
    if (!this.shiny) {
      this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png";
      this.shiny = true;
    } else {
      this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
      this.shiny = false;
    }
    return this.sprite;
  }
};

// DOM elements
const nameEl = document.getElementById('name');
const abilityEl = document.getElementById('ability');
const imgEl = document.getElementById('ditto');

// Initial render
nameEl.textContent = ditto.name.charAt(0).toUpperCase() + ditto.name.slice(1);
abilityEl.textContent = `Ability: ${ditto.abilities[0]}`;
imgEl.src = ditto.sprite;
imgEl.alt = `${ditto.name} sprite`;

// Transform on click
imgEl.addEventListener('click', function() {
  ditto.transform();
  imgEl.src = ditto.sprite;
});