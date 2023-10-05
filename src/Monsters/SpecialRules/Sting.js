import Poison from "./Poison";

export default function (value) {
    return {
        name: `Sting ${value}`,
        description: `
            <p>
                Some Monsters may Sting their opponents, but only if all their normal attacks hit in a single turn. The
                sting does ${value} damage, and is subject to the rules for Poison attacks, below.
            </p>
            <p>
                ${Poison.helperText}
            </p>
        `,
    };
}
