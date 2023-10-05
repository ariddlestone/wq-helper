export default function (value) {
    return {
        name: `Terror ${value}`,
        description: `
            <p>
                Some Monsters cause Terror. This is similar to Fear, only much, much worse.
            </p>
            <p>
                When an event occurs that generates Monsters that cause Terror, roll 1D6 + (your Warrior's Battle-level)
                for each Warrior as soon as the Monsters are placed on the board. If the total is greater than ${value},
                that Warrior is not afraid of them during this combat and may fight them as normal.
            </p>
            <p>
                If the total is less than or equal to ${value}, that Warrior is terrified of them during this combat,
                and fights them at -2 on his to hit rolls. If a Wizard fails his Terror roll any spells cast against
                that Monster have their casting number increased by +2.
            </p>
            <p>
                Each time the Warriors meet a particular type of Monster that causes Terror they must make a Terror
                roll, as the effect of the roll, whether good or bad, applies only to that type of Monster during this
                one combat.
            </p>
        `,
    };
}
