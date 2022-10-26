<template>
  <div class="item">
    <img :src="require('../assets/images/' + product_data.image)" alt="img" />
    <p>{{ product_data.name }}</p>
    <p>price: {{ Math.round(product_data.price) }}</p>
    <button @click="sentDataToParent">add to card</button>
  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    sentDataToParent() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 200px;
  border: 1px solid black;
  background-color: yellow;
  margin: 20px;

  img {
    height: 200px;
  }
}
</style>