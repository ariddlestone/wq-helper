import Skaven from "../Skaven";
import ArmedWith from "../../SpecialRules/ArmedWith";

const description = "A poisoned wind globe is a fragile crystal sphere filled with a lethal warpstone gas. When the " +
    "globe is shattered a yellowish-green vapour billows out to fill the area.";

export function SkavenPoisonGlobadier() {
    return {
        singularName: "Poison Globadier",
        pluralName: "Poison Globadiers",
        description,
        race: Skaven,
        wounds: 4,
        move: 5,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        initiative: 4,
        attacks: 1,
        gold: 200,
        armour: 0,
        damage: "Special",
        specialRules: [
            ArmedWith([{
                name: "Poison Wind Globes (missile weapon)",
                description: `
                    <p>
                        Skaven Poison Globadiers are missile troops and are treated just as if they were using normal
                        missile weapons, applying all the normal missile weapon rules that implies.
                    </p>
                    <p>
                        Work out which Warriors have been hit. The poison globe attack affects those Warriors and all
                        Warriors adjacent to them. Each affected Warrior rolls 1D6 and adds their Toughness to their
                        score. If the total is 6 or less, the Warrior suffers 1D3 Wounds, with no modifiers for
                        Toughness or armour.
                    </p>
                    <p>
                        However, as the globes they carry are poisoned, in addition to suffering normal damage the
                        victim of a globe attack suffers all the effects of the Poison Special Ability. To summarise:
                        if a Warrior is reduced to 0 Wounds by a Poison Globe his Strength is permanently reduced by -1.
                        If a Warrior is reduced to 0 Strength he is killed and is removed from play.
                    </p>
                `,
            }]),
        ],
    };
}

export default [
    {name: "Poison Globadiers", constructor: SkavenPoisonGlobadier},
];
