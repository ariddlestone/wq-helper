import DarkElves from "../DarkElves";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Assassinate from "../../SpecialRules/Assassinate";
import Dodge from "../../SpecialRules/Dodge";
import Hate from "../../SpecialRules/Hate";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicResistance from "../../SpecialRules/MagicResistance";
import WeepingBlade from "../../SpecialRules/WeepingBlade";

const description = "Dark Elf warriors are cruel and fierce fighters. Like all Elves, Dark Elves are lithe and " +
    "sinuous, with strong muscles and reactions every bit as quick as their agile minds.";

export function DarkElfWarrior() {
    return {
        singularName: "Dark Elf Warrior",
        pluralName: "Dark Elf Warriors",
        description,
        race: DarkElves,
        wounds: 6,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 3,
        toughness: 3,
        initiative: 6,
        attacks: 1,
        gold: 100,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Crossbows (Str 4)"},
            ]),
            Dodge(6),
            Hate("Elves"),
        ],
    };
}

export function DarkElfChampion() {
    return {
        singularName: "Dark Elf Champion",
        pluralName: "Dark Elf Champions",
        description,
        race: DarkElves,
        wounds: 14,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 7,
        attacks: 2,
        gold: 480,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Dodge(6),
            Hate("Elves"),
            MagicWeapon(),
        ],
    };
}

export function DarkElfHero() {
    return {
        singularName: "Dark Elf Hero",
        pluralName: "Dark Elf Heroes",
        description,
        race: DarkElves,
        wounds: 25,
        move: 5,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 4,
        initiative: 8,
        attacks: 3,
        gold: 1040,
        armour: 4,
        damage: "2D6",
        specialRules: [
            Dodge(4),
            Hate("Elves"),
            MagicResistance(5),
            MagicArmour(),
            MagicWeapon()
        ],
    };
}

export function DarkElfLord() {
    return {
        singularName: "Dark Elf Lord",
        pluralName: "Dark Elf Lords",
        description,
        race: DarkElves,
        wounds: 34,
        move: 5,
        weaponSkill: 7,
        ballisticSkill: "A",
        strength: 4,
        toughness: 4,
        initiative: 9,
        attacks: 4,
        gold: 1600,
        armour: 4,
        damage: "3D6",
        specialRules: [
            Dodge(4),
            Hate("Elves"),
            MagicResistance(5),
            MagicArmour(),
            MagicItem(2),
            MagicWeapon()
        ],
    };
}

export function DarkElfAssassin() {
    return {
        singularName: "Dark Elf Assassin",
        pluralName: "Dark Elf Assassins",
        description,
        race: DarkElves,
        wounds: 12,
        move: 5,
        weaponSkill: 9,
        ballisticSkill: "A",
        strength: 4,
        toughness: 4,
        initiative: 10,
        attacks: 2,
        gold: 410,
        armour: 0,
        damage: "1D6",
        specialRules: [
            AmbushMagic(5),
            Assassinate(6),
            Dodge(5),
            Hate("Elves"),
            WeepingBlade(),
        ],
    };
}

export default [
    {name: "Dark Elf Warriors", constructor: DarkElfWarrior},
    {name: "Dark Elf Champions", constructor: DarkElfChampion},
    {name: "Dark Elf Heroes", constructor: DarkElfHero},
    {name: "Dark Elf Lords", constructor: DarkElfLord},
    {name: "Dark Elf Assassins", constructor: DarkElfAssassin},
];
