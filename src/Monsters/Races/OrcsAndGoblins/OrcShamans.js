import OrcsAndGoblins from "../OrcsAndGoblins";
import MagicWeapon from "../../SpecialRules/MagicWeapon";
import MagicResistance from "../../SpecialRules/MagicResistance";
import Tattoos from "../../SpecialRules/Tattoos";
import MagicItem from "../../SpecialRules/MagicItem";
import MagicDispel from "../../SpecialRules/MagicDispel";
import OrcAndGoblinMagic from "../../SpecialRules/OrcAndGoblinMagic";

const description = "Orc Shamans are more powerful than their Goblin cousins, soaking up the psychic energy" +
    " of the greenskins around them to create raw Waaagh! magic to hurl at their foes.";

const OrcMagic = (spellsPerTurn, modifier = 0) => OrcAndGoblinMagic(
    spellsPerTurn,
    `
        An Orc Shaman may cast spells at the start of each monsters' phase. Roll 2D6 on the following table to
        determine which spells are cast. This Orc can cast ${spellsPerTurn} spell${spellsPerTurn > 1 ? "s" : ""} per
        turn.
    `,
    modifier
);

export function OrcShaman() {
    return {
        singularName: "Orc Shaman",
        pluralName: "Orcs Shamans",
        description,
        race: OrcsAndGoblins,
        wounds: 16,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 590,
        armour: 0,
        damage: "1D6",
        specialRules: [
            OrcMagic(1),
            MagicResistance(6),
            MagicWeapon(),
        ],
    };
}

export function OrcShamanChampion() {
    return {
        singularName: "Orc Shaman Chamion",
        pluralName: "Orcs Shaman Champions",
        description,
        race: OrcsAndGoblins,
        wounds: 20,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 4,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 1180,
        armour: 2,
        damage: "1D6 / 2D6 (5+)",
        specialRules: [
            OrcMagic(3),
            MagicResistance(5),
            MagicWeapon(),
        ],
    };
}

export function OrcShamanLord() {
    return {
        singularName: "Orc Shaman Lord",
        pluralName: "Orcs Shaman Lords",
        description,
        race: OrcsAndGoblins,
        wounds: 42,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 5,
        strength: 4,
        toughness: 5,
        initiative: 5,
        attacks: 3,
        gold: 2870,
        armour: 2,
        damage: "2D6 / 3D6 (5+)",
        specialRules: [
            OrcMagic(3),
            MagicDispel(5),
            MagicResistance(4),
            MagicItem(),
            MagicWeapon(),
        ],
    };
}

export function SavageOrcShaman() {
    return {
        singularName: "Savage Orc Shaman",
        pluralName: "Savage Orcs Shamans",
        description,
        race: OrcsAndGoblins,
        wounds: 16,
        move: 4,
        weaponSkill: 3,
        ballisticSkill: 4,
        strength: 3,
        toughness: 5,
        initiative: 3,
        attacks: 1,
        gold: 590,
        armour: 0,
        damage: "1D6",
        specialRules: [
            OrcMagic(1),
            MagicResistance(6),
            MagicWeapon(),
            Tattoos(6),
        ],
    };
}

export default [
    {name: "Orc Shamans", constructor: OrcShaman},
    {name: "Orc Shaman Champions", constructor: OrcShamanChampion},
    {name: "Orc Shaman Lords", constructor: OrcShamanLord},
    {name: "Savage Orc Shamans", constructor: SavageOrcShaman},
];
