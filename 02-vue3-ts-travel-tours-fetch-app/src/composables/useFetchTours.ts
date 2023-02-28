import { reactive, ref, toRefs, PropType } from "vue";
import TourType from "../types/TourType";
import TourState from "./../types/TourState";

function useFetchTours() {
  const state = reactive<TourState>({
    isLoading: true,
    isError: false,
    errorMessage: "",
    // tours: Array as PropType<TourType[]>,
    tours: [],
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
      console.log("state ----> ", state);
    } catch (err) {
      state.isLoading = false;
      state.isError = true;
      return err;
    }
  }
  return { state, fetchTours };
}

export default useFetchTours;
