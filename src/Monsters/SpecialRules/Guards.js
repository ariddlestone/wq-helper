export default function (value) {
    return {
        name: `Guards ${value}`,
        description: `
            <p>
                On certain occasions Monsters are listed as Guards because, as the term suggests, they are guarding one
                or more of the other Monsters that they are placed with. They must be placed so that they surround the
                Monster they are guarding.
            </p>
            <p>
                Once placed, Guards stand their ground and will not move towards the Warriors unless the Monster they
                are protecting is slain. They may fire any missile weapons they have as normal.
            </p>
            <p>
                If the Monster the Guards are protecting is slain they become so enraged that they get +1 Attack for the
                rest of the combat.
            </p>
        `,
    };
}
