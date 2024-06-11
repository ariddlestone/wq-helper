import {D3, D6} from "../../Utilities/Dice";
import Level4 from "./Level4";

import Chaos from "../Races/Chaos";
import {Beastman} from "../Races/Chaos/Beastmen";
import {Bloodletter} from "../Races/Chaos/Bloodletters";
import {BlueHorrorOfTzeentch, PinkHorrorOfTzeentch} from "../Races/Chaos/HorrorsOfTzeentch";
import {ChaosWarrior} from "../Races/Chaos/ChaosWarriors";
import {Daemonette} from "../Races/Chaos/Daemonettes";
import {FiendOfSlaanesh} from "../Races/Chaos/FiendsOfSlaanesh";
import {FlamerOfTzeentch} from "../Races/Chaos/FlamersOfTzeentch";
import {Nurgling} from "../Races/Chaos/Nurglings";
import {Plaguebearer} from "../Races/Chaos/Plaguebearers";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfSorcerer} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import Monsters from "../Races/Monsters";
import {BullCentaur} from "../Races/Monsters/BullCentaurs";
import {Centaur} from "../Races/Monsters/Centaurs";
import {GiantBat} from "../Races/Monsters/GiantBat";
import {GiantRat} from "../Races/Monsters/GiantRats";
import {GiantScorpion} from "../Races/Monsters/GiantScorpions";
import {GiantSpider, GiganticSpider} from "../Races/Monsters/GiantSpiders";
import {Minotaur} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";
import {RatOgre} from "../Races/Monsters/RatOgres";
import {StoneTroll, Troll} from "../Races/Monsters/Trolls";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrc} from "../Races/OrcsAndGoblins/BlackOrcs";
import {Goblin} from "../Races/OrcsAndGoblins/Goblins";
import {Hobgoblin} from "../Races/OrcsAndGoblins/Hobgoblins";
import {Orc, OrcBoss} from "../Races/OrcsAndGoblins/Orcs";
import {Snotling} from "../Races/OrcsAndGoblins/Snotlings";

import Skaven from "../Races/Skaven";
import {ClanratChampion} from "../Races/Skaven/Clanrat";
import {Stormvermin} from "../Races/Skaven/Stormvermin";
import {SkavenAssassin} from "../Races/Skaven/SkavenAssassins";

import Undead from "../Races/Undead";
import {Ghost} from "../Races/Undead/Ghosts";
import {Wight} from "../Races/Undead/Wights";
import Guards from "../SpecialRules/Guards";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: Troll(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: Minotaur(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: Ogre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: Centaur(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 2,
                monster: Beastman(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: Daemonette(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: Nurgling(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 1,
                monster: FlamerOfTzeentch(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: Bloodletter(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: Minotaur(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Beastman(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 3,
                monster: Stormvermin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: ClanratChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 2,
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: Orc(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: OrcBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 2,
                monster: Ghost(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: Wight(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: GiantScorpion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: GiganticSpider(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: RatOgre(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 3,
                monster: Stormvermin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 6,
                monster: PinkHorrorOfTzeentch(dungeonLevel, tableLevel),
            },
            {
                qty: 0,
                monster: BlueHorrorOfTzeentch(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 6,
                monster: FiendOfSlaanesh(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 7,
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 4,
                monster: Plaguebearer(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 2,
                monster: ChaosDwarf(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 2,
                monster: ChaosDwarfBlunderbuss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const hobgoblin = Hobgoblin(dungeonLevel, tableLevel);
        hobgoblin.specialRules.push(Guards("Chaos Dwarf Sorcerer"));

        return [
            {
                qty: 1,
                monster: ChaosDwarfSorcerer(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: BullCentaur(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: hobgoblin,
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 12,
                monster: Snotling(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: GiantRat(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 12,
                monster: GiantSpider(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: GiantBat(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 2,
                monster: BlackOrc(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 2,
                monster: Goblin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 2,
                monster: Ghost(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: StoneTroll(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Minotaur(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: Ogre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: Troll(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: Nurgling(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: Daemonette(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: GiantScorpion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: GiganticSpider(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 1,
                monster: FlamerOfTzeentch(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),
];

export default function (dungeonLevel = 3, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level4(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 3);
}
