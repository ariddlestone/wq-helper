export default function () {
    const weapons = [
        {
            name: "Cutting Edge Sword",
            description: "This sword causes (+1 wounds &times; the bearer's level). A monster rolled on the level 3 " +
                "monster table, for instance, inflicts and extra +3 wounds.",
        },
        {
            name: "Sword of Distortion",
            description: "This sword causes the wielder's outline to shimmer, making him harder to hit. Any warrior " +
                "attempting to attack a monster bearing this sword deducts -1 from his to hit rolls. In addition, the " +
                "warping nature of this sword reduces the effect of any blows that actually strike the monster, " +
                "effectively giving it +1 toughness.",
        },
        {
            name: "Sword of Pain",
            description: "This sword ignores any non-magical armour and up to 3 points of magical armour when " +
                "determining damage.",
        },
        {
            name: "Cursed Blackblade",
            description: "This sword warps time around the immediate vicinity of its weilder. Once per turn you may " +
                "re-roll the bearer's first attack that misses. In addition this sword causes an extra +D6 wounds.",
        },
        {
            name: "Sword of Insanity",
            description: "This sword gives the bearer a Fear value equal to twice the battle level of the warrior he " +
                "is fighting. If the monster already causes Fear it gives him a Terror value equal to its original " +
                "fear value.",
        },
        {
            name: "Blade of the Damned",
            description: "This blade causes double damage every time it strikes. (Roll the normal amount of damage, " +
                "multiply the result by 2 and then add the wielder's strength.)",
        },
    ];
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    return {
        name: "Magic Weapon: " + weapon.name,
        description: `<p>Some monsters bear a <em>magic weapon</em>, just like the magic weapons that the warriors ` +
            `possess. In the monsters' case though these weapons are cursed, and will destroy any warrior who tries ` +
            `to use them.</p>` +
            `<p>A group of the same type of monsters have the same magic weapons.</p>` +
            `<p>${weapon.description}</p>`,
    };
}
