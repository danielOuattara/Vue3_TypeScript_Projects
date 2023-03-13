<template>
  <!-- <AppOptionsAPI /> -->
  <br />
  <hr />
  <br />
  <AppCompositionAPI_V1 />
  <br />
  <hr />
  <br />
  <!-- <AppCompositionAPI_V2 /> -->
  <br />
  <hr />
  <br />
  <!-- <AppCompositionAPI_V3 /> -->
</template>

<script lang="ts">
import AppOptionsAPI from "./_01_vue3_options_api/AppOptionsAPI.vue";
import AppCompositionAPI_V1 from "./_02_vue3_composition_api_v1/AppCompositionAPI_V1.vue";
import AppCompositionAPI_V2 from "./_02_vue3_composition_api_v2/AppCompositionAPI_V2.vue";
import AppCompositionAPI_V3 from "./_02_vue3_composition_api_v3/AppCompositionAPI_V3.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
  components: {
    AppOptionsAPI,
    AppCompositionAPI_V1,
    AppCompositionAPI_V2,
    AppCompositionAPI_V3,
  },
});
</script>
