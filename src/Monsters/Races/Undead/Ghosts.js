import Undead from "../Undead";
import Chill from "../../SpecialRules/Chill";
import Ethereal from "../../SpecialRules/Ethereal";
import Fear from "../../SpecialRules/Fear";

const description = "Ghosts are ethereal creatures or spirits, the shades of dead men returned to haunt the land of " +
    "the living.";

export function Ghost() {
    return {
        singularName: "Ghost",
        pluralName: "Ghosts",
        description,
        race: Undead,
        wounds: 16,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: undefined,
        toughness: 3,
        initiative: 3,
        attacks: 1,
        gold: undefined,
        armour: 0,
        damage: "Special",
        specialRules: [
            Chill(1),
            Ethereal(-1),
            Fear(6),
        ],
    };
}

export default [
    {name: "Ghosts", constructor: Ghost},
];
