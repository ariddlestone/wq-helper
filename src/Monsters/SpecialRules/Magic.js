export default function (type, value) {
    return {
        name: `${type} Magic (${value})`,
        description: `
            <p>
                Some Monsters have the ability to use Magic, although the spells available to them depend on their race.
                The descriptions of these Monsters contains the spells they use.
            </p>
            <p>
                Monsters with this ability can cast ${value} spells per turn. Monsters with spell-casting ability do not
                use Power in the same way as the Wizard.
            </p>
            <p>
                Magic-using Monsters are placed on the board as if they were using missile weapons and, unless otherwise
                stated, are always placed first.
            </p>
            <p>
                In addition, all magic using Monsters protect themselves with minor spells that make them harder to hit
                from a distance. All missile weapon attacks made against magic-using Monsters are at -1 on the to hit
                roll.
            </p>
        `,
    };
}
