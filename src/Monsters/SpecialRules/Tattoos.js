export default function (value) {
    value = typeof value === "number" ? value + "+" : value;
    return {
        name: `Tattoos ${value}`,
        description: `
            <p>
                Some Monsters are painted with complicated protective Tattoos that act like armour. Whether this is due
                to some arcane power inherent in the tattoos, or simply the strength of belief on the wearer's part,
                they do seem to work.
            </p>
            <p>
                Each time a Monster wearing Tattoos is hit roll 1D6. If the score is ${value} the blow has no effect.
            </p>
        `,
    };
}
