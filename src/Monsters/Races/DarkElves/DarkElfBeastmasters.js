import DarkElves from "../DarkElves";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Hate from "../../SpecialRules/Hate";

const description = "Dark Elf Beastmasters are Dark Elf Warriors who control a pack of snarling Chaos Hounds or " +
    "Warhounds in combat, directing them towards the Warriors using whips.";

export function DarkElfBeastmaster() {
    return {
        singularName: "Dark Elf Beastmaster",
        pluralName: "Dark Elf Beastmasters",
        description,
        race: DarkElves,
        wounds: 15,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 7,
        attacks: 2,
        gold: 150,
        armour: 2,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Crossbows (Str 5)"},
            ]),
            {
                name: "Beast Handler",
                description: `
                    <p>
                        Dark Elf Beastmasters control a pack of beasts in combat, directing them towards the Warriors
                        using whips. Roll 1D6 to determine the composition of each Beastmaster's pack. On a score of 1-3
                        he has 1D6 Chaos Hounds. On a score of 4-6 he has 1D6 Warhounds. When placing the Beastmaster on
                        the table, his beasts are always placed first.
                    </p>
                `,
            },
            Hate("Elves"),
        ],
    };
}

export default [
    {name: "Dark Elf Beastmasters", constructor: DarkElfBeastmaster},
];
