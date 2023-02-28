<template>
  <article
    v-for="person in people"
    :key="person.id"
    class="person article_styled"
  >
    <img :src="person.image" :alt="person.name" />
    <div>
      <h4>{{ person.name }}</h4>
      <p>{{ person.age }} years</p>
      <button @click="$emit('close', person.id)" class="btn_styled">
        Event Finished
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PeopleType from "../types/PeopleType";

export default defineComponent({
  props: {
    people: {
      required: true,
      type: Array as PropType<PeopleType[]>,
    },
  },
  emits: ["close"],
});
</script>
