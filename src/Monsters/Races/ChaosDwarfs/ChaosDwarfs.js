import ChaosDwarfs from "../ChaosDwarfs";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import ArmedWith from "../../SpecialRules/ArmedWith";

const description = "The Chaos Dwarfs have been twisted by dark forces until they are a creel mockery of the Dwarf " +
    "Warrior and his kind. Ruled by mighty Sorcerers, the Chaos Dwarfs use the powers of lava, magma and fire to " +
    "work their evil deeds. They employ powerful spells and engines of destruction to do their work, and are ever " +
    "seeking to discover the lost secrets of their Dwarf kin that lie buried beneath the mountains.";

export function ChaosDwarf () {
    return {
        singularName: "Chaos Dwarf",
        pluralName: "Chaos Dwarfs",
        description,
        race: ChaosDwarfs,
        wounds: 8,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 140,
        armour: 2,
        damage: "1D6 / 2D6 (6+)",
        specialRules: [
            MagicResistance(6),
        ],
    };
}

export function ChaosDwarfBlunderbuss () {
    return {
        singularName: "Chaos Dwarf with Blunderbuss",
        pluralName: "Chaos Dwarfs with Blunderbusses",
        description,
        race: ChaosDwarf,
        wounds: 8,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 140,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ArmedWith([{
                name: "Blunderbuss",
                description: `
                    <p>    
                        A blunderbuss attack is different from a normal missile attack: it fires a spread
                        of lead shot at multiple targets in a single direction, making a single to hit roll
                        to determine if none or all of the targets in the area are hit. Each blast causes
                        1D6 Wounds, modified for Toughness and armour, on each of the Warriors in
                        the area of effect.
                    </p>
                `,
            }]),
            MagicResistance(6),
        ],
    };
}

export function ChaosDwarfChampion () {
    return {
        singularName: "Chaos Dwarf Champion",
        pluralName: "Chaos Dwarf Champions",
        description,
        race: ChaosDwarf,
        wounds: 16,
        move: 3,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 480,
        armour: 2,
        damage: "2D6 / 3D6 (5+)",
        specialRules: [
            MagicResistance(6),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function ChaosDwarfLord () {
    return {
        singularName: "Chaos Dwarf Lord",
        pluralName: "Chaos Dwarf Lords",
        description,
        race: ChaosDwarf,
        wounds: 33,
        move: 3,
        weaponSkill: 7,
        ballisticSkill: 1,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 4,
        gold: 1600,
        armour: 3,
        damage: "3D6",
        specialRules: [
            MagicResistance(5),
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Chaos Dwarfs", constructor: ChaosDwarf},
    {name: "Chaos Dwarfs with Blunderbusses", constructor: ChaosDwarfBlunderbuss},
    {name: "Chaos Dwarf Champions", constructor: ChaosDwarfChampion},
    {name: "Chaos Dwarf Lords", constructor: ChaosDwarfLord},
];
