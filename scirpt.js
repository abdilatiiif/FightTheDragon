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
const dragonHealth = document.getElementById("dragon-health-txt");

//heros DOM
const playersDOM = document.querySelectorAll(".hero");
console.log(playersDOM);

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
    maxHP: 500,
    currentHP: 500,
    damage: 400,
    alive: true,
    playerDOM: '<div class="img-container archer">',
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 400,
    alive: true,
    playerDOM: '<div class="img-container warrior">',
  },
];

const dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
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
console.log(heroID);

playersDOM.forEach((player, i) => {
  player.id = i;
});

/*
function attack (e) {

  switch(e.target.id){
    case '0': 
        console.log(` ${heroesArray[0].name} har gjort ${heroesArray[0].damage} skade på ${dragonObject.name}!`);
        dragonObject.currentHP -= heroesArray[0].damage;
        break;
    case '1': 
        console.log(` ${heroesArray[1].name} har gjort ${heroesArray[1].damage} skade på ${dragonObject.name}!`);
        dragonObject.currentHP -= heroesArray[1].damage;
        break;
    case '2': 
        console.log(` ${heroesArray[2].name} har gjort ${heroesArray[2].damage} skade på ${dragonObject.name}!`);
        dragonObject.currentHP -= heroesArray[1].damage;
        break;
    default: 
  }

  console.log(dragonObject.currentHP)

};
*/

function attack(e) {
  console.log(
    ` ${heroesArray[e.target.id].name} har gjort ${
      heroesArray[e.target.id].damage
    } skade på ${dragonObject.name}!`
  );
  dragonObject.currentHP -= heroesArray[e.target.id].damage;
  console.log(dragonObject.currentHP);
}

/*
document.querySelector('.healer').addEventListener('click', attack);
document.querySelector('.archer').addEventListener('click', attack);
document.querySelector('.warrior').addEventListener('click', attack);
*/

playersDOM.forEach((player) => {
  player.addEventListener("click", attack);
});

function dragonAttack() {}
