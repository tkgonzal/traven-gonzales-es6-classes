// Main File for BattleSim Demo
// DOM Element Declarations and Assignments
const statusLog = document.querySelector("#statusLog");
const fighters = document.querySelector("#fighters");

// Functions For Creating and Logging Creatures
// Given the number of a combatant, promps the user for their stats
// and creatures a creature object based of those stats
function getCreature(num) {
    const name = getName(num);
    const ac = getStat(num, "AC");
    const hp = getStat(num, "HP");
    const attackMod = getStat(num, "attack modifier");
    const dmgDieSize = getStat(num, "damage die size");
    return new Creature(
        name, ac, hp, new Attack(attackMod, dmgDieSize), `c${num}`
    );
}

// Given a list of creatures, logs those creatures into the fighters element
function logCreatures(creatures) {
    for (let c of creatures)
        logCreature(c);
}

// Given a creature, logs their info into the fighters element
function logCreature(c) {
    const li = document.createElement("li");
    const span = createNameSpan(c.name, c.spanClass);
    const statText = document.createTextNode(
        ` - AC: ${c.ac}, HP: ${c.hp}, Attack Modifier: ${c.attack.mod}, Damage Die: d${c.attack.dieSize}`
    );

    li.appendChild(span);
    li.appendChild(statText);

    fighters.appendChild(li);
}

// Give a creature's name and span class, generates a span to display
// its name
function createNameSpan(cName, cSpanClass) {
    const text = document.createTextNode(cName);
    const span = document.createElement("span");

    span.appendChild(text);
    span.classList.add(cSpanClass);

    return span;
}

// Given the number of a combatant, asks the user for their name
function getName(num) {
    let name = "";
    do {
        name = prompt(`Please enter a name for fighter #${num}:`);
    } while (name === "");
    return name;
}

// Given the number of a combatant and a stat name, asks the user
// for the value they want for a given stat
function getStat(num, statName) {
    let statVal = NaN;
    do {
        statVal = parseInt(prompt(`Please enter a(n) ${statName} for fighter #${num}`), 10);
    } while (isNaN(statVal));
    return statVal;
}

// Sample Creatures for Debugging
// const creature1 = new Creature("Barbarian", 14, 22, new Attack(4, 8), "c1");
// const creature2 = new Creature("Fighter", 16, 18, new Attack(3, 6), "c2");


// Creating Creature Using User Input
const creature1 = getCreature(1);
const creature2 = getCreature(2);

// Initializing and Running Battle Sim
logCreatures([creature1, creature2]);
const battleSim = new BattleSim(statusLog, creature1, creature2);
battleSim.run();

