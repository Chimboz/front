import { createApp } from "vue";
import router from "./router";
import store from "./store";
import mitt from "mitt";
import i18n from "./i18n";
import App from "./App.vue";
import api from "./module/api.js";
import "./asset/css/fonts.css";
import "./asset/css/main.scss";
import "./asset/css/markdown.css";
import "highlight.js/scss/github-dark-dimmed.scss";
import "katex/dist/katex.min.css";
import SideNavEntries from "./component/SideNavEntries.vue";
import Container from "./component/Container.vue";
import Card from "./component/Card.vue";
import Button from "./component/Button.vue";
import Rules from "./component/slot/Rules.vue";

// https://www.epiloge.com/how-to-add-dynamic-meta-tags-to-your-vuejs-app-for-google-seo-0fa058

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store);

const eventBus = mitt();
app.config.globalProperties.eventBus = eventBus;
app.config.globalProperties.api = api;

app.component("SideNavEntries", SideNavEntries);
app.component("Container", Container);
app.component("Card", Card);
app.component("Button", Button);
app.component("Rules", Rules);

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
