export default function (items, strength) {
    return {
        name: `Throw ${items.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} (str ${strength})`,
        description: `<p>As soon as the monsters are placed on the board, before the warriors can do anything, they ` +
            `throw their ${items} in a special, single attack. You need to roll against the Monster's Ballistic Skill ` +
            `to see if they hit, just as with any other missile weapon. The ${items} have a strength of ` +
            `${strength}, so cause the monster's damage dice +${strength} damage per hit, modified for toughness and ` +
            `armour, according to the normal rules for missile weapons.</p>`,
    };
}
