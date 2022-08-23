<template>
  <div class="grid place-content-center bg-slate-50 dark:bg-slate-800">
    <div class="p-2 mx-2 my-4 w-full border rounded shadow bg-white hover:bg-sky-50 dark:bg-slate-600 hover:dark:bg-slate-500 dark:border-slate-600" v-for="(mineral, index) in minerals" v-bind:item = "mineral" v-bind:index = "index" v-bind:key = "mineral._id" @click="this.selectedMineral = mineral">
      <p class="text-2xl font-bold text-slate-800 dark:text-slate-50">{{mineral.A_Code}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Name">Name: {{mineral.Name}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Paragenese">Paragenese: {{mineral.Paragenese}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Fundort">Fundort: {{mineral.Fundort}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Ausbildung">Ausbildung: {{mineral.Ausbildung}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Funddatum">Funddatum: {{mineral.Funddatum}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Kaufdatum">Kaufdatum: {{mineral.Kaufdatum}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Tauschdatum">Tauschdatum: {{mineral.Tauschdatum}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Kauf_Tauschpreis">Kauf/Tauschpreis: {{mineral.Kauf_Tauschpreis}}</p>
      <p class="text-slate-700 dark:text-slate-200" v-if="!!mineral.Wert_DM">Wert in DM: {{mineral.Wert_DM}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineralList",
  props: ['minerals', 'modelValue'],
  computed: {
    selectedMineral: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>