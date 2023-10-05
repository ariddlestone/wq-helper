export default function () {
    return {
        name: `Breathe Fire ${value}`,
        description: `
            <p>
                Some Monsters can Breathe Fire. At the start of each turn roll 1D6. The number rolled indicates how many
                of the Warriors are engulfed in flame. If the score is higher than the number of Warriors present then
                all of them have been hit. If not all of them are hit use the Warrior counters to determine who escapes.
            </p>
            <p>
                Each Warrior hit by the fire suffers ${value}D6 Wounds, with no modifier for armour.
            </p>
        `,
    };
}
