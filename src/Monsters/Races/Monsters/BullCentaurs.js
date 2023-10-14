import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Bull Centaurs are Creatures of Chaos: beings with the upper torso of a Chaos Dwarf and the body " +
    "of a ferocious bull. They are keen-witted creatures and powerful fighters."

export function BullCentaur() {
    return {
        singularName: "Bull Centaur",
        pluralName: "Bull Centaurs",
        description,
        race: Monsters,
        wounds: 12,
        move: 8,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 410,
        armour: 2,
        damage: "1D6 / 2D6 (5+)",
        specialRules: [
            Fear(5),
            MagicResistance(6),
        ],
    };
}

export function BullCentaurChampion() {
    return {
        singularName: "Bull Centaur Champion",
        pluralName: "Bull Centaur Champions",
        description,
        race: Monsters,
        wounds: 23,
        move: 8,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 5,
        toughness: 4,
        initiative: 4,
        attacks: 3,
        gold: 1060,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Fear(7),
            MagicResistance(5),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function BullCentaurHero() {
    return {
        singularName: "Bull Centaur Hero",
        pluralName: "Bull Centaur Heroes",
        description,
        race: Monsters,
        wounds: 32,
        move: 8,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 5,
        toughness: 5,
        initiative: 4,
        attacks: 4,
        gold: 2320,
        armour: 3,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            Fear(7),
            MagicResistance(5),
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export function BullCentaurLord() {
    return {
        singularName: "Bull Centaur Lord",
        pluralName: "Bull Centaur Lords",
        description,
        race: Monsters,
        wounds: 42,
        move: 8,
        weaponSkill: 7,
        ballisticSkill: 1,
        strength: 5,
        toughness: 5,
        initiative: 6,
        attacks: 5,
        gold: 3680,
        armour: 3,
        damage: "4D6 / 5D6 (5+)",
        specialRules: [
            Fear(7),
            MagicResistance(4),
            MagicArmour(),
            MagicItem(3),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Bull Centaurs", constructor: BullCentaur},
    {name: "Bull Centaur Champions", constructor: BullCentaurChampion},
    {name: "Bull Centaur Heroes", constructor: BullCentaurHero},
    {name: "Bull Centaur Lords", constructor: BullCentaurLord},
];
