<template>
  <div class="btn-container">
    <button
      v-for="(job, index) in jobs"
      :key="job.id"
      :class="`job-btn ${index === jobIndex && 'active-btn'}`"
      @click="$emit('changeJobIndex', index)"
    >
      {{ job.company }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import JobInterface from "@/types/JobInterface";
export default defineComponent({
  name: "JobAccessButton",
  props: {
    jobIndex: {
      required: true,
      like: Number,
    },
    jobs: {
      required: true,
      type: Array as PropType<JobInterface[]>,
    },
  },
  emits: ["changeJobIndex"],
});
</script>
