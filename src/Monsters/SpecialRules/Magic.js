export default function (type, description, spells, spellsPerTurn, modifier) {
    if (modifier !== 0) {
        const minRoll = spells.reduce((minRoll, spell) => Math.min(minRoll, spell.minRoll), Number.MAX_SAFE_INTEGER);
        const maxRoll = spells.reduce((maxRoll, spell) => Math.max(maxRoll, spell.maxRoll), Number.MIN_SAFE_INTEGER);
        spells = spells.map((spell) => {
            spell.minRoll = (spell.minRoll === minRoll) ? spell.minRoll : (spell.minRoll - modifier);
            spell.maxRoll = (spell.maxRoll === maxRoll) ? spell.maxRoll : (spell.maxRoll - modifier);
            return spell;
        });
        spells = spells.filter(spell => spell.minRoll <= spell.maxRoll);
    }

    const modifierText = (modifier > 0)
        ? (", +" + modifier)
        : (
            (modifier < 0)
                ? (", -" + -modifier)
                : ""
        );

    return {
        name: `${type} Magic (${spellsPerTurn + modifierText})`,
        description: `
            <p>
                Magic-using Monsters are placed on the board as if they were using missile weapons and, unless otherwise
                stated, are always placed first.
            </p>
            <p>
                In addition, all magic using Monsters protect themselves with minor spells that make them harder to hit
                from a distance. All missile weapon attacks made against magic-using Monsters are at -1 on the to hit
                roll.
            </p>
            <p>
                Monsters with spell-casting ability do not use Power in the same way as the Wizard.
            </p>
            <p>${description}</p>
            <table>
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${spells.map(spell => `
                        <tr>
                            <td>${spell.minRoll + (spell.maxRoll > spell.minRoll ? `-${spell.maxRoll}` : "")}</td>
                            <td>${spell.name}</td>
                            <td>${spell.description}</td>
                        </tr>
                    `).join("\n")}
                </tbody>
            </table>
        `,
    };
}
