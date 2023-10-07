import Chaos from "../Chaos";
import Daemonic from "../../SpecialRules/Daemonic";
import Paralysis from "../../SpecialRules/Paralysis";
import Plague from "../../SpecialRules/Plague";

export function BeastOfNurgle () {
    return {
        singularName: "Beast of Nurgle",
        pluralName: "Beasts of Nurgle",
        description: `
            The Beasts of Nurgle are gigantic and slug-like. Their heads are topped by a fringe of fat tentacles that
            ooze a paralysing slime. These loathsome creatures also leave a slimy, corrosive trail behind them as they
            move, like that of a snail or slug, and carry all manner of disfiguring and fatal diseases.
        `,
        race: Chaos,
        wounds: 25,
        move: 3,
        weaponSkill: 3,
        ballisticSkill: 0,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: "1D6",
        gold: 750,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Daemonic(-1),
            Paralysis(),
            Plague(),
            {
                name: "Slime Trail",
                description: `
                    <p>
                        Beasts of Nurgle secrete a Slime Trail around them as they move. Any Warrior who finishes his
                        turn in a square adjacent to a Beast of Nurgle suffers 1 Wound, with no modifiers for Toughness
                        or armour, as the poisonous gunk attacks his flesh.
                    </p>
                `,
            },
        ],
    };
}

export default [
    {name: "Beasts of Nurgle", constructor: BeastOfNurgle},
];
