<template>
  <b
    ><p :style="{ marginLeft: '5rem' }">
      composition API vue3 + typescript solution
    </p></b
  >
  <Navbar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
