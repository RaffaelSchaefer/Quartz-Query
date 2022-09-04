<template>
<div class="z-50 lg:z-20 fixed top-0 left-0 h-full w-full grid">
  <form class="lg:self-end lg:justify-self-end bg-white p-2 lg:m-2 w-full lg:w-fit border lg:rounded lg:shadow dark:bg-slate-600" v-if="isVisible" @submit.prevent="console.log('Hallo Welt!')">
    <div class="flex justify-between">
      <p class="text-2xl lg:text-lg font-bold">Mineral Erstellen</p>
      <button @click="isVisible = !isVisible" class="w-5 h-5 text-center rounded-full bg-red-500 hover:bg-red-400"></button>
    </div>
    <hr class="my-1">
    <label class="text-slate-900">A-Code: <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="A-Code" required></label><br>
    <label class="text-slate-900">Name: <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="Name" required></label><br>
    <label class="text-slate-900">Fundort: <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="Fundort" required></label><br>
    <label class="text-slate-900">Paragenese: <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="Paragenese"></label><br>
    <label class="text-slate-900">Ausbildung: <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="Ausbildung"></label><br>
    <div class="flex flex-auto space-x-2 my-2 justify-between">
      <label class="text-slate-900">Funddatum: <br><input class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date" name="Funddatum"></label><br>
      <label class="text-slate-900">Kaufdatum: <br><input class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date" name="Kaufdatum"></label><br>
      <label class="text-slate-900">Tauschdatum: <br><input class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="date" name="Tauschdatum"></label><br>
    </div>
    <div class="flex flex-auto space-x-2 my-2">
      <label class="text-slate-900">Kauf/Tauschpreis: <br><input class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="number" name="Kauf_Tauschpreis"></label><br>
      <label class="text-slate-900">Wert in DM: <br><input class="h-10 border mt-1 rounded px-4 w-fit bg-gray-50" type="number" name="Wert_DM"></label><br>
    </div>
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
      isVisible: false
    }
  }
}
</script>