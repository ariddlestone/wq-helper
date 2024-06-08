import Undead from "../Undead";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import Fear from "../../SpecialRules/Fear";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import NecromanticMagic from "../../SpecialRules/NecromanticMagic";
import Regenerate from "../../SpecialRules/Regenerate";
import Terror from "../../SpecialRules/Terror";

const description = "Some Necromancers are powerful enough to defy death and return as evil-hearted Liches. Although " +
    "their flesh is shrivelled and long dead, they are still immensely powerful Sorcerers.";

export function Liche() {
    return {
        singularName: "Liche",
        pluralName: "Liches",
        description,
        race: Undead,
        wounds: 40,
        move: 4,
        weaponSkill: 7,
        ballisticSkill: "Auto",
        strength: 5,
        toughness: 4,
        initiative: 6,
        attacks: 5,
        gold: 3500,
        armour: 0,
        damage: "4D6",
        specialRules: [
            Fear(10),
            NecromanticMagic(3),
            MagicItem(2),
            MagicWeapon(),
            Regenerate(2),
        ],
    };
}

export function LicheKing() {
    return {
        singularName: "Liche King",
        pluralName: "Liche Kings",
        description,
        race: Undead,
        wounds: 63,
        move: 6,
        weaponSkill: 7,
        ballisticSkill: "Auto",
        strength: 7,
        toughness: 6,
        initiative: 4,
        attacks: 5,
        gold: 7500,
        armour: 6,
        damage: "6D6",
        specialRules: [
            ChaosMagic(2, "Liche King"),
            LargeMonster(),
            NecromanticMagic(3),
            MagicArmour(),
            MagicDispel(4),
            MagicResistance(4),
            MagicItem(3),
            MagicWeapon(),
            Terror(14),
            Regenerate(2),
        ],
    };
}

export default [
    {name: "Liches", constructor: Liche},
    {name: "Liche Kings", constructor: LicheKing},
];
