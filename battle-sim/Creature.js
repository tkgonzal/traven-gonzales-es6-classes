// Creature Class File
class Creature {
    constructor(name, ac, hp, attack, spanClass) {
        this.name = name;
        this.ac = ac;
        this.hp = hp;
        this.attack = attack;
        this.dead = false;
        // Must either be c1 or c2. Used for styling on status log of battle sim
        this.spanClass = spanClass;
    }

    // Creature makes an attack roll
    makeAttack() {
        return [this.attack.rollAttack(), this.attack.rollDamage()];
    }

    // Given an amount of damage, takes that damage. If the damage 
    // would be lethal, instead reduces the creature's hp to 0
    takeDamage(damage) {
        if (damage > this.hp) {
            this.hp = 0;
            this.dead = true;
            return;
        }
        this.hp -= damage > 0 ? damage : 1;
    }
}

