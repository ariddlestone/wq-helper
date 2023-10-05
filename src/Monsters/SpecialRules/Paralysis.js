export default function () {
    return {
        name: `Paralysis`,
        description: `
            <p>
                In addition to causing normal damage when they attack, some Monsters cause Paralysis. At the end of each
                turn in which your Warrior is wounded by such a Monster deduct 1 from his Movement. If a Warrior is
                reduced to 0 Movement he is killed and is removed from play. At the start of each turn after that in
                which your Warrior was first struck roll 1D6 and add his Strength. If the score is 8 or greater the
                paralysis wears off and his Movement returns to its starting value. If the Warrior survives the combat,
                once there are no Monsters left on the board the paralysis wears off automatically and his Movement
                returns to normal. Paralysis can also be cured by a healing spell or healing potion, but not by bandages
                or provisions, or the like.
            </p>
        `,
    };
}
