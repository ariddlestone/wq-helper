import Monsters from "../Monsters";
import {AmbushModifier} from "../../SpecialRules/Ambush";
import BreatheFire from "../../SpecialRules/BreatheFire";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import Sting from "../../SpecialRules/Sting";
import Terror from "../../SpecialRules/Terror";

export function Chimera () {
    return {
        singularName: "Chimera",
        pluralName: "Chimeras",
        description: "The Chimera is a huge and vicious monster, one of the most fearsome that stalks the Old World. " +
            "This ferocious creature has three bestial heads: a lion's head, a fierce ram's head, and a dragon's " +
            "head. Its hulking body is powerful and quick and its claws are long and sharp. The Chimera also has a " +
            "lashing tail which is barbed with venomous stings.",
        race: Monsters,
        wounds: 60,
        move: 6,
        weaponSkill: 4,
        ballisticSkill: null,
        strength: 7,
        toughness: 6,
        initiative: 4,
        attacks: 6,
        gold: 2500,
        armour: 3,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            AmbushModifier(BreatheFire(4), "A"),
            IgnoreBlows(5),
            IgnorePain(7),
            LargeMonster(),
            Sting("3D6"),
            Terror(11),
        ],
    };
}

export default [
    {name: "Chimeras", constructor: Chimera},
];
