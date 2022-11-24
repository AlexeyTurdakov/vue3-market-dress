<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('./../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity__tools">
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{ count }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      count: this.cart_item_data.quantity,
    };
  },

  methods: {
    decrementItem() {
      return this.count--;
    },

    incrementItem() {
      return this.count++;
    },

    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    max-width: 50px;
  }

  .quantity__btn {
    cursor: pointer;
  }

  .quantity__tools {
    user-select: none;
  }
}
</style>