import Ghosts from "./Undead/Ghosts";
import Ghouls from "./Undead/Ghouls";
import Liches from "./Undead/Liches";
import Mummies from "./Undead/Mummies";
import Necromancers from "./Undead/Necromancers";
import Skeletons from "./Undead/Skeletons";
import Zombies from "./Undead/Zombies";
import Wraiths from "./Undead/Wraiths";
import Vampires from "./Undead/Vampires";
import Wights from "./Undead/Wights";

const monsters = []
    .concat(Ghosts)
    .concat(Ghouls)
    .concat(Liches)
    .concat(Mummies)
    .concat(Necromancers)
    .concat(Skeletons)
    .concat(Zombies)
    .concat(Wraiths)
    .concat(Vampires)
    .concat(Wights);

export default {
    key: "Undead",
    name: "Undead",
    monsters,
};
