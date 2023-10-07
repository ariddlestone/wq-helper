import Undead from "../Undead";
import AmbushMagic from "../../SpecialRules/AmbushMagic";
import Fly from "../../SpecialRules/Fly";
import NecromanticMagic from "../../SpecialRules/NecromanticMagic";
import MagicArmour from "../../SpecialRules/MagicArmour";
import MagicDispel from "../../SpecialRules/MagicDispel";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicResistance from "../../SpecialRules/MagicResistance";
import MagicWeapon from "../../SpecialRules/MagicWeapon";

const description = "Vampires are human in appearance, but their blood is tainted with supernatural energy. They are" +
    " undead immortals who must spend the hours of daylight resting in darkness, for strong sunlight burns their" +
    " flesh and destroys them.";

const VampireAbilities = {
    name: "Vampire Abilities",
    description: `
        <p>
            In addition to their hand-to-hand attacks, Vampires may make a single special attack each turn. At the start
            of the Monsters' Phase roll 1D6 on the following table to determine what the Vampire does this turn.
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
                    <td>1</td>
                    <td>Transfix</td>
                    <td>
                        The Vampire transfixes one of the Warriors with his steely glare. Draw a Warrior counter to
                        determine who is affected. Roll 1D6 and add that Warrior's Initiative. If the score is 11 or
                        less he is transfixed for 1 turn. While transfixed the Warrior may do absolutely nothing and any
                        Monster in combat with him automatically hits.
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Regenerate</td>
                    <td>
                        The Vampire regains 3D6 Wounds at the end of this turn, even if this takes him above his
                        Starting Wounds score. The Vampire cannot regenerate if it is killed.
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bite</td>
                    <td>
                        The Vampire bites all adjacent Warriors. Each suffers (the Dungeon level) Wounds, with no
                        deductions for Toughness or armour. The Vampire then gains the total number of Wounds caused,
                        adding them to his own Wounds, even if this takes him above his Starting Wounds score.
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ethereal</td>
                    <td>
                        The Vampire become Ethereal 2 until the start of the next Monsters' Phase. For the duration of
                        this state he has a Chill 3 attack rather than his normal hand-to-hand attacks.
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Cloak of Darkness</td>
                    <td>
                        The Vampire gathers a mantle of blackness around him. Until the start of the next Monsters'
                        Phase all attacks against him are made at -1 to hit. In addition, all Warriors on the same board
                        section as the Vampire lose 1 Attack in the next Warriors' Phase.
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Turns to Smoke</td>
                    <td>
                        At the end of the Monsters' Phase, after making any hand-to-hand attack, the Vampire vanishes in
                        a pall of smoke. Remove the model from the board. At the start of the next Monsters' Phase take
                        a Warrior counter and place the Vampire back on the board next to that Warrior. In addition, if
                        the Vampire left the board on less than full Wounds he returns fully healed and back up to his
                        Starting Wounds score.
                    </td>
                </tr>
            </tbody>
        </table>
    `,
};

export function VampireCount() {
    return {
        singularName: "Vampire Count",
        pluralName: "Vampire Counts",
        description,
        race: Undead,
        wounds: 30,
        move: 6,
        weaponSkill: 7,
        ballisticSkill: 2,
        strength: 7,
        toughness: 6,
        initiative: 8,
        attacks: 3,
        gold: 2000,
        armour: 3,
        damage: "2D6/3D6(5+)",
        specialRules: [
            AmbushMagic("A"),
            Fly(),
            NecromanticMagic(2),
            MagicResistance(5),
            VampireAbilities,
        ],
    };
}

export function VampireLord() {
    return {
        singularName: "Vampire Lord",
        pluralName: "Vampire Lords",
        description,
        race: Undead,
        wounds: 42,
        move: 6,
        weaponSkill: 8,
        ballisticSkill: 1,
        strength: 7,
        toughness: 6,
        initiative: 9,
        attacks: 4,
        gold: 3750,
        armour: 3,
        damage: "3D6",
        specialRules: [
            AmbushMagic("A"),
            Fly(),
            NecromanticMagic(3),
            MagicResistance(5),
            VampireAbilities,
        ],
    };
}

export function VampireLordNecromancer() {
    return {
        singularName: "Vampire Lord Necromancer",
        pluralName: "Vampire Lord Necromancers",
        description,
        race: Undead,
        wounds: 38,
        move: 6,
        weaponSkill: 7,
        ballisticSkill: 2,
        strength: 6,
        toughness: 5,
        initiative: 8,
        attacks: 3,
        gold: 4750,
        armour: 4,
        damage: "4D6",
        specialRules: [
            AmbushMagic("A"),
            MagicDispel(4),
            Fly(),
            NecromanticMagic(4),
            MagicResistance(4),
            MagicArmour(),
            MagicItem(2),
            MagicWeapon(),
            VampireAbilities,
        ],
    };
}

export default [
    {name: "Vampire Counts", constructor: VampireCount},
    {name: "Vampire Lords", constructor: VampireLord},
    {name: "Vampire Lord Necromancers", constructor: VampireLordNecromancer},
]
