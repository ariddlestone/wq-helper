import OrcsAndGoblins from "../OrcsAndGoblins";
import MagicResistance from "../../SpecialRules/MagicResistance";

function GoblinMagic(value) {
    return {
        name: `Goblin Magic ${value}`,
        description: `
            <p>
                Magic using monsters are placed on the board as if they were using missile weapons and, unless otherwise
                stated, are always placed first.
            </p>
            <p>
                In addition, all magic-using monsters protect themselves with minor spells that make them harder to hit
                from a distance. All missile weapon attacks made against magic-using monsters are at -1 on the to hit
                roll.
            </p>
            <p>
                At the start of each monsters' phase, a Goblin Shaman may cast one of the following spells. Roll 2D6 on
                the following table to determine which.
            </p>
            <table>
                <tbody>
                    <tr>
                        <th>2-4</th>
                        <td>
                            <strong>Failure.</strong>
                            The Shaman fails to cast a spell.
                        </td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>
                            <strong>&rsquo;Ere We Go.</strong>
                            The Shaman floods his allies with power. All Orcs and Goblins on the board get +1 attacks
                            this turn and +1 toughness next turn.
                        </td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>
                            <strong>Waaagh!</strong>
                            Roll 2D6 for each warrior spellcaster on the board. If the score is equal to or greater
                            than the warrior's battle level he is knocked to the ground for 1 turn, during which time he
                            may do nothing.
                        </td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>
                            <strong>Brain Bursta.</strong>
                            A bolt of power erupts from the Shaman's head. Draw a warrior counter to determine which
                            warrior is targeted. Roll 2D6. If the score is greater than the target's battle level he is
                            hit - roll 1D6:
                            <table>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>
                                            The warrior's head explodes, killing him instantly.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2-5</th>
                                        <td>
                                            The warrior suffers (2 &times; the dungeon level) wounds, with no modifiers
                                            for toughness or armour.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>
                                            The warrior suffers 1D6 wounds, with no modifiers for toughness or armour.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>
                            <strong>Hand of Gork.</strong>
                            This spell moves the Shaman and any allied monsters using missile weapons out of
                            hand-to-hand combat with the warriors. Move the monsters so that they are no longer adjacent
                            to the warriors, moving other monsters to make room if necessary. If the Shaman is not in
                            hand-to-hand combat, re-roll this result.
                        </td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>
                            <strong>Fist of Gork.</strong>
                            The Shaman's arms become enwrapped with glowing bands of power. Draw a warrior counter to
                            determine which warrior is targeted. That warrior suffers 1D6 at the Shaman's strength +4.
                        </td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>
                            <strong>Da Krunch.</strong>
                            One of the warriors is stamped on by the mighty foot of Gork. Draw a warrior counter to
                            determine which warrior is targeted. That warrior suffers 1D6+10 wounds.
                        </td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>
                            <strong>Mork Save Uz!</strong>
                            Roll 1D6 for each spellcasting warrior. On a roll of 4+ all of that warrior's remaining
                            points of power are lost this turn. This does not affect any innate stored power.
                        </td>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>
                            <strong>&rsquo;Eadbutt.</strong>
                            The Shaman magically &rsquo;eadbutts one of the warrior spellcasters. If there is more than
                            one spellcaster, draw a warrior counter to determine which warrior is targeted. Roll (1D6 +
                            the dungeon level) for the Shaman, and (1D6 + battle level) for the target. If the Shaman
                            wins or it is a draw, add the two dice together: the target takes that many wounds, with no
                            modifiers for toughness or armour, and cannot cast any magic next turn. If the warrior wins
                            the spell has no effect.
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
    };
}

export function GoblinShaman() {
    return {
        singularName: "Goblin Shaman",
        pluralName: "Goblin Shamans",
        description: "Although not as powerful as Orc Shamans, Goblin Shamans also practise a crude form of Orcish " +
            "magic, drawing on the power of the Waaagh! generated by other Goblins around them.",
        race: OrcsAndGoblins,
        wounds: 3,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 1,
        gold: 280,
        armour: 0,
        damage: "1D6",
        specialRules: [
            GoblinMagic(1),
            MagicResistance(5, "Ring"),
        ],
    };
}

export default [
    {name: "Goblin Shamans", constructor: GoblinShaman},
];
