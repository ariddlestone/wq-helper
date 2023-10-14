import DarkElfWarriors from "./DarkElves/DarkElves"
import NaggarothBlackGuards from "./DarkElves/NaggarothBlackGuards";
import DarkElfBeastmasters from "./DarkElves/DarkElfBeastmasters";

const monsters = []
    .concat(DarkElfWarriors)
    .concat(DarkElfBeastmasters)
    .concat(NaggarothBlackGuards);

export default {
    key: "DarkElves",
    name: "Dark Elves",
    monsters,
};
