import BullCentaurs from "./Monsters/BullCentaurs";
import CaveSquigs from "./Monsters/CaveSquigs";
import Centaurs from "./Monsters/Centaurs";
import Chimeras from "./Monsters/Chimeras";
import Cockatrices from "./Monsters/Cockatrices";
import DragonOgres from "./Monsters/DragonOgres";
import GiantBats from "./Monsters/GiantBat";
import GiantRats from "./Monsters/GiantRat";
import GiantSpiders from "./Monsters/GiantSpider";
import Minotaurs from "./Monsters/Minotaurs";
import Ogres from "./Monsters/Ogre";

const monsters = []
    .concat(BullCentaurs)
    .concat(CaveSquigs)
    .concat(Centaurs)
    .concat(Chimeras)
    .concat(Cockatrices)
    .concat(DragonOgres)
    .concat(GiantBats)
    .concat(GiantRats)
    .concat(GiantSpiders)
    .concat(Minotaurs)
    .concat(Ogres);

export default {
    key: "Monsters",
    name: "Monsters",
    monsters,
};
