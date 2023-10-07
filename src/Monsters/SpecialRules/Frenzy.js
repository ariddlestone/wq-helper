export default function (roll) {
    if (typeof roll === "number") {
        roll = roll + "+";
    }

    return {
        name: `Frenzy ${roll}`,
        description: `
            <p>
                Some Monsters are subject to Frenzy. Each turn, before combat, such a Monster may enter a state of utter
                rage. Roll 1D6. If the score is ${roll} the Monster gets 2 x its normal number of Attacks for the rest
                of the combat.
            </p>
        `,
    };
}
