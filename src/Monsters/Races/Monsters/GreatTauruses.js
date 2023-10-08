import Monsters from "../Monsters";
import BreatheFire from "../../SpecialRules/BreatheFire";
import Fly from "../../SpecialRules/Fly";
import Terror from "../../SpecialRules/Terror";

const description = "The most fearsome of all the servants of the Chaos Dwarfs, the Great Taurus is a massive, " +
    "fire-breathing, winged bull. When it moves it strikes sparks on the floor, and its whole body is wreathed in " +
    "fire and smoke.";

export function GreatTaurus() {
    return {
        singularName: "Great Taurus",
        pluralName: "Great Tauruses",
        description,
        race: Monsters,
        wounds: 50,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: undefined,
        strength: 6,
        toughness: 6,
        initiative: 7,
        attacks: 4,
        gold: 2250,
        armour: 3,
        damage: "4D6",
        specialRules: [
            BreatheFire(),
            Fly(),
            Terror(10),
        ],
    };
}

export default [
    {name: "Great Tauruses", constructor: GreatTaurus},
];
