import { reactive, toRefs, PropType } from "vue";
import Tour from "./../types/Tour";


function useFetchTours() {
  const state = reactive({
    isLoading: true,
    isError: false,
    errorMessage: "",
    tours: Array as PropType<Tour[]>,
  });

  const url = "https://course-api.com/react-tours-project";

  async function fetchTours() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = `${res.status} ${res.statusText}`;
        throw Error(`${res.status} ${res.statusText}`);
      }
      state.tours = await res.json();
      state.isLoading = false;
      state.errorMessage = "";
    } catch (err) {
      state.isLoading = false;
      state.isError = true;
      return err;
    }
  }
  return { ...toRefs(state), fetchTours };
}

export default useFetchTours;
