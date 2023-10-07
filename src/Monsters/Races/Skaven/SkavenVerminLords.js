import Skaven from "../Skaven";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Dodge from "../../SpecialRules/Dodge";
import Frenzy from "../../SpecialRules/Frenzy";
import GreaterDaemon from "../../SpecialRules/GreaterDaemon";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicResistance from "../../SpecialRules/MagicResistance";
import SkavenMagic from "../../SpecialRules/SkavenMagic";

const description = "A Vermin Lord is a daemonic form of the great Horned Rat himself - the Skaven God Incarnate. " +
    "Wielding a mighty Doom Glaive and capable of great sorcery, the Vermin Lord is a fearsome foe for even the most " +
    "powerful Warriors to face.";

export function SkavenVerminLord() {
    return {
        singularName: "Skaven Vermin Lord",
        pluralName: "Skaven Vermin Lords",
        description,
        race: Skaven,
        wounds: 75,
        move: 8,
        weaponSkill: 8,
        ballisticSkill: "Auto",
        strength: 8,
        toughness: 7,
        initiative: 10,
        attacks: 8,
        gold: 6000,
        armour: 6,
        damage: "6D6",
        specialRules: [
            AmbushMagic("A"),
            ArmedWith([{
                name: "Doom Glaive",
                description: `
                    <p>
                        Any Warrior hit by a Doom Glaive suffers an extra 2 Wounds, with no modifiers for Toughness or
                        armour.
                    </p>
                `,
            }]),
            Dodge(3),
            Frenzy(5),
            GreaterDaemon(14),
            IgnorePain(6),
            LargeMonster(),
            SkavenMagic(4),
            MagicDispel(4),
            MagicResistance(4),
            {
                name: "Skitterleap",
                description: `
                    <p>
                        This ability allows the Vermin Lord to disappear, move through the warp and then reappear next
                        to its chosen victim. By moving in this way the Vermin Lord is not subject to pinning and may
                        move through any obstacles as though they were not there.
                    </p>
                `,
            }
        ],
    };
}

export default [
    {name: "Skaven Vermin Lords", constructor: SkavenVerminLord},
];
