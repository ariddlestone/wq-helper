import OrcsAndGoblins from "../OrcsAndGoblins";
import ArmedWith from "../../SpecialRules/ArmedWith";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";

const description = "Orcs vary in height and physical appearance more than humans - some are no taller than a man " +
    "but most are substantially larger. They are also much broader than humans, with big deep chests, massive " +
    "shoulders and powerfully muscled arms. Orcs have large heads with huge jaws but tiny foreheads behind which " +
    "lurk a thick skull and little brain.";

export function Orc() {
    return {
        singularName: "Orc",
        pluralName: "Orcs",
        description,
        race: OrcsAndGoblins,
        wounds: 3,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 55,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 3)"},
                {name: "Swords"},
            ]),
        ],
    };
}

export function OrcBoss() {
    return {
        singularName: "Orc Boss",
        pluralName: "Orc Bosses",
        description,
        race: OrcsAndGoblins,
        wounds: 18,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 330,
        armour: 2,
        damage: "2D6",
        specialRules: [
            MagicWeapon(),
        ],
    };
}

export function OrcBigBoss() {
    return {
        singularName: "Orc Big Boss",
        pluralName: "Orc Big Bosses",
        description,
        race: OrcsAndGoblins,
        wounds: 25,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 5,
        initiative: 4,
        attacks: 3,
        gold: 720,
        armour: 3,
        damage: "2D6",
        specialRules: [
            IgnoreBlows(6),
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export function OrcWarBoss() {
    return {
        singularName: "Orc War Boss",
        pluralName: "Orc War Bosses",
        description,
        race: OrcsAndGoblins,
        wounds: 33,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 4,
        gold: 1100,
        armour: 3,
        damage: "2D6/3D6(5+)",
        specialRules: [
            IgnoreBlows(5),
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Orcs", constructor: Orc},
    {name: "Orc Bosses", constructor: OrcBoss},
    {name: "Orc Big Bosses", constructor: OrcBigBoss},
    {name: "Orc War Bosses", constructor: OrcWarBoss},
];
