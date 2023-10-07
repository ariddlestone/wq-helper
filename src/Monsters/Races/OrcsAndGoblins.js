import Goblins from "./OrcsAndGoblins/Goblins";
import GoblinShamans from "./OrcsAndGoblins/GoblinShamans";
import GoblinSquigHunters from "./OrcsAndGoblins/GoblinSquigHunters";
import Hobgoblins from "./OrcsAndGoblins/Hobgoblins";
import Orcs from "./OrcsAndGoblins/Orc";
import OrcShamans from "./OrcsAndGoblins/OrcShaman";
import SavageOrcs from "./OrcsAndGoblins/SavageOrc";
import Snotlings from "./OrcsAndGoblins/Snotling";

const monsters = []
    .concat(Goblins)
    .concat(GoblinShamans)
    .concat(GoblinSquigHunters)
    .concat(Hobgoblins)
    .concat(Orcs)
    .concat(OrcShamans)
    .concat(SavageOrcs)
    .concat(Snotlings);

export default {
    key: "OrcsAndGoblins",
    name: "Orcs & Goblins",
    monsters,
};
