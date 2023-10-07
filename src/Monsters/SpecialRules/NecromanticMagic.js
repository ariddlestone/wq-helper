export default function (spells) {
    return {
        name: `Necromantic Magic (${spells})`,
        description: `
        <p>
            At the start of each Monsters' Phase, a Necromancer may cast ${spells} of the following spells. Roll 1D6
            on the following table to determine which spells are cast:
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
                    <td>Winds of Death</td>
                    <td>
                        Reduces all of the Warriors' Attacks by -1 for the next Warriors' Phase.
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Soul Drain</td>
                    <td>
                        Inflicts 2D6 Wounds, with no modifiers for Toughness or armour, on a single Warrior. Use the
                        Warrior counters to determine which Warrior is affected.
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Deathchill</td>
                    <td>
                        Reduces a single Warrior's Toughness by -2 . If this reduces his Toughness to zero he is killed
                        and may not he healed by any means except spells and magic items, etc., that can resurrect the
                        dead. Use the Warrior counters to determine which Warrior is affected.<br />
                        If the Necromancer and all of his followers are destroyed, any Warriors whose Toughness has been
                        reduced in this combat and are still alive have the damage to their Toughness restored.
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Summon Skeletons</td>
                    <td>
                        The Necromancer summons 6 Skeletons. They are placed on the board immediately and may move and
                        fight this turn.
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Summon Ghouls</td>
                    <td>
                        The Necromancer summons 6 Ghouls. They are placed on the board immediately and may move and
                        fight this turn.
                    </td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Summon Mummies</td>
                    <td>
                        The Necromancer summons 1D6 Mummies. They are placed on the board immediately and may move and
                        fight this turn.
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    };
}
