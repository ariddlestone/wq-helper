import OrcsAndGoblins from "../OrcsAndGoblins";
import ArmedWith from "../../SpecialRules/ArmedWith";
import Tattoos from "../../SpecialRules/Tattoos";

export function SavageOrc () {
    return {
        singularName: "Savage Orc",
        pluralName: "Savage Orcs",
        description: "There are many tribes of Orcs, and they are constantly breaking up and reforming under the " +
            "leadership of new ambitious Orc Warlords. Savage Orcs have a more primitive lifestyle than other Orcs. " +
            "They dress in furs and skins, and decorate their bodies with tattoos. Because they are so close to " +
            "nature, Savage Orcs tend to make good shamans.",
        race: OrcsAndGoblins,
        wounds: 5,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 4,
        initiative: 2,
        attacks: 1,
        gold: 65,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 4)"},
            ]),
            Tattoos(6),
        ],
    };
}

export default [
    {name: "Savage Orcs", constructor: SavageOrc},
];
