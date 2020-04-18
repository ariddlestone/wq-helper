export default function (value) {
    return {
        name: `Regenerate ${value}D6`,
        description: `
            <p>
                Some monsters can <em>Regenerate</em> wounds while they remain alive, making them much harder to kill.
            </p>
            <p>
                At the end of each turn, this monster regenerates ${value}D6 wounds. It cannot regenerate if it is
                reduced to 0 wounds, and can never have more wounds than it started with (except Vampires).
            </p>
        `,
    };
}
