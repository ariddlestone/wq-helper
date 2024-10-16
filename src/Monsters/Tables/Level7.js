import {D3, D6} from "../../Utilities/Dice";

import Level8 from "./Level8";

import ArmedWith from "../SpecialRules/ArmedWith";
import Guards from "../SpecialRules/Guards";

import Chaos from "../Races/Chaos";
import {Beastman, BeastmanChampion, BeastmanHero, BeastmanLord} from "../Races/Chaos/Beastmen";
import {BeastmanShaman} from "../Races/Chaos/BeastmanShamans";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarf, ChaosDwarfBlunderbuss, ChaosDwarfLord} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfMasterSorcerer} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import DarkElves from "../Races/DarkElves";
import {DarkElfSorcerer} from "../Races/DarkElves/DarkElfSorcerers";
import {DarkElfAssassin, DarkElfChampion, DarkElfLord, DarkElfWarrior} from "../Races/DarkElves/DarkElves";
import {WitchElfChampion} from "../Races/DarkElves/WitchElves";

import Giants from "../Races/Giants";
import {Giant} from "../Races/Giants/Giants";

import Monsters from "../Races/Monsters";
import {BullCentaurChampion, BullCentaurHero} from "../Races/Monsters/BullCentaurs";
import {Cockatrice} from "../Races/Monsters/Cockatrices";
import {CentaurChampion, CentaurHero} from "../Races/Monsters/Centaurs";
import {Chimera} from "../Races/Monsters/Chimeras";
import {DragonOgre, DragonOgreChampion} from "../Races/Monsters/DragonOgres";
import {Gorgon} from "../Races/Monsters/Gorgons";
import {GreatTaurus} from "../Races/Monsters/GreatTauruses";
import {Griffon} from "../Races/Monsters/Griffons";
import {Hippogriff} from "../Races/Monsters/Hippogriffs";
import {Hydra} from "../Races/Monsters/Hydras";
import {Lammasu} from "../Races/Monsters/Lammasu";
import {Manticore} from "../Races/Monsters/Manticores";
import {MinotaurChampion, MinotaurHero} from "../Races/Monsters/Minotaurs";
import {Wyvern} from "../Races/Monsters/Wyverns";

import OrcsAndGoblins from "../Races/OrcsAndGoblins";
import {BlackOrcBigBoss, BlackOrcChampion} from "../Races/OrcsAndGoblins/BlackOrcs";
import {OrcWarBoss} from "../Races/OrcsAndGoblins/Orcs";
import {OrcShamanChampion} from "../Races/OrcsAndGoblins/OrcShamans";

import Skaven from "../Races/Skaven";
import {SkavenAssassin, SkavenDeathmaster} from "../Races/Skaven/SkavenAssassins";
import {SkavenGreySeer, SkavenMasterWarlock} from "../Races/Skaven/SkavenGreySeers";
import {SkavenPlagueLord, SkavenPlaguePriest} from "../Races/Skaven/SkavenPlagueMonks";
import {WarpfireThrowerTeam} from "../Races/Skaven/WarpfireThrowerTeams";
import {ChaosSorcerer, MasterChaosSorcerer} from "../Races/Chaos/ChaosSorcerers";
import {ChaosChampion, ChaosHero, ChaosWarrior} from "../Races/Chaos/ChaosWarriors";

