export default function () {
    return {
        name: "Break",
        description: `
            <p>
                Some monsters are innately cowardly, and if a fight is going badly will turn tail and run. These
                monsters have a <em>Break</em> point.
            </p>
            <p>
                At the end of each turn during which one or more monsters with a Break point were killed, roll 1D6 for
                each different type which took casualties. If the score is greater than or equal to the remaining
                number of that type of monster, they break and run, vanishing into the shadows - remove them from the
                board.
            </p>
            <p>
                The warriors do not get the gold value for any monsters that run away, though they do get a treasure
                card at the end of the combat, as usual.
            </p>
        `,
    };
}
