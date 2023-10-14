import Magic from "./Magic";

export default function (spellsPerTurn, modifier = 0) {
    return Magic(
        "Necromantic",
        `
            At the start of each Monsters' Phase, a Necromancer may cast ${spellsPerTurn} of the following spells. Roll
            1D6 on the following table to determine which spells are cast:
        `,
        [
            {
                minRoll: 1,
                maxRoll: 1,
                name: "Winds of Death",
                description: `
                    Reduces all of the Warriors' Attacks by -1 for the next Warriors' Phase.
                `,
            },
            {
                minRoll: 2,
                maxRoll: 2,
                name: "Soul Drain",
                description: `
                    Inflicts 2D6 Wounds, with no modifiers for Toughness or armour, on a single Warrior. Use the Warrior
                    counters to determine which Warrior is affected.
                `,
            },
            {
                minRoll: 3,
                maxRoll: 3,
                name: "Deathchill",
                description: `
                    Reduces a single Warrior's Toughness by -2 . If this reduces his Toughness to zero he is killed and
                    may not be healed by any means except spells and magic items, etc., that can resurrect the dead. Use
                    the Warrior counters to determine which Warrior is affected.<br />
                    If the Necromancer and all of his followers are destroyed, any Warriors whose Toughness has been
                    reduced in this combat and are still alive have the damage to their Toughness restored.
                `,
            },
            {
                minRoll: 4,
                maxRoll: 4,
                name: "Summon Skeletons",
                description: `
                    The Necromancer summons 6 Skeletons. They are placed on the board immediately and may move and fight
                    this turn.
                `,
            },
            {
                minRoll: 5,
                maxRoll: 5,
                name: "Summon Ghouls",
                description: `
                    The Necromancer summons 6 Ghouls. They are placed on the board immediately and may move and fight
                    this turn.
                `,
            },
            {
                minRoll: 6,
                maxRoll: 6,
                name: "Summon Mummies",
                description: `
                    The Necromancer summons 1D6 Mummies. They are placed on the board immediately and may move and
                    fight this turn.
                `,
            },
        ],
        spellsPerTurn,
        modifier
    );
}
