<template>
  <article class="single-tour">
    <img :src="tourItem.image" :alt="tourItem.name" />
    <footer>
      <div class="tour-info">
        <h4>{{ tourItem.name }}</h4>
        <h4 class="tour-price">${{ tourItem.price }}</h4>
      </div>
      <p>
        {{
          readMore ? tourItem.info : tourItem.info.substring(0, 150) + " ..."
        }}
        <button @click="readMore = !readMore">
          {{ readMore ? "show less" : "read more" }}
        </button>
      </p>
      <button class="delete-btn" @click="$emit('removeTour')">
        remove this tour
      </button>
    </footer>
  </article>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TourItem",
  props: ["tourItem"],
  emits: ["removeTour"],
  setup() {
    const readMore = ref(false);
    return { readMore };
  },
});
</script>
