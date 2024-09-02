const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        // target: "http://192.168.143.63:3002",
        target: "http://192.168.143.51:3002",
        changeOrigin: true,
        timeout: 5000,
      },
    },
  },
});
