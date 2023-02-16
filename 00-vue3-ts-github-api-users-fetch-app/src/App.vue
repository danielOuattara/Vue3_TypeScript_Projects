<template>
  <SingleUser
    @startFetchUser="startFetchUser"
    :singleUserData="singleUserData"
    :singleUserLoading="singleUserLoading"
    :singleUserError="singleUserError"
    :singleUserErrorMessage="singleUserErrorMessage"
  />
  <UsersList v-if="!isLoading && !isError" :users="users" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import UsersList from "./components/UsersList.vue";
import SingleUser from "./components/SingleUser.vue";
import useFetchUsers from "./composables/useFetchUsers";
import useFetchSingleUser from "./composables/useFetchSingleUser";

export default defineComponent({
  name: "App",
  components: { UsersList, SingleUser },
  setup() {
    const { isLoading, isError, errorMessage, users, fetchUsers } =
      useFetchUsers();

    onBeforeMount(fetchUsers);

    const {
      singleUserLoading,
      singleUserError,
      singleUserErrorMessage,
      singleUserData,
      fetchSingleUser,
    } = useFetchSingleUser();

    function startFetchUser(arg: string) {
      fetchSingleUser(arg);
    }

    return {
      isLoading,
      isError,
      errorMessage,
      users,
      singleUserLoading,
      singleUserError,
      singleUserErrorMessage,
      singleUserData,
      fetchSingleUser,
      startFetchUser,
    };
  },
});
</script>

