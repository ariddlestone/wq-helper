import Monsters from "../Monsters";
import {AmbushMagicModifier} from "../../SpecialRules/AmbushMagic";
import ChaosMagic from "../../SpecialRules/ChaosMagic";
import Fly from "../../SpecialRules/Fly";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import Terror from "../../SpecialRules/Terror";

const description = "The ancient dragons slumber in the caves below the world, guarding their treasure through the " +
    "long years. Woe betide any foolish Warrior who attempts to steal their hoard, as when roused there is little to " +
    "rival a dragon in combat.";

function DragonType() {
    const types = [
        {
            weight: 2,
            name: "Fire",
            specialRule: {
                name: "Breathes Fire",
                description: `
                    <p>
                        This red dragon breathes fire.
                    </p>
                    <p>
                        At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are
                        engulfed in flame and fire. If the score is higher than the number of Warriors present all of
                        them have been hit. If not all of the Warriors are hit use the Warrior counters to determine
                        who escapes.
                    </p>
                    <p>
                        Each Warrior hit by the fire suffers 3D6 Wounds, with no modifier for armour.
                    </p>
                `,
            },
        },
        {
            weight: 1,
            name: "Black",
            specialRule: {
                name: "Breathes Smoke",
                description: `
                    <p>
                        This black dragon breathes smoke.
                    </p>
                    <p>
                        At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are
                        engulfed in by the oily fumes. If the score is higher than the number of Warriors present all of
                        them have been hit. If not all of the Warriors are hit use the Warrior counters to determine who
                        escapes.
                    </p>
                    <p>
                        Roll 1D6 for each Warrior hit by the smoke, subtract his Toughness from the score and multiply
                        the result by 2. The total shows how many D6 Wounds the Warrior suffers, with no modifiers for
                        Toughness or armour.
                    </p>
                    <p>
                        For example, a 6 is rolled for a Warrior of Toughness 4. He suffers ((6-4)x2)D6 = 4D6 Wounds,
                        with no modifiers for Toughness or armour.
                    </p>
                `
            }
        },
        {
            weight: 1,
            name: "Green",
            specialRule: {
                name: "Breathes Corrosive Fumes",
                description: `
                    <p>
                        This green dragon breathes corrosive fumes.
                    </p>
                    <p>
                        Roll 1D6 for each Warrior and add his Toughness. If the score is 7 or more that Warrior is
                        unaffected. If the score is 6 or less that Warrior suffers 3D6 Wounds, with no modifiers for
                        Toughness or armour.
                    </p>
                `
            }
        },
        {
            weight: 1,
            name: "Blue",
            specialRule: {
                name: "Spits Electricity",
                description: `
                    <p>
                        This blue dragon spits electricity.
                    </p>
                    <p>
                        Blue Dragons actually generate electricity that arcs from their mouths in the form of lightning,
                        rather than breathe a noxious substance. Take one Warrior counter to determine who is hit. That
                        Warrior suffers 2D6 Wounds, with no modifier for armour.
                    </p>
                    <p>
                        After resolving that attack, roll another 1D6. On a score of 3, 4, 5 or 6 the lightning bolt
                        arcs across to another Warrior. Take another Warrior counter to determine who. He also takes 2D6
                        Wounds, with no modifier for armour. This process continues until the lightning bolt fails to
                        are across to another Warrior.
                    </p>
                `
            }
        },
        {
            weight: 1,
            name: "White",
            specialRule: {
                name: "Breathes Chilling Mist",
                description: `
                    <p>
                        This white dragon breathes a chilling mist.
                    </p>
                    <p>
                        At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are
                        engulfed by the mist. If the score is higher than the number of Warriors present all of them
                        have been hit. If not all of the Warriors are hit use the Warrior counters to determine who
                        escapes.
                    </p>
                    <p>
                        Each Warrior suffers 1D6 Wounds, with no modifiers for Toughness or armour. In addition, while
                        he thaws out, for 1 turn he has a Movement of 1, he may be hit automatically, and any dice rolls
                        made for his actions only succeed on a natural 6. Actions that do not require you to roll a dice
                        may be carried out as normal.
                    </p>
                `
            }
        },
    ];
    const total = types.reduce((sum, type) => sum + type.weight, 0);
    let running = Math.floor(Math.random() * total);
    let index;
    for(index = 0; index < types.length; index++) {
        running -= types[index].weight;
        if(running < 0) {
            break;
        }
    }
    const type = types[index];
    type.specialRule.description = `
        <p>
            There are many different types of dragon in the dark caverns and tunnels beneath the mountains of the
            Warhammer World, each with a different breath weapon (not all dragons possess the archetypal fiery breath).
        </p>
        ${type.specialRule.description}
        <p>A dragon's breath weapon is used in addition to its normal hand-to-hand attacks.</p>
    `;
    return type;
}

