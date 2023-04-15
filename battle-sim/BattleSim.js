// BattleSim Class File
// A simple combat simulation between 2 creatures using a very simplified 
// version of DND 5e's battle system
// -At the start of combat, each creature's order in combat is determined and
//  slotted in initiative
// -Each creature attempts to make attacks at each other, making attack rolls
//  against each other's AC to see if it connects, and applying damage to one
//  another if the attack roll matches or exceeds that creatures' AC
// -Combat ends when one creature dies.
class BattleSim {
    // Takes an attackList, a ul DOM element from which to log the attacks
    // each creature makes, and 2 combatant creatures
    constructor(statusLog, creature1, creature2) {
        this.statusLog = statusLog;
        // Determines order of combat at random (Only need 0 or 1 since only 2
        // creatures are in combat)
        const order = Math.round(Math.random());
        this.initiative = order ? [creature1, creature2] : [creature2, creature1];
    }

    // Given two creatures, has the first creature attempt to 
    // make an attack against the second creature
    attacks(c1, c2) {
        const [attackRoll, damageRoll] = c1.makeAttack();
        const li = document.createElement("li");

        this.appendText(li, `${c1.name} `, `${c1.spanClass}`);
        this.appendText(li, `makes an attack of `)
        this.appendText(li, `${attackRoll} `, "attack");

        if (attackRoll >= c2.ac) {
            c2.takeDamage(damageRoll);
            this.appendText(li, "and hits! ");
            this.appendText(li, `${c2.name} `, `${c2.spanClass}`);
            this.appendText(li, "takes ");
            this.appendText(li, `${damageRoll} `, "damage");
            this.appendText(li, "points of damage.");
        } else {
            this.appendText(li, "and misses!");
        }

        // console.log(statusMsg);
        this.statusLog.appendChild(li);
    }

    // Runs combat by having each creature take turns attacking each other.
    // Ends when a creature is dropped dead.
    run() {
        while (!this.initiative[0].dead && !this.initiative[1].dead) {
            for (let i = 0; i < 2; i++) {
                const attacking = this.initiative[i];
                const defending = this.initiative[(i + 1) % 2];

                this.attacks(attacking, defending);
                const li = document.createElement("li");
                this.appendText(li, `${defending.name} `, `${defending.spanClass}`);
                this.appendText(li, "is at ");
                this.appendText(li, `${defending.hp} `, "hp");
                this.appendText(li, "hit point(s).");
                this.statusLog.appendChild(li);

                if (defending.dead) {
                    const deathLi = document.createElement("li");
                    this.appendText(deathLi, `${defending.name} `, `${defending.spanClass}`);
                    this.appendText(deathLi, "is dead! ");
                    this.appendText(deathLi, `${attacking.name} `, `${attacking.spanClass}`);
                    this.appendText(deathLi, "wins!");
                    this.statusLog.appendChild(deathLi);
                    break;
                }
            }
        }
    }

    // Given an li element and text, appends the text to the li. If a class name
    // is also provided, creates a span to add the text and adds the classname
    // to the span before appending it to the li
    appendText(li, text, className = "") {
        const textNode = document.createTextNode(text);
        if (className) {
            const span = document.createElement("span");
            span.appendChild(textNode);
            span.classList.add(className);
            li.appendChild(span);
        } else {
            li.appendChild(textNode);
        }
    }
}

