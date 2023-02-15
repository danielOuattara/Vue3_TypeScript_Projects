<template>
  <div className="section-center">
    <SingleMenu v-for="menu in menuToRender" :key="menu.id" :menu="menu" />
  </div>
</template>

<script>
import SingleMenu from "./SingleMenu.vue";
import MenuInterface from "./../types/MenuInterface.ts";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Menu",
  components: {
    SingleMenu,
  },
  props: ["menuToRender"],
});
</script>
