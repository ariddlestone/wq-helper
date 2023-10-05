export default function (value) {
    value = typeof value === "number" ? value + "+" : value;
    return {
        name: `Parry ${value}`,
        description: `
            <p>
                Some Monsters can Parry a Warrior's hand-to-hand attacks so they don't cause any damage. Each time such
                a Monster is attacked roll 1D6. If the score is ${value} the Monster turns the blow and it
                causes no damage.
            </p>
        `,
    };
}
