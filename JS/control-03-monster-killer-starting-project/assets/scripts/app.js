const BASE_PLAYER_DMG = 10;
const BASE_PLAYER_DMG_STRONG = 17;
const BASE_MONSTER_DMG = 14;
const BASE_HEAL = 20;
let logarr = [];

let chosenMaxLife = parseInt(prompt("Enter Maximum HP"));

if (isNaN(chosenMaxLife)) {
  chosenMaxLife = 100;
}

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
    writeToLog(playerHp, monsterHp, "Player Wins!");

    reset();
  } else if (playerHp <= 0 && monsterHp > 0) {
    alert("Monster Wins!");
    writeToLog(playerHp, monsterHp, "Monster Wins!");

    reset();
  } else if (playerHp <= 0 && monsterHp <= 0) {
    alert("Draw!");
    writeToLog(playerHp, monsterHp, "Draw!");
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
  writeToLog(playerHp, monsterHp, "heal");
}

function attackHandler() {
  modeHandler("BASE");
  writeToLog(playerHp, monsterHp, "attack");
}

function strongAttackHandler() {
  modeHandler("STRONG");
  writeToLog(playerHp, monsterHp, "strong attack");
}

function writeToLog(player_hp, monster_hp, action) {
  let log = { player_hp: player_hp, monster_hp: monster_hp, action: action };
  logarr.push(log);
}

function showlog() {
  // console.log(logarr);

  //  for (let index = 0; index < logarr.length; index++) {
  //    console.log(logarr[index]);

  for (const i of logarr) {
    for (const key in i) {
      console.log(`${key} : ${i[key]}`);
    }
    console.log("------")
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", showlog);
