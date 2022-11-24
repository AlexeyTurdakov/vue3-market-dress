<template>
  <div>
    <h2>Cart</h2>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    ></v-cart-item>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";

export default {
  components: {
    vCartItem,
  },

  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },

    ...mapActions(["DELETE_FROM_CART"]),
  },
  
};
</script>

<style lang="scss" scoped>
</style>