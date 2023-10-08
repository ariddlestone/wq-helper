import Magic from "./Magic";

export default function (spellsPerTurn, modifier = 0) {
    const spells = [
        {
            minRoll: 1,
            maxRoll: 1,
            name: "Doomroar",
            description: `
            The Chaos Dwarf Sorcerer takes on the shape of the mighty Bull God Hashut and, with a shake of his horned
            head, gives a terrifying roar that goads his minions into action. This turn all Monsters get +1 Attacks.
            `,
        },
        {
            minRoll: 2,
            maxRoll: 2,
            name: "Eruption",
            description: `
            The ground beneath one of the Warrior's feet erupts in a plume of magma. Draw a Warrior counter to
            determine which Warrior is affected. He suffers 5D6 Wounds, modified for Toughness and armour as usual.
            `,
        },
        {
            minRoll: 3,
            maxRoll: 3,
            name: "Ash Cloud",
            description: `
            The dungeon is suddenly filled with clouds of smoke and ash. All of the Warriors are at -2 on their to hit
            rolls for the next Warriors' Phase.
            `,
        },
        {
            minRoll: 4,
            maxRoll: 4,
            name: "Sorcerer's Curse",
            description: `
            Cackling hideously the Chaos Dwarf Sorcerer utters a terrible curse on one of the Warriors. Draw a Warrior
            counter to determine who is affected. Unless he is given a healing potion or a healing spell is cast on him
            immediately the cursed Warrior is turned to stone and is out of the game. If he is given treatment, roll
            1D6. On a score of 1. 2, 3 or 4 the Warrior is at -1 Movement, -1 Initiative and -1 to hit until the
            Sorcerer is dead, when he returns to normal. On a score of 5 or 6 the spell has no effect at all.
            `,
        },
        {
            minRoll: 5,
            maxRoll: 5,
            name: "Lava Storm",
            description: `
            With a majestic sweep of his arm the Sorcerer creates a stream of balls of molten lava. There are 2D6 balls
            and they are distributed amongst the Warriors evenly. Each causes 2D6 Wounds, with no modifier for armour.
            `,
        },
        {
            minRoll: 6,
            maxRoll: 6,
            name: "Flames of Azgorh",
            description: `
            The Sorcerer breathes out whirling tendrils of flame. Draw a Warrior counter to determine who is attacked.
            The target and every model adjacent to him, whether friend or foe, takes 2D6 Wounds, with no modifiers for
            Toughness or armour. Note that the Chaos Dwarf Sorcerer is the only model immune to the effects of the
            spell.
            `,
        },
    ];

    return Magic(
        "Chaos Dwarf",
        `
            At the start of each Monsters' Phase, a Chaos Dwarf spellcaster may cast ${spellsPerTurn} of the following
            spells. Roll 1D6 on the following table to determine which spells are cast:
        `,
        spells,
        spellsPerTurn,
        modifier
    );
}
