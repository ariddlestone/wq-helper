import OrcsAndGoblins from "../OrcsAndGoblins";
import ArmedWith from "../../SpecialRules/ArmedWith";
import NeverPinned from "../../SpecialRules/NeverPinned";

const description = "Night Goblins cultivate many kinds of toxic fungi in their dark caves. One particular variety, " +
    "known as the Mad Cap, is much valued for its hallucinogenic properties. During battle. Goblin Fanatics gobble " +
    "down handfuls of these fungi to turn them into whirling green killing machines. The Goblins become impervious " +
    "to pain, almost completely unaware of their environment, hugely strong, and completely fearless.";

export function GoblinFanatic () {
    return {
        singularName: "Goblin Fanatic",
        pluralName: "Goblin Fanatics",
        description,
        race: OrcsAndGoblins,
        wounds: 2,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 300,
        armour: 0,
        damage: "Special",
        specialRules: [
            ArmedWith([{
                name: "Ball and Chain",
                description: `
                    <p>
                        This weapon is swung around the Goblin's head and is a danger to all Warriors standing nearby
                        and, unfortunately, to the Goblin himself. A Goblin Fanatic always attempts to get adjacent to
                        as many Warriors as possible. At the end of each Monsters' Phase, all Warriors adjacent to a
                        Goblin Fanatic automatically takes 1D6+3 Wounds, with no modifier for armour. However, if the
                        damage roll is a natural 1 the Fanatic has also managed to strangle itself with its own Ball and
                        Chain and is killed.
                    </p>
                `,
            }]),
            NeverPinned(),
        ],
    };
}

export default [
    {name: "Goblin Fanatics", constructor: GoblinFanatic},
];
