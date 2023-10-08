import Giants from "../Giants";
import Fear from "../../SpecialRules/Fear";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import NeverPinned from "../../SpecialRules/NeverPinned";

const description = "Giants are, as their name suggests, very big. However, they are not especially bright: in fact, " +
    "many are positively dim-witted. They are notorious drunkards and regard anything smaller than themselves as " +
    "potential food, including Men and other intelligent creatures.";

const GiantAttacks = {
    name: "Giant Attacks",
    description: `
        <p>
            In addition to their hand-to-hand attacks, Giants may make a single special attack each turn. At the start
            of the Monsters' Phase roll 1D6 on the following table to determine what the Giant does this turn.
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
                    <td>Thump with Club</td>
                    <td>
                        Because of his reach the Giant can hit any Warrior up to two squares away. Take a Warrior
                        counter to determine which Warrior is attacked. The Giant makes 1D6 attacks against the target,
                        rolling to hit as normal. Calculate damage as normal but ignore any modifier for the target's
                        armour.
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Swing with Club</td>
                    <td>
                        Because of his reach the Giant hits all of the Warriors up to two squares away. Roll 3D6 for
                        each eligible target. Each dice that scores a 4,5 or 6 causes that many Wounds, with no modifier
                        for armour. Any dice that scores 1, 2 or 3 misses as the Warrior manages to avoid the mighty
                        weapon.
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Kick Down Corridor</td>
                    <td>
                        The Giant raises a huge booted foot and drop-kicks an adjacent Warrior into the darkness. If
                        there is more than one eligible target draw a Warrior counter to determine who is hit. The
                        Warrior is kicked up to 7 squares in a straight line directly away from the Giant. If he hits a
                        wall before reaching this distance he suffers 1D6 Wounds, with no modifier for armour, for each
                        square short of 7 he flew, plus the Giant's Strength of 7. <br/>
                        If the booted Warrior flies 2 squares then hits a wall, for instance, he suffers (7-2)=5D6
                        Wounds, plys 7 for the Giant's strength, with no modifier for armour (total roll therefore
                        equals 5D6+7).
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Pick Up</td>
                    <td>
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
                                    <td>Squeeze</td>
                                    <td>
                                        The Giant squeezes the Warrior with his mighty fist. The Warrior takes 7D6 Wounds.
                                        Roll again on this sub-table.
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Hurl ar Warriors</td>
                                    <td>
                                        The Giant picks up the Warrior and hurls him at his companions Take a Warrior
                                        counter to see which Warrior is targeted. Roll 7D6 and separate those that have an
                                        even score from those that have an odd score. The Warrior being thrown suffers a
                                        number of Wounds equal to the sum of the even dice, while the targeted Warrior
                                        suffers a number of Wounds equal to the sum of the odd dice. Neither Warrior gets
                                        any modifiers on the damage roll for Toughness or armour. The thrown Warrior is
                                        placed prone in the square originally occupied by the target Warrior. The target
                                        Warrior is pushed into an adjacent square, shuffling other models around as
                                        necessary.
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Smash Against the Roof</td>
                                    <td>
                                        The Giant grabs the Warrior by the feet to get a good swing and begins to smash
                                        him repeatedly against the roofof the cave in a cheerfully enthusiastic fashion.
                                        This does the Warrior no good at all. The Giant smashes the Warrior against the
                                        roof 1D6 times, inflicting 7 Wounds, with no modifiers for Toughness or armour,
                                        each time. Then roll on this sub-table again.
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Chew</td>
                                    <td>
                                        The Giant begins to chew on the Warrior with teeth the size and shape of old
                                        tombstones. The Warrior suffers 1D6 Wounds, with no modifiers for Toughness or
                                        armour. If the score on the dice is a 2, 3 4, 5 or 6 the Giant continues to chew
                                        the Warrior next turn, even if he is at 0 Wounds or less. Roll another 1D6 for
                                        Wounds. This process continues until the roll for Wounds is a 1 at which point
                                        the Giant finds a gristly bit, loses interest and drops the Warrior in the
                                        square he got him from. Place the Warrior prone. <br/>
                                        If the Warrior is reduced to -50 Wounds the Giant swallows him whole,
                                        effectively taking him out the game.
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Stuff into Bag</td>
                                    <td>
                                        The Giant picks up the Warrior and pops him into his
                                        bag, saving him for later. The inside of the bag is smelly and dark,
                                        full of all sorts of horrible things. In one corner Is a wizened old
                                        Dwarf Prospector, who wearily gives the Warrior a key and says
                                        '.This is the key to the portcullis...” in a tired and cracked voice. <br/>
                                        The Warrior suffers no ill effects as long as the Giant has other foes
                                        to fight. If the Giant kills all of the other Warriors he is carried off
                                        and eaten at the Giant's leisure. He may escape from the bag once the
                                        Giant is killed: place him in any empty square on the same board
                                        section. Once free he remains out of action for 1 turn due to shock.
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Snatch and Grab</td>
                                    <td>
                                        The Giant pops the Warrior into his bag, as
                                        above. As it's a long time since he had the prospect of such a juicy
                                        succulent feast the Giant reaches down for another Warrior
                                        immediately. Make another 1D6 roll on this sub-table.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Jump Up and Down</td>
                    <td>
                        Striking sparks off the stone floor with his hobnailed feet, the Giant jumps up and down on any
                        single Warrior in an adjacent square. If there is more than one eligible target draw a Warrior
                        counter to determine which Warrior is attacked. The chosen Warrior suffers 1D6 hits, taking
                        damage for each hit as normal. <br/>
                        If the target is reduced to 0 Wounds the Giant will make another 1D6 jump attacks on the next
                        nearest adjacent Warrior. This process continues until the Giant fails to kill a Warrior within
                        the number of attacks he has rolled or he has reduced all adjacent Warriors to 0 Wounds.
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Yell and Bawl</td>
                    <td>
                    Feeling a good shout coming on, the Giant bends over until his head is at the same level as the
                    Warriors and proceeds to yell and bellow at the top of his voice. <br/>
                    Roll 2D6 for each Warrior. If the total is equal to or greater than the sum of the Warrior's
                    Toughness and Strength he is knocked prone by the blast. He takes no Wounds from the attack.
                    </td>
                </tr>
            </tbody>
        </table>
    `,
};

export function Giant() {
    return {
        singularName: "Giant",
        pluralName: "Giants",
        description,
        race: Giants,
        wounds: 64,
        move: 6,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 7,
        toughness: 6,
        initiative: 3,
        attacks: "Special",
        gold: 2000,
        armour: 5,
        damage: "5D6",
        specialRules: [
            Fear(11),
            GiantAttacks,
            IgnoreBlows(5),
            IgnorePain(10),
            LargeMonster,
            NeverPinned,
        ],
    };
}

export default [
    {name: "Giants", constructor: Giant},
];