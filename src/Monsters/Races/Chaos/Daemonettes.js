import Chaos from "../Chaos";
import Ambush from "../../SpecialRules/Ambush";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import MagicResistance from "../../SpecialRules/MagicResistance";

const description = "The Daemonettes are the most numerous of all Slaanesh's daemons. They have a perverse " +
    "beauty, unnatural and disturbing, but at the same time are undeniably potent.";

export function Daemonette () {
    return {
        singularName: "Daemonette",
        pluralName: "Daemonettes",
        description,
        race: Chaos,
        wounds: 15,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 6,
        attacks: 3,
        gold: 300,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Ambush(5),
            Daemonic(-1),
            Fear(6),
            MagicResistance(6),
        ],
    };
}
