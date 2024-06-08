import Chaos from "../Chaos";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Beastman Shamans are revered by the rest of their kind because of their ability to " +
    "summon the power of Chaos to cast crude but powerful magic spells.";

const beastmanMagic = (spellsPerTurn, name, modifier = 0) => ChaosMagic(
    spellsPerTurn,
    name,
    modifier - 1
);

export function BeastmanShaman() {
    return {
        singularName: "Beastman Shaman",
        pluralName: "Beastman Shaman",
        description,
        race: Chaos,
        wounds: 26,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 5,
        strength: 3,
        toughness: 5,
        initiative: 4,
        attacks: 1,
        gold: 680,
        armour: 0,
        damage: "1D6",
        specialRules: [
            beastmanMagic(1, "Beastman Shaman"),
            MagicWeapon(),
        ],
    };
}

export function BeastmanShamanChampion() {
    return {
        singularName: "Beastman Shaman Champion",
        pluralName: "Beastman Shaman Champions",
        description,
        race: Chaos,
        wounds: 34,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 4,
        attacks: 1,
        gold: 1340,
        armour: 0,
        damage: "2D6",
        specialRules: [
            beastmanMagic(2, "Beastman Shaman Champion"),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Beastman Shaman", constructor: BeastmanShaman},
    {name: "Beastman Shaman Champions", constructor: BeastmanShamanChampion},
];
