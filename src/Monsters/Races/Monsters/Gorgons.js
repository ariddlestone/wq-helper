import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import Petrify from "../../SpecialRules/Petrify";

const description = "The Gorgon is a horrifying snake-headed she-monster with long thin claws and small sharp teeth " +
    "through which the creature hisses like a serpent. Like a Cockatrice the gaze of a Gorgon is magical and can " +
    "turn a victim to stone. Gorgons sometimes carry weapons which they clutch awkwardly in their misshapen hands, " +
    "and they dress in robes pulled from battle corpses.";

export function Gorgon() {
    return {
        singularName: "Gorgon",
        pluralName: "Gorgons",
        description,
        race: Monsters,
        wounds: 35,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 5,
        attacks: 1,
        gold: 1100,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(9),
            Petrify(),
        ],
    };
}

export default [
    {name: "Gorgons", constructor: Gorgon},
];
