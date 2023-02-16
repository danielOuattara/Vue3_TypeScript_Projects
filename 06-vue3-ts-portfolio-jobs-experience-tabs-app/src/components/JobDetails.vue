<template>
  <article class="job-info">
    <h3>{{ job.title }}</h3>
    <h4>{{ job.company }}</h4>
    <p class="job-date">{{ job.dates }}</p>
    <div v-for="(duty, index) in job.duties" :key="index" class="job-desc">
      <div class="job-icon">&gt;&gt;</div>
      <p>{{ duty }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import JobInterface from "@/types/JobInterface";
export default defineComponent({
  name: "JobDetails",
  props: {
    job: {
      required: true,
      type: Object as PropType<JobInterface>,
    },
  },
});
</script>
