const { defineConfig } = require("@vue/cli-service");

const NODE_ENV =
  process.env.NODE_ENV === "development" ? "development" : "production";

module.exports = defineConfig({
  transpileDependencies: true,
  
  css: {
    extract: NODE_ENV === 'production',
    loaderOptions: {
        sass: {
            data: `@import "@/styles/config/env-${NODE_ENV}.scss";`,
        },
    },
},
});
