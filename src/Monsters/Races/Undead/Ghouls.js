import Undead from "../Undead";
import Fear from "../../SpecialRules/Fear";
import Break from "../../SpecialRules/Break";

const description = "Ghouls are the descendants of insane and evil hearted cannibals - men who ate the flesh " +
    "of the dead. Over the years they have degenerated into a race that is no longer human. They live amongst places " +
    "of the dead, feeding on corpses and sometimes attacking lone travellers or vulnerable groups.";

export function Ghoul() {
    return {
        singularName: "Ghoul",
        pluralName: "Ghouls",
        description,
        race: Undead,
        wounds: 4,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 80,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Break(),
            Fear(4),
        ],
    };
}

export default [
    {name: "Ghouls", constructor: Ghoul},
];
