<template>
  <section class="section-center">
    <p>vue3 composition API version 1: ref + multi states</p>

    <form @submit.prevent="handleSubmitItem" class="grocery-form">
      <Alert :alert="alert" :showAlert="showAlert" />
      <h3>grocery bud</h3>
      <div class="form-control">
        <input
          type="text"
          name="itemName"
          id="itemName"
          class="grocery"
          v-model="itemName"
        />

        <button type="submit" class="submit-btn">
          {{ isEditing ? "edit" : "submit" }}
        </button>
      </div>
    </form>

    <div class="grocery-container" v-if="itemsList.length > 0">
      <List
        :itemsList="itemsList"
        @deleteItemEvent="deleteItem"
        @editItemEvent="editItem"
      />
      <button class="clear-btn" @click="clearItemsList">clear all items</button>
    </div>
  </section>
</template>

<script lang="ts">
import List from "./components/List.vue";
import Alert from "./components/Alert.vue";
import { defineComponent, ref, watch } from "vue";
import ItemType from "./types/ItemType";

export default defineComponent({
  name: "AppCompositionAPI",
  components: {
    List,
    Alert,
  },

  setup() {
    const itemName = ref("");
    const itemsList = ref(retrieveLocalStorage());
    const isEditing = ref(false);
    const editID = ref("");
    const alert = ref({
      show: false,
      message: "",
      type: "",
    });

    function retrieveLocalStorage() {
      let itemsList = localStorage.getItem("itemsList-vue3-ts-composition-v1")!;
      if (itemsList) {
        return JSON.parse(
          localStorage.getItem("itemsList-vue3-ts-composition-v1")!,
        );
      } else {
        return [];
      }
    }

    function handleSubmitItem() {
      if (!itemName.value) {
        //display alert & do nothing
        return showAlert(true, "danger", "select a valid item name");
      } else if (itemName.value && isEditing.value) {
        // edit item

        itemsList.value = itemsList.value.map((obj: ItemType) => {
          if (obj.id === editID.value) {
            return { ...obj, title: itemName.value };
          }
          return obj;
        });
        itemName.value = "";
        editID.value = "";
        isEditing.value = false;
        showAlert(true, "success", "Item successfully edited");
      } else {
        // add new item + show add alert
        itemsList.value = [
          ...itemsList.value,
          {
            id: new Date().getTime().toString(),
            title: itemName.value,
          },
        ];
        showAlert(true, "success", "item added successfully");
        itemName.value = "";
      }
    }

    function showAlert(show = false, type = "", message = "") {
      alert.value = { show, type, message };
    }

    function clearItemsList() {
      itemsList.value = [];
      itemName.value = "";
      showAlert(true, "danger", "emptying list");
      isEditing.value = false;
      return 0;
    }

    function deleteItem(id: string) {
      itemsList.value = itemsList.value.filter(
        (item: ItemType) => item.id !== id,
      );
      showAlert(true, "success", "item successfully removed");
      return 0;
    }

    function editItem(id: string) {
      const editingItem = itemsList.value.find(
        (item: ItemType) => item.id === id,
      );
      isEditing.value = true;
      editID.value = id;
      itemName.value = editingItem.title;
    }

    watch(
      () => itemsList,
      (newItemsList, oldItemsList) => {
        if (newItemsList !== oldItemsList) {
          return localStorage.setItem(
            "itemsList-vue3-composition-v2",
            JSON.stringify(itemsList.value),
          );
        }
      },
    );

    return {
      itemName,
      itemsList,
      isEditing,
      editID,
      alert,
      handleSubmitItem,
      showAlert,
      clearItemsList,
      deleteItem,
      editItem,
    };
  },
});
</script>

<style lang="scss" scoped></style>
