<template>
  <section class="section-center">
    <h3>tired of boring lorem ipsum ?</h3>

    <form class="lorem-form" @submit.prevent="handleSubmit">
      <label for="numbParagraph">number of paragraph ?</label>
      <input
        id="numbParagraph"
        type="number"
        min="1"
        :max="allTexts.length"
        v-model="numberOfParagraph"
      />
      <button type="submit" class="btn">Generate</button>
    </form>

    <article class="lorem-text">
      <p v-for="(textItem, index) in text" :key="index">{{ textItem }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import data from "./data";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const allTexts = ref(data);
    const numberOfParagraph = ref<string>("1");
    const text = ref<string[]>([]);

    function handleSubmit() {
      return (text.value = data.slice(0, parseInt(numberOfParagraph.value)));
    }

    return {
      numberOfParagraph,
      text,
      handleSubmit,
      allTexts,
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
