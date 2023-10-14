import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Dragon Ogres are ancient, brutish reptiles that live in the deepest mountain caves, only " +
    "emerging during mighty storms to do battle on the mountain tops.";

export function DragonOgre() {
    return {
        singularName: "Dragon Ogre",
        pluralName: "Dragon Ogres",
        description,
        race: Monsters,
        wounds: 40,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: 5,
        strength: 5,
        toughness: 5,
        initiative: 2,
        attacks: 3,
        gold: 870,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Fear(8),
        ],
    };
}

export function DragonOgreChampion() {
    return {
        singularName: "Dragon Ogre Champion",
        pluralName: "Dragon Ogre Champions",
        description,
        race: Monsters,
        wounds: 44,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: 4,
        strength: 6,
        toughness: 5,
        initiative: 3,
        attacks: 4,
        gold: 1550,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Fear(8),
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export function DragonOgreHero() {
    return {
        singularName: "Dragon Ogre Hero",
        pluralName: "Dragon Ogre Heroes",
        description,
        race: Monsters,
        wounds: 53,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: 3,
        strength: 6,
        toughness: 6,
        initiative: 4,
        attacks: 5,
        gold: 3300,
        armour: 2,
        damage: "3D6",
        specialRules: [
            Fear(9),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Dragon Ogres", constructor: DragonOgre},
    {name: "Dragon Ogre Champions", constructor: DragonOgreChampion},
    {name: "Dragon Ogre Heroes", constructor: DragonOgreHero},
];
