import Monsters from "../Monsters";
import Fear from "../../SpecialRules/Fear";
import Fly from "../../SpecialRules/Fly";
import Petrify from "../../SpecialRules/Petrify";

export function Cockatrice () {
    return {
        singularName: "Cockatrice",
        pluralName: "Cockatrices",
        description: "The Cockatrice is a fearsome creature whose squat, strong body is covered with scales and " +
            "feathers. Powerful leathery wings propel it through the sky, from where it swoops down upon its enemy " +
            "and rends them apart turning them to stone. This weird ability makes it very difficult with its sharp " +
            "claws. The Cockatrice's head has a fierce beak and is covered with ugly red wattles, which make it look " +
            "both bizarre and frightening. The Cockatrice can petrify its foes with its magical gaze, literally to " +
            "fight.",
        race: Monsters,
        wounds: 26,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 3,
        gold: 1500,
        armour: 0,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            Fear(10),
            Fly(),
            Petrify(),
        ],
    };
}

export default [
    {name: "Cockatrices", constructor: Cockatrice},
];
