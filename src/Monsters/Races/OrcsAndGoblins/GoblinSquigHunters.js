import OrcsAndGoblins from "../OrcsAndGoblins";

export function GoblinSquigHunter () {
    return {
        singularName: "Goblin Squig Hunter",
        pluralName: "Goblin Squig Hunters",
        description: "The Goblins that live in the caves and tunnels under the World's Edge Mountains hunt the Wild " +
            "Squigs that also live there. When trained (and even if they're not!) the Squigs are used as guard dogs " +
            "or herded into battle.",
        race: OrcsAndGoblins,
        wounds: 2,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 2,
        attacks: 1,
        gold: 25,
        armour: 0,
        damage: "1D6",
        specialRules: [
            {
                name: "Herd Squigs",
                description: `
                    <p>
                        Being rather vicious creatures, each Squig requires two Goblin Squig Hunters to control it,
                        moving it forward with a long, pointed stick called a 'prodder'.
                    </p>
                    <p>
                        When placing Goblin Hunters and Squigs on the board, place one Squig on the board first, then
                        the two Squig Hunters that mind it, then a second Squig and its two minders, and so on.
                    </p>
                    <p>
                        Each Squig Hunter in the team is a normal Goblin, but they must move as a pair and remain in
                        adjacent squares. To keep control of their Squig both members of the team must be present on the
                        same board section as the Squig.
                    </p>
                    <p>
                        As long as there are two Squig Hunters for every Squig on the board section, the Squigs never
                        fall asleep and only attack another Squig on a natural roll of a 6 (see the Squig entry in the
                        Monsters section of the Bestiary). If there are not enough Squig Hunters to control a Squig it
                        becomes wild.
                    </p>
                    <p>
                        If both Squig Hunters are present in a team and they attack a Warrior with their prodder they
                        inflict an extra 1D6 Wounds on top of their normal damage roll.
                    </p>
                `,
            },
        ],
    };
}

export default [
    {name: "Goblin Squig Hunters", constructor: GoblinSquigHunter},
];
