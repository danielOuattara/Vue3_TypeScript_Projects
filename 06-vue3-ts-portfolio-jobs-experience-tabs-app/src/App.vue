<template>
  <section
    v-if="isLoading && !error && jobs.length === 0"
    class="section loading"
  >
    <h1>Loading ...</h1>
  </section>

  <section v-if="error" class="section loading">
    <h1>{{ error }}</h1>
  </section>

  <div v-if="!isLoading || jobs.length !== 0">
    <section class="section">
      <div class="title">
        <h2>experiences</h2>
        <h4>composition API solution</h4>
        <div class="underline"></div>
      </div>

      <div class="jobs-center">
        <JobAccessButton
          :jobIndex="jobIndex"
          :updateJobIndex="updateJobIndex"
          :jobs="jobs"
          @changeJobIndex="updateJobIndex"
        />
        <JobDetails :job="jobs[jobIndex]" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from "vue";
import useFetchJobs from "./composables/useFetchJobs";
import JobDetails from "./components/JobDetails.vue";
import JobAccessButton from "./components/JobAccessButton.vue";
export default defineComponent({
  name: "App",
  components: {
    JobDetails,
    JobAccessButton,
  },
  setup(props, ctx) {
    const url = ref("https://course-api.com/react-tabs-project");
    const { jobs, isLoading, error, jobIndex, fetchJobs } = useFetchJobs();

    onBeforeMount(() => fetchJobs(url.value));

    const updateJobIndex = (argIndex: number): number => {
      return (jobIndex.value = argIndex);
    };

    return {
      jobs,
      isLoading,
      error,
      jobIndex,
      updateJobIndex,
    };
  },
});
</script>
