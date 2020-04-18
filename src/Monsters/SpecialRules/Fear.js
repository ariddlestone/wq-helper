export default function (value) {
    return {
        name: `Fear ${value}`,
        description: `<p>Some monsters cause <em>Fear</em> because they are particularly frightening for one reason ` +
            `or another. Zombies, for instance, are the reanimated corpses of once-human warriors and are terribly ` +
            `fearsome to face in combat. Minotaurs, on the other hand, cause Fear because of their sheer size and ` +
            `ferocity.</p>` +
            `<p>When this monster appears, roll 1D6 + (the warrior's battle level) for each warrior. This is the ` +
            `warrior's fear roll.</p>` +
            `<p>If the total is greater than the monster's fear value (${value}), that warrior is not afraid of them ` +
            `during this combat, and may fight them as normal.</p>` +
            `<p>If the total is less than or equal to the monter's fear value (${value}), that warrior is afraid of ` +
            `them during this combat, and fights them at -1 on his to hit rolls. If a wizard fails his Fear roll, ` +
            `any spells he attempts to cast against that monster have their casting number increased by +1.</p>` +
            `<p>Each time the warriors meet a partiucular type of monster that causes Fear they must make a Fear ` +
            `roll, as the effect of the roll, whether good or bad, applies only to that type of monster during this ` +
            `one combat.</p>` +
            `<p>If there are two types of monster in the room that cause Fear, make a Fear roll for each warrior ` +
            `against each type of monster.</p>`,
    };
}
