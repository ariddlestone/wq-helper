import Level10 from "./Level10";

export const monsters = [];

export default function (dungeonLevel = 9, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level10(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 9);
}
