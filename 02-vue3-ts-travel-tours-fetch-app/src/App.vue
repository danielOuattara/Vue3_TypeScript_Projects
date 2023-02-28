<template>
  <!-- <ErrorMessage v-if="isError" :errorMessage="errorMessage" />
  <LoadingMessage v-if="isLoading" />
  <ResetTours
    v-if="!isLoading && !isError && tours.length === 0"
    :fetchTours="fetchTours"
  /> -->
  <!-- <AllTours
    v-if="!isError && !isLoading && tours.length >= 1"
    :tours="tours"
    @removeTour="removeTourItem"
  /> -->
  <!-- <AllTours v-if="!isError && !isLoading && tours.length >= 1" :tours="tours" /> -->
  <p>Hello</p>
</template>

<script lang="ts">
import ErrorMessage from "./components/ErrorMessage.vue";
import LoadingMessage from "./components/LoadingMessage.vue";
import ResetTours from "./components/ResetTours.vue";
import AllTours from "./components/AllTours.vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import useFetchTours from "./composables/useFetchTours";
import TourType from "./types/TourType";

export default defineComponent({
  name: "App",
  // components: { ErrorMessage, LoadingMessage, ResetTours, AllTours },
  setup() {
    const { state, fetchTours } = useFetchTours();
    const isLoading = ref(state.isLoading);
    const errorMessage = ref(state.errorMessage);
    const isError = ref(state.isError);
    const tours = ref(state.tours);
    console.log("tours = ", tours.value);
    console.log("isLoading = ", isLoading.value);

    // function removeTourItem(id: string) {
    //   // TODO: finish typescript type declaration for 'tour.value' and 'item'
    //   return tours.filter((item: TourType) => item.id !== id);
    // }

    onBeforeMount(fetchTours);

    return {
      isLoading,
      isError,
      errorMessage,
      tours,
      // fetchTours,
      // removeTourItem,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
