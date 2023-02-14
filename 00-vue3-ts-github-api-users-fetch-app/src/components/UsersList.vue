<template>
  <h3>fetch 30 users data</h3>
  <ul class="users">
    <UserListItem v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserListItem from "./UserListItem.vue";

export default defineComponent({
  name: "UsersList",
  components: { UserListItem },
  props: ["users"],
});
</script>

<style></style>
