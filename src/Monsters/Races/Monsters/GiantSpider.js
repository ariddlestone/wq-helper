import Monsters from "@/Monsters/Races/Monsters";
import Web from "@/Monsters/SpecialRules/Web";
import image from "@/assets/monsters/monsters/giant-spiders.webp";

export function GiantSpider () {
    return {
        singularName: "Giant Spider",
        pluralName: "Giant Spiders",
        description: "Beneath the mountains, in the darkest, deepest caves, lurk the Giant Spiders. Their bodies are " +
            "covered by thick, horny, chitinous plates, and their fangs drip nerve-shattering poison. Huddled in the " +
            "darkness, they lie in wait, spinning webs to ensnare their unsuspecting victims.",
        image,
        race: Monsters,
        wounds: 1,
        move: 6,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: "Special",
        toughness: 2,
        initiative: null,
        attacks: 1,
        gold: 15,
        armour: 0,
        damage: 1,
        specialRules: [
            Web("1D3"),
        ],
    };
}