function treasureHorde(modifier = null) {
    if (typeof modifier === "number" && modifier > 0) {
        modifier = "+" + modifier;
    } else {
        modifier = "";
    }
    return {
        name: `Treasure Horde ${modifier}`,
        description: `
            <p>
                Dragons have their own treasure hoards above and beyond the treasure that is otherwise found.
            </p>
            <p>
                When a dragon is killed roll 1D6${modifier} on the following table to determine what it contains:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Gold</td>
                        <td>
                            Each player may roll as many D6 as he likes, adding up the score and multiplying it by 10 to
                            determine how much gold his Warrior finds. However, if any of the dice score a 1 his Warrior
                            finds nothing.
                        </td>
                    </tr>
                    <tr>
                        <td>2-3</td>
                        <td>Dungeon Room Treasure</td>
                        <td>
                            Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he
                            finds.
                        </td>
                    </tr>
                    <tr>
                        <td>4-5</td>
                        <td>Dungeon Room Treasure and Gold</td>
                        <td>
                            Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he
                            finds.<br />
                            In addition, each player may roll as many D6 as he likes, adding up the score and
                            multiplying it by 10 to determine how much extra gold his Warrior finds. However, if any of
                            the dice score a 1 his Warrior finds no extra gold.
                        </td>
                    </tr>
                    <tr>
                        <td>6+</td>
                        <td>Objective Room Treasure</td>
                        <td>
                            Make one roll on the Objective Room Treasure Table for each Warrior to determine what he
                            finds.
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
    };
}

export function Dragon() {
    const dragonType = DragonType();
    return {
        singularName: `${dragonType.name} Dragon`,
        pluralName: `${dragonType.name} Dragons`,
        description,
        race: Monsters,
        wounds: 74,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: null,
        strength: 6,
        toughness: 6,
        initiative: 8,
        attacks: 7,
        gold: 4500,
        armour: 6,
        damage: "6D6",
        specialRules: [
            AmbushMagicModifier(dragonType.specialRule, "A"),
            Fly(),
            IgnoreBlows(5),
            IgnorePain(7),
            LargeMonster(),
            Terror(12),
            treasureHorde(0),
        ],
    };
}

export function GreatDragon() {
    const dragonType = DragonType();
    return {
        singularName: `${dragonType.name} Great Dragon`,
        pluralName: `${dragonType.name} Great Dragons`,
        description,
        race: Monsters,
        wounds: 84,
        move: 6,
        weaponSkill: 7,
        ballisticSkill: null,
        strength: 7,
        toughness: 7,
        initiative: 7,
        attacks: 8,
        gold: 6000,
        armour: 7,
        damage: "6D6 / 7D6 (5+)",
        specialRules: [
            AmbushMagicModifier(dragonType.specialRule, "A"),
            Fly(),
            IgnoreBlows(4),
            IgnorePain(7),
            LargeMonster(),
            Terror(13),
            treasureHorde(1),
        ],
    };
}

export function EmperorDragon() {
    const dragonType = DragonType();
    return {
        singularName: `${dragonType.name} Emperor Dragon`,
        pluralName: `${dragonType.name} Emperor Dragons`,
        description,
        race: Monsters,
        wounds: 94,
        move: 6,
        weaponSkill: 8,
        ballisticSkill: null,
        strength: 8,
        toughness: 8,
        initiative: 6,
        attacks: 9,
        gold: 7500,
        armour: 8,
        damage: "8D6",
        specialRules: [
            AmbushMagicModifier(dragonType.specialRule, "A"),
            Fly(),
            IgnoreBlows(4),
            IgnorePain("3D6"),
            LargeMonster(),
            ChaosMagic(2),
            Terror(14),
            treasureHorde(2),
        ],
    };
}

export default [
    {name: "Dragons", constructor: Dragon},
    {name: "Great Dragons", constructor: GreatDragon},
    {name: "Emperor Dragons", constructor: EmperorDragon},
];
