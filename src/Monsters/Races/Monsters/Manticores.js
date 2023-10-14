import Monsters from "../Monsters";
import {AmbushMagicModifier} from "../../SpecialRules/AmbushMagic";
import Fly from "../../SpecialRules/Fly";
import Poison from "../../SpecialRules/Poison";
import Terror from "../../SpecialRules/Terror";

const description = "The Manticore is a gigantic lion-like monster with large leathery wings and a spiked tail. They " +
    "are devastating fighters, attacking with raking claws and long, sharp teeth.";

const manticoreSting = {
    name: "Manticore Sting",
    description: `
        <p>
            During the Monsters' Phase, in addition to making its normal attacks and after it has moved, a Manticore may
            make a special poisonous Sting attack. Each Warrior adjacent to the Manticore is automatically hit and
            suffers 3D6 Wounds, modified for armour and Toughness. As this attack is poisonous, all the rules for the
            Poison Special Ability also apply.
        </p>
        <p>${Poison.helperText}</p>
    `,
};

export function Manticore() {
    return {
        singularName: "Manticore",
        pluralName: "Manticores",
        description,
        race: Monsters,
        wounds: 50,
        move: 6,
        weaponSkill: 6,
        ballisticSkill: null,
        strength: 7,
        toughness: 7,
        initiative: 4,
        attacks: 4,
        gold: 2000,
        armour: 0,
        damage: "4D6",
        specialRules: [
            Fly(),
            AmbushMagicModifier(manticoreSting, "A"),
            Terror(11),
        ],
    };
}

export default [
    {name: "Manticores", constructor: Manticore},
];
