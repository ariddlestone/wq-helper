export default function (value) {
    value = typeof value === "number" ? value + "+" : value;
    return {
        name: `Assassinate ${value}`,
        description: `
            <p>
                Some Monsters may make a special Assassinate attack. This is treated like a normal hand-to-hand combat
                attack except when resolving damage the blow ignores the target's armour. In addition, if the to hit
                roll was a natural ${value}, the blow also ignores the target's toughness.
            </p>
        `,
    };
}
