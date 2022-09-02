<template>
  <div v-cloak>
    <SearchBar v-model="minerals"></SearchBar>
    <div class="grid grid-rows-1 grid-cols-2 gap-0">
      <MineralList class="" v-bind:minerals="this.minerals" v-model="this.selectedMineral"></MineralList>
      <MineralViewer v-bind:selectedMineral="this.selectedMineral"></MineralViewer>
    </div>
    <MineralCreator></MineralCreator>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MineralList from "@/components/MineralList";
import MineralViewer from "@/components/MineralViewer";
import MineralCreator from "@/components/MineralCreator";
export default {
  components: {
    SearchBar,
    MineralList,
    MineralViewer,
    MineralCreator
  },
  data() {
    return {
      minerals: [],
      selectedMineral: null,
      error: ""
    }
  },
  created: async function () {
    try {
      this.minerals = [];
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>