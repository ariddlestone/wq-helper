import Monsters from "../Monsters";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Fear from "../../SpecialRules/Fear";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "More often found on the plains of the Northern Wastes, the brutish Chaos Centaurs sometimes " +
    "descend into the ancient Dwarf Holds along with Beastmen and Chaos Warriors in search of treasure. Their " +
    "vicious tempers can only be sated by deeds of the most bloodthirsty nature.";

export function Centaur() {
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

export function CentaurChampion() {
    return {
        singularName: "Centaur Champion",
        pluralName: "Centaur Champions",
        description,
        race: Monsters,
        wounds: 27,
        move: 8,
        weaponSkill: 4,
        ballisticSkill: 2,
        strength: 5,
        toughness: 3,
        initiative: 4,
        attacks: 3,
        gold: 1000,
        armour: 2,
        damage: "2D6 / 3D6 (5+)",
        specialRules: [
            ArmedWith([
                {name: "Bow (Str 7)"},
            ]),
            Fear(8),
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export function CentaurHero() {
    return {
        singularName: "Centaur Hero",
        pluralName: "Centaur Heroes",
        description,
        race: Monsters,
        wounds: 40,
        move: 8,
        weaponSkill: 5,
        ballisticSkill: 1,
        strength: 5,
        toughness: 4,
        initiative: 5,
        attacks: 4,
        gold: 2200,
        armour: 4,
        damage: "3D6",
        specialRules: [
            ArmedWith([
                {name: "Bow (Str 8)"},
            ]),
            Fear(9),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Centaurs", constructor: Centaur},
    {name: "Centaur Champions", constructor: CentaurChampion},
    {name: "Centaur Heroes", constructor: CentaurHero},
];
