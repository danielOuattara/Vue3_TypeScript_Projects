<template>
  <main>
    <button class="sidebar-toggle" @click="$emit('onToggleSideBar')">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <button class="btn" @click="$emit('onToggleModal')">show modal</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  emits: ["onToggleSideBar", "onToggleModal"],
});
</script>
