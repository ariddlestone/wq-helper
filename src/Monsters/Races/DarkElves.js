import DarkElfWarriors from "./DarkElves/DarkElves"
import DarkElfBeastmasters from "./DarkElves/DarkElfBeastmasters";
import DarkElfSorcerers from "./DarkElves/DarkElfSorcerers";
import NaggarothBlackGuards from "./DarkElves/NaggarothBlackGuards";
import WitchElves from "./DarkElves/WitchElves";

const monsters = []
    .concat(DarkElfWarriors)
    .concat(DarkElfBeastmasters)
    .concat(DarkElfSorcerers)
    .concat(NaggarothBlackGuards)
    .concat(WitchElves)
;

export default {
    key: "DarkElves",
    name: "Dark Elves",
    monsters,
};
