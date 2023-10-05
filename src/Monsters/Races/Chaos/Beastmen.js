import Chaos from "../Chaos";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import Throw from "../../SpecialRules/Throw";
import image from "../../../assets/monsters/chaos/beastmen.webp";

const description = "Beastmen fight in warbands led by old, savage warriors who have long since proved their " +
    "ability to lead. They are powerful and very resilient fighters with big, brutish heads, sharp piercing horns, " +
    "and hooves that can kick in a man's rib cage.";

export function Beastman () {
    return {
        singularName: "Beastman",
        pluralName: "Beastmen",
        description,
        image,
        race: Chaos,
        wounds: 6,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 1,
        gold: 100,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Throw("spears", 3),
        ],
    };
}

export function BeastmanChampion () {
    return {
        singularName: "Beastman Champion",
        pluralName: "Beastman Champions",
        description,
        image,
        race: Chaos,
        wounds: 30,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 2,
        gold: 610,
        armour: 0,
        damage: "1D6 / 2D6 (5+)",
        specialRules: [
            MagicWeapon(),
            Throw("spears", 8),
        ],
    };
}

export function BeastmanHero () {
    return {
        singularName: "Beastman Hero",
        pluralName: "Beastman Heroes",
        description,
        image,
        race: Chaos,
        wounds: 34,
        move: 4,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 3,
        gold: 1300,
        armour: 2,
        damage: "2D6",
        specialRules: [
            MagicItem(),
            MagicWeapon(),
            Throw('spears', 9),
        ],
    };
}

export function BeastmanLord () {
    return {
        singularName: "Beastman Lord",
        pluralName: "Beastman Lords",
        description,
        image,
        race: Chaos,
        wounds: 47,
        move: 4,
        weaponSkill: 7,
        ballisticSkill: 1,
        strength: 4,
        toughness: 5,
        initiative: 6,
        attacks: 4,
        gold: 2000,
        armour: 2,
        damage: "3D6",
        specialRules: [
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
            Throw('spears', 10),
        ],
    };
}
