import Monsters from "@/Monsters/Races/Monsters";
import Fear from "@/Monsters/SpecialRules/Fear";
import MagicWeapon from "@/Monsters/SpecialRules/MagicWeapon";
import MagicItem from "@/Monsters/SpecialRules/MagicItem";
import image from "@/assets/monsters/monsters/minotaurs.webp";

const description = "Minotaurs are large creatures, and have the torso of a hugely-muscled human, but the horned " +
    "head of a wild bull. Their immense faces are broad, squat and evil, with beady eyes, jutting fangs and " +
    "snorting, flared nostrils.";

export function Minotaur () {
    return {
        singularName: "Minotaur",
        pluralName: "Minotaurs",
        description,
        image,
        race: Monsters,
        wounds: 15,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 440,
        armour: 0,
        damage: "2D6",
        specialRules: [
            Fear(5),
        ],
    };
}

export function MinotaurChampion () {
    return {
        singularName: "Minotaur Champion",
        pluralName: "Minotaur Champions",
        description,
        image,
        race: Monsters,
        wounds: 34,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: 3,
        strength: 5,
        toughness: 4,
        initiative: 4,
        attacks: 3,
        gold: 1100,
        armour: 1,
        damage: "3D6",
        specialRules: [
            Fear(6),
            MagicWeapon(),
        ],
    };
}

export function MinotaurHero () {
    const item1 = MagicItem();
    let item2;
    do {
        item2 = MagicItem();
    } while(item2.name === item1.name);
    return {
        singularName: "Minotaur Hero",
        pluralName: "Minotaur Heroes",
        description,
        image,
        race: Monsters,
        wounds: 48,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: 2,
        strength: 5,
        toughness: 5,
        initiative: 5,
        attacks: 4,
        gold: 2400,
        armour: 2,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            Fear(6),
            item1,
            item2,
            MagicWeapon(),
        ],
    };
}
