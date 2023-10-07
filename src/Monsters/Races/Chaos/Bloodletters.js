import Chaos from "../Chaos";
import Daemonic from "../../SpecialRules/Daemonic";
import Fear from "../../SpecialRules/Fear";

const description = "Bloodletters have red scaly hide and shiny black claws. These daemonic creatures are " +
    "furious fighters with strong arms and murderous talons, but their most fearsome weapons are their Hellblades. " +
    "These weapons glow with deadly enchantment, and cause terrible weapons that can slay the mightiest hero.";

export function Bloodletter () {
    return {
        singularName: "Bloodletter",
        pluralName: "Bloodletters",
        description,
        race: Chaos,
        wounds: 7,
        move: 4,
        weaponSkill: 5,
        ballisticSkill: 2,
        strength: 4,
        toughness: 3,
        initiative: 6,
        attacks: 2,
        gold: 200,
        armour: 0,
        damage: "1D6",
        specialRules: [
            {
                name: "Hellblade",
                description: `
                    <p>
                        A Hellblade causes an extra 1D3 Wounds on the target, with no modifiers for Toughness or armour.
                    </p>
                `,
            },
            Daemonic(-1),
            Fear(5),
        ],
    };
}

export default [
    {name: "Bloodletters", constructor: Bloodletter},
];
