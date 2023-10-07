import Skaven from "../Skaven";
import ArmedWith from "../../SpecialRules/ArmedWith";

const description = "The most fanatical and deranged members of Clan Pestilens are given the singular honour of " +
    "wielding a plague censer. Inside this swinging ball burns a plague-infested warpstone that emits a foul bubonic " +
    "vapour as the censer is swung. Flesh exposed to the vapour quickly erupts into sores and fluid-filled blisters";

export function PlagueCenserBearer() {
    return {
        singularName: "Plague Censer Bearer",
        pluralName: "Plague Censer Bearers",
        description,
        race: Skaven,
        wounds: 4,
        move: 5,
        weaponSkill: 4,
        ballisticSkill: undefined,
        strength: 4,
        toughness: 4,
        initiative: 4,
        attacks: 1,
        gold: 150,
        armour: 0,
        damage: "1D6",
        specialRules: [
            ArmedWith([{
                name: "Plague Censer",
                description: `
                    <p>
                        A Skaven plague censer is a heavy spiked ball on a length of chain. Make a normal hand-to-hand
                        to hit roil against the target to determine if he is struck. If the target is hit, the censer
                        causes 1D6 + Strength damage, as usual, plus the victim must make a Toughness check. Roll 1D6
                        and add the victim's Toughness. If the score is 7 or more he is unaffected by the fumes that
                        surround the censer. If the score is equal to or less than 7 he takes an additional 1D3 Wounds,
                        with no modifiers for Toughness or armour.
                    </p>
                `,
            }]),
        ],
    };
}

export default [
    {name: "Plague Censer Bearers", constructor: PlagueCenserBearer},
];
