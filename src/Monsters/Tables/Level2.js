import {D3, D6} from "../../Utilities/Dice";

import Chaos from "../Races/Chaos";
import {Beastman} from "../Races/Chaos/Beastmen";
import {Bloodletter} from "../Races/Chaos/Bloodletters";
import {ChaosHound} from "../Races/Chaos/ChaosHounds";
import {ChaosWarrior} from "../Races/Chaos/ChaosWarriors";
import {FiendOfSlaanesh} from "../Races/Chaos/FiendsOfSlaanesh";
import {BlueHorrorOfTzeentch, PinkHorrorOfTzeentch} from "../Races/Chaos/HorrorsOfTzeentch";
import {Plaguebearer} from "../Races/Chaos/Plaguebearers";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss} from "../Races/ChaosDwarfs/ChaosDwarfs";

import DarkElves from "../Races/DarkElves";
import {NaggarothBlackGuard} from "../Races/DarkElves/NaggarothBlackGuards";

import Monsters from "../Races/Monsters";
import {BullCentaur} from "../Races/Monsters/BullCentaurs";
import {Centaur} from "../Races/Monsters/Centaurs";
import {GiantBat} from "../Races/Monsters/GiantBat";
import {GiantRat} from "../Races/Monsters/GiantRats";
import {GiantSpider} from "../Races/Monsters/GiantSpiders";
import {Minotaur} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";
import {RatOgre} from "../Races/Monsters/RatOgres";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrc} from "../Races/OrcsAndGoblins/BlackOrcs";
import {Goblin, GoblinBoss} from "../Races/OrcsAndGoblins/Goblins";
import {Hobgoblin} from "../Races/OrcsAndGoblins/Hobgoblins";
import {SavageOrcShaman} from "../Races/OrcsAndGoblins/OrcShamans";
import {SavageOrc} from "../Races/OrcsAndGoblins/SavageOrcs";
import {Snotling} from "../Races/OrcsAndGoblins/Snotlings";

import Skaven from "../Races/Skaven";
import {GutterRunner} from "../Races/Skaven/SkavenAssassins";
import {PlagueCenserBearer} from "../Races/Skaven/PlagueCenserBearers";
import {SkavenPoisonGlobadier} from "../Races/Skaven/SkavenPoisonGlobadiers";

import Undead from "../Races/Undead";
import {Ghoul} from "../Races/Undead/Ghouls";
import {Skeleton} from "../Races/Undead/Skeletons";
import {Zombie} from "../Races/Undead/Zombies";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 1,
            monster: ChaosWarrior(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: Centaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 3,
            monster: Ogre(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 3,
            monster: Minotaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: Snotling(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: GiantBat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: GiantSpider(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: GiantRat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: Hobgoblin(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: RatOgre(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
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
        return [{
            qty: D6(),
            monster: FiendOfSlaanesh(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: Bloodletter(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: Plaguebearer(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(),
            monster: ChaosHound(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 4,
            monster: BlackOrc(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: SavageOrc(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: Beastman(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: GutterRunner(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: PlagueCenserBearer(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: SkavenPoisonGlobadier(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 12,
                monster: Goblin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: GoblinBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: NaggarothBlackGuard(dungeonLevel, tableLevel),
        }];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 1,
            monster: ChaosWarrior(dungeonLevel, tableLevel),
        }];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: Centaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 3,
            monster: Ogre(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 3,
            monster: Minotaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: Skeleton(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 6,
            monster: Zombie(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: Ghoul(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: SavageOrc(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: SavageOrcShaman(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: ChaosDwarf(dungeonLevel, tableLevel),
        }];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: ChaosDwarfBlunderbuss(dungeonLevel, tableLevel),
        }];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 3,
            monster: BullCentaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: 12,
            monster: Hobgoblin(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
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
];

export default function (dungeonLevel = 2, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        // TODO: return Level3(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 2);
}
