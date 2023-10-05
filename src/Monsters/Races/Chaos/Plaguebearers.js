import Chaos from "../Chaos";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import Plague from "../../SpecialRules/Plague";

export function Plaguebearer () {
    return {
        singularName: "Plaguebearer",
        pluralName: "Plaguebearers",
        description: `
            Plaguebearers are created from all the poor mortal creatures who have died of the dreaded disease Nurgle's
            Rot, a terrible and incurable contagion and one of Nurgle's finest concoctions.<br />
            Plaguebearers have green, putrid skin, split and rancid like that of Nurgle himself. They have a single eye
            and one horn which sticks straight out of their foreheads.
        `,
        race: Chaos,
        wounds: 9,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 6,
        attacks: 2,
        gold: 200,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Daemonic(1),
            Fear(5),
            Plague(),
        ],
    };
}
