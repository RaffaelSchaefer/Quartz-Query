<template>
  <p></p>
</template>

<script>
import getMineral from "@/MineralService";

export default {
  name: 'MineralComponent',
  data() {
    return {
      minerals: [],
      error: "",
      text: ""
    }
  },
  created: async function () {
    try {
      this.minerals = (await getMineral(1));
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>