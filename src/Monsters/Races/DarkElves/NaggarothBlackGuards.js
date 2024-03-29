import DarkElves from "../DarkElves";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Hate from "../../SpecialRules/Hate";

export function NaggarothBlackGuard() {
    return {
        singularName: "Dark Elf Naggaroth Black Guard",
        pluralName: "Dark Elf Naggaroth Black Guards",
        description: "The Black Guards are renowned amongst the Dark Elves for their murderous attacks using their " +
            "great halberds.",
        race: DarkElves,
        wounds: 6,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 7,
        attacks: 1,
        gold: 150,
        armour: 2,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Halberds (Fight in Ranks)"},
            ]),
            Hate("Elves"),
        ],
    };
}

export default [
    {name: "Dark Elf Naggaroth Black Guards", constructor: NaggarothBlackGuard},
];
