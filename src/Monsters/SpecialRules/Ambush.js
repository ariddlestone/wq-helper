export default function (roll) {
    if (typeof roll === "number") {
        roll += "+";
    }
    return {
        name: `Ambush ${roll}`,
        description: `
            <p>
                Some monsters are able to <em>Ambush</em> the warriors, springing from the darkness and attacking them
                before they have the chance to react.
            </p>
            ${roll === "A"
                ? `
                    <p>
                        This monster automatically makes a successful ambush attack when placed on the board.
                    </p>
                `
                : `
                    <p>
                        This monster makes a successful ambush attack on a 1D6 roll of ${roll} when placed on the board.
                    </p>
                `
            }
            <p>
                Monsters that successfully carry out an Ambush may ignore the rule about waiting until the next
                monsters' phase before they attack. If the monsters appear in the power phase, for instance, they are
                placed and make on set of attacks in that phase <em>and</em> attack in the monsters' phase. Once such
                monsters have sprung their ambush, they fight only in the monsters' phase from then on, as normal.
            </p>
        `,
    };
}

export function AmbushModifier(specialRule, roll) {
    if (typeof roll === "number") {
        roll += "+";
    }
    return {
        name: specialRule.name + ` (Ambush ${roll})`,
        description: `
            ${specialRule.description}
            ${roll === "A"
                ? `
                    <p>
                        This monster automatically makes a successful ambush with this attack when placed on the board.
                    </p>
                `
                : `
                    <p>
                        This monster makes a successful ambush with this attack on a 1D6 roll of ${roll} when placed on
                        the board.
                    </p>
                `
            }
            <p>
                Monsters that successfully carry out an Ambush may ignore the rule about waiting until the next
                monsters' phase before they attack. If the monsters appear in the power phase, for instance, they are
                placed and make on set of attacks in that phase <em>and</em> attack in the monsters' phase. Once such
                monsters have sprung their ambush, they fight only in the monsters' phase from then on, as normal.
            </p>
        `,
    };
}
