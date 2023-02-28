<template>
  <div className="container">
    <h3>
      question and answer about login <b>(vue3 composition API + typescript)</b>
    </h3>
    <section className="info">
      <ul>
        <li v-for="singleQuestion in questions" :key="singleQuestion.id">
          <Questions :singleQuestion="singleQuestion" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import data from "./data";
import QuestionInterface from "./types/QuestionInterface";
import Questions from "./components/Questions.vue";

export default defineComponent({
  name: "App",
  components: { Questions },
  setup() {
    const questions = ref<QuestionInterface[]>(data);

    return {
      questions,
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
