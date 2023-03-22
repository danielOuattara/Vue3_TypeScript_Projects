<template>
  <br />
  <hr />
  <br />
  <p style="text-align: center">typescript composition API solution !</p>
  <Home @onToggleSideBar="toggleSideBar" @onToggleModal="toggleModal" />
  <Modal :isModalOpen="isModalOpen" @onToggleModal="toggleModal" />
  <SideBar :isSideBarOpen="isSideBarOpen" @onToggleSideBar="toggleSideBar" />
</template>

<script lang="ts">
import Home from "./components/Home.vue";
import Modal from "./components/Modal.vue";
import SideBar from "./components/SideBar.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppCompositionAPI",
  components: {
    Home,
    Modal,
    SideBar,
  },
  setup() {
    const isSideBarOpen = ref(false);
    const isModalOpen = ref(false);
    function toggleSideBar() {
      isSideBarOpen.value = !isSideBarOpen.value;
    }

    function toggleModal() {
      isModalOpen.value = !isModalOpen.value;
    }

    return {
      isSideBarOpen,
      isModalOpen,
      toggleSideBar,
      toggleModal,
    };
  },
});
</script>
