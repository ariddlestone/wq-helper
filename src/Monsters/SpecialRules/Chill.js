export default function (value) {
    return {
        name: `Chill ${value}`,
        description: `
            <p>
                Some Monsters make a special Chill attack rather than a normal hand-to-hand combat attack. Such Monsters
                make a to hit roll as normal, but when determining damage they simply cause ${value}D6 Wounds with no
                modifiers for Toughness or armour.
            </p>
            <p>
                In addition, if the target is reduced to 0 Wounds by a Chill attack he is immediately killed and may
                only be healed by spells and magic items that actually raise their target from the dead rather than heal
                him, such as the Resurrection Spell.
            </p>
        `,
    };
}
