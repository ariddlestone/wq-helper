import OrcsAndGoblins from "../OrcsAndGoblins";
import ArmedWith from "../../SpecialRules/ArmedWith";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicResistance from "../../SpecialRules/MagicResistance";
import image from "../../../assets/monsters/orcs-and-goblins/goblin-archers.webp";

const description = "Like their big relatives the Orcs, Goblins vary in size although they are typically smaller than " +
    "Orcs and usually smaller than a man. Goblins have quick, nimble fingers and small darting eyes, their teeth are " +
    "tiny and very pointy. Compared to the large, powerful bodies of the Orcs. Goblins look rather thin and scrawny " +
    "with gangly arms. Their voices are much higher pitched than those of Orcs, and they are extremely noisy and " +
    "garrulous where Orcs are inclined to speak slowly and infrequently (considering the determined glare and " +
    "comparison of fangs to be sufficient communication in most situations).";

export function Goblin () {
    return {
        singularName: "Goblin",
        pluralName: "Goblins",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 2,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 20,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([
                {name: "Bows (Str 1)"},
                {name: "Spears (Fight in Ranks)"},
            ])
        ],
    };
}

export function GoblinBoss () {
    return {
        singularName: "Goblin Boss",
        pluralName: "Goblin Bosses",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 6,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 3,
        strength: 4,
        toughness: 3,
        initiative: 3,
        attacks: 2,
        gold: 150,
        armour: 2,
        damage: "1D6",
        specialRules: [
            MagicWeapon(),
        ],
    };
}

export function GoblinBigBoss () {
    return {
        singularName: "Goblin Big Boss",
        pluralName: "Goblin Big Bosses",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 12,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 2,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 3,
        gold: 330,
        armour: 2,
        damage: "1D6",
        specialRules: [
            MagicWeapon(),
            MagicResistance(5, "Ring"),
        ],
    };
}

export function GoblinNetter () {
    return {
        singularName: "Goblin Netter",
        pluralName: "Goblin Netters",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 2,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 35,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([{
                name: "Nets",
                description: `
                    <p>
                        Roll to hit as normal. Any warrior hit by a net quickly becomes enmeshed. Once a warrior has
                        been netted by a successful to hit roll, roll 1D6 for each additional net-armed monster
                        attacking him who has not yet attacked him this turn but was about to do so. On a score of 1-3
                        the warrior automatically becomes ensnared by that monster's net as well. On a score of 4-6 the
                        monster instead attacks the warrior with a club at +2 to hit, inflicting (1D6 + strength) wounds
                        if he succeeds. While netted a warrior may not attack in any way, including magic.
                    </p>
                    <p>
                        At the start of each turn, roll 1D6 for each netted warrior, add his strength to the score and
                        subtract the number of nets ensnaring him. If the score is 7 or more, he breaks free from all of
                        the nets and may fight as normal.
                    </p>
                `,
            }]),
        ],
    };
}

export default [
    {name: "Goblins", constructor: Goblin},
    {name: "Goblin Bosses", constructor: GoblinBoss},
    {name: "Goblin Big Bosses", constructor: GoblinBigBoss},
    {name: "Goblin Netters", constructor: GoblinNetter},
];
