import {D3, D6} from "../../Utilities/Dice";

import Level2 from "./Level2";

import Chaos from "../Races/Chaos";
import {Beastman} from "../Races/Chaos/Beastmen";

import DarkElves from "../Races/DarkElves";
import {DarkElfWarrior} from "../Races/DarkElves/DarkElves";
import {NaggarothBlackGuard} from "../Races/DarkElves/NaggarothBlackGuards";

import Monsters from "../Races/Monsters";
import {CaveSquig} from "../Races/Monsters/CaveSquigs";
import {Centaur} from "../Races/Monsters/Centaurs";
import {GiantBat} from "../Races/Monsters/GiantBat";
import {GiantRat} from "../Races/Monsters/GiantRats";
import {GiantSpider} from "../Races/Monsters/GiantSpiders";
import {Minotaur} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";

import Skaven from "../Races/Skaven";
import {Clanrat} from "../Races/Skaven/Clanrat";
import {Stormvermin} from "../Races/Skaven/Stormvermin";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {Goblin, GoblinNetter} from "../Races/OrcsAndGoblins/Goblins";
import {GoblinShaman} from "../Races/OrcsAndGoblins/GoblinShamans";
import {GoblinSquigHunter} from "../Races/OrcsAndGoblins/GoblinSquigHunters";
import {Hobgoblin} from "../Races/OrcsAndGoblins/Hobgoblins";
import {Orc} from "../Races/OrcsAndGoblins/Orcs";
import {SavageOrcShaman} from "../Races/OrcsAndGoblins/OrcShamans";
import {SavageOrc} from "../Races/OrcsAndGoblins/SavageOrcs";
import {Snotling} from "../Races/OrcsAndGoblins/Snotlings";

import Undead from "../Races/Undead";
import {Ghoul} from "../Races/Undead/Ghouls";
import {Skeleton} from "../Races/Undead/Skeletons";
import {Zombie} from "../Races/Undead/Zombies";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: Ogre(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
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
        return [{
            qty: D6() + 3,
            monster: Stormvermin(dungeonLevel, tableLevel),
        }];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: Snotling(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: GiantBat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: GiantSpider(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: GiantRat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Orc(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Clanrat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
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
            qty: D6(),
            monster: GoblinNetter(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: Skeleton(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(),
            monster: Zombie(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Ghoul(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 3,
            monster: DarkElfWarrior(dungeonLevel, tableLevel),
        }];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: GiantSpider(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    // 1D3 Wild Cave Squigs or (1D3 Trained Cave Squigs and Goblin Squig Hunters)
    Object.assign((dungeonLevel, tableLevel) => {
        if (D6() <= 3) {
            return [{
                qty: D3(),
                monster: CaveSquig(dungeonLevel, tableLevel),
            }];
        } else {
            const qty = D3();
            return [
                {
                    qty,
                    monster: CaveSquig(dungeonLevel, tableLevel),
                },
                {
                    qty: 2 * qty,
                    monster: GoblinSquigHunter(dungeonLevel, tableLevel),
                },
            ];
        }
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: Snotling(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: GiantBat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 3,
            monster: Hobgoblin(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 6,
                monster: Goblin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: GoblinShaman(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D3(),
            monster: Minotaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Orc(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: Snotling(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: GiantBat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: GiantSpider(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: GiantRat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Clanrat(dungeonLevel, tableLevel),
        }];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6(2),
            monster: Skeleton(dungeonLevel, tableLevel),
        }];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 6,
            monster: Goblin(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 3,
            monster: Hobgoblin(dungeonLevel, tableLevel),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [{
            qty: D6() + 2,
            monster: NaggarothBlackGuard(dungeonLevel, tableLevel),
        }];
    }, {
        race: DarkElves,
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
            qty: D3(),
            monster: Minotaur(dungeonLevel, tableLevel),
        }];
    }, {
        race: Monsters,
    }),
];

export default function (dungeonLevel = 1, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level2(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 1);
}
