import JobInterface from "./../types/JobInterface";
import { PropType, reactive, toRefs } from "vue";

function useFetchJobs() {
  const state = reactive({
    isLoading: true,
    error: "",
    jobIndex: 0,
    jobs: Array as PropType<JobInterface[]>,
  });

  const fetchJobs = async (urlArg: string) => {
    try {
      const res = await fetch(urlArg);
      if (!res.ok) {
        state.error = `${res.status} ${res.statusText}`;
        state.isLoading = false;
        throw new Error();
      }

      state.jobs = await res.json();
      state.error = "";
      state.isLoading = false;
    } catch (error) {
      return error;
    }
    console.log(state.jobs);
  };

  return { ...toRefs(state), fetchJobs };
}

export default useFetchJobs;
