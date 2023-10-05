import Chaos from "../Chaos";
import AuraOfSlaanesh from "../../SpecialRules/AuraOfSlaanesh";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";

const description = "The Fiend of Slaanesh is a bizarre daemon, a mixture of scorpion, reptile and human. " +
    "With its long barbed tail, the Fiend can strike directly over its head to stab its opponents.";

export function FiendOfSlaanesh () {
    return {
        singularName: "Fiend of Slaanesh",
        pluralName: "Fiends of Slaanesh",
        description,
        race: Chaos,
        wounds: 8,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: undefined,
        strength: 3,
        toughness: 3,
        initiative: 3,
        attacks: 3,
        gold: 250,
        armour: 0,
        damage: "1D6",
        specialRules: [
            AuraOfSlaanesh(),
            Daemonic(-1),
            Fear(6),
        ],
    };
}
