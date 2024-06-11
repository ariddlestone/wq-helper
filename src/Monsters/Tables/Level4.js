import {D3, D6} from "../../Utilities/Dice";

import Guards from "../SpecialRules/Guards";
import Riding from "../SpecialRules/Riding";

import Chaos from "../Races/Chaos";
import {Beastman, BeastmanChampion} from "../Races/Chaos/Beastmen";
import {BeastOfNurgle} from "../Races/Chaos/BeastsOfNurgle";
import {ChaosHound} from "../Races/Chaos/ChaosHounds";
import {ChaosChampion, ChaosWarrior} from "../Races/Chaos/ChaosWarriors";
import {Daemonette} from "../Races/Chaos/Daemonettes";
import {Juggernaut} from "../Races/Chaos/Juggernauts";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfSorcerer} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import DarkElves from "../Races/DarkElves";
import {DarkElfBeastmaster} from "../Races/DarkElves/DarkElfBeastmasters";

import Monsters from "../Races/Monsters";
import {BullCentaur} from "../Races/Monsters/BullCentaurs";
import {DragonOgre} from "../Races/Monsters/DragonOgres";
import {GiantScorpion} from "../Races/Monsters/GiantScorpions";
import {GiganticSpider} from "../Races/Monsters/GiantSpiders";
import {Minotaur} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";
import {RatOgre} from "../Races/Monsters/RatOgres";
import {StoneTroll, Troll} from "../Races/Monsters/Trolls";
import {Warhound} from "../Races/Monsters/Warhounds";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrcBoss, BlackOrcChampion} from "../Races/OrcsAndGoblins/BlackOrcs";
import {Goblin, GoblinBigBoss} from "../Races/OrcsAndGoblins/Goblins";
import {GoblinFanatic} from "../Races/OrcsAndGoblins/GoblinFanatics";

import Skaven from "../Races/Skaven";
import {ClanratChieftain} from "../Races/Skaven/Clanrat";
import {SkavenAssassin} from "../Races/Skaven/SkavenAssassins";
import {SkavenJezzail} from "../Races/Skaven/SkavenJezzails";
import {SkavenWarlock} from "../Races/Skaven/SkavenGreySeers";
import {Stormvermin, StormverminChampion} from "../Races/Skaven/Stormvermin";

import Undead from "../Races/Undead";
import {Ghost} from "../Races/Undead/Ghosts";
import {Mummy} from "../Races/Undead/Mummies";
import {Necromancer} from "../Races/Undead/Necromancers";
import {Skeleton} from "../Races/Undead/Skeletons";
import {Wight} from "../Races/Undead/Wights";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        const qty = D3() + 1;
        const mount = Juggernaut(dungeonLevel, tableLevel);
        const rider = ChaosWarrior(dungeonLevel, tableLevel);
        rider.specialRules.push(Riding(mount));

        return [
            {
                qty,
                monster: mount,
            },
            {
                qty,
                monster: rider,
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = Necromancer(dungeonLevel, tableLevel);
        const skeleton = Skeleton(dungeonLevel, tableLevel);
        skeleton.specialRules.push(Guards(necromancer));

        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: D6(2),
                monster: skeleton,
            },
            {
                qty: D6(),
                monster: Wight(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
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
                monster: Daemonette(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const warlock = SkavenWarlock(dungeonLevel, tableLevel);
        const stormvermin = StormverminChampion(dungeonLevel, tableLevel);
        stormvermin.specialRules.push(Guards(warlock));

        return [
            {
                qty: 1,
                monster: warlock,
            },
            {
                qty: D6(),
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 3,
                monster: stormvermin,
            },
            {
                qty: 1,
                monster: ClanratChieftain(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6() + 4,
                monster: BlackOrcChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BlackOrcBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const beastmaster = {
            qty: 1,
            monster: DarkElfBeastmaster(dungeonLevel, tableLevel),
        };
        if (D6() <= 3) {
            return [
                beastmaster,
                {
                    qty: D6(),
                    monster: ChaosHound(dungeonLevel, tableLevel),
                },
            ];
        } else {
            return [
                beastmaster,
                {
                    qty: D6(),
                    monster: Warhound(dungeonLevel, tableLevel),
                },
            ];
        }
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 24,
                monster: Goblin(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: GoblinFanatic(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: GoblinBigBoss(dungeonLevel, tableLevel),
            },
        ];
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

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: GiantScorpion(dungeonLevel, tableLevel),
            },
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
                qty: D6() + 2,
                monster: Beastman(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = ChaosDwarfSorcerer(dungeonLevel, tableLevel);
        const blunderbuss = ChaosDwarfBlunderbuss(dungeonLevel, tableLevel);
        blunderbuss.specialRules.push(Guards(sorcerer));
        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: 3,
                monster: BullCentaur(dungeonLevel, tableLevel),
            },
            {
                qty: 8,
                monster: ChaosDwarf(dungeonLevel, tableLevel),
            },
            {
                qty: 8,
                monster: blunderbuss,
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const beastmaster = {
            qty: 1,
            monster: DarkElfBeastmaster(dungeonLevel, tableLevel),
        };
        if (D6() <= 3) {
            return [
                beastmaster,
                {
                    qty: D6(),
                    monster: ChaosHound(dungeonLevel, tableLevel),
                },
            ];
        } else {
            return [
                beastmaster,
                {
                    qty: D6(),
                    monster: Warhound(dungeonLevel, tableLevel),
                },
            ];
        }
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: RatOgre(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: Stormvermin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
                qty: D3(),
                monster: BeastOfNurgle(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: DragonOgre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: SkavenJezzail(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
                monster: DragonOgre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3() + 1,
                monster: Mummy(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: Troll(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: Minotaur(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const qty = D3() + 1;
        const mount = Juggernaut(dungeonLevel, tableLevel);
        const rider = ChaosWarrior(dungeonLevel, tableLevel);
        rider.specialRules.push(Riding(mount));
        return [
            {
                qty,
                monster: mount,
            },
            {
                qty,
                monster: rider,
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3() + 1,
                monster: Mummy(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = Necromancer(dungeonLevel, tableLevel);
        const skeleton = Skeleton(dungeonLevel, tableLevel);
        skeleton.specialRules.push(Guards(necromancer));
        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: D6(2),
                monster: skeleton,
            },
            {
                qty: D6(),
                monster: Wight(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Ghost(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 24,
                monster: Goblin(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: GoblinFanatic(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: GoblinBigBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: ChaosChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: RatOgre(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: Stormvermin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: DragonOgre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const warlock = SkavenWarlock(dungeonLevel, tableLevel);
        const stormvermin = StormverminChampion(dungeonLevel, tableLevel);
        stormvermin.specialRules.push(Guards(warlock));

        return [
            {
                qty: 1,
                monster: warlock,
            },
            {
                qty: D6(),
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 3,
                monster: stormvermin,
            },
            {
                qty: 1,
                monster: ClanratChieftain(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
                qty: D3() + 1,
                monster: Mummy(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),
];

export default function (dungeonLevel = 4, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        // TODO: return Level5(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 4);
}
