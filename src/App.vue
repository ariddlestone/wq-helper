<template>
  <div id="app" class="grid-container">
    <div class="tabs-container">
      <ul class="tabs" data-tabs id="control-tabs">
        <li class="tabs-title is-active"><a href="#random-monsters-panel" aria-selected="true">Random Monsters</a></li>
        <li class="tabs-title"><a href="#find-monster-panel">Find Monster</a></li>
      </ul>
      <div class="tabs-content" data-tabs-content="control-tabs">
        <div class="tabs-panel is-active" id="random-monsters-panel">
          <div class="grid-x grid-margin-x">
            <select v-model="selectedLevel" class="cell small-5">
              <option v-for="level in levels" v-bind:key="level" :value="level">Level {{ level }}</option>
            </select>
            <select v-model="selectedRace" class="cell small-5">
              <option value="null">All</option>
              <option v-for="race in races" v-bind:key="race.key" :value="race.key">{{ race.name }}</option>
            </select>
            <button @click="addRandomMonsters(selectedLevel, selectedRace)" type="button" class="button cell small-2">Add</button>
          </div>
        </div>
        <div class="tabs-panel" id="find-monster-panel">
          <div class="grid-x grid-margin-x">
            <select v-model="selectedMonster" class="cell small-5">
              <optgroup v-for="race in races" v-bind:key="race.key" :label="race.name">
                <option v-for="monster in race.monsters" v-bind:key="monster.constructor.name" :value="race.key + '.' + monster.constructor.name">{{monster.name}}</option>
              </optgroup>
            </select>
            <input type="number" placeholder="Quantity" v-model="selectedMonsterQuantity" class="cell small-5" />
            <button @click="addSelectedMonster(selectedMonster, selectedMonsterQuantity)" type="button" class="button cell small-2">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div
            v-for="monsterGroup in monsterGroups"
            v-bind:key="monsterGroup.id">
      <monster
              :quantity="monsterGroup.qty"
              :monster="monsterGroup.monster"
              @remove-monster="removeMonster(monsterGroup.id)" />
    </div>
  </div>
</template>

<script>
import Monster from "@/components/Monster";
import Races from "@/Monsters/Races";
import Tables from "@/Monsters/Tables";
import jQuery from "jquery";
import Foundation from "foundation-sites";
export default {
  name: 'App',
  components: {
    Monster
  },
  data: () => {
    return {
      races: Races,
      selectedRace: null,
      levels: [1],
      selectedLevel: 1,
      selectedMonster: null,
      selectedMonsterQuantity: 1,
      monsterGroups: [],
    };
  },
  methods: {
    addRandomMonsters: function(level, raceKey) {
      const race = this.races.filter(race => race.key === raceKey)[0];
      Tables(level, race).map((monsterGroup, key) => this.monsterGroups.push(Object.assign({id: Date.now() + key}, monsterGroup)));
    },
    addSelectedMonster(selectedMonster, quantity) {
      const selectedRace = selectedMonster.split(".")[0];
      const race = this.races.filter(race => race.key === selectedRace)[0];
      const monster = race.monsters.filter(monster => monster.constructor.name === selectedMonster.split(".")[1])[0];
      this.monsterGroups.push({
        qty: parseInt(quantity),
        monster: monster.constructor(),
        id: Date.now(),
      });
    },
    removeMonster: function(monsterGroupId) {
      this.monsterGroups = this.monsterGroups.filter(monsterGroup => monsterGroup.id !== monsterGroupId);
    },
  },
  mounted: function() {
    new Foundation.Tabs(jQuery("[data-tabs]", this.$el));
  },
}
</script>

<style scoped>
  .tabs-container {
    margin: 1rem 0;
  }
</style>
