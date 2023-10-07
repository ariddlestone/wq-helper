import Monsters from "../Monsters";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Fear from "../../SpecialRules/Fear";

const description = "More often found on the plains of the Northern Wastes, the brutish Chaos Centaurs sometimes " +
    "descend into the ancient Dwarf Holds along with Beastmen and Chaos Warriors in search of treasure. Their " +
    "vicious tempers can only be sated by deeds of the most bloodthirsty nature.";

export function Centaur () {
    return {
        singularName: "Centaur",
        pluralName: "Centaurs",
        description,
        race: Monsters,
        wounds: 12,
        move: 8,
        weaponSkill: 3,
        ballisticSkill: 3,
        strength: 5,
        toughness: 3,
        initiative: 3,
        attacks: 2,
        gold: 300,
        armour: 0,
        damage: "2D6",
        specialRules: [
            ArmedWith([
                {name: "Bow (Str 4)"},
            ]),
            Fear(4),
        ],
    };
}

export default [
    {name: "Centaurs", constructor: Centaur},
];
