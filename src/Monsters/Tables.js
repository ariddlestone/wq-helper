import Level1 from "@/Monsters/Tables/Level1";

const tables = {
    1: Level1,
};

export default function(level, race) {
    let table = tables[level];
    if(race) {
        table = table.filter(row => row.race === race);
    }
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)]();
}
