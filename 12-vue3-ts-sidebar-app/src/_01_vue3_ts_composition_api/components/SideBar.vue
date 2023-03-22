<template>
  <aside :class="isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'">
    <div class="sidebar-header">
      <img :src="logoIcon" alt="logo" class="logo" />
      <button class="close-btn" @click="$emit('onToggleSideBar')">
        <font-awesome-icon icon="fa-solid fa-times" />
      </button>
    </div>
    <ul class="links">
      <li v-for="item in linksIcons" :key="item.id">
        <a :href="item.url"
          ><font-awesome-icon :icon="item.icon" /> {{ item.text }}</a
        >
      </li>
    </ul>

    <ul class="social-icons">
      <li v-for="item in socialsIcons" :key="item.id">
        <a :href="item.url"><font-awesome-icon :icon="item.icon" /></a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { socials, links } from "./../../data";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SideBar",
  props: ["isSideBarOpen"],
  emits: ["onToggleSideBar"],

  setup() {
    const logoIcon = require("./../../assets/logo.svg");
    const socialsIcons = ref(socials);
    const linksIcons = ref(links);
    return {
      logoIcon,
      socialsIcons,
      linksIcons,
    };
  },
});
</script>

<style lang="scss" scoped></style>
