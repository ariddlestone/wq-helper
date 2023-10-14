import Undead from "../Undead";
import Fear from "../../SpecialRules/Fear";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import TombRot from "../../SpecialRules/TombRot";

const description = "Mummies are protected by powerful magics to preserve them and cheat death itself. They are " +
    "deadly opponents, capable of delivering crushing blows upon their enemies.";

export function Mummy() {
    return {
        singularName: "Mummy",
        pluralName: "Mummies",
        description,
        race: Undead,
        wounds: 40,
        move: 3,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: 4,
        toughness: 5,
        initiative: 3,
        attacks: 2,
        gold: 450,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(7),
            TombRot("1D3")
        ],
    };
}

export function TombKing() {
    return {
        singularName: "Tomb King",
        pluralName: "Tomb Kings",
        description,
        race: Undead,
        wounds: 45,
        move: 3,
        weaponSkill: 4,
        ballisticSkill: null,
        strength: 5,
        toughness: 5,
        initiative: 4,
        attacks: 3,
        gold: 1000,
        armour: 2,
        damage: "3D6",
        specialRules: [
            Fear(7),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
            TombRot("1D6")
        ],
    };
}

export default [
    {name: "Mummies", constructor: Mummy},
    {name: "Tomb Kings", constructor: TombKing},
];
