import Clanrats from "./Skaven/Clanrat";
import Stormvermin from "./Skaven/Stormvermin";

const monsters = []
    .concat(Clanrats)
    .concat(Stormvermin);

export default {
    key: "Skaven",
    name: "Skaven",
    monsters,
};
