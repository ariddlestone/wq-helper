import Skaven from "../Skaven";
import Ambush from "../../SpecialRules/Ambush";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import Assassinate from "../../SpecialRules/Assassinate";
import Dodge from "../../SpecialRules/Dodge";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import WeepingBlade from "../../SpecialRules/WeepingBlade";

const description = "The black-clad assassins of Clan Eshin are rightly feared by those who know of them. They are " +
    "trained from birth as quick, murderous fighters adept in the use of poisons, garrottes, throwing stars and all " +
    "manner of exotic weapons From the lowly Gutter Runners to the deadly Deathmasters, all are feared and respected.";

export function GutterRunner() {
    return {
        singularName: "Gutter Runner",
        pluralName: "Gutter Runners",
        description,
        race: Skaven,
        wounds: 5,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 5,
        attacks: 1,
        gold: 120,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Ambush(4),
        ],
    };
}

export function SkavenAssassin() {
    return {
        singularName: "Skaven Assassin",
        pluralName: "Skaven Assassins",
        description,
        race: Skaven,
        wounds: 7,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 5,
        attacks: 2,
        gold: 300,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Ambush("A"),
            Assassinate(6),
            Dodge(5),
            WeepingBlade(),
        ],
    };
}

export function SkavenDeathmaster() {
    return {
        singularName: "Skaven Deathmaster",
        pluralName: "Skaven Deathmasters",
        description,
        race: Skaven,
        wounds: 32,
        move: 6,
        weaponSkill: 8,
        ballisticSkill: 1,
        strength: 4,
        toughness: 4,
        initiative: 10,
        attacks: 5,
        gold: 2300,
        armour: 0,
        damage: "4D6",
        specialRules: [
            AmbushMagic("A"),
            Assassinate(4),
            Dodge(4),
            MagicResistance(5),
            MagicWeapon(),
            WeepingBlade(),
        ],
    };
}

export default [
    {name: "Gutter Runners", constructor: GutterRunner},
    {name: "Skaven Assassins", constructor: SkavenAssassin},
    {name: "Skaven Deathmasters", constructor: SkavenDeathmaster},
];
