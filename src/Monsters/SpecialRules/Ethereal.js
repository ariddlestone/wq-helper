export default function (value) {
    return {
        name: `Ethereal ${value}`,
        description: `
            <p>
                Some Monsters, such as Wights, are insubstantial, ethereal beings. Such Monsters can never be pinned,
                and may move freely through other Monsters and obstacles as if they weren't there. In addition, when
                making an attack with a non-magical weapon against such a creature, your Warrior's to hit rolls are
                reduced by ${value}. Attacks with magic weapons are made as normal.
            </p>
        `,
    };
}
