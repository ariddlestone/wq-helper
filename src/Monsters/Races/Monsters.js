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
import Manticores from "./Monsters/Manticores";
import Minotaurs from "./Monsters/Minotaurs";
import Ogres from "./Monsters/Ogres";
import RatOgres from "./Monsters/RatOgres";
import Trolls from "./Monsters/Trolls";
import Warhounds from "./Monsters/Warhounds";
import Wyverns from "./Monsters/Wyverns";

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
    .concat(Manticores)
    .concat(Minotaurs)
    .concat(Ogres)
    .concat(RatOgres)
    .concat(Trolls)
    .concat(Warhounds)
    .concat(Wyverns)
;

export default {
    key: "Monsters",
    name: "Monsters",
    monsters,
};
