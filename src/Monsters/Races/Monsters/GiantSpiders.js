import Monsters from "../Monsters";
import Web from "../../SpecialRules/Web";

const description = "Beneath the mountains, in the darkest, deepest caves, lurk the Giant Spiders. Their bodies are " +
    "covered by thick, horny, chitinous plates, and their fangs drip nerve-shattering poison. Huddled in the " +
    "darkness, they lie in wait, spinning webs to ensnare their unsuspecting victims.";

export function GiantSpider () {
    return {
        singularName: "Giant Spider",
        pluralName: "Giant Spiders",
        description,
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
        damage: "Special",
        specialRules: [
            Web("1D3"),
        ],
    };
}

export function GiganticSpider () {
    return {
        singularName: "Gigantic Spider",
        pluralName: "Gigantic Spiders",
        description,
        race: Monsters,
        wounds: 20,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: "Special",
        toughness: 4,
        initiative: 1,
        attacks: 2,
        gold: 450,
        armour: 0,
        damage: "Special",
        specialRules: [
            Web("1D6"),
        ],
    };
}

export default [
    {name: "Giant Spiders", constructor: GiantSpider},
    {name: "Gigantic Spiders", constructor: GiganticSpider},
];
