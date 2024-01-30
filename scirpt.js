"use strict";

//names
const healerName = document.getElementById("healer-name-txt");
const archerName = document.getElementById("archer-name-txt");
const warriorName = document.getElementById("warrior-name-txt");
const dragonName = document.getElementById("dragon-name-txt");

// health
const healerHealth = document.getElementById("healer-health-txt");
const archerHealth = document.getElementById("archer-health-txt");
const warriorHealth = document.getElementById("warrior-health-txt");
const dragonHealth = document.querySelector(".dragon-health-txt");

//heros DOM
const playersDOM = document.querySelectorAll(".hero");

//Stats for heroes
const heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 100,
    alive: true,
    playerDOM: '<div class="img-container healer">',
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 200,
    currentHP: 400,
    damage: 100,
    alive: true,
    playerDOM: '<div class="img-container archer">',
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 400,
    damage: 200,
    alive: true,
    playerDOM: '<div class="img-container warrior">',
  },
];

const dragonObject = {
  name: "Daar Dragon",
  maxHP: 5000,
  currentHP: 3000,
  damage: 200,
  alive: true,
  playerDOM: '<div class="img-container dragon-container">',
};

// gi heltene navn
healerName.textContent = heroesArray[0].name;
archerName.textContent = heroesArray[1].name;
warriorName.textContent = heroesArray[2].name;
dragonName.textContent = dragonObject.name;

//gi heroImg Id
const heroID = [heroesArray[0].id, heroesArray[1].id, heroesArray[2].id];

playersDOM.forEach((player, i) => {
  player.id = i;
});

function attack(e) {
  // hvis helten lever, kan angripe dragen
  if (heroesArray[e.target.id].alive) {
    alert(
      ` ${heroesArray[e.target.id].name} har gjort ${
        heroesArray[e.target.id].damage
      } skade på ${dragonObject.name}!`
    );
    dragonObject.currentHP -= heroesArray[e.target.id].damage;
    console.log(dragonObject.currentHP);
    dragonHealth.textContent = dragonObject.currentHP;
  }

  // dragen angriper
  if (dragonObject.currentHP >= 0) {
    dragonAttack();
    healerHealth.textContent = `${heroesArray[0].currentHP} HP`;
    archerHealth.textContent = `${heroesArray[1].currentHP} HP`;
    warriorHealth.textContent = `${heroesArray[2].currentHP} HP`;
  } else {
    alert("Dragen er død 🎉");
    alert("Gratulerer, du har vunnet spillet!🎉");
    document.querySelector(".dragon").remove();
  }

  const alive = heroesArray.every((hero) => hero.alive === false);

  if (alive === true) {
    alert(`Spillet er tapt! ${dragonObject.name} har vunnet!`);
  }
}

playersDOM.forEach((player) => {
  player.addEventListener("click", attack);
});

function dragonAttack() {
  let randomHero = Math.floor(Math.random() * 3);

  if (heroesArray[randomHero].alive) {
    heroesArray[randomHero].currentHP -= dragonObject.damage;
    alert(
      `${dragonObject.name} har gjort ${dragonObject.damage} damage på ${heroesArray[randomHero].name}`
    );
    console.log(
      heroesArray[randomHero].name,
      heroesArray[randomHero].currentHP
    );

    if (heroesArray[randomHero].currentHP <= 0) {
      heroesArray[randomHero].alive = false;
      document.getElementById(randomHero).parentElement.remove();

      alert(`${heroesArray[randomHero].name} is dead`);
    }
  }
}
