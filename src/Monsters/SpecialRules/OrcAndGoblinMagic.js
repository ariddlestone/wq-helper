import Magic from "./Magic";

export default function (spellsPerTurn, description, modifier = 0) {
    return Magic(
        "Orc and Goblin",
        description,
        [
            {
                minRoll: 2,
                maxRoll: 2,
                name: "Failure",
                description: `<p>The Shaman fails to cast a spell.</p>`,
            },
            {
                minRoll: 3,
                maxRoll: 3,
                name: "'Ere We Go",
                description: `
                    <p>
                        The Shaman floods his allies with power. All Orcs and Goblins on the board get +1 attacks this
                        turn and +1 toughness next turn.
                    </p>
                `,
            },
            {
                minRoll: 4,
                maxRoll: 4,
                name: "Waaagh!",
                description: `
                    <p>
                        Roll 2D6 for each warrior spellcaster on the board. If the score is equal to or greater than the
                        warrior's battle level he is knocked to the ground for 1 turn, during which time he may do
                        nothing.
                    </p>
                `,
            },
            {
                minRoll: 5,
                maxRoll: 5,
                name: "Brain Bursta",
                description: `
                    <p>
                        A bolt of power erupts from the Shaman's head. Draw a warrior counter to determine which warrior
                        is targeted. Roll 2D6. If the score is greater than the target's battle level he is hit - roll
                        1D6:
                    </p>
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
                                The warrior suffers (2 x the dungeon level) wounds, with no modifiers
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
                `,
            },
            {
                minRoll: 6,
                maxRoll: 6,
                name: "Hand of Gork",
                description: `
                    <p>
                        This spell moves the Shaman and any allied monsters using missile weapons out of hand-to-hand
                        combat with the warriors. Move the monsters so that they are no longer adjacent to the warriors,
                        moving other monsters to make room if necessary. If the Shaman is not in hand-to-hand combat,
                        re-roll this result.
                    </p>
                `,
            },
            {
                minRoll: 7,
                maxRoll: 7,
                name: "Fist of Gork",
                description: `
                    <p>
                        The Shaman's arms become enwrapped with glowing bands of power. Draw a warrior counter to
                        determine which warrior is targeted. That warrior suffers 1D6 at the Shaman's strength +4.
                    </p>
                `,
            },
            {
                minRoll: 8,
                maxRoll: 8,
                name: "Da Krunch",
                description: `
                    <p>
                        One of the warriors is stamped on by the mighty foot of Gork. Draw a warrior counter to
                        determine which warrior is targeted. That warrior suffers 1D6+10 wounds.
                    </p>
                `,
            },
            {
                minRoll: 9,
                maxRoll: 9,
                name: "Mork Save Uz!",
                description: `
                    <p>
                        Roll 1D6 for each spellcasting warrior. On a roll of 4+ all of that warrior's remaining points
                        of power are lost this turn. This does not affect any innate stored power.
                    </p>
                `,
            },
            {
                minRoll: 10,
                maxRoll: 12,
                name: "'Eadbutt",
                description: `
                    <p>
                        The Shaman magically 'eadbutts one of the warrior spellcasters. If there is more than one
                        spellcaster, draw a warrior counter to determine which warrior is targeted. Roll (1D6 + the
                        dungeon level) for the Shaman, and (1D6 + battle level) for the target. If the Shaman wins or it
                        is a draw, add the two dice together: the target takes that many wounds, with no modifiers for
                        toughness or armour, and cannot cast any magic next turn. If the warrior wins the spell has no
                        effect.
                    </p>
                `,
            },
        ],
        spellsPerTurn,
        modifier
    );
}
