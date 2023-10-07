import Chaos from "@/Monsters/Races/Chaos";
import Ambush from "@/Monsters/SpecialRules/Ambush";
import GangUp from "@/Monsters/SpecialRules/GangUp";

const description = "Some Warriors of Chaos control packs of snarling, vicious war dogs. These creatures have " +
    "been cruelly mutated by their exposure to Chaos, and bear barbed tails, skeletal faces and extra heads and limbs.";

export function ChaosHound () {
    return {
        singularName: "Chaos Hound",
        pluralName: "Chaos Hounds",
        description,
        race: Chaos,
        wounds: 8,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: undefined,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 2,
        gold: 160,
        armour: 2,
        damage: "1D6",
        specialRules: [
            Ambush(5),
            GangUp(),
        ],
    };
}

export default [
    {name: "Chaos Hounds", constructor: ChaosHound},
];
