// File for Attack Class
const ATTACK_DIE_SIZE = 20; // Attack die size is always assumed to be a D20

class Attack {
    constructor(modifier, damageDice) {
        this.mod = modifier;
        this.dieSize = damageDice;
    }

    // Makes an attack roll, to determine whether or not an
    // attack connects, Rolling a D20 and adding attack modifier
    rollAttack() {
        return Math.round(Math.random() * ATTACK_DIE_SIZE) + this.mod;
    }

    // Makes a damage roll, rolling damage dice and adding attack modifier
    rollDamage() {
        return Math.round(Math.random() * this.dieSize) + this.mod;
    }
}

