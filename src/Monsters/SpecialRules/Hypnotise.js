export default function (value) {
    value = typeof value === "number" ? value + "+" : value;
    return {
        name: `Hypnotise ${value}`,
        description: `
            <p>
                Some Monsters are able to Hypnotise their foes, holding them immobile while they attack them. A Monster
                with this ability will successfully hypnotise their target on a 1D6 roll of ${value}. A hyponotised
                Warrior may fight as normal, but is prevented from escaping from pinning (and that includes the Elf!).
            </p>
        `,
    };
}
