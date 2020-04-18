import {Ghoul} from "@/Monsters/Races/Undead/Ghouls";
import {Skeleton, TombGuardian} from "@/Monsters/Races/Undead/Skeletons";
import {Zombie} from "@/Monsters/Races/Undead/Zombies";

export default {
    key: "Undead",
    name: "Undead",
    monsters: {
        Ghoul,
        Skeleton,
        TombGuardian,
        Zombie,
    },
};
