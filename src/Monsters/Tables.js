import Level1 from "./Tables/Level1";
import Level2 from "./Tables/Level2";
import Level3 from "./Tables/Level3";
import Level4 from "./Tables/Level4";
import Level5 from "./Tables/Level5";
import Level6 from "./Tables/Level6";
import Level7 from "./Tables/Level7";
import Level8 from "./Tables/Level8";
import Level9 from "./Tables/Level9";
import Level10 from "./Tables/Level10";

const tables = {
    1: Level1,
    2: Level2,
    3: Level3,
    4: Level4,
    5: Level5,
    6: Level6,
    7: Level7,
    8: Level8,
    9: Level9,
    10: Level10
};

export default function(level, race = null) {
    let table = tables[level];
    return table(level, race);
}
