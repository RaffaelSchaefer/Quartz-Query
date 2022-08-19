<style>

</style>

<template>
  <form @submit.prevent="searchMinerals">
    <label for="search-input">Eingabe: </label>
    <input type="text" placeholder="Deine Suchanfrage" name="search" id="search-input" v-model="search" required autofocus>
    <input type="submit" value="senden">
  </form>
  <p v-if="minerals.length > 0">
    Anzahl der Übereinstimmungen: {{minerals.length}}
  </p>
  <div v-for="(mineral, index) in minerals" v-bind:item = "mineral" v-bind:index = "index" v-bind:key = "mineral._id">
    <h2>{{mineral.A_Code}}</h2>
    <p>{{mineral.Name}}</p>
    <p>{{mineral.Paragenese}}</p>
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