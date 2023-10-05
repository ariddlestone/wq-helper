export default function (value) {
    return {
        name: `Ignore Pain ${value}`,
        description: `
            <p>
                Some Monsters are so large that they can Ignore Pain caused by all but the most powerful blows. Each
                time a Warrior hits such a Monster in hand-to-hand combat or with a missile weapon subtract ${value}
                from the Wounds caused (in addition to subtracting its Toughness and any armour it is wearing, if
                applicable).
            </p>
        `,
    };
}
