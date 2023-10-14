export default function (roll) {
    roll = typeof roll === "number" ? roll + "+" : roll;
    return {
        name: `Magic Drain ${roll}`,
        description: `
            <p>
                Some Monsters can soak up or Drain Magic from the air around them, rendering any spellcasting impossible
                while they remain alive.
            </p>
            <p>
                A Monster with this attribute is required to roll a ${roll} on 1D6 for the ability to work. The effect
                covers the whole boar. Roll once per turn during the Power Phase, immediately after determining the
                Wizard's Power. If successful, the Wizard loses all his Power for that turn.
            </p>
        `,
    };
}
