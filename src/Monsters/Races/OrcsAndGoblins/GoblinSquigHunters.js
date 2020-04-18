import OrcsAndGoblins from "@/Monsters/Races/OrcsAndGoblins";

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
                        moving it forward with a long, pointed stick called a &lsqb;prodder&rsquo;.
                    </p>
                `,
            },
        ],
    };
}
