export default function () {
    return {
        name: "Poison",
        description: `
            <p>
                Some monsters have <em>Poison</em> attacks. If a warrior is reduced to 0 wounds by a Poison attack his
                strength is permanently reduced by -1 when he is healed to 1 or more wounds. If a warrior is reduced to
                0 strength he is killed and removed from play.
            </p>
        `,
    };
}
