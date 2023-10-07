import Monsters from "../Monsters";
import NeverPinned from "../../SpecialRules/NeverPinned";
import image from "../../../assets/monsters/monsters/cave-squigs.webp";

export function CaveSquig () {
    return {
        singularName: "Cave Squig",
        pluralName: "Cave Squigs",
        description: "Part fungus and part flesh, these strange ferocious creatures are almost all teeth, easily " +
            "able to take a man's leg off with a single bite.",
        image,
        race: Monsters,
        wounds: 3,
        move: "Special",
        weaponSkill: 4,
        ballisticSkill: null,
        strength: 5,
        toughness: 3,
        initiative: 5,
        attacks: 2,
        gold: 200,
        armour: 0,
        damage: "1D6",
        specialRules: [
            NeverPinned(),
            {
                name: "Wild Squig Attack",
                description: `
                    <p>
                        At the start of the phase during which they appear, and each monsters' phase thereafter, roll
                        1D6 for each wild Squig. On a roll of a 1, the Squig falls asleep and does nothing this turn. On
                        a roll of 2-4 it immediately attacks one of the warriors. Draw a warrior counter to see which
                        warrior is attacked. On a roll of 5+, the Squig bounds off and immediately attacks the nearest
                        monster. If there is more than one potential target, use a dice to determine which monster is
                        attacked.
                    </p>
                `,
            }
        ],
    };
}

export default [
    {name: "Cave Squigs", constructor: CaveSquig},
];