import Undead from "../Races/Undead";
import {Mummy, TombKing} from "../Races/Undead/Mummies";
import {MasterNecromancer, NecromancerChampion} from "../Races/Undead/Necromancers";
import {TombGuardian} from "../Races/Undead/Skeletons";
import {VampireCount} from "../Races/Undead/Vampires";
import {Wight, WightLord} from "../Races/Undead/Wights";
import {Wraith} from "../Races/Undead/Wraiths";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        const greySeer = SkavenGreySeer(dungeonLevel, tableLevel);
        const warpfireThrower = WarpfireThrowerTeam(dungeonLevel, tableLevel);
        warpfireThrower.specialRules.push(Guards(greySeer));

        return [
            {
                qty: 1,
                monster: greySeer,
            },
            {
                qty: 2,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: warpfireThrower,
            },
            {
                qty: 6,
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Hydra(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 4,
                monster: CentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: CentaurHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: DarkElfSorcerer(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: DarkElfAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: 8,
                monster: DarkElfWarrior(dungeonLevel, tableLevel),
            },
            {
                qty: D6(),
                monster: WitchElfChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const warlock = SkavenMasterWarlock(dungeonLevel, tableLevel);
        const warpfireThrower = WarpfireThrowerTeam(dungeonLevel, tableLevel);
        warpfireThrower.specialRules.push(Guards(warlock));

        return [
            {
                qty: 1,
                monster: warlock,
            },
            {
                qty: 2,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
            {
                qty: D3(),
                monster: warpfireThrower,
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = ChaosDwarfMasterSorcerer(dungeonLevel, tableLevel);
        const blunderbuss = ChaosDwarfBlunderbuss(dungeonLevel, tableLevel);
        blunderbuss.specialRules.push(Guards(sorcerer));

        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: 8,
                monster: blunderbuss,
            },
            {
                qty: 4,
                monster: CentaurChampion(dungeonLevel, tableLevel),
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
        return [
            {
                qty: 1,
                monster: MinotaurHero(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: MinotaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 4,
                monster: CentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: CentaurHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = BeastmanShaman(dungeonLevel, tableLevel);
        const guard = BeastmanChampion(dungeonLevel, tableLevel);
        guard.specialRules[1] = ArmedWith([{
            name: "Crossbow (str 7)",
            weight: 1,
        }]);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 2,
                monster: shaman,
            },
            {
                qty: 3,
                monster: guard,
            },
            {
                qty: 3,
                monster: BeastmanChampion(dungeonLevel, tableLevel),
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
        const sorcerer = ChaosSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));

        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: D6(),
                monster: guard,
            },
            {
                qty: 6,
                monster: ChaosWarrior(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: ChaosHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
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
                monster: guard,
            },
            {
                qty: 3,
                monster: Wraith(dungeonLevel, tableLevel),
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
        const shaman = BeastmanShaman(dungeonLevel, tableLevel);
        const guard = BeastmanChampion(dungeonLevel, tableLevel);
        guard.specialRules[1] = ArmedWith([{
            name: "Crossbow (str 7)",
            weight: 1,
        }]);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 2,
                monster: shaman,
            },
            {
                qty: 3,
                monster: guard,
            },
            {
                qty: 3,
                monster: BeastmanChampion(dungeonLevel, tableLevel),
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
        const shaman = OrcShamanChampion(dungeonLevel, tableLevel);
        const guard = BlackOrcChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 2,
                monster: shaman,
            },
            {
                qty: D6(2),
                monster: guard,
            },
            {
                qty: 1,
                monster: BlackOrcBigBoss(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: OrcWarBoss(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Gorgon(dungeonLevel, tableLevel),
            },
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
                qty: D6(),
                monster: DarkElfAssassin(dungeonLevel, tableLevel),
            },
            {
                qty: D6(2),
                monster: DarkElfChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 2,
                monster: DarkElfLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: DarkElves,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Giant(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Giants,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Manticore(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Hydra(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Wyvern(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: VampireCount(dungeonLevel, tableLevel),
            },
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
                monster: Chimera(dungeonLevel, tableLevel),
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
                qty: 1,
                monster: Lammasu(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BullCentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 8,
                monster: ChaosDwarf(dungeonLevel, tableLevel),
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
                monster: GreatTaurus(dungeonLevel, tableLevel),
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
                monster: ChaosDwarfLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: SkavenPlagueLord(dungeonLevel, tableLevel),
            },
            {
                qty: 2,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: SkavenDeathmaster(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: SkavenAssassin(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Griffon(dungeonLevel, tableLevel),
            },
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
                monster: BullCentaurHero(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: BullCentaurChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = MasterChaosSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));

        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: D3(),
                monster: ChaosSorcerer(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: guard,
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = MasterNecromancer(dungeonLevel, tableLevel);
        const guard = Wight(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(necromancer));

        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: 6,
                monster: guard,
            },
            {
                qty: 3,
                monster: Wraith(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Giant(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Giants,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: GreatTaurus(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Chimera(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: Cockatrice(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),
];

export default function (dungeonLevel = 7, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level8(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if (table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 7);
}
