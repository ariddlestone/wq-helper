import Monsters from "../Monsters";
import BreatheFire from "../../SpecialRules/BreatheFire";
import {AmbushModifier} from "../../SpecialRules/Ambush";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicResistance from "../../SpecialRules/MagicResistance";
import NeverPinned from "../../SpecialRules/NeverPinned";
import Terror from "../../SpecialRules/Terror";

const description = "The Hydra is a many headed monster with a scaly, reptilian body. Its serpentine heads belch out " +
    "smoky flame, but they can also attack by biting enemies with their sharp teeth, and crushing them in the coils " +
    "of their necks. Their bodies are low and squat, heavily muscled and covered with thick scales which are as hard " +
    "as iron";

export function Hydra() {
    return {
        singularName: "Hydra",
        pluralName: "Hydras",
        description,
        race: Monsters,
        wounds: 70,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: undefined,
        strength: 5,
        toughness: 6,
        initiative: 3,
        attacks: 5,
        gold: 2250,
        armour: 3,
        damage: "4D6",
        specialRules: [
            AmbushModifier(BreatheFire(4), "A"),
            IgnoreBlows(5),
            IgnorePain(7),
            LargeMonster(),
            MagicResistance(5),
            NeverPinned(),
            Terror(11),
        ],
    };
}

export default [
    {name: "Hydras", constructor: Hydra},
];
