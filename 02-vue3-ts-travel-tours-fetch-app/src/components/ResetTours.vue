<template>
  <main>
    <div className="title">
      <h2>no tour left</h2>
      <button className="btn" @click="fetchTours">refresh</button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResetTours",
  props: ["fetchTours"],
});
</script>
