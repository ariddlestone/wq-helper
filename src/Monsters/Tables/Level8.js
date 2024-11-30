import Level9 from "./Level9";
import {D3, D6} from "../../Utilities/Dice";
import ArmedWith from "../SpecialRules/ArmedWith";
import Guards from "../SpecialRules/Guards";

import Chaos from "../Races/Chaos";
import {BeastmanChampion, BeastmanLord} from "../Races/Chaos/Beastmen";
import {BeastmanShaman, BeastmanShamanChampion} from "../Races/Chaos/BeastmanShamans";
import {ChaosSorcerer, MasterChaosSorcerer} from "../Races/Chaos/ChaosSorcerers";
import {ChaosChampion, ChaosHero, ChaosLord} from "../Races/Chaos/ChaosWarriors";

import ChaosDwarfs from "../Races/ChaosDwarfs";
import {ChaosDwarfBlunderbuss, ChaosDwarfLord} from "../Races/ChaosDwarfs/ChaosDwarfs";
import {ChaosDwarfMasterSorcerer, ChaosDwarfSorcererLord} from "../Races/ChaosDwarfs/ChaosDwarfSorcerers";

import Giants from "../Races/Giants";
import {Giant} from "../Races/Giants/Giants";

import Monsters from "../Races/Monsters";
import {BullCentaurChampion, BullCentaurHero, BullCentaurLord} from "../Races/Monsters/BullCentaurs";
import {CentaurChampion, CentaurHero} from "../Races/Monsters/Centaurs";
import {Chimera} from "../Races/Monsters/Chimeras";
import {Cockatrice} from "../Races/Monsters/Cockatrices";
import {Dragon} from "../Races/Monsters/Dragons";
import {DragonOgreChampion, DragonOgreHero} from "../Races/Monsters/DragonOgres";
import {GreatTaurus} from "../Races/Monsters/GreatTauruses";
import {Gorgon} from "../Races/Monsters/Gorgons";
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
import {OrcShamanChampion, OrcShamanLord} from "../Races/OrcsAndGoblins/OrcShamans";

import Skaven from "../Races/Skaven";
import {SkavenAssassin, SkavenDeathmaster} from "../Races/Skaven/SkavenAssassins";
import {SkavenGreySeer} from "../Races/Skaven/SkavenGreySeers";
import {SkavenPlaguePriest} from "../Races/Skaven/SkavenPlagueMonks";
import {WarpfireThrowerTeam} from "../Races/Skaven/WarpfireThrowerTeams";

import Undead from "../Races/Undead";
import {Liche} from "../Races/Undead/Liches";
import {Mummy, TombKing} from "../Races/Undead/Mummies";
import {NecromancerLord} from "../Races/Undead/Necromancers";
import {Skeleton, TombGuardian} from "../Races/Undead/Skeletons";
import {VampireCount, VampireLord} from "../Races/Undead/Vampires";
import {Wight} from "../Races/Undead/Wights";
import {Wraith} from "../Races/Undead/Wraiths";

