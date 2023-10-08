import Monsters from "../Monsters";
import Fly from "../../SpecialRules/Fly";
import Terror from "../../SpecialRules/Terror";

const description = "A Hippogriff is a large and extremely ferocious beast. Its head is feathered like a great bird " +
    "of prey, and it can slash at enemies with its deadly beak.<br />" +
    "The forequarters of a Hippogriff are furry, with legs and claws like a great cat such as a lion. Its rear " +
    "quarters more resemble those of a horse, with hooves and a sweeping tail. The colour of Hippogriffs' fur and " +
    "feathers can vary tremendously";

export function Hippogriff() {
    return {
        singularName: "Hippogriff",
        pluralName: "Hippogriffs",
        description,
        race: Monsters,
        wounds: 55,
        move: 8,
        weaponSkill: 5,
        ballisticSkill: undefined,
        strength: 6,
        toughness: 5,
        initiative: 6,
        attacks: 3,
        gold: 1450,
        armour: 0,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            Fly(),
            Terror(10),
        ],
    };
}

export default [
    {name: "Hippogriffs", constructor: Hippogriff},
];
