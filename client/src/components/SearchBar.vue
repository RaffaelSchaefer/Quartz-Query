<template>
  <form class="sticky z-40 top-0 bg-white dark:bg-slate-700 shadow-md p-4" @submit.prevent="searchMinerals">
    <label>
      <input class="shadow appearance-none border rounded text-slate-600 invalid:border-red-400 invalid:placeholder-red-600 duration-200 pl-1 mr-1 w-full box-border leading-loose focus:outline-none focus:shadow-outline" type="search" placeholder="Deine Suchanfrage" name="search" id="search-input" v-model="search" required autofocus>
      <span class="mt-2 inline text-xs text-gray-400" v-if="minerals.length > 0">
        Anzahl der Übereinstimmungen: {{minerals.length}}
      </span>
    </label>
  </form>
</template>

<script>
import MineralService from "@/MineralService";

export default {
  name: "SearchBar",
  props: ['modelValue'],
  computed: {
    minerals: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  data() {
    return {
      search: "Silber",
      error: ""
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