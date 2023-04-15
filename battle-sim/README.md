# BattleSim Demo
A simple combat simulation between 2 creatures using a very simplified 
version of DND 5e's battle system
- At the start of combat, each creature's order in combat is determined and
 slotted in initiative
- Each creature attempts to make attacks at each other, making attack rolls
 against each other's AC to see if it connects, and applying damage to one
 another if the attack roll matches or exceeds that creatures' AC
- Combat ends when one creature dies.

## Stats 
At the start of the BattleSim, the user is prompted for stats for the 
participating fighters. these stats are as follows:
- **Name**: The name of the creature
- **AC**: The armour class of the creature. When an attack is rolled against
the creature, the roll must match or exceed the creature's **AC** to hit
- **HP**: The hit points of the creature denoting its health. When this reaches
0, a creatures is considered dead.
- **Attack Modifier**: A bonus to be added to a creature's attack and damage roll.
- **Damage Die Size**: The die size for the roll of a creature's damage. 
