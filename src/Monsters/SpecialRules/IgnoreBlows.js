export default function (value) {
    value = typeof value === "number" ? value + "+" : value;
    return {
        name: `Ignore Blows ${value}`,
        description: `
            <p>
                Some Monsters are so immense and powerful that they can Ignore Blows which would kill lesser Monsters.
                Each time a Warrior hits such a Monster in hand-to-hand combat or with a missile weapon roll 1D6. If the
                score is equal to or higher than ${value} the hit is shrugged off and causes no damage at all.
            </p>
        `,
    };
}
