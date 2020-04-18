import Undead from "@/Monsters/Races/Undead";
import Fear from "@/Monsters/SpecialRules/Fear";
import Break from "@/Monsters/SpecialRules/Break";

const description = "";

export function Ghoul () {
    return {
        singularName: "Ghoul",
        pluralName: "Ghouls",
        description,
        race: Undead,
        wounds: 4,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 80,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Break(),
            Fear(4),
        ],
    };
}
