import Chaos from "../Chaos";
import Fly from "../../SpecialRules/Fly";
import GreaterDaemon from "../../SpecialRules/GreaterDaemon";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import MagicDrain from "../../SpecialRules/MagicDrain";

const description = `
    <p>
        Bloodthirsters are huge terrifying monsters, the greatest and mostly deadly of all Khorne's daemons. Their
        master is the Chaos God of Battle, and Bloodthirsters are the greatest fighters of all daemon-kind. They are
        savage, bellowing creatures, with the heads of ferocious dogs and snarling teeth. Their blood-stained fur is
        either red or black, and their armour is ruddy bronze and black iron.
    </p>
    <p>
        A Bloodthirster carries two weapons, an Axe of Khorne and a long, barbed lash. The axe is an enchanted daemon
        weapon, a living thing that thirsts for blood and slaughter. Although Bloodthirsters have no magical powers they
        are exceptionally strong and savage fighters, and a single daemon of this kind is a match for an entire mortal
        army.
    </p>
`;

export function Bloodthirster () {
    return {
        singularName: "Bloodthirster",
        pluralName: "Bloodthirsters",
        description,
        race: Chaos,
        wounds: 125,
        move: 6,
        weaponSkill: 10,
        ballisticSkill: "Auto",
        strength: 8,
        toughness: 7,
        initiative: 8,
        attacks: 10,
        gold: 8000,
        armour: 0,
        damage: "8D6",
        specialRules: [
            {
                name: "Axe of Khorne",
                description: `
                    <p>
                        Causes +2 Wounds. In addition, if the to hit roll of a blow made with an Axe of Khorne is a
                        natural 6 the blow causes double damage.
                    </p>
                `,
            },
            {
                name: "Daemon Whip",
                description: `
                    <p>
                        At the start of each turn draw a Warrior counter to determine who the Bloodthirster ensnares
                        with the Daemon Whip. That model is immediately moved to a square adjacent to the Bloodthirster,
                        moving other models out of the way as necessary.
                    </p>
                    <p>
                        If the Bloodthirster manages to kill a Warrior and still has some Attacks left he may switch to
                        another target to use them.
                    </p>
                `
            },
            {
                name: "Drain Magic",
                description: `
                    <p>
                        As a powerful servant of Khorne, a Bloodthirster detests magic and has the ability to drain it
                        from nearby spellcasters. At the start of each Monsters' Phase roll 3D6. The Wizard immediately
                        loses that many points of Power. Each point over the amount required to drain all the Wizard's
                        Power inflicts 1 Wound, with no modifiers for Toughness and armour. The Wizard may give up any
                        or all of his Power Tokens to fulfil the deficit if he wishes.
                    </p>
                `,
            },
            Fly(),
            GreaterDaemon(14),
            IgnoreBlows(3),
            IgnorePain(12),
            LargeMonster(),
            MagicDrain(5),
        ],
    };
}

export default [
    {name: "Bloodthirsters", constructor: Bloodthirster},
];
