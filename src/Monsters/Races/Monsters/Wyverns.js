import Monsters from "../Monsters";
import Fly from "../../SpecialRules/Fly";
import IgnoreBlows from "../../SpecialRules/IgnoreBlows";
import IgnorePain from "../../SpecialRules/IgnorePain";
import LargeMonster from "../../SpecialRules/LargeMonster";
import NeverPinned from "../../SpecialRules/NeverPinned";
import Sting from "../../SpecialRules/Sting";
import Terror from "../../SpecialRules/Terror";

const dragAndRend = {
    name: "Drag and Rend",
    description: `
        <p>
            At the start of each turn draw a Warrior counter to determine which Warrior the Wyvern attacks. The Wyvern
            stretches out its long neck and attempts to ensnare and drag him nearer.
        </p>
        <p>
            The Wyvern makes a normal to hit roll. If it succeeds it doesn't cause any damage, but instead has clutched
            the Warrior and dragged him. That model is immediately moved to the nearest square adjacent to the Wyvern,
            moving other models out of the way as necessary. All of the Wyvern's normal attacks are then carried out
            against the captured Warrior as normal. If 2 or more of these remaining attacks hit home, the Warrior has
            been stung.
        </p>
        <p>
            Note that the targeted Warrior may only attempt to dodge the initial grab and not any subsequent attacks.
        </p>
    `,
};

export function Wyvern() {
    return {
        singularName: "Wyvern",
        pluralName: "Wyverns",
        description: "Wyverns are similar in appearance to dragons, though they are longer and more sinuous and do " +
            "not have front limbs. Wyverns are scaly beasts, with thick plates of horn covering their bodies from " +
            "head to foot. This makes them very difficult to slay, as their hide protects them from harm much like " +
            "armour.<br />" +
            "Wyverns have long sinuous necks, which dart forwards and back with lightning speed. Their heads are " +
            "spiny and their mouths full of barbed teeth, while their constant screeching and roaring is extremely " +
            "frightening. Their tails are barbed and top with a deadly sting.",
        race: Monsters,
        wounds: 46,
        move: 6,
        weaponSkill: 5,
        ballisticSkill: undefined,
        strength: 5,
        toughness: 6,
        initiative: 4,
        attacks: 3,
        gold: 1800,
        armour: 3,
        damage: "3D6 / 4D6 (5+)",
        specialRules: [
            dragAndRend,
            Fly(),
            IgnoreBlows(5),
            IgnorePain(6),
            LargeMonster(),
            NeverPinned(),
            Sting("3D6"),
            Terror(10),
        ],
    };
}

export default [
    {name: "Wyverns", constructor: Wyvern},
];
