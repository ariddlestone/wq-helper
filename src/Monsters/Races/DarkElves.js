import DarkElfWarriors from "./DarkElves/DarkElves"
import NaggarothBlackGuards from "./DarkElves/NaggarothBlackGuards";

const monsters = []
    .concat(DarkElfWarriors)
    .concat(NaggarothBlackGuards);

export default {
    key: "DarkElves",
    name: "Dark Elves",
    monsters,
};
