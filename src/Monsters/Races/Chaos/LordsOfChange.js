import Chaos from "../Chaos";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import Fly from "../../SpecialRules/Fly";
import GreaterDaemon from "../../SpecialRules/GreaterDaemon";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicItem from "../../SpecialRules/MagicItem";

const description = "The Lord of Change is huge and awesome in appearance, with vast multicoloured wings " +
    "and plumed body. Its head is that of a monstrous predatory bird, and its scaled legs bear talons that are " +
    "sharp and deadly.";

export function LordOfChange () {
    return {
        singularName: "Lord of Change",
        pluralName: "Lords of Change",
        description,
        race: Chaos,
        wounds: 75,
        move: 8,
        weaponSkill: 9,
        ballisticSkill: "Auto",
        strength: 7,
        toughness: 7,
        initiative: 10,
        attacks: 6,
        gold: 5000,
        armour: 4,
        damage: "6D6",
        specialRules: [
            AmbushMagic("A"),
            GreaterDaemon(13),
            ChaosMagic(5),
            Fly(),
            IgnoreBlows(5),
            IgnorePain(7),
            LargeMonster(),
            {
                name: "Magic Source",
                description: `
                    <p>
                        A Lord of Change is an extremely powerful Sorcerer and unconsciously acts as a source of power
                        for other spellcasters. While there is a Lord of Change on the board, the Wizard doubles the
                        result of his Power roll each turn on anything other than a roll of 1. If he rolls a 1, the
                        Wizard gets 1 point of Power, as normal.
                    </p>
                `,
            },
            MagicItem(3),
            {
                name: "Power of Tzeentch",
                description: `
                    <p>
                        A Lord of Change has the ability to Dispel Magic in the surrounding area, just like some other
                        Monsters, but to a much greater degree. The ability works exactly like the normal Magic Dispel
                        in that the Lord of Change can actively interfere with and nullify any spell cast on the board,
                        not just those cast directly against it.
                    </p>
                    <p>
                        When dispelling magic cast against the Lord of Change's minions the spell is dispelled on a 1D6
                        roll of 4 or 5, and deflected back against the caster on a roll of 6. Furthermore, when
                        dispelling beneficial magic cast by the Warriors against themselves the spell is dispelled on a
                        1D6 roll of a 4 or 5, and affects the Lord of Change on a roll of 6.
                    </p>
                    <p>
                        A Lord of Change also has a Magic Resistance, just like some other Monsters, but to a much
                        greater degree.
                    </p>
                    <p>
                        The Lord of Change has a Magic Resistance Rating of 4+. In addition, if the Resistance roll
                        scores a 5 or 6 the spell is deflected rather than simply resisted and affects the Warrior who
                        cast it instead. Note that Magic Resistance only protects the Lord of Change from spells, not
                        from blows by magical weapons and the like.
                    </p>
                `,
            },
        ],
    };
}

export default [
    {name: "Lords of Change", constructor: LordOfChange},
];
