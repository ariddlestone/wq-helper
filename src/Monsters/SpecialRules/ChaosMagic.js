export default function (spells) {
    return {
        name: `Chaos Magic (${spells})`,
        description: `
        <p>
            At the start of each Monsters' Phase, a Chaos Sorcerer may cast ${spells} of the following spells. Roll 2D6
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
                    <td>2-4</td>
                    <td>Failure</td>
                    <td>The Sorcerer fails to cast a spell.</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Battle Lust</td>
                    <td>
                        The Sorcerer gives an extra (1 x the Dungeon Level) Attacks to the Monsters in combat with the
                        Warriors distributed as evenly as possible.
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Doombolt</td>
                    <td>
                        A bolt of black fire bursts from the Sorcerer's palm towards one of the Warriors. Draw a Warrior
                        counter to determine which Warrior is hit. The Doombolt inflicts (2 x the Dungeon Level) Wounds,
                        with no modifiers for Toughness or armour.
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Hand of Dust</td>
                    <td>
                        The Sorcerer may attack any single adjacent Warrior. If there is more than one eligible target
                        take a Warrior counter to determine which one the Sorcerer attacks. Roll 1D6 for the chosen
                        Warrior and add his Strength to the score. Roll 2D6 for the Sorcerer and add his Strength to the
                        score. The highest score wins. If the Warrior wins the spell fails.<br />
                        If the Sorcerer wins the Warrior suffers (2 x the Dungeon Level) Wounds with no modifiers for
                        Toughness or armour.<br />
                        If the Sorcerer is not in hand-to-hand combat ignore this result and re-roll on this table.
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Blade Wind</td>
                    <td>
                        The Sorcerer summons a storm of slashing blades. Take a Warrior counter to determine who is
                        affected. That Warrior suffers (the Dungeon Level) D6 Wounds, modified for Toughness and armour
                        as usual.
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Soul Drain</td>
                    <td>
                        The Sorcerer creates a storm of dark magic. Roll 1D6 for each Warrior adding his Toughness to
                        the score. If the total is equal to or more than the Dungeon Level he suffers no ill effects
                        from the spell. If the score is less than the Dungeon Level the Warrior suffers (1D6 + the
                        Dungeon Level) Wounds and the Sorcerer gains the same amount. The Sorcerer may never gain more
                        Wounds than he started with - any extra Wounds are lost in the warp.<br />
                        A Warrior reduced to zero Wounds by this spell is immediately killed and may not be brought back
                        to life by any means other than those spells and magic items that raise the dead.
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Arnizipal's Black Horror</td>
                    <td>
                        A black cloud issues from the Sorcerer's mouth, engulfing the Warriors in darkness. Roll 1D6 for
                        each Warrior adding his Strength to the score. If the total is 7 or more he suffers no ill
                        effects from the spell. If the score is 6 or less he suffers (the Dungeon Level) D6 Wounds, with
                        no modifier for armour.
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Malediction of Nagash</td>
                    <td>
                        The Sorcerer causes cuts to open up on the body of one of the Warriors. Draw a Warrior counter
                        to determine which Warrior is hit. For 1 turn that Warrior is unable to move, fire a missile
                        weapon, and is at -2 to all of his to hit rolls in close combat.<br />
                        Now, and at the start of each subsequent turn, the same Warrior loses (1 x the Dungeon Level)
                        Wounds, with no modifiers for Toughness or armour, until the Shaman is dead.
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>The Transformation of Kadon</td>
                    <td>
                        The Sorcerer transforms himself into one of the following monsters. Roll 1D6:
                        <table>
                            <tbody>
                                <tr>
                                    <td>1-2</td>
                                    <td>Wyvern</td>
                                </tr>
                                <tr>
                                    <td>3-4</td>
                                    <td>Chimera</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Manticor</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Hydra</td>
                                </tr>
                            </tbody>
                        </table>
                        If the transformation turns the Sorcerer into a Monster of less value than himself, re-roll the
                        spell.<br />
                        The Sorcerer remains transformed until either he or all of the Warriors are dead. While
                        transformed he may not cast any more spells.
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    };
}
