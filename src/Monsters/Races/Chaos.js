import Beastmen from "./Chaos/Beastmen";
import BeastmanShamans from "./Chaos/BeastmanShamans";
import ChaosWarriors from "./Chaos/ChaosWarriors";
import ChaosSorcerers from "./Chaos/ChaosSorcerers";
import ChaosHounds from "./Chaos/ChaosHounds";
import Bloodletters from "./Chaos/Bloodletters";
import Juggernauts from "./Chaos/Juggernauts";
import Bloodthirsters from "./Chaos/Bloodthirsters";
import Daemonettes from "./Chaos/Daemonettes";
import FiendsOfSlaanesh from "./Chaos/FiendsOfSlaanesh";
import KeepersOfSecrets from "./Chaos/KeepersOfSecrets";
import Plaguebearers from "./Chaos/Plaguebearers";
import BeastsOfNurgle from "./Chaos/BeastsOfNurgle";
import Nurglings from "./Chaos/Nurglings";
import GreatUncleanOnes from "./Chaos/GreatUncleanOnes";
import FlamersOfTzeentch from "./Chaos/FlamersOfTzeentch";
import HorrorsOfTzeentch from "./Chaos/HorrorsOfTzeentch";
import LordsOfChange from "./Chaos/LordsOfChange";

const monsters = []
    .concat(Beastmen)
    .concat(BeastmanShamans)
    .concat(ChaosWarriors)
    .concat(ChaosSorcerers)
    .concat(ChaosHounds)
    .concat(Bloodletters)
    .concat(Juggernauts)
    .concat(Bloodthirsters)
    .concat(Daemonettes)
    .concat(FiendsOfSlaanesh)
    .concat(KeepersOfSecrets)
    .concat(Plaguebearers)
    .concat(BeastsOfNurgle)
    .concat(Nurglings)
    .concat(GreatUncleanOnes)
    .concat(FlamersOfTzeentch)
    .concat(HorrorsOfTzeentch)
    .concat(LordsOfChange);

export default {
    key: "Chaos",
    name: "Chaos",
    monsters,
};
