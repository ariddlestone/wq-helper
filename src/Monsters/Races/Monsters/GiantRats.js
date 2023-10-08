import Monsters from "../Monsters";

export function GiantRat () {
    return {
        singularName: "Giant Rat",
        pluralName: "Giant Rats",
        description: "No less dangerous than the more intelligent monsters are packs of Giant Rats that dwell in the " +
            "dirtiest corners of the Warhammer world. Bloated by eating indescribable foul things, these rats have " +
            "grown to immense proportions. When cornered, Giant Rats hurl themselves at the opponent in a maniacal " +
            "frenzy, lunging for their enemy's jugular vein with no thought for their own safety.",
        race: Monsters,
        wounds: 1,
        move: 6,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 1,
        gold: 25,
        armour: 0,
        damage: "2D6",
        specialRules: [
            {
                name: "Deathleap",
                description: `
                    <p>
                        Giant Rats make a special attack, called a <em>Deathleap</em>. Roll the Rat's attack as normal,
                        but once it has attacked, roll 1D6. On a result of 3+ the Giant Rat's suicidal, frenzied attack
                        has opened it up to your warrior's attack and he automatically kills it.
                    </p>
                `,
            }
        ],
    };
}

export default [
    {name: "Giant Rats", constructor: GiantRat},
];
