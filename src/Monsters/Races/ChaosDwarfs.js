import ChaosDwarfSorcerers from "./ChaosDwarfs/ChaosDwarfSorcerers";
import ChaosDwarfs from "./ChaosDwarfs/ChaosDwarfs";

const monsters = []
    .concat(ChaosDwarfs)
    .concat(ChaosDwarfSorcerers);

export default {
    key: "ChaosDwarfs",
    name: "Chaos Dwarfs",
    monsters,
};
