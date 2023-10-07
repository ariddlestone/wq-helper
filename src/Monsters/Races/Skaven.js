import Clanrats from "./Skaven/Clanrat";
import SkavenAssassins from "./Skaven/SkavenAssassins";
import WarpfireThrowerTeams from "./Skaven/WarpfireThrowerTeams";
import SkavenJezzails from "./Skaven/SkavenJezzails";
import Stormvermin from "./Skaven/Stormvermin";
import SkavenVerminLords from "./Skaven/SkavenVerminLords";
import PlagueCenserBearers from "./Skaven/PlagueCenserBearers";
import SkavenPlagueMonks from "./Skaven/SkavenPlagueMonks";
import SkavenPoisonGlobadiers from "./Skaven/SkavenPoisonGlobadiers";
import SkavenGreySeers from "./Skaven/SkavenGreySeers";

const monsters = []
    .concat(Clanrats)
    .concat(SkavenAssassins)
    .concat(WarpfireThrowerTeams)
    .concat(SkavenJezzails)
    .concat(SkavenVerminLords)
    .concat(Stormvermin)
    .concat(PlagueCenserBearers)
    .concat(SkavenPlagueMonks)
    .concat(SkavenPoisonGlobadiers)
    .concat(SkavenGreySeers);

export default {
    key: "Skaven",
    name: "Skaven",
    monsters,
};
