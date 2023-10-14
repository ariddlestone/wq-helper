import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";

export function Ogre () {
    return {
        singularName: "Ogre",
        pluralName: "Ogres",
        description: "Ogres stand twice as tall as a man, with massive muscles, jutting jaws and thick bony " +
            "foreheads. Once an Ogre decides to act it is all but unstoppable!",
        race: Monsters,
        wounds: 13,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: 5,
        strength: 4,
        toughness: 5,
        initiative: 3,
        attacks: 2,
        gold: 400,
        armour: 0,
        damage: "1D6 / 2D6 (5+)",
        specialRules: [
            Fear(5),
        ],
    };
}

export default [
    {name: "Ogres", constructor: Ogre},
];
