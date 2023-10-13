import Monsters from "../Monsters";
import Ambush from "../../SpecialRules/Ambush";
import Fly from "../../SpecialRules/Fly";

export function GiantBat () {
    return {
        singularName: "Giant Bat",
        pluralName: "Giant Bats",
        description: "Out of the darkest caves fly the twittering, screeching clouds of Giant Bats. These fanged " +
            "monstrosities, held aloft on great leathery wings, hide in the shadows, then swoop silently down upon " +
            "their prey and rip them to shreds with teeth and talons.",
        race: Monsters,
        wounds: 1,
        move: 8,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: 2,
        toughness: 2,
        initiative: null,
        attacks: 1,
        gold: 15,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Ambush("A"),
            Fly(),
        ],
    };
}

export default [
    {name: "Giant Bats", constructor: GiantBat},
];
