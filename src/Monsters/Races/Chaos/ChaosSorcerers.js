import Chaos from "../Chaos";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import Parry from "../../SpecialRules/Parry";

const description = "Chaos Sorcerers are amongst the most feared of the dark powers. They wield powerful " +
    "magic against the enemies of Chaos, whether found on the battlefields of the Warhammer World or in the deepest " +
    "dungeons that lie below the surface.";

export function ChaosSorcerer () {
    return {
        singularName: "Chaos Sorcerer",
        pluralName: "Chaos Sorcerers",
        description,
        race: Chaos,
        wounds: 15,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 5,
        initiative: 6,
        attacks: 2,
        gold: 840,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ChaosMagic(1, "Chaos Sorcerer"),
            MagicResistance(4),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
            Parry(5),
        ],
    };
}

export function MasterChaosSorcerer () {
    return {
        singularName: "Master Chaos Sorcerer",
        pluralName: "Master Chaos Sorcerers",
        description,
        race: Chaos,
        wounds: 31,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 5,
        toughness: 5,
        initiative: 8,
        attacks: 3,
        gold: 2400,
        armour: 1,
        damage: "4D6",
        specialRules: [
            ChaosMagic(3, "Master Chaos Sorcerer"),
            MagicDispel(4),
            MagicResistance(4),
            MagicArmour(),
            MagicItem(3),
            MagicWeapon(),
            Parry(5),
        ],
    };
}

export default [
    {name: "Chaos Sorcerers", constructor: ChaosSorcerer},
    {name: "Master Chaos Sorcerers", constructor: MasterChaosSorcerer},
];
