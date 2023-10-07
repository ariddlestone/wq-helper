import Undead from "../Undead";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import NecromanticMagic from "../../SpecialRules/NecromanticMagic";
import Regenerate from "../../SpecialRules/Regenerate";

const description = "A Necromancer is an evil wizard with powers over the world of the dead. His magic enables him to " +
    "extend his own life for centuries and to raise corpses to create Skeleton and Zombies.";

export function Necromancer() {
    return {
        singularName: "Necromancer",
        pluralName: "Necromancers",
        description,
        race: Undead,
        wounds: 25,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 3,
        attacks: 2,
        gold: 680,
        armour: 0,
        damage: "2D6",
        specialRules: [
            NecromanticMagic(1),
            MagicResistance(5),
            MagicWeapon(),
            Regenerate(2),
        ],
    };
}

export function NecromancerChampion() {
    return {
        singularName: "Necromancer Champion",
        pluralName: "Necromancer Champions",
        description,
        race: Undead,
        wounds: 29,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 4,
        attacks: 3,
        gold: 1630,
        armour: 0,
        damage: "2D6",
        specialRules: [
            NecromanticMagic(2),
            MagicResistance(4),
            MagicItem(2),
            MagicWeapon(),
            Regenerate(2),
        ],
    };
}

export function MasterNecromancer() {
    return {
        singularName: "Master Necromancer",
        pluralName: "Master Necromancers",
        description,
        race: Undead,
        wounds: 34,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 5,
        toughness: 4,
        initiative: 5,
        attacks: 4,
        gold: 2780,
        armour: 3,
        damage: "3D6",
        specialRules: [
            NecromanticMagic(3),
            MagicDispel(4),
            MagicResistance(4),
            MagicItem(3),
            MagicWeapon(),
            Regenerate(2),
        ],
    };
}

export function NecromancerLord() {
    return {
        singularName: "Necromancer Lord",
        pluralName: "Necromancer Lords",
        description,
        race: Undead,
        wounds: 39,
        move: 4,
        weaponSkill: 7,
        ballisticSkill: "Auto",
        strength: 5,
        toughness: 4,
        initiative: 6,
        attacks: 5,
        gold: 4100,
        armour: 4,
        damage: "3D6",
        specialRules: [
            AmbushMagic("A"),
            NecromanticMagic(4),
            MagicDispel(4),
            MagicResistance(4),
            MagicItem(4),
            MagicWeapon(),
            Regenerate(2),
        ],
    };
}

export default [
    {name: "Necromancers", constructor: Necromancer},
    {name: "Necromancer Champions", constructor: NecromancerChampion},
    {name: "Master Necromancers", constructor: MasterNecromancer},
    {name: "Necromancer Lords", constructor: NecromancerLord},
];
