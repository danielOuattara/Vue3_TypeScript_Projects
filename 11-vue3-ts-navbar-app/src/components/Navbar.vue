<!-- /* Comment:

How to smoothly toggle links:

1- dynamic class with animation
  <div className={showLinks ? "links-container show-container" :"links-container"}>

  But the "show-container" class has a limitation: 10rem hard coded. 
  How to handle case where links quantity could change, so the height 
  of the links panel ?

2- "useRef" + DOM "getBoundingClientRect()" method  to handle the 
    previous situation



composition API + typescript solution
------------------------------------------- */ -->

<template>
  <nav>
    <div class="nav-center">
      <!-- ------------------------------------ -->
      <div class="nav-header">
        <img :src="imageLogo" alt="logo" />
        <button class="nav-toggle" @click="toggleShowLinks">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
      <!-- ------------------------------------ -->
      <div class="links-container" ref="linksContainerRef">
        <ul class="links" ref="linksRef">
          <li v-for="item in linksList" :key="item.id">
            <a :href="item.url">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <!-- ------------------------------------- -->
      <ul class="social-icons">
        <li v-for="item in socialLinks" :key="item.id">
          <a :href="item.url"><font-awesome-icon :icon="item.icon" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { links, social } from "./../data";
import { ref, watch, defineComponent, Ref } from "vue";

export default defineComponent({
  name: "Navbar",
  components: {},
  setup() {
    const linksContainerRef = ref(null);
    const linksRef: Ref<null | object> = ref(null);
    const imageLogo = require("./../assets/logo.svg");
    const showLinks = ref(false);
    const linksList = ref(links);
    const socialLinks = ref(social);
    function toggleShowLinks() {
      showLinks.value = !showLinks.value;
    }

    watch(
      () => showLinks.value,
      (newValue, oldValue) => {
        const linksHeight = linksRef.value?.getBoundingClientRect();
        if (newValue !== oldValue) {
          if (showLinks.value && linksContainerRef.value) {
            linksContainerRef.value.style.height = `${linksHeight.height}px`;
          } else if (linksContainerRef.value) {
            linksContainerRef.value.style.height = "0px";
          }
        }
      },
    );

    return {
      linksRef,
      linksContainerRef,
      imageLogo,
      showLinks,
      linksList,
      socialLinks,
      toggleShowLinks,
    };
  },
});
</script>

<style lang="scss" scoped></style>
