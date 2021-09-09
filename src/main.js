import { createApp } from "vue";
import router from "./router";
import store from "./store";
import mitt from "mitt";
import i18n from "./i18n";
import App from "./App.vue";
import api from "./module/api.js";
import "./asset/css/fonts.css";
import "./asset/css/main.scss";
import SideNavEntries from "./component/SideNavEntries.vue";

// https://www.epiloge.com/how-to-add-dynamic-meta-tags-to-your-vuejs-app-for-google-seo-0fa058

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store);

const eventBus = mitt();
app.config.globalProperties.eventBus = eventBus;
app.config.globalProperties.axios = api;

app.component("SideNavEntries", SideNavEntries);

app.mount("#app");

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (typeof to.matched[0]?.components.default === "function") {
    eventBus.emit("asyncComponentLoading", to);
  }
  next();
});

router.beforeResolve((to, from, next) => {
  eventBus.emit("asyncComponentLoaded");
  next();
});

export default app;
