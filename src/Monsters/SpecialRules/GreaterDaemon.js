export default function (value) {
    return {
        name: `Greater Daemon ${value}`,
        description: `
            <p>
                Some Monsters are termed Greater Daemons because they are the most powerful creatures of daemonic
                origin. When making an attack with a non-magical weapon against such a creature, your Warrior's to hit
                rolls are reduced by -2. Attacks made with magical weapons are at -1.
            </p>
            <p>
                At the start of a combat that there is a Greater Daemon on the board roll 1D6 + your Warrior's Battle
                Level for each Warrior. This is the Warrior's Greater Daemon Terror roll. If the total is greater than
                (${value}) that Warrior is not afraid of it during this combat and may fight it as normal.
            </p>
            <p>
                If the total is less than or equal to {value} and wasn't a natural roll of 1, that Warrior is terrified
                of it during this combat, and fights it at a further -2 on his to hit rolls. If the Wizard fails his
                Greater Daemon Terror roll any spells he attempts to cast against it have their casting number increased
                by +2.
            </p>
            <p>
                If your Warrior's roll was a natural 1 he is so terrified that he may do nothing at all for 1 turn and
                may be hit automatically.
            </p>
            <p>
                If it is a magic user, and the spell table requires more than 1D6, then when rolling for spells a
                Greater Daemon gets +1 on its Magic Table dice roll.
            </p>
        `,
    };
}
