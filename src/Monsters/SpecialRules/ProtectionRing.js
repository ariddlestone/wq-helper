export default function (value) {
    value = typeof value === "number" ? "+" + value : value;
    return {
        name: `Protection Ring (${value} T)`,
        description: `
            <p>
                Some Monsters wear magical rings that give them an extra ${value} Toughness.
            </p>
        `,
    };
}
