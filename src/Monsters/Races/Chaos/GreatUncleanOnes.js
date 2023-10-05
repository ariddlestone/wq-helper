import Chaos from "../Chaos";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import GreaterDaemon from "../../SpecialRules/GreaterDaemon";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicResistance from "../../SpecialRules/MagicResistance";
import Plague from "../../SpecialRules/Plague";

export function GreatUncleanOne () {
    return {
        singularName: "Great Unclean One",
        pluralName: "Great Unclean Ones",
        description: `
            The Great Unclean One resembles Nurgle himself: huge, green-skinned and bloated with disease. Pus and slime
            dribble over the daemon's body, glistening on its leprous skin. A Great Unclean One can vomit a stream of
            blood, maggots and slime that drowns its victims in diseased filth.
        `,
        race: Chaos,
        wounds: 100,
        move: 4,
        weaponSkill: 7,
        ballisticSkill: "A",
        strength: 7,
        toughness: 8,
        initiative: 4,
        attacks: 7,
        gold: 5500,
        armour: 4,
        damage: "6D6",
        specialRules: [
            AmbushMagic(5),
            ChaosMagic(4),
            GreaterDaemon(13),
            IgnoreBlows(5),
            IgnorePain(10),
            LargeMonster(),
            MagicDispel(4),
            MagicResistance(4),
            Plague(),
            {
                name: "Stream of Corruption",
                description: `
                    <p>
                        Great Unclean Ones have a special type of attack where they vomit a foul smelling mass of pus
                        over their foes. This is called a Stream of Corruption. A Great Unclean One may use this attack
                        once per turn, at the start of the Monsters' Phase.
                    </p>
                    <p>
                        Any Warrior on the same board section as the Great Unclean One may be attacked with the Stream
                        of Corruption. Draw a Warrior counter to determine which warrior is targeted.
                    </p>
                    <p>
                        Draw a line from the centre of the Great Unclean One's square to the target square: every square
                        that this line passes through is affected by the Stream of Corruption. Roll 2D6 for each Warrior
                        standing in a targeted square. If the score is equal to or less than his Initiative he manages
                        to dodge the Stream and suffers no ill effects. If the score is greater than the Warrior's
                        Initiative he suffers 3D6 Wounds, with no modifiers for Toughness or armour. If a Warrior is
                        reduced to 0 Wounds by the Stream of Corruption his Toughness is permanently reduced by 1. If a
                        Warrior is reduced to 0 Toughness he is killed and is removed from play.
                    </p>
                `,
            },
        ],
    };
}
