const BASE_PLAYER_DMG = 10;
const BASE_PLAYER_DMG_STRONG = 17;
const BASE_MONSTER_DMG = 14;
const BASE_HEAL = 20;

let chosenMaxLife = parseInt(prompt("Enter Maximum HP"));

if (isNaN(chosenMaxLife)) {
  chosenMaxLife = 100;
}
console.log(chosenMaxLife);

let playerHp = chosenMaxLife;
let monsterHp = chosenMaxLife;
let bonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  resetGame(chosenMaxLife);
  adjustHealthBars(chosenMaxLife);
  playerHp = chosenMaxLife;
  monsterHp = chosenMaxLife;
  bonusLife = true;
}

function checkHP() {
  if (playerHp <= 0 && bonusLife) {
    playerHp = 0.1;
    increasePlayerHealth(0.1);
    removeBonusLife();
    bonusLife = false;
    alert("Bonus Life!");
  }
  if (monsterHp <= 0 && playerHp > 0) {
    alert("Player Wins!");
    reset();
  } else if (playerHp <= 0 && monsterHp > 0) {
    alert("Monster Wins!");
    reset();
  } else if (playerHp <= 0 && monsterHp <= 0) {
    alert("Draw!");
    reset();
  }
}

function modeHandler(mode) {
  let max_dmg;
  if (mode === "BASE") {
    max_dmg = 10;
  } else if (mode === "STRONG") {
    max_dmg = 17;
  }
  let playerDmg = dealMonsterDamage(max_dmg);
  monsterHp -= playerDmg;
  let monsterDmg = dealPlayerDamage(BASE_MONSTER_DMG);
  playerHp -= monsterDmg;
  checkHP();
}

function healHandler() {
  let healValue;
  if (playerHp > chosenMaxLife - BASE_HEAL) {
    healValue = chosenMaxLife - playerHp;
  } else {
    healValue = BASE_HEAL;
  }
  playerHp += healValue;
  increasePlayerHealth(healValue);
}

function attackHandler() {
  modeHandler("BASE");
}

function strongAttackHandler() {
  modeHandler("STRONG");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
