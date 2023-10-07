import OrcsAndGoblins from "../OrcsAndGoblins";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicResistance from "../../SpecialRules/MagicResistance";
import Tattoos from "../../SpecialRules/Tattoos";
import Magic from "../../SpecialRules/Magic";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicDispel from "../../SpecialRules/MagicDispel";
import image from "../../../assets/monsters/orcs-and-goblins/orc-shaman.webp";

const description = "Orc Shamans are more powerful than their Goblin cousins, soaking up the psychic energy" +
    " of the greenskins around them to create raw Waaagh! magic to hurl at their foes.";

function OrcMagic(spellsPerTurn, modifier = 0) {
    return Magic(
        "Orc",
        `
            An Orc Shaman may cast spells at the start of each monsters' phase. Roll 2D6 on the following table to
            determine which spells are cast. This Orc can cast ${spellsPerTurn} spell${spellsPerTurn > 1 ? "s" : ""} per
            turn.
        `,
        [
            {
                minRoll: 2,
                maxRoll: 2,
                name: "Failure",
                description: `<p>The Shaman fails to cast a spell.</p>`,
            },
            {
                minRoll: 3,
                maxRoll: 3,
                name: "'Ere We Go",
                description: `
                    <p>
                        The Shaman floods his allies with power. All Orcs and Goblins on the board get +1 attacks this
                        turn and +1 toughness next turn.
                    </p>
                `,
            },
            {
                minRoll: 4,
                maxRoll: 4,
                name: "Waaagh!",
                description: `
                    <p>
                        Roll 2D6 for each warrior spellcaster on the board. If the score is equal to or greater than the
                        warrior's battle level he is knocked to the ground for 1 turn, during which time he may do
                        nothing.
                    </p>
                `,
            },
            {
                minRoll: 5,
                maxRoll: 5,
                name: "Brain Bursta",
                description: `
                    <p>
                        A bolt of power erupts from the Shaman's head. Draw a warrior counter to determine which warrior
                        is targeted. Roll 2D6. If the score is greater than the target's battle level he is hit - roll
                        1D6:
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>
                                The warrior's head explodes, killing him instantly.
                            </td>
                        </tr>
                        <tr>
                            <th>2-5</th>
                            <td>
                                The warrior suffers (2 x the dungeon level) wounds, with no modifiers
                                for toughness or armour.
                            </td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>
                                The warrior suffers 1D6 wounds, with no modifiers for toughness or armour.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                `,
            },
            {
                minRoll: 6,
                maxRoll: 6,
                name: "Hand of Gork",
                description: `
                    <p>
                        This spell moves the Shaman and any allied monsters using missile weapons out of hand-to-hand
                        combat with the warriors. Move the monsters so that they are no longer adjacent to the warriors,
                        moving other monsters to make room if necessary. If the Shaman is not in hand-to-hand combat,
                        re-roll this result.
                    </p>
                `,
            },
            {
                minRoll: 7,
                maxRoll: 7,
                name: "Fist of Gork",
                description: `
                    <p>
                        The Shaman's arms become enwrapped with glowing bands of power. Draw a warrior counter to
                        determine which warrior is targeted. That warrior suffers 1D6 at the Shaman's strength +4.
                    </p>
                `,
            },
            {
                minRoll: 8,
                maxRoll: 8,
                name: "Da Krunch",
                description: `
                    <p>
                        One of the warriors is stamped on by the mighty foot of Gork. Draw a warrior counter to
                        determine which warrior is targeted. That warrior suffers 1D6+10 wounds.
                    </p>
                `,
            },
            {
                minRoll: 9,
                maxRoll: 9,
                name: "Mork Save Uz!",
                description: `
                    <p>
                        Roll 1D6 for each spellcasting warrior. On a roll of 4+ all of that warrior's remaining points
                        of power are lost this turn. This does not affect any innate stored power.
                    </p>
                `,
            },
            {
                minRoll: 10,
                maxRoll: 12,
                name: "'Eadbutt",
                description: `
                    <p>
                        The Shaman magically 'eadbutts one of the warrior spellcasters. If there is more than one
                        spellcaster, draw a warrior counter to determine which warrior is targeted. Roll (1D6 + the
                        dungeon level) for the Shaman, and (1D6 + battle level) for the target. If the Shaman wins or it
                        is a draw, add the two dice together: the target takes that many wounds, with no modifiers for
                        toughness or armour, and cannot cast any magic next turn. If the warrior wins the spell has no
                        effect.
                    </p>
                `,
            },
        ],
        spellsPerTurn,
        modifier
    );
}

export function OrcShaman() {
    return {
        singularName: "Orc Shaman",
        pluralName: "Orcs Shamans",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 16,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 590,
        armour: 0,
        damage: "1D6",
        specialRules: [
            OrcMagic(1),
            MagicResistance(6),
            MagicWeapon(),
        ],
    };
}

export function OrcShamanChampion() {
    return {
        singularName: "Orc Shaman Chamion",
        pluralName: "Orcs Shaman Champions",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 20,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 1180,
        armour: 2,
        damage: "1D6 / 2D6 (5+)",
        specialRules: [
            OrcMagic(3),
            MagicResistance(5),
            MagicWeapon(),
        ],
    };
}

export function OrcShamanLord() {
    return {
        singularName: "Orc Shaman Lord",
        pluralName: "Orcs Shaman Lords",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 42,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 5,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 3,
        gold: 2870,
        armour: 2,
        damage: "2D6 / 3D6 (5+)",
        specialRules: [
            OrcMagic(3),
            MagicDispel(5),
            MagicResistance(4),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function SavageOrcShaman() {
    return {
        singularName: "Savage Orc Shaman",
        pluralName: "Savage Orcs Shamans",
        description,
        image,
        race: OrcsAndGoblins,
        wounds: 16,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 590,
        armour: 0,
        damage: "1D6",
        specialRules: [
            OrcMagic(1),
            MagicResistance(6),
            MagicWeapon(),
            Tattoos(6),
        ],
    };
}

export default [
    {name: "Orc Shamans", constructor: OrcShaman},
    {name: "Orc Shaman Champions", constructor: OrcShamanChampion},
    {name: "Orc Shaman Lords", constructor: OrcShamanLord},
    {name: "Savage Orc Shamans", constructor: SavageOrcShaman},
];
