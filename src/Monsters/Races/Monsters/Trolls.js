import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import MagicDrain from "../../SpecialRules/MagicDrain";
import Regenerate from "../../SpecialRules/Regenerate";
import Vomit from "../../SpecialRules/Vomit";

const description = "Trolls are large and foul creatures, with gangling limbs and cold, damp hides. Renowned for " +
    "their strength and unthinking ferocity, Trolls can rip a man apart with their bare hands.<br />" +
    "Trolls are able to regenerate damaged flesh, and so are all but impossible to kill. Not only that, they have " +
    "the ability to vomit the corrosive contents of their stomach over their victim, melting armour, flesh and bone " +
    "with ease.";

export function Troll() {
    return {
        singularName: "Troll",
        pluralName: "Trolls",
        description,
        race: Monsters,
        wounds: 30,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: 6,
        strength: 5,
        toughness: 4,
        initiative: 1,
        attacks: 3,
        gold: 650,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(6),
            Regenerate(2),
            Vomit(),
        ],
    };
}

export function StoneTroll() {
    return {
        singularName: "Stone Troll",
        pluralName: "Stone Trolls",
        description: description + "<br />" +
            "One particularly vicious form of Troll is the Stone Troll, whose hide is as tough as rock and which " +
            "have the strange ability of sucking the very power of magic out of the surrounding area.",
        race: Monsters,
        wounds: 25,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: 6,
        strength: 5,
        toughness: 4,
        initiative: 1,
        attacks: 3,
        gold: 650,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(6),
            MagicDrain(6),
            Regenerate(2),
        ],
    };
}

export default [
    {name: "Trolls", constructor: Troll},
    {name: "Stone Trolls", constructor: StoneTroll},
];
