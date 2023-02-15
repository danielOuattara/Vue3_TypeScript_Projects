<template>
  <article className="menu-item">
    <img className="photo" :src="menu.img" :alt="menu.title" />
    <div className="item-info">
      <header>
        <h4 className="title">{{ menu.title }}</h4>
        <h4 className="price">${{ menu.price }}</h4>
      </header>
      <p className="item-text">{{ menu.desc }}</p>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleMenu",
  props: ["menu"],
});
</script>
