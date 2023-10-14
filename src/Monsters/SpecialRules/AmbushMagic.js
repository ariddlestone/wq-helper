export default function (roll) {
    if (typeof roll === "number") {
        roll = roll + "+";
    }
    return {
        name: `Ambush, Magic ${roll}`,
        description: `
            <p>
                Some monsters are able to <em>Ambush</em> the warriors, springing from the darkness and attacking them
                before they have the chance to react. Some monsters are blindingly fast at making their attacks, and can
                make a Magic Ambush.
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
                placed and make one set of attacks in that phase <em>and</em> attack in the monsters' phase. Once such
                monsters have sprung their ambush, they fight only in the monsters' phase from then on, as normal.
            </p>
            <p>
                A Magic Ambush is so fast that if the monsters succeed it is impossible even for the wizard (or any
                other spellcaster) to unleash a spell before their attacks start! In addition, if the monster making the
                Magic Ambush is a spellcaster, in the first turn it may cast an extra set of spells as soon as it is
                placed.
            </p>
        `,
    };
}

export function AmbushMagicModifier(specialRule, roll) {
    if (typeof roll === "number") {
        roll += "+";
    }
    return {
        name: specialRule.name + ` (Ambush, Magic ${roll})`,
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
                placed and make one set of attacks in that phase <em>and</em> attack in the monsters' phase. Once such
                monsters have sprung their ambush, they fight only in the monsters' phase from then on, as normal.
            </p>
            <p>
                A Magic Ambush is so fast that if the monsters succeed it is impossible even for the wizard (or any
                other spellcaster) to unleash a spell before their attacks start! In addition, if the monster making the
                Magic Ambush is a spellcaster, in the first turn it may cast an extra set of spells as soon as it is
                placed.
            </p>
        `,
    };
}
