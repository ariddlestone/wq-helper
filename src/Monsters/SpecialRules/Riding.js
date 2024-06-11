export default function (mountName) {
    return {
        name: `Riding ${mountName}`,
        description: `
            <p>
                This monster is <em>Riding</em> a ${mountName}.
            </p>
            <p>
                Choose whether your warrior attacks the mount or the rider.
            </p>
        `,
    };
}
