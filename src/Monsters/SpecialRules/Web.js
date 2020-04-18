export default function (value) {
    return {
        name: `Web (${value})`,
        description: `
            <p>
                Certain monsters (mainly spiders) attempt to ensnare their prey in a web, so that they can finish it off
                at their leisure. Each turn a monster may attempt to web a warrior as many times as it has attacks.
            </p>
            <p>
                If the monster hits your warrior he has been caught in its web - place a webbed counter next to the
                warrior. While webbed a warrior may not do anything.
            </p>
            <p>
                While webbed, a warrior may be bitten automatically with the rest of the monster's attacks (no to hit
                roll is needed) for ${value} wounds per bite, with no modifiers for toughness or armour. A monster may
                not use its bite attack(s) if its opponent has not been webbed. Monsters without the ability to use webs
                that may also be involved in the combat get +2 to their to hit rolls against a webbed warrior.
            </p>
            <p>
                At the start of each warriors' phase, roll 1D6 for each warrior that has been webbed and add his
                strength. If the total is 7 or more, he pulls himself free from the sticky strands and may act normally
                this turn.
            </p>
`,
    };
}
