<template>
  <div class="v-catalog">
    <v-item
      v-for="item in PRODUCTS"
      :key="item.article"
      v-bind:product_data="item"
      @sendArticle="showChildrenArticle"
    ></v-item>
  </div>
</template>

<script>
import vItem from "./v-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vItem,
  },

    methods: {
      ...mapActions(["GET_PRODUCTS_FROM_API"]),

      showChildrenArticle(data) {
        console.log(data);
      }
    },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },

  computed: {
    ...mapGetters(["PRODUCTS"]),
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-catalog {
  display: flex;
  flex-wrap: wrap;
}
</style>