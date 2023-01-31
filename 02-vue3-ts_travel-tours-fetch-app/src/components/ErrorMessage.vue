<template>
  <main>
    <div className="title">
      <h2>{{ errorMessage }}</h2>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ErrorMessage",
  props: ["errorMessage"],
});
</script>
