import Skaven from "../Skaven";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import Dodge from "../../SpecialRules/Dodge";
import Frenzy from "../../SpecialRules/Frenzy";
import MagicItem from "../../SpecialRules/MagicItem";
import NeverPinned from "../../SpecialRules/NeverPinned";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import Terror from "../../SpecialRules/Terror";
import WeepingBlade from "../../SpecialRules/WeepingBlade";

const description = "The Plague Monks of Clan Pestilens are dedicated to the spreading of corruption and decay in " +
    "the name of the Horned Rat. They are the initiates of infection and disciples of disease, with agents scattered " +
    "across the cities of the Old World. The results of their hideous experiments are listed in the evil tome known " +
    "as the Book of Woe, which contains details of all known diseases. The Plague Monks are led by Plague Priests or " +
    "even a mighty Plague Lord, and fight with frenzied devotion.";

export function SkavenPlagueMonk() {
    return {
        singularName: "Skaven Plague Monk",
        pluralName: "Skaven Plague Monks",
        description,
        race: Skaven,
        wounds: 5,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 4,
        attacks: 1,
        gold: 60,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Frenzy(5),
            WeepingBlade(),
        ],
    };
}

export function SkavenPlaguePriest() {
    return {
        singularName: "Skaven Plague Priest",
        pluralName: "Skaven Plague Priests",
        description,
        race: Skaven,
        wounds: 23,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 5,
        initiative: 6,
        attacks: 3,
        gold: 730,
        armour: 0,
        damage: "2D6",
        specialRules: [
            AmbushMagic("A"),
            Frenzy(4),
            MagicWeapon(),
            WeepingBlade(),
        ],
    };
}

export function SkavenPlagueLord() {
    return {
        singularName: "Skaven Plague Lord",
        pluralName: "Skaven Plague Lords",
        description,
        race: Skaven,
        wounds: 30,
        move: 5,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 4,
        toughness: 5,
        initiative: 7,
        attacks: 4,
        gold: 2250,
        armour: 0,
        damage: "2D6",
        specialRules: [
            {
                name: "Death Fog",
                description: `
                    <p>
                        Any Warrior adjacent to a Skaven Plague Lord is overcome by the choking, noxious vapours that
                        surround him. At the end of every turn all adjacent Warriors take Z Wounds, with no modifiers
                        for Toughness or armour. If a Warrior is taken to 0 Wounds by a Death Fog and is then healed his
                        Starting Wounds score is reduced by -1D3 permanently.
                    </p>
                `,
            },
            Dodge(3),
            Frenzy(3),
            MagicResistance(3),
            MagicItem(3),
            MagicWeapon(),
            NeverPinned(),
            Terror(10),
            WeepingBlade(),
        ],
    };
}

export default [
    {name: "Skaven Plague Monks", constructor: SkavenPlagueMonk},
    {name: "Skaven Plague Priests", constructor: SkavenPlaguePriest},
    {name: "Skaven Plague Lords", constructor: SkavenPlagueLord},
];
