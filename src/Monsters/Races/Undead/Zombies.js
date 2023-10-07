import Undead from "../Undead";
import Fear from "../../SpecialRules/Fear";

const description = "Zombies are fresh corpses brought back to life by foul necromancy. Being more recently dead " +
    "than skeletons they retain more of their intellect and are more like living humans, although they are totally " +
    "under the will of the necromancer whose conjurations created them. Although rejuvenated by magic they continue " +
    "to decay. Their flesh is rank and hangs in strips from their bodies, and their clothes are tattered and caked " +
    "with blood. Like skeletons, Zombies are animated by magic, and this link can be broken as they fight, making " +
    "them vulnerable to weapons in the same way as living men. They are horrible creations and extremely difficult " +
    "to fight, though troops who stand their ground can beat them off if they keep their nerve.";

export function Zombie () {
    return {
        singularName: "Zombie",
        pluralName: "Zombies",
        description,
        race: Undead,
        wounds: 5,
        move: 4,
        weaponSkill: 2,
        ballisticSkill: null,
        strength: 3,
        toughness: 3,
        initiative: 1,
        attacks: 1,
        gold: 40,
        armour: 0,
        damage: "1D6",
        specialRules: [
            Fear(3),
        ],
    };
}

export default [
    {name: "Zombies", constructor: Zombie},
]
