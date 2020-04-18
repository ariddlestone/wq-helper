export default function () {
    return {
        name: "Fly",
        description: `
            <p>
                Some monsters are able to <em>Fly</em>, and thus can move around the board with a greater freedom.
                Monsters that can fly may move to any empty square on the board within their movement range, ignoring
                all obstacles in their way.
            </p>
            <p>
                Monsters that fly may not be pinned in combat, and may change their target each turn. Draw a warrior
                counter at the start of each monsters' phase for each flying monster to determine which warrior it
                attacks. (If there isn't an empty square next to the intended victim, draw again.)
            </p>
        `,
    };
}
