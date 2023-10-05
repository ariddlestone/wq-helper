import FatalDamage from "./FatalDamage";

export default function (value) {
    value = typeof value === "number" ? "1D" + value : value;
    return {
        name: `Tomb Rot (${value})`,
        description: `
            <p>
                Some Monsters cause Tomb Rot, their mere presence rotting nearby creatures' flesh. Any Warrior who ends
                the turn adjacent to such a Monster takes an extra ${value} Wounds, with no modifiers for Toughness or
                armour. Tomb Rot is Fatal Damage, as explained below.
            </p>
            <p>
                ${FatalDamage.helperText}
            </p>
        `,
    };
}
