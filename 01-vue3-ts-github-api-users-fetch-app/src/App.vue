<template>
  <SingleUSer />
  <UsersList v-if="!isLoading && !isError" :users="users" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import UsersList from "./components/UsersList.vue";
import SingleUSer from "./components/SingleUSer.vue";
// import User from "../types/User";
import useFetchUsers from "./composables/useFetchUsers";
export default defineComponent({
  name: "App",
  components: { UsersList, SingleUSer },
  setup() {
    const { isLoading, isError, errorMessage, users, fetchUsers } =
      useFetchUsers();

    onBeforeMount(fetchUsers);

    return {
      isLoading,
      isError,
      errorMessage,
      users,
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
