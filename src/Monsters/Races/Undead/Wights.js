import Undead from "../Undead";
import Fear from "../../SpecialRules/Fear";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Although their bodies are decayed leaving only bones and tattered flesh, Wights are held " +
    "together by evil magic so strong that it has endured for centuries. They wear ancient battle gear, corroded by " +
    "time. Their shrivelled and horrific bodies are adorned with golden amulets and rings.";

export function Wight() {
    return {
        singularName: "Wight",
        pluralName: "Wights",
        description,
        race: Undead,
        wounds: 14,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 1,
        gold: 370,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Fear(7),
        ],
    };
}

export function WightLord() {
    return {
        singularName: "Wight Lord",
        pluralName: "Wight Lords",
        description,
        race: Undead,
        wounds: 35,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: null,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 2,
        gold: 650,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Fear(8),
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Wights", constructor: Wight},
    {name: "Wight Lords", constructor: WightLord},
]
