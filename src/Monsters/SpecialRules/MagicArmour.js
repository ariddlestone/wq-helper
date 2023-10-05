export default function () {
    const armours = [
        {
            name: "Chaos Armour",
            description: `
                <p>
                    Every time the wearer is struck roll 1D6. On a score of 4+ the blow causes no damage. In addition,
                    the wearer has Magic Resistance 5+.
                </p>
            `,
        },
        {
            name: "Armour of Cursed Iron",
            description: `
                <p>
                    This armour adds the value of the attackers Strength to the wearer's Toughness, effectively
                    cancelling it out. If the attacker has a Strength of 5, for instance, the armour gives the wearer
                    +5 Toughness.
                </p>
            `,
        },
        {
            name: "Armour of Doom",
            description: `
                <p>
                    The magical field surrounding this armour and its wearer slows down any Warrior attacking the
                    wearer. Any Warrior attacking a Monster who wears Armour of Doom suffers -1 to hit and -1 Attacks.
                </p>
            `,
        },
        {
            name: "Arcane Armour of Destruction",
            description: `
                <p>
                    The powerful dark energies flowing within this armour strike back at its attackers. Each time a
                    Warrior attacks a Monster wearing this armour and causes damage roll 1D6. On a score of 1 the blow
                    is thrown back at the Warrior as a blast of magical energy. He immediately suffers the Wounds he has
                    just inflicted instead, modified for Toughness and Armour.
                </p>
            `,
        },
        {
            name: "Venom Armour",
            description: `
                <p>
                    At the end of every turn in which a Warrior remains adjacent to the wearer of this armour he stands
                    a chance of being poisoned by the venom that constantly oozes from it. Roll 1D6. If the score is 1-3
                    your Warrior takes 1D6 Wounds, with no modifiers for Toughness or Armour. This is Fatal Damage.
                </p>
            `,
        },
        {
            name: "Armour of Carnage",
            description: `
                <p>
                    This armour gives the wearer +2 Toughness. In addition, it has a bloodthirsty will of its own, and
                    forces its wearer into battle, even if he is actually dead. While the wearer lives the armour gives
                    him +1 Attacks. Upon the wearer's death roll 1D6 at the start of every subsequent turn. On a score
                    of 1 or 2 the armour crashes to the floor, empty and dead. On a score of 3+ the armour keeps
                    fighting by itself, animated by the powerful magic within it. The armour has the same profile as the
                    wearer, but only has 1 Attack. Any further Wounds inflicted on the armour have no effect at all.
                </p>
            `,
        },
    ];
    const armour = armours[Math.floor(Math.random() * armours.length)];
    return {
        name: "Magic Armour: " + armour.name,
        description: `
            <p>
                Some Monsters wear Magic Armour that confers special abilities on them, just like the magic armour that
                the Warriors possess. In the Monsters' case though these hell-forged items are evil and corrupted and
                will destroy any Warrior who tries to wear or take them.
            </p>
            ${armour.description}
        `,
    };
}
