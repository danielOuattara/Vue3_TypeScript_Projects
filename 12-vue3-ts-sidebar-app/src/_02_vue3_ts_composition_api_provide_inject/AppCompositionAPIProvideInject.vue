<template>
  <br />
  <hr />
  <br />
  <p style="text-align: center">
    typescript composition API provide/inject solution !
  </p>
  <Home @onToggleSideBar="toggleSideBar" @onToggleModal="toggleModal" />
  <Modal @onToggleModal="toggleModal" />
  <SideBar @onToggleSideBar="toggleSideBar" />
</template>

<script lang="ts">
import Home from "./components/Home.vue";
import Modal from "./components/Modal.vue";
import SideBar from "./components/SideBar.vue";
import { ref, provide, defineComponent } from "vue";

export default defineComponent({
  name: "AppOptionsAPI",
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

    provide("isSideBarOpen", isSideBarOpen);
    provide("isModalOpen", isModalOpen);

    return {
      toggleSideBar,
      toggleModal,
    };
  },
});
</script>
