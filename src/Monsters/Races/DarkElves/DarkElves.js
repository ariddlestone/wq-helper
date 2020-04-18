import DarkElves from "@/Monsters/Races/DarkElves";
import ArmedWith from "@/Monsters/SpecialRules/ArmedWith";
import Dodge from "@/Monsters/SpecialRules/Dodge";
import Hate from "@/Monsters/SpecialRules/Hate";

const description = "Dark Elf warriors are cruel and fierce fighters. Like all Elves, Dark Elves are lithe and " +
    "sinuous, with strong muscles and reactions every bit as quick as their agile minds.";

export function DarkElfWarrior() {
    return {
        singularName: "Dark Elf Warrior",
        pluralName: "Dark Elf Warriors",
        description,
        race: DarkElves,
        wounds: 6,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 3,
        toughness: 3,
        initiative: 6,
        attacks: 1,
        gold: 100,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Crossbows (Str 4)"},
            ]),
            Dodge(6),
            Hate("Elves"),
        ],
    };
}
