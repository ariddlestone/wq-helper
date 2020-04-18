import Undead from "@/Monsters/Races/Undead";
import ArmedWith from "@/Monsters/SpecialRules/ArmedWith";
import Fear from "@/Monsters/SpecialRules/Fear";
import Regenerate from "@/Monsters/SpecialRules/Regenerate";
import image from "@/assets/monsters/undead/tomb-guardians.webp";

const description = "Skeleton warriors claw themselves out of the earth to attack the living. They wield rusty swords " +
    "and axes, and mouldering remnants of armour still cling to their frame. Some skeletal champions are the remains " +
    "of long dead warriors, guarding their ancient tombs against the living.";

export function Skeleton() {
    return {
        singularName: "Skeleton",
        pluralName: "Skeletons",
        description,
        image,
        race: Undead,
        wounds: 5,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 80,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 3)"},
                {name: "Swords"},
            ]),
            Fear(5),
            Regenerate(1),
        ],
    };
}

export function TombGuardian() {
    return {
        singularName: "Tomb Guardian",
        pluralName: "Tomb Guardians",
        description,
        image,
        race: Undead,
        wounds: 15,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 6,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 110,
        armour: 1,
        damage: "2D6",
        specialRules: [
            Fear(5),
            Regenerate(1),
        ],
    };
}
