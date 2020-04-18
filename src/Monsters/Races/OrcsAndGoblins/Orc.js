import OrcsAndGoblins from "@/Monsters/Races/OrcsAndGoblins";
import ArmedWith from "@/Monsters/SpecialRules/ArmedWith";
import imageWithSwords from "@/assets/monsters/orcs-and-goblins/orcs.webp";

export function Orc () {

    return {
        singularName: "Orc",
        pluralName: "Orcs",
        description: "Orcs vary in height and physical appearance more than humans - some are no taller than a man " +
            "but most are substantially larger. They are also much broader than humans, with big deep chests, " +
            "massive shoulders and powerfully muscled arms. Orcs have large heads with huge jaws but tiny foreheads " +
            "behind which lurk a thick skull and little brain.",
        image: imageWithSwords,
        race: OrcsAndGoblins,
        wounds: 3,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 55,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 3)"},
                {name: "Swords"},
            ])
        ],
    };
}
