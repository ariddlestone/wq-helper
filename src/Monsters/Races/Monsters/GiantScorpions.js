import Monsters from "../Monsters";
import Sting from "../../SpecialRules/Sting";

export function GiantScorpion() {
    return {
        singularName: "Giant Scorpion",
        pluralName: "Giant Scorpions",
        description: "The dank underground passageways and caverns of the Worlds Edge Mountains conceal many huge " +
            "and evil monsters. They breed in the darkness and grow huge and fat on a diet of unnameable crawling " +
            "things that live deep below the earth. The Giant Scorpion has a shiny armoured shell and chitinous " +
            "claws with saw edges and knife-like bristles. Its most deadly weapon is its venomous sting.",
        race: Monsters,
        wounds: 20,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: 5,
        toughness: 6,
        initiative: 1,
        attacks: 2,
        gold: 450,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Sting("2D6"),
        ],
    };
}

export default [
    {name: "Giant Scorpions", constructor: GiantScorpion},
];
