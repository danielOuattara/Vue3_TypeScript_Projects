<template>
  <div class="grocery-list">
    <article v-for="item in itemsList" :key="item.id" class="grocery-item">
      <p class="title">{{ item.title }}</p>
      <div class="btn-container">
        <span class="edit-btn" @click="$emit('editItemEvent', item.id)">
          Modify</span
        >
        <span class="delete-btn" @click="$emit('deleteItemEvent', item.id)">
          Delete</span
        >
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["itemsList"],
  emits: ["editItemEvent", "deleteItemEvent"],
};
</script>

<style lang="scss" scoped></style>
