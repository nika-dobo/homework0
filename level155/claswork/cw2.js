let player1Talents = new Set([
  "Dash",
  "Mana Shield",
  "Heavy Strike",
  "fireball",
]);
let player2Talents = new Set(["Dash", "Heavy Strike", "running", "black hole"]);

function learnTalent(playerSet, newTalent) {
  console.log(
    playerSet.has(newTalent)
      ? `პერსონაჟი უკვე ფლობს ტალანტს: ${newTalent}`
      : playerSet.add(newTalent),
    `ახალი ტალანტი წარმატებით შეისწავლა: ${newTalent}`,
  );
}

learnTalent(player1Talents, "fire");

const bossDrop = [
  "Fireball",
  "Dash",
  "Fireball",
  "Healing",
  "Dash",
  "Ice Spear",
];
let getDrop = new Set(bossDrop);

let myDrop = [...getDrop];
console.log(myDrop);

function getCommonTalents(set1, set2) {
  let talnts = new Set();

  for (let talet of set1) {
    if (set2.has(talet)) {
      talnts.add(talet);
    }
  }
  console.log(talnts);
}

getCommonTalents(player1Talents, player2Talents);

function getUniqueAdvantage(mainSet, enemySet) {
  let diferetn = new Set();

  for (let talet of mainSet) {
    if (!enemySet.has(talet)) {
      diferetn.add(talet);
    }
  }
  console.log(diferetn);
}

getUniqueAdvantage(player1Talents, player2Talents);
