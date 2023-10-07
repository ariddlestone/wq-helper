import Skaven from "../Skaven";
import Dodge from "../../SpecialRules/Dodge";
import FightInRanks from "../../SpecialRules/FightInRanks";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "The biggest, most powerful and vicious Skaven are organised into elite warrior groups known as " +
    "Stormvermin. These warriors are much feared by the Skaven Clanrats, and their warlords often lead bands of " +
    "lesser Skaven into combat.";

export function Stormvermin () {
    return {
        singularName: "Skaven Stormvermin",
        pluralName: "Skaven Stormvermin",
        description,
        race: Skaven,
        wounds: 5,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 3,
        initiative: 5,
        attacks: 1,
        gold: 95,
        armour: 1,
        damage: "1D6",
        specialRules: [],
    };
}

export function StormverminChampion () {
    return {
        singularName: "Stormvermin Champion",
        pluralName: "Stormvermin Champions",
        description,
        race: Skaven,
        wounds: 10,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 3,
        initiative: 5,
        attacks: 1,
        gold: 110,
        armour: 1,
        damage: "1D6",
        specialRules: [
            FightInRanks(),
        ],
    };
}

export function SkavenWarlord () {
    return {
        singularName: "Skaven Warlord",
        pluralName: "Skaven Warlords",
        description,
        race: Skaven,
        wounds: 30,
        move: 5,
        weaponSkill: 6,
        ballisticSkill: 1,
        strength: 4,
        toughness: 4,
        initiative: 7,
        attacks: 4,
        gold: 900,
        armour: 3,
        damage: "2D6",
        specialRules: [
            Dodge(5),
            MagicResistance(5),
            MagicArmour(),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Skaven Stormvermin", constructor: Stormvermin},
    {name: "Stormvermin Champions", constructor: StormverminChampion},
    {name: "Skaven Warlords", constructor: SkavenWarlord},
];
