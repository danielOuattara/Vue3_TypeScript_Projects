<template>
  <section class="section-center">
    <p>vue3 options API solution</p>

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
import { defineComponent } from "vue";
import ItemType from "./types/ItemType";

export default defineComponent({
  name: "AppOptionsAPI",
  components: {
    List,
    Alert,
  },

  data() {
    return {
      itemName: "",
      itemsList: this.retrieveLocalStorage(),
      isEditing: false,
      editID: "",
      alert: {
        show: false,
        message: "",
        type: "",
      },
    };
  },

  watch: {
    itemsList(newItemsList, oldItemsList) {
      if (newItemsList !== oldItemsList) {
        return localStorage.setItem(
          "itemsList-vue3-ts-optionsAPI",
          JSON.stringify(this.itemsList),
        );
      }
    },
  },

  methods: {
    retrieveLocalStorage() {
      let itemsList = localStorage.getItem("itemsList-vue3-ts-optionsAPI");
      if (itemsList) {
        return JSON.parse(
          localStorage.getItem("itemsList-vue3-ts-optionsAPI")!,
        );
      } else {
        return [];
      }
    },

    handleSubmitItem() {
      if (!this.itemName) {
        //display alert & do nothing
        return this.showAlert(true, "danger", "select a valid item name");
      } else if (this.itemName && this.isEditing) {
        // edit item
        this.itemsList = this.itemsList.map((obj: ItemType) => {
          if (obj.id === this.editID) {
            return { ...obj, title: this.itemName };
          }
          return obj;
        });
        this.itemName = "";
        this.editID = "";
        this.isEditing = false;
        this.showAlert(true, "success", "Item successfully edited");
      } else {
        // add new item + show add alert
        this.itemsList = [
          ...this.itemsList,
          {
            id: new Date().getTime().toString(),
            title: this.itemName,
          },
        ];
        this.showAlert(true, "success", "item added successfully");
        this.itemName = "";
      }
    },

    showAlert(show = false, type = "", message = "") {
      this.alert = { show, type, message };
    },

    clearItemsList() {
      this.itemsList = [];
      this.itemName = "";
      this.showAlert(true, "danger", "emptying list");
      this.isEditing = false;
      return 0;
    },

    deleteItem(id: string) {
      this.itemsList = this.itemsList.filter(
        (item: ItemType) => item.id !== id,
      );
      this.showAlert(true, "success", "item successfully removed");
      return 0;
    },

    editItem(id: string) {
      const editingItem = this.itemsList.find(
        (item: ItemType) => item.id === id,
      );
      this.isEditing = true;
      this.editID = id;
      this.itemName = editingItem.title;
    },
  },
});
</script>

<style lang="scss" scoped></style>
