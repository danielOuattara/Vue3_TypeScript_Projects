<template>
  <p :class="`alert alert-${alert.type}`">{{ alert.message }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alert",
  props: ["alert", "showAlert"],

  data() {
    return {
      timeoutID: 0,
    };
  },

  updated() {
    this.timeoutID = setTimeout(() => {
      return this.showAlert();
    }, 1500);
  },

  beforeMount() {
    clearTimeout(this.timeoutID);
  },
});
</script>

<style lang="scss" scoped></style>
