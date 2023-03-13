<template>
  <section class="section-center">
    <p>vue3 composition API version 3: reactive + global state</p>

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
import { defineComponent, reactive, toRefs, watch } from "vue";
import ItemType from "./types/ItemType";

export default defineComponent({
  name: "AppCompositionAPI",
  components: {
    List,
    Alert,
  },

  setup() {
    const state = reactive({
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
      let itemsList = localStorage.getItem("itemsList-vue3-ts-composition-v3");
      if (itemsList) {
        return JSON.parse(
          localStorage.getItem("itemsList-vue3-ts-composition-v3")!,
        );
      } else {
        return [];
      }
    }

    function handleSubmitItem() {
      if (!state.itemName) {
        //display alert & do nothing
        return showAlert(true, "danger", "select a valid item name");
      } else if (state.itemName && state.isEditing) {
        // edit item

        state.itemsList = state.itemsList.map((obj: ItemType) => {
          if (obj.id === state.editID) {
            return { ...obj, title: state.itemName };
          }
          return obj;
        });
        state.itemName = "";
        state.editID = "";
        state.isEditing = false;
        showAlert(true, "success", "Item successfully edited");
      } else {
        // add new item + show add alert
        state.itemsList = [
          ...state.itemsList,
          {
            id: new Date().getTime().toString(),
            title: state.itemName,
          },
        ];
        showAlert(true, "success", "item added successfully");
        state.itemName = "";
      }
    }

    function showAlert(show = false, type = "", message = "") {
      state.alert = { show, type, message };
    }

    function clearItemsList() {
      state.itemsList = [];
      state.itemName = "";
      showAlert(true, "danger", "emptying list");
      state.isEditing = false;
      return 0;
    }

    function deleteItem(id: string) {
      state.itemsList = state.itemsList.value.filter(
        (item: ItemType) => item.id !== id,
      );
      showAlert(true, "success", "item successfully removed");
      return 0;
    }

    function editItem(id: string) {
      const editingItem = state.itemsList.find(
        (item: ItemType) => item.id === id,
      );
      state.isEditing = true;
      state.editID = id;
      state.itemName = editingItem.title;
    }

    watch(
      () => state.itemsList,
      (newItemsList, oldItemsList) => {
        if (newItemsList !== oldItemsList) {
          localStorage.setItem(
            "itemsList-vue3-ts-composition-v3",
            JSON.stringify(state.itemsList),
          );
        }
      },
    );

    return {
      ...toRefs(state),
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
