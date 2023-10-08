import Goblins from "./OrcsAndGoblins/Goblins";
import GoblinFanatics from "./OrcsAndGoblins/GoblinFanatics";
import GoblinShamans from "./OrcsAndGoblins/GoblinShamans";
import GoblinSquigHunters from "./OrcsAndGoblins/GoblinSquigHunters";
import Hobgoblins from "./OrcsAndGoblins/Hobgoblins";
import Orcs from "./OrcsAndGoblins/Orcs";
import BlackOrcs from "./OrcsAndGoblins/BlackOrcs";
import SavageOrcs from "./OrcsAndGoblins/SavageOrcs";
import OrcShamans from "./OrcsAndGoblins/OrcShamans";
import Snotlings from "./OrcsAndGoblins/Snotlings";

const monsters = []
    .concat(Goblins)
    .concat(GoblinFanatics)
    .concat(GoblinShamans)
    .concat(GoblinSquigHunters)
    .concat(Hobgoblins)
    .concat(Orcs)
    .concat(BlackOrcs)
    .concat(SavageOrcs)
    .concat(OrcShamans)
    .concat(Snotlings);

export default {
    key: "OrcsAndGoblins",
    name: "Orcs & Goblins",
    monsters,
};
