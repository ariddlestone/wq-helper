import OrcsAndGoblins from "../OrcsAndGoblins";
import ArmedWith from "../../SpecialRules/ArmedWith";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicArmour from "../../SpecialRules/MagicArmour";

const description = "Black Orcs are the biggest and strongest of all Orcs. They are the most powerful, disciplined " +
    "warriors, and regard other Orcs and Goblins as puny weaklings.";

export function BlackOrc() {
    return {
        singularName: "Black Orc",
        pluralName: "Black Orcs",
        description,
        race: OrcsAndGoblins,
        wounds: 7,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 90,
        armour: 1,
        damage: "1D6",
        specialRules: [],
    };
}

export function BlackOrcChampion() {
    return {
        singularName: "Black Orc Champion",
        pluralName: "Black Orc Champions",
        description,
        race: OrcsAndGoblins,
        wounds: 10,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 2,
        attacks: 2,
        gold: 140,
        armour: 2,
        damage: "1D6/2D6(5+)",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 4)"},
                {name: "Swords"},
            ]),
        ],
    };
}

export function BlackOrcBoss() {
    return {
        singularName: "Black Orc Boss",
        pluralName: "Black Orc Bosses",
        description,
        race: OrcsAndGoblins,
        wounds: 20,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 5,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 420,
        armour: 2,
        damage: "2D6",
        specialRules: [
            MagicWeapon(),
        ],
    };
}

export function BlackOrcBigBoss() {
    return {
        singularName: "Black Orc Big Boss",
        pluralName: "Black Orc Big Bosses",
        description,
        race: OrcsAndGoblins,
        wounds: 23,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 5,
        toughness: 5,
        initiative: 4,
        attacks: 3,
        gold: 910,
        armour: 3,
        damage: "2D6",
        specialRules: [
            MagicArmour(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Black Orcs", constructor: BlackOrc},
    {name: "Black Orc Champions", constructor: BlackOrcChampion},
    {name: "Black Orc Bosses", constructor: BlackOrcBoss},
    {name: "Black Orc Big Bosses", constructor: BlackOrcBigBoss},
];
