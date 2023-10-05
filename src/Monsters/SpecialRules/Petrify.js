export default function () {
    return {
        name: `Petrify`,
        description: `
            <p>
                Some Monsters can Petrify their foes in combat, turning them to stone with a single gaze. Any Warrior
                that attacks such a Monster is at -2 to his to hit rolls as he is so busy trying to avoid its gaze.
            </p>
            <p>
                In addition, if a Warrior attacking a Monster with a Petrify attack scores a natural 1 on his to hit
                roll he has been caught by the creature's gaze and starts to turn to stone. He immediately suffers 3D6
                Wounds, with no modifier for Toughness or armour, and for the rest of the adventure he is at -1
                Movement. If his Movement is subsequently reduced to 0 by any means while in the dungeon he is
                immediately turned to stone, beyond all reach of healing magic.
            </p>
            <p>
                All Monsters with a Petrify attack also have natural Magic Resistance 4+ and, if their resistance roll
                is a natural 6, may immediately turn their Petrify attack on the spellcaster that attacked them and
                inflict the effects above.
            </p>
        `,
    };
}
