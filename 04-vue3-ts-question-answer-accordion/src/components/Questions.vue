<template>
  <article className="question">
    <header>
      <h4>{{ singleQuestion.title }}</h4>
      <button className="btn" @click="toggleShowAnswer">
        {{ this.showAnswer ? "-" : "+" }}
      </button>
    </header>
    <p v-if="showAnswer">{{ singleQuestion.info }}</p>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import QuestionInterface from "@/types/QuestionInterface";

export default defineComponent({
  name: "Questions",
  props: {
    singleQuestion: {
      required: true,
      type: Object as PropType<QuestionInterface>,
    },
  },
  setup() {
    const showAnswer = ref(false);
    const toggleShowAnswer = () => {
      showAnswer.value = !showAnswer.value;
    };

    return { showAnswer, toggleShowAnswer };
  },
});
</script>

<style scoped></style>
