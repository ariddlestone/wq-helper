export default function (race) {
    return {
        name: `Hate ${race}`,
        description: `
            <p>
                Some monsters <em>Hate</em> certain types of warrior. Dark Elves, for instance, Hate Elves. If a monster
                Hates a particular warrior, it will attack him with unbridled ferocity. The monster gains +1 attack when
                fighting that warrior, as he slashes and hacks in a mad bloodlust. His attacks are so wild, however,
                that they are made at -1 to hit.
            </p>
        `,
    };
}
