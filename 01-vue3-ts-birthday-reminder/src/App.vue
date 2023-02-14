<template>
  <main>
    <section className="container">
      <span>vue3 composition API & typescript</span>
      <h3 v-if="people.length > 1">{{ people.length }} birthdays today</h3>
      <h3 v-if="people.length === 1">{{ people.length }} birthday today</h3>
      <List :people="people" @close="handleRemoveOnePerson" />
      <button @click="handleEmpty" v-if="people.length !== 0">clear all</button>

      <button v-if="people.length === 0" @click="handleRefresh">Refresh</button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import data from "./data";
import People from "./types/People";
import List from "./components/List.vue";

export default defineComponent({
  name: "App",
  components: { List },
  setup() {
    const people = ref<People[]>(data);

    function handleRemoveOnePerson(id: string) {
      return (people.value = people.value.filter(
        (person: People) => person.id != id,
      ));
    }

    function handleEmpty() {
      console.log("empty");
      people.value = [];
    }

    function handleRefresh() {
      people.value = data;
    }

    return {
      people,
      handleRemoveOnePerson,
      handleEmpty,
      handleRefresh,
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
