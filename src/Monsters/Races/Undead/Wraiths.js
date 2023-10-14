import Undead from "../Undead";
import Chill from "../../SpecialRules/Chill";
import Ethereal from "../../SpecialRules/Ethereal";
import Terror from "../../SpecialRules/Terror";

const description = "Continual use of dark magic drains the soul and withers the body, until only an insubstantial " +
    "husk remains, deprived of its substance and driven by a twisted mind. The victims of such foolishness are " +
    "called Wraiths.<br />" +
    "Once they were great men, wizards of considerable power, but now they are just shadows kept between life and " +
    "death by their own bitterness. Their cloaks give them substance, but nothing remains of their physical bodies. " +
    "Two glowing red eyes glint from behind their cowls. They are dangerous because their chill touch drains life " +
    "from living creatures.";

export function Wraith() {
    return {
        singularName: "Wraith",
        pluralName: "Wraiths",
        description,
        race: Undead,
        wounds: 30,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: null,
        strength: 3,
        toughness: 4,
        initiative: 3,
        attacks: 2,
        gold: 750,
        armour: 0,
        damage: "Special",
        specialRules: [
            Chill(2),
            Ethereal(-1),
            Terror(8),
        ],
    };
}

export default [
    {name: "Wraiths", constructor: Wraith},
]
