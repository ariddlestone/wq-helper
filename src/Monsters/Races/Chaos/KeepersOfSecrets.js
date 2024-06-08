import Chaos from "../Chaos";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import AuraOfSlaanesh from "../../SpecialRules/AuraOfSlaanesh";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import GreaterDaemon from "../../SpecialRules/GreaterDaemon";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicResistance from "../../SpecialRules/MagicResistance";
import NeverPinned from "../../SpecialRules/NeverPinned";

const description = "The Keeper of Secrets is a bull-headed monster with two pairs of arms, one pair ending " +
    "in awesome crab claws. Its body is decked with gorgeous jewels and delicate silks, and its razor sharp claws " +
    "are decorated with brightly coloured lacquers.";

export function KeeperOfSecrets () {
    return {
        singularName: "Keeper of Secrets",
        pluralName: "Keepers of Secrets",
        description,
        race: Chaos,
        wounds: 84,
        move: 6,
        weaponSkill: 9,
        ballisticSkill: "Auto",
        strength: 7,
        toughness: 7,
        initiative: 7,
        attacks: 6,
        gold: 5500,
        armour: 4,
        damage: "6D6",
        specialRules: [
            AmbushMagic(2),
            AuraOfSlaanesh(),
            GreaterDaemon(13),
            IgnoreBlows(5),
            IgnorePain(7),
            LargeMonster(),
            ChaosMagic(4, "Chaos Daemon", 1),
            MagicDispel(4),
            MagicResistance(4),
            NeverPinned(),
        ],
    };
}

export default [
    {name: "Keepers of Secrets", constructor: KeeperOfSecrets},
];
