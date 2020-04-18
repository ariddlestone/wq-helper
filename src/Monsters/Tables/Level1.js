import Chaos from "@/Monsters/Races/Chaos";
import {Beastman} from "@/Monsters/Races/Chaos/Beastmen";

import DarkElves from "@/Monsters/Races/DarkElves";
import {DarkElfWarrior} from "@/Monsters/Races/DarkElves/DarkElves";
import {NaggarothBlackGuard} from "@/Monsters/Races/DarkElves/NaggarothBlackGuards";

import Monsters from "@/Monsters/Races/Monsters";
import {CaveSquig} from "@/Monsters/Races/Monsters/CaveSquigs";
import {Centaur} from "@/Monsters/Races/Monsters/Centaurs";
import {GiantBat} from "@/Monsters/Races/Monsters/GiantBat";
import {GiantRat} from "@/Monsters/Races/Monsters/GiantRat";
import {GiantSpider} from "@/Monsters/Races/Monsters/GiantSpider";
import {Minotaur} from "@/Monsters/Races/Monsters/Minotaurs";
import {Ogre} from "@/Monsters/Races/Monsters/Ogre";

import Skaven from "@/Monsters/Races/Skaven";
import {Clanrat} from "@/Monsters/Races/Skaven/Clanrat";
import {Stormvermin} from "@/Monsters/Races/Skaven/Stormvermin";

import OrcsAndGoblins from "@/Monsters/Races/OrcsAndGoblins";
import {Goblin, GoblinNetter} from "@/Monsters/Races/OrcsAndGoblins/Goblins";
import {GoblinShaman} from "@/Monsters/Races/OrcsAndGoblins/GoblinShaman";
import {GoblinSquigHunter} from "@/Monsters/Races/OrcsAndGoblins/GoblinSquigHunters";
import {Hobgoblin} from "@/Monsters/Races/OrcsAndGoblins/Hobgoblins";
import {Orc} from "@/Monsters/Races/OrcsAndGoblins/Orc";
import {SavageOrcShaman} from "@/Monsters/Races/OrcsAndGoblins/OrcShaman";
import {SavageOrc} from "@/Monsters/Races/OrcsAndGoblins/SavageOrc";
import {Snotling} from "@/Monsters/Races/OrcsAndGoblins/Snotling";

import Undead from "@/Monsters/Races/Undead";
import {Ghoul} from "@/Monsters/Races/Undead/Ghouls";
import {Skeleton} from "@/Monsters/Races/Undead/Skeletons";
import {Zombie} from "@/Monsters/Races/Undead/Zombies";

export default [
    // Roll on level 2 table

    // 1D3 Ogres
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 3) + 1,
            monster: Ogre(),
        }];
    }, {
        race: Monsters,
    }),

    // 1D6+2 Beastmen
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 3,
            monster: Beastman(),
        }];
    }, {
        race: Chaos,
    }),

    // 1D6+3 Skaven Stormvermin
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 4,
            monster: Stormvermin(),
        }];
    }, {
        race: Skaven,
    }),

    // 1D6+6 Snotlings
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: Snotling(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Giant Bats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: GiantBat(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Giant Spiders
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: GiantSpider(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Giant Rats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: GiantRat(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Orcs
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Orc(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 2D6 Skaven Clanrats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Clanrat(),
        }];
    }, {
        race: Skaven,
    }),

    // 1D6 Savage Orcs + 1 Savage Orc Shaman
    Object.assign(() => {
        return [
            {
                qty: Math.floor(Math.random() * 6) + 1,
                monster: SavageOrc(),
            },
            {
                qty: 1,
                monster: SavageOrcShaman(),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6 Goblin Netters
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 1,
            monster: GoblinNetter(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 2D6 Skeletons
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Skeleton(),
        }];
    }, {
        race: Undead,
    }),

    // 1D6 Zombies
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 1,
            monster: Zombie(),
        }];
    }, {
        race: Undead,
    }),

    // 2D6 Ghouls
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Ghoul(),
        }];
    }, {
        race: Undead,
    }),

    // 1D6+3 Dark Elves
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 4,
            monster: DarkElfWarrior(),
        }];
    }, {
        race: DarkElves,
    }),

    // 2D6 Giant Spiders
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: GiantSpider(),
        }];
    }, {
        race: Monsters,
    }),

    // 1D3 Wild Cave Squigs or (1D3 Trained Cave Squigs and Goblin Squig Hunters)
    Object.assign(() => {
        const qty = Math.floor(Math.random() * 3) + 1;
        const monsters = [{
            qty,
            monster: CaveSquig(),
        }];
        if(Math.random() >= 0.5) {
            monsters.push({
                qty: qty * 2,
                monster: GoblinSquigHunter(),
            });
        }
        return monsters;
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Snotlings
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: Snotling(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Giant Bats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: GiantBat(),
        }];
    }, {
        race: Monsters,
    }),

    // 1D6+3 Hobgoblins
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 4,
            monster: Hobgoblin(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Goblins + 1 Goblin Shaman
    Object.assign(() => {
        return [
            {
                qty: Math.floor(Math.random() * 6) + 7,
                monster: Goblin(),
            },
            {
                qty: 1,
                monster: GoblinShaman(),
            },
        ];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D3 Minotaurs
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 3) + 1,
            monster: Minotaur(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Orcs
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Orc(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Snotlings
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: Snotling(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+6 Giant Bats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: GiantBat(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Giant Spiders
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: GiantSpider(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Giant Rats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: GiantRat(),
        }];
    }, {
        race: Monsters,
    }),

    // 2D6 Skaven Clanrats
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Clanrat(),
        }];
    }, {
        race: Skaven,
    }),

    // 2D6 Skeletons
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2,
            monster: Skeleton(),
        }];
    }, {
        race: Undead,
    }),

    // 1D6+6 Goblins
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 7,
            monster: Goblin(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+3 Hobgoblins
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 4,
            monster: Hobgoblin(),
        }];
    }, {
        race: OrcsAndGoblins,
    }),

    // 1D6+2 Dark Elf Naggaroth Black Guards
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 6) + 3,
            monster: NaggarothBlackGuard(),
        }];
    }, {
        race: DarkElves,
    }),

    // 1D3 Centaurs
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 3) + 1,
            monster: Centaur(),
        }];
    }, {
        race: Monsters,
    }),

    // 1D3 Minotaurs
    Object.assign(() => {
        return [{
            qty: Math.floor(Math.random() * 3) + 1,
            monster: Minotaur(),
        }];
    }, {
        race: Monsters,
    }),

    // Roll on level 2 table
];
