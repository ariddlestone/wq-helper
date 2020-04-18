<template>
    <div class="monster card">
        <div class="monsterTitle card-divider grid-x align-middle">
            <div class="cell small-10">{{ quantity }} &times; {{ quantity === 1 ? monster.singularName : monster.pluralName }}</div>
            <div class="cell small-2 text-right"><button type="button" class="button small alert" @click="removeMonster()">Remove</button></div>
        </div>
        <div class="grid-x grid-padding-x grid-padding-y">
            <div class="cell medium-6 large-4 profile">
                <table>
                    <tbody>
                    <tr>
                        <th>Move</th>
                        <td>{{ monster.move }}</td>
                    </tr>
                    <tr>
                        <th>Weapon Skill</th>
                        <td>{{ monster.weaponSkill }}</td>
                    </tr>
                    <tr>
                        <th>Ballistic Skill</th>
                        <td>{{ monster.ballisticSkill > 0 ? monster.ballisticSkill + "+" : "-" }}</td>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <td>{{ monster.strength }}</td>
                    </tr>
                    <tr>
                        <th>Toughness</th>
                        <td>{{ monster.toughness }}</td>
                    </tr>
                    <tr>
                        <th>Wounds</th>
                        <td>{{ monster.wounds }}</td>
                    </tr>
                    <tr>
                        <th>Initiative</th>
                        <td>{{ monster.initiative > 0 ? monster.initiative : "-" }}</td>
                    </tr>
                    <tr>
                        <th>Attacks</th>
                        <td>{{ monster.attacks }}</td>
                    </tr>
                    <tr>
                        <th>Gold</th>
                        <td>{{ monster.gold }}</td>
                    </tr>
                    <tr>
                        <th>Armor</th>
                        <td>{{ monster.armour > 0 ? monster.armour : "-" }}</td>
                    </tr>
                    <tr>
                        <th>Damage</th>
                        <td>{{ monster.damage }}</td>
                    </tr>
                    </tbody>
                </table>
                <to-hit-chart :weapon-skill="monster.weaponSkill" />
            </div>
            <div class="cell medium-6 large-8">
                <ul class="accordion" data-accordion data-allow-all-closed="true">
                    <li class="accordion-item is-active" data-accordion-item>
                        <a class="accordion-title" href="#">Description</a>
                        <div class="accordion-content" data-tab-content>
                            <div class="media-object">
                                <div v-if="monster.image" class="media-object-section">
                                    <div class="thumbnail">
                                        <img :src="monster.image" />
                                    </div>
                                </div>
                                <div v-html="monster.description" class="media-object-section">
                                    <h4>Dreams feel real while we're in them.</h4>
                                    <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-bind:key="specialRule.name" v-for="specialRule in monster.specialRules" class="accorion-item" data-accordion-item>
                        <a v-html="specialRule.name" class="accordion-title" href="#" />
                        <div v-html="specialRule.description" class="accordion-content" data-tab-content />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import jQuery from "jquery";
    import Foundation from "foundation-sites";
    import ToHitChart from "@/components/ToHitChart";
    export default {
        name: "Monster",
        components: {ToHitChart},
        props: {
            quantity: Number,
            monster: Object,
        },
        methods: {
            removeMonster: function() {
                this.$emit("remove-monster");
            }
        },
        mounted: function() {
            jQuery("[data-accordion]", this.$el).each(function() {
                new Foundation.Accordion(jQuery(this));
            });
        },

    }
</script>

<style scoped>
    .monsterTitle {
        font-weight: bold;
    }
    .monsterTitle button {
        margin: 0;
    }
    .profile {
        font-size: 0.75em;
    }
    .profile th, .profile td {
        text-align: center;
    }
    .thumbnail img {
        max-width: 20vw;
    }
</style>
