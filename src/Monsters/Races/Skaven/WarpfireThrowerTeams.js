import Skaven from "../Skaven";
import ArmedWith from "../../SpecialRules/ArmedWith";

export function WarpfireThrowerTeam() {
    return {
        singularName: "Warpfire Thrower Team",
        pluralName: "Warpfire Thrower Teams",
        race: Skaven,
        wounds: 3,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 5,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 1,
        gold: 700,
        armour: 1,
        damage: "Special/1D6",
        specialRules: [
            ArmedWith([{
                name: "Warpfire Thrower (missile weapon)",
                description: `
                    <p>
                        Skaven Warpfire Thrower teams are placed as if they were armed with missile weapons. The
                        warpfire throwers that they carry consist of a tank of superheated warpstone connected to a gun
                        mechanism that can spray the tainted flame across a wide area. Each warpfire thrower requires a
                        team of two Skaven to use it. If one of the Skaven is killed the other cannot continue to use
                        the weapon and may only make a normal hand-to-hand attack from then on.
                    </p>
                    <p>
                        At the start of the Monsters' Phase draw a Warrior counter to determine which Warrior is
                        targeted by the team. If there is more than one team in combat, distribute their hits according
                        to the normal One-on-one rule.
                    </p>
                    <p>
                        Each time a warpfire thrower is fired, the flames form a 1-square wide corridor that travels
                        across the room in a straight line toward the target, hitting everything in its path.
                    </p>
                    <p>
                        If a model is hit by a warpfire thrower, it suffers 3D6 Wounds. If the dice come up with 2 or 3
                        natural 1's the warpfire thrower has misfired and you should roll on the following table:
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
                                <td>1-4</td>
                                <td>Kaboom!</td>
                                <td>
                                    The warpfire thrower explodes, causing 4D6 Wounds on every model in the room. Roll
                                    1D6 for each additional warpfire thrower in the room. On a score of 1, 2 or 3 it too
                                    blows up, causing the same damage and requiring you to make another 1D6 roll for
                                    each intact warpfire thrower, and so on.
                                </td>
                            </tr>
                            <tr>
                                <td>5-6</td>
                                <td>Click-whoosh!</td>
                                <td>
                                    The warpfire thrower backfires, causing 3D6 Wounds against its crew.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        In addition, roll 1D6 for each item of magical treasure the victim is carrying. On a roll of 1
                        the item is rendered useless for the rest of the dungeon. At the start of the next dungeon the
                        item may be used normally again.
                    </p>
                `,
            }]),
        ],
    };
}

export default [
    {name: "Warpfire Thrower Teams", constructor: WarpfireThrowerTeam},
];
