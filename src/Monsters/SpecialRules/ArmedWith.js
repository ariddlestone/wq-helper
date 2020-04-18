export default function (values) {
    const total = values.reduce((sum, item) => sum + (item.weight || 1), 0);
    let running = Math.floor(Math.random() * total);
    let index;
    for(index = 0; index < values.length; index++) {
        running -= (values[index].weight || 1);
        if(running < 0) {
            break;
        }
    }
    const value = values[index];
    const description = values.length === 1
        ? `
            <p>
                These monsters are armed with:
                <ul>
                    <li>${value.name}</li>
                </ul>
            </p>
        `
        : `
            <p>
                Some monsters may be <em>Armed With</em> a choice of weapons.
            </p>
            <p>
                These monsters could have been armed with any of the following:
                <ul>
                    ${values.map(value => `
                    <li>${value.name}</li>
                    `).join('')}
                </ul>
            </p>
        `;
    return {
        name: `Armed with ${value.name}`,
        description,
    };
}
