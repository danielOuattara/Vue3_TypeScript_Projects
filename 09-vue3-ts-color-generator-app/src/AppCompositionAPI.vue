<template>
  <section class="container">
    <h3 :class="inputColorError ? 'error' : null">color generator</h3>
    <form action="" @submit.prevent="handleSubmit()">
      <input
        type="text"
        :placeholder="
          inputColorError ? 'Enter a valid Hex color...' : '#fbb146'
        "
        v-model="userColor"
        :class="inputColorError ? 'error' : null"
      />
      <button type="submit" class="btn">Submit</button>
      <p v-if="inputColorError" class="error">
        Enter a valid Hexadecimal Color
      </p>
    </form>
  </section>
  <section class="colors">
    <SingleColor
      v-for="(color, index) in colorsList"
      :key="index"
      :index="index"
      :color="color"
      :listLength="colorsList.length"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import SingleColor from "./components/SingleColor.vue";
import Values from "values.js";

export default defineComponent({
  name: "App",
  components: { SingleColor },
  setup() {
    const step = ref(5);
    const userColor = ref("");
    const inputColorError = ref(false);
    const colorsList = ref(new Values("#fbb146").all(step.value));

    function handleSubmit() {
      try {
        colorsList.value = new Values(userColor.value).all(step.value);
      } catch (error) {
        inputColorError.value = true;
        userColor.value = "";
      }
    }

    return {
      step,
      userColor,
      inputColorError,
      colorsList,
      handleSubmit,
    };
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
