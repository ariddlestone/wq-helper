export default function (roll) {
    if (typeof roll === "number") {
        roll += "+";
    }
    return {
        name: `Tattoos ${roll}`,
        description: `
            <p>
                Some Monsters are painted with complicated protective Tattoos that act like armour. Whether this is due
                to some arcane power inherent in the tattoos, or simply the strength of belief on the wearer's part,
                they do seem to work.
            </p>
            <p>
                Each time a Monster wearing Tattoos is hit roll 1D6. If the score is ${roll} the blow has no effect.
            </p>
        `,
    };
}
