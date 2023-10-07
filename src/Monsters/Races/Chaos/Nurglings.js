import Chaos from "../Chaos";
import Ambush from "../../SpecialRules/Ambush";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import GangUp from "../../SpecialRules/GangUp";
import Plague from "../../SpecialRules/Plague";

export function Nurgling () {
    return {
        singularName: "Nurgling",
        pluralName: "Nurglings",
        description: `
            Nurglings feed upon the pus and slime that dribble from the sores of a Great Unclean One. They are minute
            images of Nurgle himself with green skin covered with boils and sores.<br />
            Although Nurglings are tiny there are many of them and they move together in a huge, writhing mass. They
            have sharp teeth and can overwhelm an enemy by sheer numbers.
        `,
        race: Chaos,
        wounds: 2,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 2,
        gold: 50,
        armour: 0,
        damage: "Special",
        specialRules: [
            Ambush("A"),
            Daemonic(-1),
            Fear(4),
            GangUp(),
            Plague(),
        ],
    };
}

export default [
    {name: "Nurglings", constructor: Nurgling},
];
