<template>
  <article
    @click="handleCopyToClipBoard"
    :class="index > listLength / 2 + 2 ? 'color-light color' : 'color'"
    :style="{ 'background-color': `${color.hexString()}` }"
  >
    <p class="percent-value">{{ color.weight }} %</p>
    <p class="color-value">{{ color.hexString() }}</p>

    <p
      v-if="alert"
      :class="index > listLength / 2 + 2 ? 'alert-light alert' : 'alert'"
    >
      copied to clipboard
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SingleColor",
  props: ["index", "color", "listLength"],
  setup(props) {
    const alert = ref(false);

    function handleCopyToClipBoard() {
      alert.value = true;
      navigator.clipboard.writeText(props.color.hexString());
    }

    watch(
      () => alert.value,
      (newValue, oldValue) => {
        if (newValue === true) {
          const timeOut = setTimeout(() => (alert.value = false), 500);
        }
      },
    );

    return {
      alert,
      handleCopyToClipBoard,
    };
  },
});
</script>
