// Import using require for sitemap plugin
const requireEsm = require("esm")(module);
const { routes } = requireEsm("./src/module/router/routes.js");

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true
    },
    sitemap: {
      outputDir: "public",
      baseURL: "https://chimboz.fr",
      routes
    }
  },
  transpileDependencies: ["vue-meta"],
  // Progressive web app
  pwa: {
    name: "Chimboz",
    themeColor: "#f0009c",
    msTileColor: "#f0009c",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent"
  }
};
