<template>
  <div class="p-2 ml-4 fixed w-1/2 left-1/2" v-if="!!selectedMineral">
    <h1 class="text-3xl text-center font-bold text-slate-800 dark:text-slate-50">{{selectedMineral.A_Code}}</h1>
    <hr>
    <p class="text-slate-700 dark:text-slate-200">Name: {{selectedMineral.Name}}</p>
    <p class="text-slate-700 dark:text-slate-200">Paragenese: {{selectedMineral.Paragenese}}</p>
    <p class="text-slate-700 dark:text-slate-200">Fundort: {{selectedMineral.Fundort}}</p>
    <p class="text-slate-700 dark:text-slate-200">Ausbildung: {{selectedMineral.Ausbildung}}</p>
    <p class="text-slate-700 dark:text-slate-200">Funddatum: {{selectedMineral.Funddatum}}</p>
    <p class="text-slate-700 dark:text-slate-200">Kaufdatum: {{selectedMineral.Kaufdatum}}</p>
    <p class="text-slate-700 dark:text-slate-200">Tauschdatum: {{selectedMineral.Tauschdatum}}</p>
    <p class="text-slate-700 dark:text-slate-200">Kauf/Tauschpreis: {{selectedMineral.Kauf_Tauschpreis}}</p>
    <p class="text-slate-700 dark:text-slate-200">Wert in DM: {{selectedMineral.Wert_DM}}</p>
  </div>
  <div class="p-2 ml-4 fixed w-1/2 left-1/2" v-else>
    <h1 class="text-3xl text-center font-bold text-slate-800 dark:text-slate-50">Bitte wähle ein Mineral aus</h1>
    <p class="text-slate-700 dark:text-slate-200 text-center">Um seine Details dir genauer anzuschauen</p>
  </div>
</template>

<script>
export default {
  name: "MineralViewer",
  props: ['selectedMineral']
}
</script>