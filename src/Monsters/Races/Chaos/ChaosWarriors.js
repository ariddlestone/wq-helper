import Chaos from "../Chaos";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Chaos Warriors are powerful fighters. Over time they acquire mutations such as huge " +
    "fangs, horns, bestial claws, strange-coloured skin, extra eyes, and countless other deformities, some of which " +
    "make them extraordinarily tough or strong. Many Chaos Warriors wear all-enclosing suits of thick armour, " +
    "concealing their true nature. Over time, some Chaos Warriors attract the attentions of their capricious gods, " +
    "becoming Champions or Lords of Chaos and leading the daemonic hordes.";

export function ChaosWarrior () {
    return {
        singularName: "Chaos Warrior",
        pluralName: "Chaos Warriors",
        description,
        race: Chaos,
        wounds: 12,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 4,
        initiative: 6,
        attacks: 2,
        gold: 240,
        armour: 2,
        damage: "1D6",
        specialRules: [],
    };
}

export function ChaosChampion () {
    return {
        singularName: "Chaos Champion",
        pluralName: "Chaos Champions",
        description,
        race: Chaos,
        wounds: 15,
        move: 4,
        weaponSkill: 7,
        ballisticSkill: "Auto",
        strength: 5,
        toughness: 4,
        initiative: 7,
        attacks: 3,
        gold: 910,
        armour: 2,
        damage: "1D6",
        specialRules: [
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export function ChaosHero () {
    return {
        singularName: "Chaos Hero",
        pluralName: "Chaos Heroes",
        description,
        race: Chaos,
        wounds: 30,
        move: 4,
        weaponSkill: 8,
        ballisticSkill: "Auto",
        strength: 5,
        toughness: 5,
        initiative: 8,
        attacks: 4,
        gold: 1930,
        armour: 6,
        damage: "3D6",
        specialRules: [
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
        ],
    };
}

export function ChaosLord () {
    return {
        singularName: "Chaos Lord",
        pluralName: "Chaos Lords",
        description,
        race: Chaos,
        wounds: 35,
        move: 4,
        weaponSkill: 9,
        ballisticSkill: "Auto",
        strength: 5,
        toughness: 5,
        initiative: 9,
        attacks: 5,
        gold: 3050,
        armour: 6,
        damage: "4D6",
        specialRules: [
            MagicArmour(),
            MagicItem(3),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Chaos Warriors", constructor: ChaosWarrior},
    {name: "Chaos Champions", constructor: ChaosChampion},
    {name: "Chaos Heroes", constructor: ChaosHero},
    {name: "Chaos Lords", constructor: ChaosLord},
];
