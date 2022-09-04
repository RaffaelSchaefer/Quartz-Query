<template>
  <div class="z-50 lg:z-20 fixed top-0 left-0 h-full w-full grid">
    <form
        v-if="isVisible"
        class="lg:self-end lg:justify-self-end bg-white p-2 lg:m-2 w-full lg:w-fit border lg:rounded lg:shadow dark:bg-slate-600" @submit.prevent="console.log('Hallo Welt!')">
      <div class="flex justify-between">
        <p class="text-2xl lg:text-lg font-bold">Mineral Erstellen</p>
        <button class="w-5 h-5 text-center rounded-full bg-red-500 hover:bg-red-400"
                @click="isVisible = !isVisible"></button>
      </div>
      <hr class="my-1">
      <label class="text-slate-900">A-Code: <input v-model="newMin.A_Code" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                   required type="text"></label><br>
      <label class="text-slate-900">Name: <input v-model="newMin.Name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                 required type="text"></label><br>
      <label class="text-slate-900">Fundort: <input v-model="newMin.Fundort" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    required type="text"></label><br>
      <label class="text-slate-900">Paragenese: <input v-model="newMin.Paragenese"
                                                       class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text"></label><br>
      <label class="text-slate-900">Ausbildung: <input v-model="newMin.Ausbildung"
                                                       class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text"></label><br>
      <div class="flex flex-auto space-x-2 my-2 justify-between">
        <label class="text-slate-900">Funddatum: <br><input v-model="newMin.Fundatum"
                                                            class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date"></label><br>
        <label class="text-slate-900">Kaufdatum: <br><input v-model="newMin.Kaufdatum"
                                                            class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date"></label><br>
        <label class="text-slate-900">Tauschdatum: <br><input v-model="newMin.Tauschdatum"
                                                              class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date"></label><br>
      </div>
      <div class="flex flex-auto space-x-2 my-2">
        <label class="text-slate-900">Kauf/Tauschpreis: <br><input
            v-model="newMin.Kauf_Tauschpreis" class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50"
            type="number"></label><br>
        <label class="text-slate-900">Wert in DM: <br><input v-model="newMin.Wert_DM"
                                                             class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="number"></label><br>
      </div>
      <div class="flex-auto flex space-x-2">
        <input class="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white" type="submit" v-on:click="createMineral">
        <input class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="reset">
      </div>
    </form>
    <button
        v-else
        class="self-end justify-self-end w-14 h-14 m-2 bg-blue-500 hover:bg-blue-400 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full drop-shadow-md text-white text-2xl" @click="isVisible = !isVisible">
      +
    </button>
  </div>
</template>

<script>
import MineralService from "@/MineralService";

export default {
  name: "MineralCreator",
  data() {
    return {
      isVisible: false,
      error: "",
      newMin: {
        A_Code: "",
        Name: "",
        Paragenese: "",
        Fundort: "",
        Ausbildung: "",
        Fundatum: "",
        Kaufdatum: "",
        Tauschdatum: "",
        Kauf_Tauschpreis: "",
        Wert_DM: ""
      }
    }
  },
  methods: {
    async createMineral() {
      this.isVisible = false;
      try {
        await MineralService.setMinerals(this.newMin.A_Code, this.newMin.Name, this.newMin.Paragenese, this.newMin.Fundort, this.newMin.Ausbildung, this.newMin.Fundatum, this.newMin.Kaufdatum, this.newMin.Tauschdatum, this.newMin.Kauf_Tauschpreis, this.newMin.Wert_DM);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
}
</script>