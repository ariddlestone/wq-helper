export default function (monster) {
    return {
        name: `Riding ${monster.singularName}`,
        description: `
            <p>
                This monster is <em>Riding</em> a ${monster.singularName}.
            </p>
            <p>
                Choose whether your warrior attacks the mount or the rider.
            </p>
        `,
    };
}
