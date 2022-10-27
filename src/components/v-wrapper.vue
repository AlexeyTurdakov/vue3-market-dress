<template>
  <v-cart v-if="CART.length" :cart_data="CART"></v-cart>
  <div class="v-wrapper">
    <v-catalog></v-catalog>
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "v-wrapper",
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      title: "main wrap",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
.v-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>