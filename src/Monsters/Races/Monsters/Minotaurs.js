import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicItem from "../../SpecialRules/MagicItem";

const description = "Minotaurs are large creatures, and have the torso of a hugely-muscled human, but the horned " +
    "head of a wild bull. Their immense faces are broad, squat and evil, with beady eyes, jutting fangs and " +
    "snorting, flared nostrils.";

export function Minotaur () {
    return {
        singularName: "Minotaur",
        pluralName: "Minotaurs",
        description,
        race: Monsters,
        wounds: 15,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 440,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(5),
        ],
    };
}

export function MinotaurChampion () {
    return {
        singularName: "Minotaur Champion",
        pluralName: "Minotaur Champions",
        description,
        race: Monsters,
        wounds: 34,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 5,
        toughness: 4,
        initiative: 4,
        attacks: 3,
        gold: 1100,
        armour: 1,
        damage: "3D6",
        specialRules: [
            Fear(6),
            MagicWeapon(),
        ],
    };
}

export function MinotaurHero () {
    return {
        singularName: "Minotaur Hero",
        pluralName: "Minotaur Heroes",
        description,
        race: Monsters,
        wounds: 48,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 5,
        toughness: 5,
        initiative: 5,
        attacks: 4,
        gold: 2400,
        armour: 2,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            Fear(6),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Minotaurs", constructor: Minotaur},
    {name: "Minotaur Champions", constructor: MinotaurChampion},
    {name: "Minotaur Heroes", constructor: MinotaurHero},
];
