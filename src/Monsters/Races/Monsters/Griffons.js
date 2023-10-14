import Monsters from "../Monsters";
import Fly from "../../SpecialRules/Fly";
import Terror from "../../SpecialRules/Terror";

const description = "Griffons have fierce heads with a hooked beak like that of a huge bird of prey. Their " +
    "forequarters too are feathered, with scaly limbs bearing foreclaws which are bird-like and razor sharp. Behind " +
    "its huge feathered wings the Griffon's body is furred and it has huge clawed feet and a tail like that of a " +
    "great hunting cat such as a lion or tiger. Some Griffons have great golden pelts like mountain lions, other " +
    "have skins which are spotted or striped, or black as night.";

export function Griffon() {
    return {
        singularName: "Griffon",
        pluralName: "Griffon",
        description,
        race: Monsters,
        wounds: 52,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: null,
        strength: 6,
        toughness: 5,
        initiative: 7,
        attacks: 4,
        gold: 1500,
        armour: 0,
        damage: "4D6",
        specialRules: [
            Fly(),
            Terror(10),
        ],
    };
}

export default [
    {name: "Griffons", constructor: Griffon},
];
