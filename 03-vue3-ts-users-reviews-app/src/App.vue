<template>
  <main>
    <section class="container">
      <div class="title">
        <h2>our reviews</h2>
        <h4>vue3 composition API & typescript</h4>
        <div class="underline"></div>
      </div>
      <Reviews />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Reviews from "./components/Reviews.vue";

export default defineComponent({
  name: "App",
  components: { Reviews },
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
