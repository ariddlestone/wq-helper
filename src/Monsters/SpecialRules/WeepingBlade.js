import Poison from "@/Monsters/SpecialRules/Poison";

export default function () {
    return {
        name: "Weeping Blade",
        description: `
            <p>
                Weeping blades are poisonous weapons:
            </p>
        ` + Poison().description,
    };
}
