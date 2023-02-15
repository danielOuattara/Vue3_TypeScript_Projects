<template>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <h4>vue3 typescript composition API</h4>
        <div className="underline"></div>
        <MenuCategories :categories="categories" :setCategory="setCategory" />
        <Menu :menuToRender="menuToRender" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import menuData from "./data";
import { ref, computed } from "vue";
import Menu from "./components/Menu.vue";
import MenuCategories from "./components/MenuCategories.vue";
import MenuInterface from "./types/MenuInterface";

export default defineComponent({
  name: "App",
  components: { Menu, MenuCategories },
  setup() {
    const menuItems = ref<MenuInterface[]>(menuData);
    const category = ref("all");
    const categories = computed(() => {
      return ["all", ...new Set(menuItems.value.map((item) => item.category))];
    });

    const setCategory = (categoryArg: string) => {
      return (category.value = categoryArg);
    };

    const filteredMenu = computed(() => {
      return menuItems.value.filter((item) => item.category === category.value);
    });

    const menuToRender = computed(() => {
      return category.value === "all" ? menuItems.value : filteredMenu.value;
    });

    return {
      menuItems,
      category,
      setCategory,
      filteredMenu,
      menuToRender,
      categories,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
