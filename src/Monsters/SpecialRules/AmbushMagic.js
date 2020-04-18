export default function (value) {
    return {
        name: `Ambush, Magic ${typeof value === "number" ? value + "+" : value}`,

        foo:    `<p>Some monsters are able to <em>Ambush</em> the warriors, springing from the darkness and ` +
        `attacking them before they have the chance to react.</p>`,


        description: `<p>Some monsters are able to <em>Ambush</em> the warriors, springing from the darkness and ` +
            `attacking them before they have the chance to react. Some monsters are blindingly fast at making their ` +
            `attacks, and can make a Magic Ambush.</p>` +
            `<p>Each type of monster with the Ambush ability has an Ambush Rating that shows the score ` +
            `they need on 1D6 to successfully spring their Ambush. Daemonettes of Slaanesh, for instance, have ` +
            `Ambush 5+, and therefore need a score of 5 or 6 on 1D6 to successfully Ambush the warriors. An Ambush ` +
            `Rating of "A" indicates that the monsters automatically succeed in making their Ambush and don't need ` +
            `to roll.</p>` +
            `<p>Monsters that successfully carry out an Ambush may ignore the rule about waiting until the next ` +
            `monsters' phase before they attack. If the monsters appear in the power phase, for instance, they are ` +
            `placed and make on set of attacks in that phase <em>and</em> attack in the monsters' phase. Once such ` +
            `monsters have sprung their ambush, they fight only in the monsters' phase from then on, as normal.</p>` +
            `<p>A Magic Ambush is so fast that if the monsters succeed it is impossible even for the wizard (or any ` +
            `other spellcaster) to unleash a spell before their attacks start! In addition, if the monster making ` +
            `the Magic Ambush is a spellcaster, in the first turn it may cast an extra set of spells as soon as it ` +
            `is placed.</p>` +
            `<p>Note that as any sort of attack may be an Ambush, special abilities that are also Ambushes are ` +
            `indicated with the suffix "Ambush" or "Ambush, Magic".</p>` +
            `<p>A Hydra, for instance, has the "Breathe Fire (Ambush A)" special ability, indicating that it makes ` +
            `an automatically successful Ambush with its 4D6 damage Breathe Fire attack when it is first placed.</p>`,
    };
}
