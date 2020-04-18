export default function () {
    return {
        name: "Gang Up",
        description: `<p>Some monsters can <em>Gang Up</em> on the warriors, hoping to use strength in numbers to ` +
            `defeat their opponents.</p>` +
            `<p>Rather than distributing such monsters evenly amongst the warriors when you place them on the board, ` +
            `draw a warrior counter and place as many of the monsters as you can around that warrior. If there are ` +
            `any monsters left, draw another warrior counter and place as many monsters as you can around him. ` +
            `Repeat this process until all the monsters are placed on the board.</p>` +
            `<p>Each group of monsters surrounding a single warrior makes one single combined attack for each attack ` +
            `in their profile: each group of Nurglings therefore, for example, makes 2 combined attacks. Count up ` +
            `the number of monsters attacking each warrior. For every monster above one in contact with the warrior, ` +
            `add +1 to the to hit roll and increase the strength of the monsters' attack by +1.</p>` +
            `<p>For instance, if there are 4 Snotlings ganging up on the Barbarian, they get a single strength 4 ` +
            `attack with a +3 on the to hit roll.</p>` +
            `<p>Once they have started attacking, monsters that Gang Up do not switch attacks until either they are ` +
            `all dead, or the warrior is killed.</p>` +
            `<p>When defending themselves, each monster in the gang fights individually, with the weapon skill ` +
            `indicated on its profile.</p>`,
    };
}
