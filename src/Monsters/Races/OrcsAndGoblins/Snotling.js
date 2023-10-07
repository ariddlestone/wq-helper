import OrcsAndGoblins from "../OrcsAndGoblins";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import GangUp from "../../SpecialRules/GangUp";
import image from "../../../assets/monsters/orcs-and-goblins/snotlings.webp";

export function Snotling () {
    return {
        singularName: "Snotling",
        pluralName: "Snotlings",
        description: "Snotlings are the smallest of the green-skinned races. They are not very intelligent and " +
            "behave very much like extremely enthusiastic and uncontrollable puppies. They can fetch and carry for " +
            "other Goblin or Orc races, and do other rather limited tasks, but they are little use for any real work.",
        image,
        race: OrcsAndGoblins,
        wounds: 1,
        move: 4,
        weaponSkill: 1,
        ballisticSkill: null,
        strength: 1,
        toughness: 1,
        initiative: 1,
        attacks: 1,
        gold: 10,
        armour: 0,
        damage: "1D6",
        specialRules: [
            AmbushMagic("A"),
            GangUp(),
        ],
    };
}

export default [
    {name: "Snotlings", constructor: Snotling},
];
