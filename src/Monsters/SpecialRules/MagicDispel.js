export default function (roll) {
    if (typeof roll === "number") {
        roll = roll + "+";
    }
    return {
        name: `Magic Dispel ${roll}`,
        description: `
            <p>
                Some Monsters have the ability to Dispel Magic in the surrounding area. This differs from the Magic
                Resistance special ability in that the Monster can actively interfere with an nullify any spell, not
                just those cast directly against it.
            </p>
            <p>
                A Monster with this attribute is required to roll a ${roll} on 1D6 for the ability to work. This dice
                roll is made as soon as the targetted spell is cast. If the roll is successful, the spell has no effect
                at all and the Power used to cast it is wasted.
            </p>
        `,
    };
}
