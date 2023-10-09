import BullCentaurs from "./Monsters/BullCentaurs";
import CaveSquigs from "./Monsters/CaveSquigs";
import Centaurs from "./Monsters/Centaurs";
import Chimeras from "./Monsters/Chimeras";
import Cockatrices from "./Monsters/Cockatrices";
import DragonOgres from "./Monsters/DragonOgres";
import Dragons from "./Monsters/Dragons";
import GiantBats from "./Monsters/GiantBat";
import GiantRats from "./Monsters/GiantRats";
import GiantScorpions from "./Monsters/GiantScorpions";
import GiantSpiders from "./Monsters/GiantSpiders";
import Gorgons from "./Monsters/Gorgons";
import GreatTauruses from "./Monsters/GreatTauruses";
import Griffons from "./Monsters/Griffons";
import Hippogriffs from "./Monsters/Hippogriffs";
import Hydras from "./Monsters/Hydras";
import Lammasu from "./Monsters/Lammasu";
import Minotaurs from "./Monsters/Minotaurs";
import Ogres from "./Monsters/Ogres";

const monsters = []
    .concat(BullCentaurs)
    .concat(CaveSquigs)
    .concat(Centaurs)
    .concat(Chimeras)
    .concat(Cockatrices)
    .concat(DragonOgres)
    .concat(Dragons)
    .concat(GiantBats)
    .concat(GiantRats)
    .concat(GiantScorpions)
    .concat(GiantSpiders)
    .concat(Gorgons)
    .concat(GreatTauruses)
    .concat(Griffons)
    .concat(Hippogriffs)
    .concat(Hydras)
    .concat(Lammasu)
    .concat(Minotaurs)
    .concat(Ogres);

export default {
    key: "Monsters",
    name: "Monsters",
    monsters,
};
