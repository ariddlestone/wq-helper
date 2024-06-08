import DarkElves from "../DarkElves";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import Hate from "../../SpecialRules/Hate";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

export function DarkElfSorcerer() {
    return {
        singularName: "Dark Elf Sorcerer",
        pluralName: "Dark Elf Sorcerers",
        race: DarkElves,
        wounds: 12,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 3,
        toughness: 4,
        initiative: 7,
        attacks: 1,
        gold: 590,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ChaosMagic(1, "Dark Elf Sorcerer"),
            Hate("Elves"),
            MagicResistance(6),
            MagicItem(),
        ],
    };
}

export function DarkElfSorcererChampion() {
    return {
        singularName: "Dark Elf Sorcerer Champion",
        pluralName: "Dark Elf Sorcerer Champions",
        race: DarkElves,
        wounds: 20,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 7,
        attacks: 1,
        gold: 1210,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ChaosMagic(2, "Dark Elf Sorcerer"),
            Hate("Elves"),
            MagicResistance(5),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function DarkElfMasterSorcerer() {
    return {
        singularName: "Dark Elf Master Sorcerer",
        pluralName: "Dark Elf Master Sorcerers",
        race: DarkElves,
        wounds: 30,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 8,
        attacks: 2,
        gold: 2190,
        armour: 2,
        damage: "2D6",
        specialRules: [
            ChaosMagic(3, "Dark Elf Sorcerer"),
            Hate("Elves"),
            MagicDispel(4),
            MagicResistance(4),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export function DarkElfSorcererLord() {
    return {
        singularName: "Dark Elf Sorcerer Lord",
        pluralName: "Dark Elf Sorcerer Lords",
        race: DarkElves,
        wounds: 41,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 9,
        attacks: 3,
        gold: 3280,
        armour: 3,
        damage: "3D6",
        specialRules: [
            AmbushMagic("A"),
            ChaosMagic(4, "Dark Elf Sorcerer"),
            Hate("Elves"),
            MagicDispel(4),
            MagicResistance(3),
            MagicItem(3),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Dark Elf Sorcerers", constructor: DarkElfSorcerer},
    {name: "Dark Elf Sorcerer Champions", constructor: DarkElfSorcererChampion},
    {name: "Dark Elf Master Sorcerers", constructor: DarkElfMasterSorcerer},
    {name: "Dark Elf Sorcerer Lords", constructor: DarkElfSorcererLord},
];
