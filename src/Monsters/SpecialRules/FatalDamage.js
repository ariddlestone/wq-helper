const FatalDamage = function () {
    return {
        name: "Fatal Damage",
        description: `
            <p>
                Some Monsters' attacks and items, such as Tomb Rot and Venom Armour, inflict a special sort of damage
                called Fatal Damage. This works in exactly the same way as normal damage, but is calculated at the very
                end of the turn and thus after all of that turn's healing has been done. This means that a Warrior that
                takes enough Fatal Damage to take him to 0 Wounds or below has no last chance to heal it and is thus
                automatically killed.
            </p>
        `,
    };
}

FatalDamage.helperText = `
    Fatal Damage works in exactly the same way as normal damage, but is calculated at the very end of the turn and thus
    after all of that turn's healing has been done. This means that a Warrior that takes enough Fatal Damage to take him
    to 0 Wounds or below has no last chance to heal it and is thus automatically killed.
`;

export default FatalDamage;
