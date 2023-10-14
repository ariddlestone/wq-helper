import Magic from "./Magic";

export default function (spellsPerTurn, sorcererName = "Chaos Sorcerer", modifier = 0) {
    return Magic(
        "Chaos",
        `
            At the start of each Monsters' Phase, a ${sorcererName} may cast ${spellsPerTurn} of the following spells.
            Roll 2D6 on the following table to determine which spells are cast:
        `,
        [
            {
                minRoll: 2,
                maxRoll: 4,
                name: "Failure",
                description: `The ${sorcererName} fails to cast a spell.`,
            },
            {
                minRoll: 5,
                maxRoll: 5,
                name: "Battle Lust",
                description: `
                    The ${sorcererName} gives an extra (1 x the Dungeon Level) Attacks to the Monsters in combat with
                    the Warriors distributed as evenly as possible.
                `,
            },
            {
                minRoll: 6,
                maxRoll: 6,
                name: "Doombolt",
                description: `
                    A bolt of black fire bursts from the ${sorcererName}'s palm towards one of the Warriors. Draw a
                    Warrior counter to determine which Warrior is hit. The Doombolt inflicts (2 x the Dungeon Level)
                    Wounds, with no modifiers for Toughness or armour.
                `,
            },
            {
                minRoll: 7,
                maxRoll: 7,
                name: "Hand of Dust",
                description: `
                    The ${sorcererName} may attack any single adjacent Warrior. If there is more than one eligible
                    target take a Warrior counter to determine which one the ${sorcererName} attacks. Roll 1D6 for the
                    chosen Warrior and add his Strength to the score. Roll 2D6 for the ${sorcererName} and add his
                    Strength to the score. The highest score wins. If the Warrior wins the spell fails.<br />
                    If the ${sorcererName} wins the Warrior suffers (2 x the Dungeon Level) Wounds with no modifiers for
                    Toughness or armour.<br />
                    If the ${sorcererName} is not in hand-to-hand combat ignore this result and re-roll on this table.
                `,
            },
            {
                minRoll: 8,
                maxRoll: 8,
                name: "Blade Wind",
                description: `
                    The ${sorcererName} summons a storm of slashing blades. Take a Warrior counter to determine who is
                    affected. That Warrior suffers (the Dungeon Level) D6 Wounds, modified for Toughness and armour
                    as usual.
                `,
            },
            {
                minRoll: 9,
                maxRoll: 9,
                name: "Soul Drain",
                description: `
                    The ${sorcererName} creates a storm of dark magic. Roll 1D6 for each Warrior adding his Toughness to
                    the score. If the total is equal to or more than the Dungeon Level he suffers no ill effects
                    from the spell. If the score is less than the Dungeon Level the Warrior suffers (1D6 + the
                    Dungeon Level) Wounds and the ${sorcererName} gains the same amount. The ${sorcererName} may never
                    gain more Wounds than he started with - any extra Wounds are lost in the warp.<br />
                    A Warrior reduced to zero Wounds by this spell is immediately killed and may not be brought back
                    to life by any means other than those spells and magic items that raise the dead.
                `,
            },
            {
                minRoll: 10,
                maxRoll: 10,
                name: "Amizipal's Black Horror",
                description: `
                    A black cloud issues from the ${sorcererName}'s mouth, engulfing the Warriors in darkness. Roll 1D6
                    for each Warrior adding his Strength to the score. If the total is 7 or more he suffers no ill
                    effects from the spell. If the score is 6 or less he suffers (the Dungeon Level) D6 Wounds, with
                    no modifier for armour.
                `,
            },
            {
                minRoll: 11,
                maxRoll: 11,
                name: "Malediction of Nagash",
                description: `
                    The ${sorcererName} causes cuts to open up on the body of one of the Warriors. Draw a Warrior
                    counter to determine which Warrior is hit. For 1 turn that Warrior is unable to move, fire a missile
                    weapon, and is at -2 to all of his to hit rolls in close combat.<br />
                    Now, and at the start of each subsequent turn, the same Warrior loses (1 x the Dungeon Level)
                    Wounds, with no modifiers for Toughness or armour, until the Shaman is dead.
                `,
            },
            {
                minRoll: 12,
                maxRoll: 12,
                name: "The Transformation of Kadon",
                description: `
                    The ${sorcererName} transforms himself into one of the following monsters. Roll 1D6:
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
                            <td>Manticore</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Hydra</td>
                        </tr>
                        </tbody>
                    </table>
                    If the transformation turns the ${sorcererName} into a Monster of less value than himself, re-roll
                    the spell.<br />
                    The ${sorcererName} remains transformed until either he or all of the Warriors are dead. While
                    transformed he may not cast any more spells.
                `,
            },
        ],
        spellsPerTurn,
        modifier
    );
}
