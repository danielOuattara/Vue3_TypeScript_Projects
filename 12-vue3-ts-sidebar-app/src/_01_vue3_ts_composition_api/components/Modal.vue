<template>
  <div :class="isModalOpen ? `modal-overlay show-modal` : `modal-overlay`">
    <div class="modal-container">
      <h3>modal content</h3>
      <p>function solution</p>
      <button className="close-modal-btn" @click="$emit('onToggleModal')">
        <font-awesome-icon icon="fa-solid fa-times" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  props: ["isModalOpen"],
  emits: ["onToggleModal"],
});
</script>

<style lang="scss" scoped></style>
