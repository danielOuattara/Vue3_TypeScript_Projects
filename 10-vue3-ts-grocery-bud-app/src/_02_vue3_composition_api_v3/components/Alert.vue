<template>
  <p :class="`alert alert-${alert.type}`">{{ alert.message }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated, onBeforeMount } from "vue";

export default defineComponent({
  name: "Alert",
  props: ["alert", "showAlert"],

  setup(props, ctx) {
    const timeoutID = ref(0);

    onUpdated(
      () =>
        (timeoutID.value = setTimeout(() => {
          return props.showAlert();
        }, 1500)),
    );

    onBeforeMount(() => clearTimeout(timeoutID.value));

    return { timeoutID };
  },
});
</script>

<style lang="scss" scoped></style>
