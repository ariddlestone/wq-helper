import Chaos from "../Chaos";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import MagicResistance from "../../SpecialRules/MagicResistance";

const description = `
    Flamers are amongst the strangest of all daemons. Their lower portions resemble inverted mushrooms with two flexible
    arms each spitting magical flames. A Flamer has no head as such, but its eyes and gaping maw lie between its swaying
    arms.
`;

export function FlamerOfTzeentch () {
    return {
        singularName: "Flamer of Tzeentch",
        pluralName: "Flamers of Tzeentch",
        description: description,
        race: Chaos,
        wounds: 17,
        move: 9,
        weaponSkill: 3,
        ballisticSkill: 2,
        strength: 5,
        toughness: 4,
        initiative: 4,
        attacks: "Special",
        gold: 300,
        armour: 0,
        damage: "Special",
        specialRules: [
            AmbushMagic(5),
            Daemonic(-1),
            Fear(7),
            MagicResistance(6),
            {
                name: "Flamer of Tzeentch Attack",
                description: `
                    <p>
                        Flamers never make a normal hand-to-hand attack. Instead, they set light to any board section
                        that the Warriors are standing on, immolating the area with the pink fire of Tzeentch. Roll 1D6
                        per Flamer for each model on that board section to determine how many Wounds it suffers (normal
                        modifiers for Toughness and armour apply). If there are 5 Flamers attacking, for instance, roll
                        5D6 for each model on that board section.
                    </p>
                    <p>
                        Each Flamer can make this attack once per turn (unless of course it Ambushes successfully) and
                        they themselves are immune to the fire's effects.
                    </p>
                `,
            },
        ],
    };
}
