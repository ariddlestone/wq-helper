export const monsters = [];

export default function (dungeonLevel = 10, race = null) {
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }

    const results = table[Math.floor(Math.random() * table.length)](dungeonLevel, 10);

    if (Math.random() < (1.0 / 18.0)) {
        results.push(table[Math.floor(Math.random() * table.length)](dungeonLevel, 10));
    }

    return results;
}
