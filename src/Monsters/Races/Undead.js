import Ghouls from "./Undead/Ghouls";
import Skeletons from "./Undead/Skeletons";
import Zombies from "./Undead/Zombies";

const monsters = []
    .concat(Ghouls)
    .concat(Skeletons)
    .concat(Zombies);

export default {
    key: "Undead",
    name: "Undead",
    monsters,
};
