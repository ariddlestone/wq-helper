import {D3, D6} from "../../Utilities/Dice";

import Level6 from "./Level6";

import Guards from "../SpecialRules/Guards";
import Riding from "../SpecialRules/Riding";

import Chaos from "../Races/Chaos";
import {BeastmanShaman} from "../Races/Chaos/BeastmanShamans";
import {Beastman, BeastmanChampion} from "../Races/Chaos/Beastmen";
import {BeastOfNurgle} from "../Races/Chaos/BeastsOfNurgle";
import {ChaosSorcerer} from "../Races/Chaos/ChaosSorcerers";
import {ChaosChampion, ChaosWarrior} from "../Races/Chaos/ChaosWarriors";
import {Juggernaut} from "../Races/Chaos/Juggernauts";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfSorcerer} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import DarkElves from "../Races/DarkElves";
import {DarkElfAssassin, DarkElfHero, DarkElfWarrior} from "../Races/DarkElves/DarkElves";
import {WitchElf} from "../Races/DarkElves/WitchElves";

import Monsters from "../Races/Monsters";
import {BullCentaur, BullCentaurChampion} from "../Races/Monsters/BullCentaurs";
import {Cockatrice} from "../Races/Monsters/Cockatrices";
import {DragonOgre} from "../Races/Monsters/DragonOgres";
import {GiantScorpion} from "../Races/Monsters/GiantScorpions";
import {GiganticSpider} from "../Races/Monsters/GiantSpiders";
import {Gorgon} from "../Races/Monsters/Gorgons";
import {Minotaur} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";
import {RatOgre} from "../Races/Monsters/RatOgres";
import {StoneTroll, Troll} from "../Races/Monsters/Trolls";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrcChampion} from "../Races/OrcsAndGoblins/BlackOrcs";
import {OrcBigBoss} from "../Races/OrcsAndGoblins/Orcs";
import {OrcShaman} from "../Races/OrcsAndGoblins/OrcShamans";

import Skaven from "../Races/Skaven";
import {SkavenAssassin} from "../Races/Skaven/SkavenAssassins";
import {SkavenJezzail} from "../Races/Skaven/SkavenJezzails";
import {SkavenPlagueMonk, SkavenPlaguePriest} from "../Races/Skaven/SkavenPlagueMonks";
import {SkavenWarlord} from "../Races/Skaven/Stormvermin";
import {WarpfireThrowerTeam} from "../Races/Skaven/WarpfireThrowerTeams";

import Undead from "../Races/Undead";
import {Ghost} from "../Races/Undead/Ghosts";
import {Mummy, TombKing} from "../Races/Undead/Mummies";
import {Necromancer} from "../Races/Undead/Necromancers";
import {TombGuardian} from "../Races/Undead/Skeletons";
import {Wight, WightLord} from "../Races/Undead/Wights";
import {Wraith} from "../Races/Undead/Wraiths";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: DarkElfWarrior(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: WitchElf(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: DarkElfAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: DarkElfHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
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
                monster: ChaosChampion(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: WarpfireThrowerTeam(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: SkavenJezzail(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: SkavenWarlord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
        const wight = Wight(dungeonLevel, tableLevel);
        wight.specialRules.push(Guards(necromancer));
        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: D6(),
                monster: Mummy(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Ghost(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: wight,
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
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
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: Minotaur(dungeonLevel, tableLevel),
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
                qty: 3,
                monster: DragonOgre(dungeonLevel, tableLevel),
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
                qty: 3,
                monster: Ogre(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: Minotaur(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: RatOgre(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Troll(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: StoneTroll(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = OrcShaman(dungeonLevel, tableLevel);
        const champion = BlackOrcChampion(dungeonLevel, tableLevel);
        champion.specialRules.push(Guards(shaman));
        return [
            {
                qty: 1,
                monster: shaman,
            },
            {
                qty: D6(),
                monster: champion,
            },
            {
                qty: 1,
                monster: OrcBigBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Wraith(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Ghost(dungeonLevel, tableLevel),
            },
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
                qty: 3,
                monster: BullCentaur(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BullCentaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: Gorgon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(2),
                monster: SkavenPlagueMonk(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: SkavenWarlord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = BeastmanShaman(dungeonLevel, tableLevel);
        const beastman = Beastman(dungeonLevel, tableLevel);
        beastman.specialRules.push(Guards(shaman));
        return [
            {
                qty: 1,
                monster: shaman,
            },
            {
                qty: D6() + 2,
                monster: beastman,
            },
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
                qty: 1,
                monster: WightLord(dungeonLevel, tableLevel),
            },
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
                qty: D6(2),
                monster: TombGuardian(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Mummy(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: TombKing(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Cockatrice(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
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
                monster: ChaosDwarfBlunderbuss(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: ChaosDwarfSorcerer(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Gorgon(dungeonLevel, tableLevel),
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
        const sorcerer = ChaosSorcerer(dungeonLevel, tableLevel);
        const champion = ChaosChampion(dungeonLevel, tableLevel);
        champion.specialRules.push(Guards(sorcerer));
        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: D6(),
                monster: champion,
            },
            {
                qty: D6(),
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: DragonOgre(dungeonLevel, tableLevel),
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
                qty: D6(2),
                monster: DarkElfWarrior(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: WitchElf(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: DarkElfAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: DarkElfHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: WightLord(dungeonLevel, tableLevel),
            },
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
                monster: WarpfireThrowerTeam(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
                qty: 3,
                monster: Wraith(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: Ghost(dungeonLevel, tableLevel),
            },
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
                qty: 1,
                monster: Cockatrice(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),
];

export default function (dungeonLevel = 5, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level6(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 5);
}
