import Magic from "./Magic";

export default function (spellsPerTurn, modifier = 0) {
    let spells = [
        {
            minRoll: 1,
            maxRoll: 1,
            name: "Warp Power",
            description: `
                The Skaven uses the power of the warp to heal himself, curing 2D6 of his Wounds up to a maximum of his
                Starting Wounds. If the Skaven is already at his Starting Wounds score re-roll this result.
            `,
        },
        {
            minRoll: 2,
            maxRoll: 2,
            name: "Pestilent Breath",
            description: `
                The Skaven opens its jaws and black, pestilential fumes pour out and flood into the dungeon. Roll 1D6
                for each Warrior and add his Toughness to the score. If the score is greater than 7 he is not affected.
                If the score is equal to or less than 7 he suffers (1D3 x the dungeon level) Wounds, with no modifiers
                for Toughness or armour.
            `,
        },
        {
            minRoll: 3,
            maxRoll: 3,
            name: "Warp Lightning",
            description: `
                Screeching in fury, the Skaven points its clawed hand at one of the Warriors and then blasts him with a
                streak of warp lightning. Draw a Warrior counter to determine who is targeted. The bolt causes (2D6 +
                the Dungeon level) Wounds, with no modifier for armour.
            `,
        },
        {
            minRoll: 4,
            maxRoll: 4,
            name: "Wither",
            description: `
                A greenish pallid glow spreads from the Skaven's outstretched paw. All adjacent Warrior suffer (1D6 +
                the Dungeon level) Wounds, with no modifiers for Toughness or armour. If there are no Warriors adjacent
                to the Skaven re-roll this result.
            `,
        },
        {
            minRoll: 5,
            maxRoll: 5,
            name: "Putrefy",
            description: `
                The Warriors see their surroundings begin to rot and decay, with worms and maggots writhing upon the
                bodies of the dead and wounded. The hallucination created by the Skaven is terrifyingly real. Roll 1D6
                for each Warrior. On a score of 5 or 6 that Warrior is unaffected by the spell. On a score of 1, 2, 3 or
                4 that Warrior may do nothing at all in the next Warriors' Phase.
            `,
        },
        {
            minRoll: 6,
            maxRoll: 6,
            name: "Scorch",
            description: `
                Flames engulf one of the Warriors, turning him into an incandescent column of fire. Draw a Warrior
                counter to determine who is targeted. The flames cause 4D6 Wounds, with no modifiers for Toughness or
                armour.
            `,
        },
    ];

    return Magic(
        "Skaven",
        `
            At the start of each Monsters' Phase, a Skaven spellcaster may cast ${spellsPerTurn} of the following
            spells. Roll 1D6 on the following table to determine which spells are cast:
        `,
        spells,
        spellsPerTurn,
        modifier
    );
}
