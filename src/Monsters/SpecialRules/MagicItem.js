export default function (qty = 1) {
    const items = [
        {
            name: "Ring of Resistance",
            description: "This ring gives the wearer <em>Magic Resistance 6+</em>. If the wearer already has the " +
                "Magic Resistance special ability it improves his Magic Resistance by +1.",
        },
        {
            name: "Cloak of Shadows",
            description: "All warriors attempting to hit the wearer of this cloak are at -1 to their to hit rolls.",
        },
        {
            name: "Warpstone Talisman",
            description: "Whenever a warrior rolls a natural 1 on his to hit roll against the wearer of this " +
                "talisman the blow rebounds at full effect and he has hit himself instead.",
        },
        {
            name: "Doomfire Ring",
            description: "The wearer may use this ring to fire a bolt of power at one of the warriors each turn. " +
                "Draw a warrior counter to determine who is targeted. Then make a to hit roll with a ballistic skill " +
                "of 4+. If the attack hits, the target suffers 2D6 + (2 &times; the dungeon level) wounds, with no " +
                "modifier for armour.",
        },
        {
            name: "Mask of Kadon",
            description: "This mask gives the monster Fear (dungeon level + 3). If the wearor already causes Fear it " +
                "gives him Terror (his Fear value).",
        },
        {
            name: "Collar of Vengeance",
            description: "Any warrior adjacent to the wearer at the end of the turn suffers 1D6 wounds with no " +
                "modifiers for toughness or armour. This is Fatal damage.",
        },
    ];
    const chosenItems = [];
    for (let i = 0; i < qty; i++) {
        chosenItems.push(...items.splice(Math.floor(Math.random() * items.length), 1));
    }
    return {
        name: qty > 1 ? `Magic Items (${qty})` : "Magic Item",
        description: `
            <p>
                Some monsters carry <em>magic items</em>, just like the magic items that the warriors possess. In the
                monsters' case though these items are cursed, and are useless to the warriors. A group of the same type
                of monsters have the same magic items.
            </p>
            <p>
                If an item has an offensive capability it makes an extra attack during the monsters' phase. The effects
                of the item cannot be dispelled.
            </p>
            ${chosenItems.map(item => `<p>${item.name}:</p><p>${item.description}</p>`).join("")}
        `,
    };
}
