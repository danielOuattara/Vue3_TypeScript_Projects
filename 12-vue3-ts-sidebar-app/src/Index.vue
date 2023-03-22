<template>
  <!-- <AppCompositionAPI /> -->
  <AppCompositionAPIProvideInject />
</template>

<script lang="ts">
import AppCompositionAPI from "./_01_vue3_ts_composition_api/AppCompositionAPI.vue";
import AppCompositionAPIProvideInject from "./_02_vue3_ts_composition_api_provide_inject/AppCompositionAPIProvideInject.vue";

export default {
  name: "Index",
  components: {
    AppCompositionAPI,
    AppCompositionAPIProvideInject,
  },
};
</script>
