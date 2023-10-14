import Monsters from "../Monsters";
import Ambush from "../../SpecialRules/Ambush";
import GangUp from "../../SpecialRules/GangUp";

export function Warhound() {
    return {
        singularName: "Warhound",
        pluralName: "Warhounds",
        description: "Chaos Warriors and Dark Elves sometimes drive packs of Warhounds rather than Chaos Hounds " +
            "against the Warriors.",
        race: Monsters,
        wounds: 6,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: null,
        strength: 3,
        toughness: 3,
        initiative: 6,
        attacks: 1,
        gold: 130,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Ambush(5),
            GangUp(),
        ],
    };
}

export default [
    {name: "Warhounds", constructor: Warhound},
];
