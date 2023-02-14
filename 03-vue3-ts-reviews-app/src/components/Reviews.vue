<template>
  <article class="review">
    <div class="img-container">
      <img
        :src="people[index]['image']"
        :alt="people[index]['name']"
        class="person-img"
      />
      <span class="quote-icon">
        <!-- <FaQuoteRight />  -->
        &&
      </span>
    </div>

    <h4 class="author">{{ people[index]["name"] }}</h4>
    <p class="job">{{ people[index]["job"] }}</p>
    <p class="info">{{ people[index]["text"] }}</p>

    <div class="button-container">
      <button class="prev-btn" @click="getPreviousQuote">
        <!-- <FaChevronLeft /> -->
        &lt;&lt;
      </button>
      <button class="next-btn" @click="getNextQuote">
        <!-- <FaChevronRight /> -->
        &gt;&gt;
      </button>
    </div>

    <div class="button-container">
      <button class="random-btn" @click="getRandomQuote">surprise me</button>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import reviews from "./../data";
import ReviewInterface from "./../types/ReviewInterface";
export default defineComponent({
  setup() {
    const index = ref(0);
    const people = ref<ReviewInterface[]>(reviews);
    function checkIndex(argIndex: number) {
      if (argIndex > people.value.length - 1) {
        return 0;
      } else if (argIndex < 0) {
        return people.value.length - 1;
      } else {
        return argIndex;
      }
    }

    function getPreviousQuote() {
      index.value = checkIndex(index.value - 1);
      return;
    }

    function getNextQuote() {
      index.value = checkIndex(index.value + 1);
      return;
    }

    function getRandomQuote() {
      let randomIndex = Math.floor(Math.random() * people.value.length);
      if (randomIndex === index.value) {
        randomIndex = checkIndex(randomIndex - 1);
      }
      return (index.value = randomIndex);
    }
    return {
      index,
      people,
      checkIndex,
      getPreviousQuote,
      getNextQuote,
      getRandomQuote,
    };
  },
});
</script>

<style scoped></style>
