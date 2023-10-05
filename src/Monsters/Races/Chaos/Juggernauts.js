import Chaos from "../Chaos";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import NeverPinned from "../../SpecialRules/NeverPinned";
import MagicResistance from "../../SpecialRules/MagicResistance";

const description = "Juggernauts are huge daemon beasts whose flesh is brass and whose blood is pure fire. " +
    "They are brutal and fierce creatures.";

export function Juggernaut () {
    return {
        singularName: "Juggernaut",
        pluralName: "Juggernauts",
        description,
        race: Chaos,
        wounds: 35,
        move: 7,
        weaponSkill: 3,
        ballisticSkill: undefined,
        strength: 5,
        toughness: 5,
        initiative: 2,
        attacks: 2,
        gold: 700,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Daemonic(-1),
            Fear(7),
            MagicResistance(5),
            NeverPinned(),
        ],
    };
}