export const monsters = [
    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Dragon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: VampireLord(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
                monster: Wight(dungeonLevel, tableLevel),
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
            {
                qty: D6(2),
                monster: BlackOrcChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: SkavenGreySeer(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
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
                monster: GreatTaurus(dungeonLevel, tableLevel),
            },
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
                monster: Hippogriff(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: BeastmanChampion(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = NecromancerLord(dungeonLevel, tableLevel);
        const guard = TombKing(dungeonLevel, tableLevel);
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
                qty: 3,
                monster: guard,
            },
        ];
    }, {
        race: Undead,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: DragonOgreHero(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: DragonOgreChampion(dungeonLevel, tableLevel),
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
                qty: D6(),
                monster: guard,
            },
            {
                qty: 1,
                monster: ChaosHero(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: ChaosLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const shaman = BeastmanShamanChampion(dungeonLevel, tableLevel);
        const guard = BeastmanChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 2,
                monster: shaman,
            },
            {
                qty: 6,
                monster: guard,
            },
            {
                qty: 2,
                monster: BeastmanLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
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
                qty: 6,
                monster: guard,
            },
            {
                qty: 1,
                monster: ChaosHero(dungeonLevel, tableLevel),
            }
        ];
    }, {
        race: Chaos,
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
        const seer = SkavenGreySeer(dungeonLevel, tableLevel);
        const guard = WarpfireThrowerTeam(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(seer));

        return [
            {
                qty: 1,
                monster: seer,
            },
            {
                qty: 6,
                monster: SkavenPlaguePriest(dungeonLevel, tableLevel),
            },
            {
                qty: 3,
                monster: guard,
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 1,
                monster: Lammasu(dungeonLevel, tableLevel),
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
        const shaman = OrcShamanLord(dungeonLevel, tableLevel);
        const guard = BlackOrcChampion(dungeonLevel, tableLevel);
        guard.specialRules[0] = ArmedWith([{name: "Swords"}]);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 1,
                monster: shaman,
            },
            {
                qty: 1,
                monster: OrcShamanChampion(dungeonLevel, tableLevel),
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
        const liche = Liche(dungeonLevel, tableLevel);
        const skeleton = Skeleton(dungeonLevel, tableLevel);
        skeleton.specialRules[0] = ArmedWith([{name: "Bows (Str 3)"}]);
        skeleton.specialRules.push(Guards(liche));
        const wight = Wight(dungeonLevel, tableLevel);
        wight.specialRules.push(Guards(liche));

        return [
            {
                qty: 1,
                monster: liche,
            },
            {
                qty: 12,
                monster: skeleton,
            },
            {
                qty: 6,
                monster: wight,
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
        const sorcerer = ChaosDwarfSorcererLord(dungeonLevel, tableLevel);
        const guard = ChaosDwarfBlunderbuss(dungeonLevel, tableLevel);
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
                qty: D3(),
                monster: BullCentaurHero(dungeonLevel, tableLevel),
            }
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
                qty: D3(),
                monster: MinotaurChampion(dungeonLevel, tableLevel),
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
        const shaman = BeastmanShaman(dungeonLevel, tableLevel);
        const guard = BeastmanChampion(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(shaman));

        return [
            {
                qty: 1,
                monster: shaman,
            },
            {
                qty: 6,
                monster: guard,
            },
            {
                qty: 1,
                monster: CentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: CentaurHero(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Chaos,
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
                monster: GreatTaurus(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: Lammasu(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const sorcerer = ChaosDwarfMasterSorcerer(dungeonLevel, tableLevel);
        const guard = ChaosDwarfBlunderbuss(dungeonLevel, tableLevel);
        guard.specialRules.push(Guards(sorcerer));

        return [
            {
                qty: 1,
                monster: sorcerer,
            },
            {
                qty: 8,
                monster: guard,
            },
            {
                qty: 4,
                monster: CentaurChampion(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: ChaosDwarfLord(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: BullCentaurLord(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: ChaosDwarfs,
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
            {
                qty: 3,
                monster: WarpfireThrowerTeam(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Skaven,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        return [
            {
                qty: 3,
                monster: Gorgon(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: Cockatrice(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),

    Object.assign((dungeonLevel, tableLevel) => {
        const necromancer = NecromancerLord(dungeonLevel, tableLevel);
        const skeleton = Skeleton(dungeonLevel, tableLevel);
        skeleton.specialRules[0] = ArmedWith([{name: "Bows (Str 3)"}]);
        skeleton.specialRules.push(Guards(necromancer));

        return [
            {
                qty: 1,
                monster: necromancer,
            },
            {
                qty: 1,
                monster: VampireCount(dungeonLevel, tableLevel),
            },
            {
                qty: 12,
                monster: skeleton,
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
                monster: VampireLord(dungeonLevel, tableLevel),
            },
            {
                qty: 1,
                monster: VampireCount(dungeonLevel, tableLevel),
            },
            {
                qty: 6,
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
                monster: Dragon(dungeonLevel, tableLevel),
            },
        ];
    }, {
        race: Monsters,
    }),
];

export default function (dungeonLevel = 8, race = null) {
    if (Math.random() < (1.0 / 18.0)) {
        return Level9(dungeonLevel, race);
    }
    const table = race
        ? monsters.filter(row => row.race === race)
        : monsters;
    if (table.length === 0) {
        return [];
    }
    return table[Math.floor(Math.random() * table.length)](dungeonLevel, 8);
}
