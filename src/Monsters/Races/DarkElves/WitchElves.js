import DarkElves from "../DarkElves";
import Frenzy from "../../SpecialRules/Frenzy";
import Hate from "../../SpecialRules/Hate";

const description = "Witch Elves are the most cruel, evil and savage of all Dark Elves. They do not carry shields," +
    "caring nothing for their own protection, and are armed with sharp swords and long knives.";

export function WitchElf() {
    return {
        singularName: "Witch Elf",
        pluralName: "Witch Elves",
        description,
        race: DarkElves,
        wounds: 11,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 3,
        toughness: 3,
        initiative: 6,
        attacks: 1,
        gold: 140,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Frenzy(4),
            Hate("Elves"),
        ],
    };
}

export function WitchElfChampion() {
    return {
        singularName: "Witch Elf Champion",
        pluralName: "Witch Elf Champions",
        description,
        race: DarkElves,
        wounds: 13,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 7,
        attacks: 2,
        gold: 600,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Frenzy(3),
            Hate("Elves"),
        ],
    };
}

export default [
    {name: "Witch Elves", constructor: WitchElf},
    {name: "Witch Elf Champions", constructor: WitchElfChampion},
];
