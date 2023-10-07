import Skaven from "../Skaven";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import NeverPinned from "../../SpecialRules/NeverPinned";
import Dodge from "../../SpecialRules/Dodge";
import WeepingBlade from "../../SpecialRules/WeepingBlade";
import image from "../../../assets/monsters/skaven/clanrats.webp";

const description = "Individual Skaven warriors are vicious but cowardly creatures, and they are best " +
    "deployed in large numbers. The more powerful warriors lead their brethren into combat, and a Skaven Champion " +
    "will not think twice about stabbing his leader in the back in his desire to rise to the rank of Chieftain.";

export function Clanrat() {
    return {
        singularName: "Skaven Clanrat",
        pluralName: "Skaven Clanrats",
        description,
        image,
        race: Skaven,
        wounds: 3,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 1,
        gold: 40,
        armour: 0,
        damage: "1D6",
        specialRules: [],
    };
}

export function ClanratChampion() {
    return {
        singularName: "Skaven Clanrat Champion",
        pluralName: "Skaven Clanrat Champions",
        description,
        image,
        race: Skaven,
        wounds: 11,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 5,
        attacks: 2,
        gold: 270,
        armour: 2,
        damage: "2D6",
        specialRules: [
            MagicWeapon(),
            NeverPinned(),
        ],
    };
}

export function ClanratChieftain() {
    return {
        singularName: "Skaven Clanrat Chieftain",
        pluralName: "Skaven Clanrat Chieftains",
        description,
        image,
        race: Skaven,
        wounds: 20,
        move: 5,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 4,
        initiative: 6,
        attacks: 3,
        gold: 590,
        armour: 2,
        damage: "2D6",
        specialRules: [
            Dodge(5),
            NeverPinned(),
            WeepingBlade(),
        ],
    };
}

export default [
    {name: "Clanrats", constructor: Clanrat},
    {name: "Clanrat Champions", constructor: ClanratChampion},
    {name: "Clanrat Chieftains", constructor: ClanratChieftain},
];
