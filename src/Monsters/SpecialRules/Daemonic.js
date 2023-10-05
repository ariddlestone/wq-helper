export default function (value) {
    value = Math.abs(value);
    return {
        name: `Daemonic -${value}`,
        description: `
            <p>
                Some Monsters are of Daemonic origin and as such they are very difficult to hit. When making an attack
                with a non-magical weapon against such a creature, your Warrior's to hit rolls are reduced by ${value}.
                Attacks with magical weapons are made as normal.
            </p>
        `,
    };
}
