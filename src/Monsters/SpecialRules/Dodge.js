export default function (roll) {

    if (typeof roll === "number") {
        roll = roll + "+";
    }

    return {
        name: `Dodge ${roll}`,
        description: `
            <p>
                Some monsters are able to <em>Dodge</em> in the same way as the Elf warrior. Each type of monster with
                the Dodge ability has a Dodge Rating that shows the score they need on 1D6 to successfully dodge an
                incoming blow.
            </p>
            <p>
                This monster avoids a warrior's attack on a 1D6 roll of ${roll}.
            </p>
        `,
    };
}
