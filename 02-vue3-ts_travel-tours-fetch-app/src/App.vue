<template>
  <ErrorMessage v-if="isError" :errorMessage="errorMessage" />
  <LoadingMessage v-if="isLoading" />
  <ResetTours
    v-if="!isLoading && !isError && tours.length === 0"
    :fetchTours="fetchTours"
  />
  <AllTours
    v-if="!isError && !isLoading && tours.length >= 1"
    :tours="tours"
    @removeTour="removeTourItem"
  />
  <!-- <AllTours v-if="!isError && !isLoading && tours.length >= 1" :tours="tours" /> -->
</template>

<script lang="ts">
import ErrorMessage from "./components/ErrorMessage.vue";
import LoadingMessage from "./components/LoadingMessage.vue";
import ResetTours from "./components/ResetTours.vue";
import AllTours from "./components/AllTours.vue";
import { defineComponent, onBeforeMount } from "vue";
import useFetchTours from "./composables/useFetchTours";
import Tour from "./types/Tour";

export default defineComponent({
  name: "App",
  components: { ErrorMessage, LoadingMessage, ResetTours, AllTours },
  setup() {
    const { isLoading, isError, errorMessage, tours, fetchTours } =
      useFetchTours();
    console.log("tours = ", tours);
    console.log("isLoading = ", isLoading);

    function removeTourItem(id: string) {
      // TODO: finish typescript type declaration for 'tour.value' and 'item'
      return tours.filter((item: Tour) => item.id !== id);
    }

    onBeforeMount(fetchTours);

    return {
      isLoading,
      isError,
      errorMessage,
      tours,
      fetchTours,
      removeTourItem,
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
