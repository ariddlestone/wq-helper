export default function (roll) {

    if (typeof roll === "number") {
        roll = roll + "+";
    }

    return {
        name: `Magic Resistance ${roll}`,
        description: `
            <p>
                Some Monsters are naturally able to shrug off the effects of a spell cast against them. Such Monsters
                are said to have Magic Resistance.
            </p>
            <p>
                A Monster with this ability has to roll a ${roll} on 1D6 for the protection to work. A separate roll
                should be made for each spell cast against the Monster. If the roll succeeds the effects of the spell
                may be ignored by that particular Monster. If more than one Monster with this ability can be affected by
                the spell, roll for each Monster individually. Note that Magic Resistance only protects the Monster from
                spells, not from blows by magical weapons and the like.
            </p>
            <p>
                Note that some Monsters' Magic Resistance is not an innate ability, but is due to an item or charm they
                wear or carry. Where this is the case, the Magic Resistance entry is suffixed with the item that
                provides the protection.
            </p>
        `,
    };
}
