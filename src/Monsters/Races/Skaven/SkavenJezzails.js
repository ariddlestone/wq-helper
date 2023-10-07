import Skaven from "../Skaven";
import ArmedWith from "../../SpecialRules/ArmedWith";

const description = "The jezzails of Clan Skryre are powerful, long-range missile weapons, firing warpstone charges " +
    "and capable of punching through the toughest armour.";

export function SkavenJezzail() {
    return {
        singularName: "Skaven Jezzail",
        pluralName: "Skaven Jezzails",
        description,
        race: Skaven,
        wounds: 6,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 1,
        gold: 300,
        armour: 1,
        damage: "1D6",
        specialRules: [
            ArmedWith([{
                name: "Jezzail (missile weapon)",
                description: `
                    <p>
                        Skaven jezzails are missile weapons and Skaven that carry them are placed as such. The jezzail
                        is a Strength 5 weapon that ignores up to 3 points of the victim's armour when determining
                        damage.
                    </p>
                `,
            }]),
        ],
    };
}

export default [
    {name: "Skaven Jezzails", constructor: SkavenJezzail},
];
