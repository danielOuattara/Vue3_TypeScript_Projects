<template>
  <section class="section-center">
    <p>vue3 composition API version 2: ref + global state</p>

    <form @submit.prevent="handleSubmitItem" class="grocery-form">
      <Alert :alert="state.alert" :showAlert="showAlert" />
      <h3>grocery bud</h3>
      <div class="form-control">
        <input
          type="text"
          name="itemName"
          id="itemName"
          class="grocery"
          v-model="state.itemName"
        />

        <button type="submit" class="submit-btn">
          {{ state.isEditing ? "edit" : "submit" }}
        </button>
      </div>
    </form>

    <div class="grocery-container" v-if="state.itemsList.length > 0">
      <List
        :itemsList="state.itemsList"
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
import { defineComponent, ref, toRefs, watch } from "vue";
import ItemType from "./types/ItemType";

export default defineComponent({
  name: "AppCompositionAPI",
  components: {
    List,
    Alert,
  },

  setup() {
    const state = ref({
      itemName: "",
      itemsList: retrieveLocalStorage(),
      isEditing: false,
      editID: "",
      alert: {
        show: false,
        message: "",
        type: "",
      },
    });

    function retrieveLocalStorage() {
      let itemsList = localStorage.getItem("itemsList-vue3-ts-composition-v2");
      if (itemsList) {
        return JSON.parse(
          localStorage.getItem("itemsList-vue3-ts-composition-v2")!,
        );
      } else {
        return [];
      }
    }

    function handleSubmitItem() {
      if (!state.value.itemName) {
        //display alert & do nothing
        return showAlert(true, "danger", "select a valid item name");
      } else if (state.value.itemName && state.value.isEditing) {
        // edit item

        state.value.itemsList = state.value.itemsList.map((obj: ItemType) => {
          if (obj.id === state.value.editID) {
            return { ...obj, title: state.value.itemName };
          }
          return obj;
        });
        state.value.itemName = "";
        state.value.editID = "";
        state.value.isEditing = false;
        showAlert(true, "success", "Item successfully edited");
      } else {
        // add new item + show add alert
        console.log("state.value = ", state.value);
        state.value.itemsList = [
          ...state.value.itemsList,
          {
            id: new Date().getTime().toString(),
            title: state.value.itemName,
          },
        ];
        showAlert(true, "success", "item added successfully");
        state.value.itemName = "";
      }
    }

    function showAlert(show = false, type = "", message = "") {
      state.value.alert = { show, type, message };
    }

    function clearItemsList() {
      state.value.itemsList = [];
      state.value.itemName = "";
      showAlert(true, "danger", "emptying list");
      state.value.isEditing = false;
      return 0;
    }

    function deleteItem(id: string) {
      state.value.itemsList = state.value.itemsList.value.filter(
        (item: ItemType) => item.id !== id,
      );
      showAlert(true, "success", "item successfully removed");
      return 0;
    }

    function editItem(id: string) {
      const editingItem = state.value.itemsList.find(
        (item: ItemType) => item.id === id,
      );
      state.value.isEditing = true;
      state.value.editID = id;
      state.value.itemName = editingItem.title;
    }

    watch(
      () => state.value.itemsList,
      (newItemsList, oldItemsList) => {
        if (newItemsList !== oldItemsList) {
          localStorage.setItem(
            "itemsList-vue3-composition-v2",
            JSON.stringify(state.value.itemsList),
          );
        }
      },
    );

    return {
      state,
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
