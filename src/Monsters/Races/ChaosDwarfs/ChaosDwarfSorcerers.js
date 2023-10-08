import ChaosDwarfs from "../ChaosDwarfs";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicDispel from "../../SpecialRules/MagicDispel";
import ProtectionRing from "../../SpecialRules/ProtectionRing";
import ChaosDwarfMagic from "../../SpecialRules/ChaosDwarfMagic";

const description = "The Chaos Dwarfs have been twisted by dark forces until they are a creel mockery of the Dwarf " +
    "Warrior and his kind. Ruled by mighty Sorcerers, the Chaos Dwarfs use the powers of lava, magma and fire to " +
    "work their evil deeds. They employ powerful spells and engines of destruction to do their work, and are ever " +
    "seeking to discover the lost secrets of their Dwarf kin that lie buried beneath the mountains.";

export function ChaosDwarfSorcerer () {
    return {
        singularName: "Chaos Dwarf Sorcerer",
        pluralName: "Chaos Dwarf Sorcerers",
        description,
        race: ChaosDwarfs,
        wounds: 8,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 590,
        armour: 2,
        damage: "1D6 / 2D6 (6+)",
        specialRules: [
            ChaosDwarfMagic(1),
            MagicDispel(4),
            MagicResistance(4),
            ProtectionRing(1)
        ],
    };
}

export function ChaosDwarfMasterSorcerer () {
    return {
        singularName: "Chaos Dwarf Master Sorcerer",
        pluralName: "Chaos Dwarf Master Sorcerers",
        description,
        race: ChaosDwarfs,
        wounds: 26,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 4,
        attacks: 2,
        gold: 2190,
        armour: 3,
        damage: "2D6",
        specialRules: [
            ChaosDwarfMagic(3),
            MagicDispel(4),
            MagicResistance(4),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function ChaosDwarfSorcererLord () {
    return {
        singularName: "Chaos Dwarf Sorcerer Lord",
        pluralName: "Chaos Dwarf Sorcerer Lords",
        description,
        race: ChaosDwarfs,
        wounds: 40,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 3,
        gold: 3280,
        armour: 3,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            ChaosDwarfMagic(4),
            MagicDispel(4),
            MagicResistance(3),
            MagicArmour(),
            MagicItem(3),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Chaos Dwarf Sorcerers", constructor: ChaosDwarfSorcerer},
    {name: "Chaos Dwarfs Master Sorcerers", constructor: ChaosDwarfMasterSorcerer},
    {name: "Chaos Dwarf Sorcerer Lords", constructor: ChaosDwarfSorcererLord},
];
