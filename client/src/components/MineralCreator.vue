<template>
<div class="z-20 fixed top-0 left-0 h-full w-full grid">
  <form class="self-end justify-self-end bg-white p-2 m-2 border rounded shadow dark:bg-slate-600" v-if="isVisible" @submit.prevent="console.log('Hallo Welt!')">
    <div class="flex justify-between">
      <p class="font-bold">Mineral Erstellen</p>
      <button @click="isVisible = !isVisible" class="w-5 h-5 rounded-full bg-blue-500 hover:bg-blue-400"></button>
    </div>
    <hr class="my-1">
    <label class="text-slate-900">A-Code: <input type="text" name="A-Code" required></label><br>
    <label class="text-slate-900">Name: <input type="text" name="Name" required></label><br>
    <label class="text-slate-900">Paragenese: <input type="text" name="Paragenese"></label><br>
    <label class="text-slate-900">Ausbildung: <input type="text" name="Ausbildung"></label><br>
    <label class="text-slate-900">Funddatum: <input type="date" name="Funddatum" required></label><br>
    <label class="text-slate-900">Kaufdatum: <input type="date" name="Kaufdatum"></label><br>
    <label class="text-slate-900">Tauschdatum: <input type="date" name="Tauschdatum"></label><br>
    <label class="text-slate-900">Kauf/Tauschpreis: <input type="number" name="Kauf_Tauschpreis"></label><br>
    <label class="text-slate-900">Wert in DM: <input type="number" name="Wert_DM"></label><br>
    <div class="flex-auto flex space-x-2">
      <input class="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white" type="submit">
      <input class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="reset">
    </div>
  </form>
  <button class="self-end justify-self-end w-14 h-14 m-2 bg-blue-500 hover:bg-blue-400 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full drop-shadow-md text-white text-2xl" @click="isVisible = !isVisible" v-else>
    +
  </button>
</div>
</template>

<script>
export default {
  name: "MineralCreator",
  data () {
    return {
      isVisible: true
    }
  }
}
</script>