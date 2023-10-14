import Monsters from "../Monsters";
import Fly from "../../SpecialRules/Fly";
import MagicResistance from "../../SpecialRules/MagicResistance";
import Terror from "../../SpecialRules/Terror";

const description = "Believed to be a rare mutation of the Great Taurus, the Lammasu is a winged beast with the body " +
    "of a vast bull and a monstrous face. Rather than air it breathes raw magic, and its poisonous breath is known " +
    "as a Sorcerous Exhalation.";

const sorcerousExhalation = {
    name: "Sorcerous Exhalation",
    description: `
        <p>
            A Lammasu breathes out whirling tendrils of magic that provide protection against magical attacks. All
            attacks made with a magical weapon against a Lammasu have a -2 modifier on the to hit roll.
        </p>
    `,
};

export function Lammasu() {
    return {
        singularName: "Lammasu",
        pluralName: "Lammasu",
        description,
        race: Monsters,
        wounds: 50,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: null,
        strength: 6,
        toughness: 7,
        initiative: 6,
        attacks: 3,
        gold: 2000,
        armour: 0,
        damage: "4D6",
        specialRules: [
            Fly(),
            MagicResistance(4),
            sorcerousExhalation,
            Terror(10),
        ],
    };
}

export default [
    {name: "Lammasu", constructor: Lammasu},
];
