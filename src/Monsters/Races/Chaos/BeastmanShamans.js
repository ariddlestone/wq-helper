import Chaos from "../Chaos";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Beastman Shamans are revered by the rest of their kind because of their ability to " +
    "summon the power of Chaos to cast crude but powerful magic spells.";

const beastmanMagic = (spells) => ({
    name: `Beastman Magic (${spells})`,
    description: `
        <p>
            A Beastman Shaman may cast ${spells} spells at the start of each Monsters' Phase. Roll 2D6 on the following
            table to determine which.
        </p>
        <table>
            <thead>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2-5</td>
                    <td>Failure</td>
                    <td>The Shaman fails to cast a spell.</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Battle Lust</td>
                    <td>
                        The Shaman gives an extra (1 x the Dungeon Level) Attacks to the Monsters in combat with the
                        Warriors, distributed as evenly as possible.
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Doombolt</td>
                    <td>
                        A bolt of black fire bursts from the Shaman's palm towards one of the Warriors. Draw a Warrior
                        counter to determine which Warrior is hit. The Doombolt inflicts (2 x the Dungeon Level) Wounds,
                        with no modifiers for Toughness or armour.
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Hand of Dust</td>
                    <td>
                        The Shaman may attack any single adjacent Warrior. If there is more than one eligible target
                        take a Warrior counter to determine which one the Shaman attacks. Roll 1D6 for the chosen
                        Warrior and add his Strength to the score. Roll 2D6 for the Shaman and add his Strength to the
                        score. The highest score wins. If the Warrior wins the spell fails.<br />
                        If the Shaman wins the Warrior suffers (2 x the Dungeon Level) Wounds with no modifiers for
                        Toughness or armour.<br />
                        If the Shaman is not in hand-to-hand combat ignore this result and re-roll on this table.
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Blade Wind</td>
                    <td>
                        The Shaman summons a storm of slashing blades. Take a Warrior counter to determine who is
                        affected. That Warrior suffers (the Dungeon Level) D6 Wounds, modified for Toughness and armour
                        as usual.
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Soul Drain</td>
                    <td>
                        The Shaman creates a storm of dark magic. Roll 1D6 for each Warrior adding his Toughness to the
                        score. If the total is equal to or more than the Dungeon Level he suffers no ill effects from
                        the spell. If the score is less than the Dungeon Level the Warrior suffers (1D6 + the Dungeon
                        Level) Wounds and the Shaman gains the same amount. The Shaman may never gain more Wounds than
                        he started with - any extra Wounds are lost in the warp.<br />
                        A Warrior reduced to zero Wounds by this spell is immediately killed and may not be brought back
                        to life by any means other than those spells and magic items that raise the dead.
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Arnizipal's Black Horror</td>
                    <td>
                        A black cloud issues from the Shaman's mouth, engulfing the Warriors in darkness. Roll 1D6 for
                        each Warrior adding his Strength to the score. If the total is 7 or more he suffers no ill
                        effects from the spell. If the score is 6 or less he suffers (the Dungeon Level) D6 Wounds, with
                        no modifier for armour.
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Malediction of Nagash</td>
                    <td>
                        The Shaman causes cuts to open up on the body of one of the Warriors. Draw a Warrior counter to
                        determine which Warrior is hit. For 1 turn that Warrior is unable to move, fire a missile
                        weapon, and is at -2 to all of his to hit rolls in close combat.<br />
                        Now, and at the start of each subsequent turn, the same Warrior loses (1 x the Dungeon Level)
                        Wounds, with no modifiers for Toughness or armour, until the Shaman is dead.
                    </td>
                </tr>
            </tbody>
        </table>
    `,
});

export function BeastmanShaman() {
    return {
        singularName: "Beastman Shaman",
        pluralName: "Beastman Shaman",
        description,
        race: Chaos,
        wounds: 26,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 5,
        strength: 3,
        toughness: 5,
        initiative: 4,
        attacks: 1,
        gold: 680,
        armour: 0,
        damage: "1D6",
        specialRules: [
            beastmanMagic(1),
            MagicWeapon(),
        ],
    };
}

export function BeastmanShamanChampion() {
    return {
        singularName: "Beastman Shaman Champion",
        pluralName: "Beastman Shaman Champions",
        description,
        race: Chaos,
        wounds: 34,
        move: 4,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 4,
        attacks: 1,
        gold: 1340,
        armour: 0,
        damage: "2D6",
        specialRules: [
            beastmanMagic(2),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export default [
    {name: "Beastman Shaman", constructor: BeastmanShaman},
    {name: "Beastman Shaman Champions", constructor: BeastmanShamanChampion},
];
