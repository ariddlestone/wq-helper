import OrcsAndGoblins from "../OrcsAndGoblins";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import Break from "../../SpecialRules/Break";
import image from "../../../assets/monsters/orcs-and-goblins/hobgoblin.png";

export function Hobgoblin () {
    return {
        singularName: "Hobgoblin",
        pluralName: "Hobgoblins",
        description: "Hobgoblins are close relatives of the other green-skinned races, but are quite distinctive in " +
            "appearance, being taller than Goblins yet not as burly as Orcs. They are extremely cowardly and sneaky, " +
            "much taken with ganging up on their victims in the dark. They are often found in the empoy of Chaos " +
            "Dwarfs.",
        image,
        race: OrcsAndGoblins,
        wounds: 4,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 50,
        armour: 1,
        damage: "1D6",
        specialRules: [
            AmbushMagic("A"),
            Break(),
        ],
    };
}

export default [
    {name: "Hobgoblins", constructor: Hobgoblin},
];
