<template>
  <v-wrapper></v-wrapper>
</template>

<script>
import vWrapper from "./components/v-wrapper.vue";

export default {
  name: "App",
  components: {
    vWrapper,
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
