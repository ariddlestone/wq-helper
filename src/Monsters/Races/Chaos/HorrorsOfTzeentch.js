import Chaos from "../Chaos";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";
import MagicResistance from "../../SpecialRules/MagicResistance";

const description = `
    Horrors of Tzeentch are wild creatures made from raw magic. They are full of boundless energy and spin like tops as
    they whirl around the dungeon. When a Pink Horror is killed it immediately splits into two Blue Horrors and
    continues to fight.
`;

export function PinkHorrorOfTzeentch () {
    return {
        singularName: "Pink Horror of Tzeentch",
        pluralName: "Pink Horrors of Tzeentch",
        description: description,
        race: Chaos,
        wounds: 8,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 6,
        attacks: 2,
        gold: 200,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Daemonic(1),
            Fear(6),
            MagicResistance(6),
            {
                name: "Blue Horrors",
                description: `
                    <p>
                        Every time a Pink Horror is killed, two Blue Horrors spring up in its place. The Blue Horrors
                        are placed next to the Warrior that killed the Pink Horror that spawned them. If this is not
                        possible they can be placed in the nearest empty squares. As soon as each pair of Blue Horrors
                        appear, make a Fear roll for each Warrior to see if he is afraid of them.
                    </p>
                `,
            },
        ],
    };
}

export function BlueHorrorOfTzeentch () {
    return {
        singularName: "Blue Horror of Tzeentch",
        pluralName: "Blue Horrors of Tzeentch",
        description: description,
        race: Chaos,
        wounds: 4,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 7,
        attacks: 1,
        gold: 100,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Daemonic(1),
            Fear(4),
            MagicResistance(6),
        ],
    };
}
