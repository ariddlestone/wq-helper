import {D3, D6} from "../../Utilities/Dice";

import Guards from "../SpecialRules/Guards";
import Riding from "../SpecialRules/Riding";

import Chaos from "../Races/Chaos";
import {Beastman, BeastmanChampion, BeastmanHero, BeastmanLord} from "../Races/Chaos/Beastmen";
import {BeastOfNurgle} from "../Races/Chaos/BeastsOfNurgle";
import {BeastmanShaman} from "../Races/Chaos/BeastmanShamans";
import {ChaosSorcerer} from "../Races/Chaos/ChaosSorcerers";
import {ChaosChampion, ChaosWarrior} from "../Races/Chaos/ChaosWarriors";
import {Juggernaut} from "../Races/Chaos/Juggernauts";
import {Plaguebearer} from "../Races/Chaos/Plaguebearers";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss, ChaosDwarfLord} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfMasterSorcerer, ChaosDwarfSorcerer} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import DarkElves from "../Races/DarkElves";
import {DarkElfAssassin, DarkElfHero, DarkElfWarrior} from "../Races/DarkElves/DarkElves";
import {WitchElf} from "../Races/DarkElves/WitchElves";

import Monsters from "../Races/Monsters";
import {BullCentaur, BullCentaurChampion, BullCentaurHero} from "../Races/Monsters/BullCentaurs";
import {Centaur, CentaurChampion} from "../Races/Monsters/Centaurs";
import {Cockatrice} from "../Races/Monsters/Cockatrices";
import {DragonOgre, DragonOgreChampion} from "../Races/Monsters/DragonOgres";
import {Gorgon} from "../Races/Monsters/Gorgons";
import {Griffon} from "../Races/Monsters/Griffons";
import {Hippogriff} from "../Races/Monsters/Hippogriffs";
import {Minotaur, MinotaurChampion} from "../Races/Monsters/Minotaurs";
import {Ogre} from "../Races/Monsters/Ogres";
import {StoneTroll, Troll} from "../Races/Monsters/Trolls";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrcBigBoss, BlackOrcChampion} from "../Races/OrcsAndGoblins/BlackOrcs";
import {OrcBigBoss, OrcWarBoss} from "../Races/OrcsAndGoblins/Orcs";
import {OrcShaman, OrcShamanChampion} from "../Races/OrcsAndGoblins/OrcShamans";

import Skaven from "../Races/Skaven";
import {SkavenAssassin} from "../Races/Skaven/SkavenAssassins";
import {SkavenWarlockChampion} from "../Races/Skaven/SkavenGreySeers";
import {SkavenPlagueLord, SkavenPlagueMonk, SkavenPlaguePriest} from "../Races/Skaven/SkavenPlagueMonks";
import {SkavenWarlord} from "../Races/Skaven/Stormvermin";
import {WarpfireThrowerTeam} from "../Races/Skaven/WarpfireThrowerTeams";

import Undead from "../Races/Undead";
import {Ghost} from "../Races/Undead/Ghosts";
import {Mummy, TombKing} from "../Races/Undead/Mummies";
import {NecromancerChampion} from "../Races/Undead/Necromancers";
import {TombGuardian} from "../Races/Undead/Skeletons";
import {Wight, WightLord} from "../Races/Undead/Wights";
import {Wraith} from "../Races/Undead/Wraiths";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = ChaosDwarfSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosDwarf(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));
        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: 1,
                monster: BullCentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 8,
                monster: guard,
            },
            {
                qty: 1,
                monster: BullCentaurHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
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
                qty: 1,
                monster: Hippogriff(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: ChaosChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = ChaosDwarfMasterSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosDwarf(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));
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
                monster: guard,
            },
            {
                qty: 1,
                monster: BullCentaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const warlock = SkavenWarlockChampion(dungeonLevel, tableLevel);
        const guard = WarpfireThrowerTeam(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(warlock));
        return [
            {
                qty: 1,
                monster: warlock,
            },
            {
                qty: 3,
                monster: guard,
            },
            {
                qty: 1,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
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
                monster: Griffon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = NecromancerChampion(dungeonLevel, tableLevel);
        const guard = Wight(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(necromancer));
        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: 6,
                monster: Mummy(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: Ghost(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: guard,
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
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
                monster: ChaosDwarfLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = BeastmanShaman(dungeonLevel, tableLevel);
        const guard = BeastmanChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(shaman));
        return [
            {
                qty: 1,
                monster: shaman,
            },
            {
                qty: 3,
                monster: guard,
            },
            {
                qty: 1,
                monster: BeastmanLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
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
                qty: 1,
                monster: Hippogriff(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 8,
                monster: Beastman(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BeastmanHero(dungeonLevel, tableLevel),
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
                qty: 1,
                monster: MinotaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 12,
                monster: DarkElfWarrior(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: WitchElf(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
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
        const qty = D3() + 1;
        const mount = Juggernaut(dungeonLevel, tableLevel);
        const rider = ChaosWarrior(dungeonLevel, tableLevel);
        rider.specialRules.push(Riding(mount));
        return [
            {
                qty: D6(),
                monster: ChaosChampion(dungeonLevel, tableLevel),
            },
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
                qty: 3,
                monster: Wraith(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: Wight(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: WightLord(dungeonLevel, tableLevel),
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
            {
                qty: 1,
                monster: BullCentaurHero(dungeonLevel, tableLevel),
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
        const sorcerer = ChaosSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));
        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: 6,
                monster: guard,
            },
            {
                qty: 6,
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D3(),
                monster: Centaur(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: Minotaur(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: CentaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Gorgon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: D6(),
                monster: OrcBigBoss(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: OrcWarBoss(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: OrcShaman(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Griffon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: DragonOgre(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: DragonOgreChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = OrcShamanChampion(dungeonLevel, tableLevel);
        const guard = OrcBigBoss(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(shaman));
        return [
            {
                qty: D6(),
                monster: guard,
            },
            {
                qty: 1,
                monster: shaman,
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: BeastOfNurgle(dungeonLevel, tableLevel),
            },
            {
                qty: D6() + 2,
                monster: Plaguebearer(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
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
                monster: BlackOrcChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BlackOrcBigBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 6,
                monster: SkavenPlagueMonk(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
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
        const mount = Juggernaut(dungeonLevel, tableLevel);
        const rider = ChaosWarrior(dungeonLevel, tableLevel);
        rider.specialRules.push(Riding(mount));
        const qty = D3() + 1;
        return [
            {
                qty: D6(),
                monster: ChaosChampion(dungeonLevel, tableLevel),
            },
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
                qty: 1,
                monster: Griffon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
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
                qty: 1,
                monster: Hippogriff(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: SkavenPlagueLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),
];

export default function (dungeonLevel = 6, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        // TODO: return Level7(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if(table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 6);
}
