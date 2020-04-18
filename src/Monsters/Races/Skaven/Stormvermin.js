import Skaven from "@/Monsters/Races/Skaven";

export function Stormvermin () {
    return {
        singularName: "Skaven Stormvermin",
        pluralName: "Skaven Stormvermin",
        description: "The biggest, most powerful and vicious Skaven are organised into elite warrior groups known as " +
            "Stormvermin. These warriors are much feared by the Skaven Clanrats, and their warlords often lead bands " +
            "of lesser Skaven into combat.",
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
