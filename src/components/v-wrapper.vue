<template>
  <div class="v-wrapper">
    <v-catalog></v-catalog>
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
// import vCard from "./v-card.vue";

export default {
  name: "v-wrapper",
  components: {
    vCatalog,
    // vCard,
  },
  props: {},
  data() {
    return {
      title: "main wrap",
    };
  },
  computed: {},
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