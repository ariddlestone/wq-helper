import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";

export function RatOgre () {
    return {
        singularName: "Rat Ogre",
        pluralName: "Rat Ogres",
        description: "Rat Ogres are the most feared creations of the Skaven Clan Moulder. Devoted entirely to " +
            "bloodshed, a Rat Ogre is a hugely muscled killing machine with the speed and ferocity of a Skaven " +
            "Warrior.",
        race: Monsters,
        wounds: 20,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: undefined,
        strength: 5,
        toughness: 5,
        initiative: 5,
        attacks: 2,
        gold: 500,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(5),
        ],
    };
}

export default [
    {name: "Rat Ogres", constructor: RatOgre},
];
