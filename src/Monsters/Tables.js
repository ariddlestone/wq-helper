import Level1 from "./Tables/Level1";
import Level2 from "./Tables/Level2";
import Level3 from "./Tables/Level3";

const tables = {
    1: Level1,
    2: Level2,
    3: Level3,
};

export default function(level, race = null) {
    let table = tables[level];
    return table(level, race);
}
