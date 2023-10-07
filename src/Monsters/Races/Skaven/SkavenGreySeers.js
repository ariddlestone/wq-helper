import Skaven from "../Skaven";
import Dodge from "../../SpecialRules/Dodge";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import SkavenMagic from "../../SpecialRules/SkavenMagic";
import WeepingBlade from "../../SpecialRules/WeepingBlade";

const description = "The mysterious Skaven known as Grey Seers are the servants of the Lords of Decay and carry " +
    "their instructions to the clans. Grey Seers are invariably magicians of great power and may be found leading " +
    "hordes of Skaven Clans into battle. Other Skaven Sorcerers - from Skaven Warlocks through to the powerful " +
    "Warlock Chiefs all recognise the superiority of the Grey Seers, cowering in fear when one approaches.";

export function SkavenWarlock() {
    return {
        singularName: "Skaven Warlock",
        pluralName: "Skaven Warlocks",
        description,
        race: Skaven,
        wounds: 15,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 5,
        attacks: 1,
        gold: 560,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Dodge(5),
            SkavenMagic(1),
            MagicDispel(6),
        ],
    };
}

export function SkavenWarlockChampion() {
    return {
        singularName: "Skaven Warlock Champion",
        pluralName: "Skaven Warlock Champions",
        description,
        race: Skaven,
        wounds: 18,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 5,
        attacks: 1,
        gold: 1180,
        armour: 2,
        damage: "2D6",
        specialRules: [
            SkavenMagic(2),
            MagicDispel(5),
            MagicResistance(5),
            MagicItem(),
            WeepingBlade(),
        ],
    };
}

export function SkavenMasterWarlock() {
    return {
        singularName: "Skaven Master Warlock",
        pluralName: "Skaven Master Warlocks",
        description,
        race: Skaven,
        wounds: 30,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 6,
        attacks: 2,
        gold: 1900,
        armour: 0,
        damage: "2D6",
        specialRules: [
            SkavenMagic(3),
            MagicResistance(4),
            MagicItem(3),
            MagicWeapon(),
        ],
    };
}

export function SkavenGreySeer() {
    return {
        singularName: "Grey Seer",
        pluralName: "Grey Seers",
        description,
        race: Skaven,
        wounds: 43,
        move: 5,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 4,
        initiative: 7,
        attacks: 4,
        gold: 3400,
        armour: 0,
        damage: "3D6",
        specialRules: [
            SkavenMagic(4),
            MagicDispel(4),
            MagicResistance(4),
            MagicItem(4),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Skaven Warlocks", constructor: SkavenWarlock},
    {name: "Skaven Warlock Champions", constructor: SkavenWarlockChampion},
    {name: "Skaven Master Warlocks", constructor: SkavenMasterWarlock},
    {name: "Skaven Grey Seers", constructor: SkavenGreySeer},
];
