<style>

</style>

<template>
  <form class="sticky bg-white shadow p-4 mb-4" @submit.prevent="searchMinerals">
    <label class="text-slate-700 text-sm font-bold mb-2" for="search-input">Eingabe: </label>
    <input class="shadow appearance-none border rounded text-slate-700 pl-1 mr-1 leading-loose focus:outline-none focus:shadow-outline" type="text" placeholder="Deine Suchanfrage" name="search" id="search-input" v-model="search" required autofocus>
    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded focus:outline-none focus:shadow-outline" type="submit" value="senden">
    <p class="ml-2 inline text-xs text-gray-400" v-if="minerals.length > 0">
      Anzahl der Übereinstimmungen: {{minerals.length}}
    </p>
  </form>
  <div class="grid place-content-center">
    <div class="p-2 mx-2 my-4 border rounded shadow" v-for="(mineral, index) in minerals" v-bind:item = "mineral" v-bind:index = "index" v-bind:key = "mineral._id">
      <p class="text-2xl font-bold text-slate-800">{{mineral.A_Code}}</p>
      <p class="text-slate-700" v-if="!!mineral.Name">Name: {{mineral.Name}}</p>
      <p class="text-slate-700" v-if="!!mineral.Paragenese">Paragenese: {{mineral.Paragenese}}</p>
      <p class="text-slate-700" v-if="!!mineral.Fundort">Fundort: {{mineral.Fundort}}</p>
      <p class="text-slate-700" v-if="!!mineral.Ausbildung">Ausbildung: {{mineral.Ausbildung}}</p>
      <p class="text-slate-700" v-if="!!mineral.Funddatum">Funddatum: {{mineral.Funddatum}}</p>
      <p class="text-slate-700" v-if="!!mineral.Kaufdatum">Kaufdatum: {{mineral.Kaufdatum}}</p>
      <p class="text-slate-700" v-if="!!mineral.Tauschdatum">Tauschdatum: {{mineral.Tauschdatum}}</p>
      <p class="text-slate-700" v-if="!!mineral.Kauf_Tauschpreis">Kauf/Tauschpreis: {{mineral.Kauf_Tauschpreis}}</p>
      <p class="text-slate-700" v-if="!!mineral.Wert_DM">Wert in DM: {{mineral.Wert_DM}}</p>
    </div>
  </div>
</template>

<script>
import MineralService from "../MineralService.js";

export default {
  name: 'MineralComponent',
  data() {
    return {
      search: "Silber",
      minerals: [],
      error: "",
      text: ""
    }
  },
  created: async function () {
    try {
      this.minerals = await MineralService.getMinerals("Silber");
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async searchMinerals() {
      try {
        this.minerals = await MineralService.getMinerals(this.search);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
}
</script>