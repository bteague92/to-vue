module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `,
      },
    },
  },

  // module: {
  //   rules: [
  //     // ... other rules omitted

  //     // this will apply to both plain `.scss` files
  //     // AND `<style lang="scss">` blocks in `.vue` files
  //     {
  //       test: /\.scss$/,
  //       use: ["vue-style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
};
