/*import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')*/

import { createApp } from "vue";
import App from "./App.vue";
// External plugins
import router from "./router";
import { createPinia } from 'pinia'
import i18n from "./modules/i18n";
import eventBus from "./modules/eventBus";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
// Modules
import api from "./modules/api";
// import "./modules/registerServiceWorker";
// Internal CSS
import "modern-normalize/modern-normalize.css"; // Reset
import "./assets/css/var.css";
import "./assets/css/main.scss";
import "./assets/css/fonts.css";
import "./assets/css/classes.css";
import "./assets/css/atomic.css";
// Globally registered components
import Avatar from "./components/core/global/Avatar.vue";
import Button from "./components/core/global/Button.vue";
import Card from "./components/core/global/Card.vue";
import Container from "./components/core/global/Container.vue";
import Group from "./components/core/global/link/Group.vue";
import Rules from "./components/core/global/Rules.vue";
import SideNavEntries from "./components/core/global/SideNavEntries.vue";
import User from "./components/core/global/link/User.vue";

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(createPinia())
  .use(createMetaManager())
  .use(metaPlugin);

// Globally accessible modules
app.config.globalProperties.eventBus = eventBus; // Event hub
app.config.globalProperties.api = api; // Custom Axios API fetcher

// Registering global components
app.component("GlobalAvatar", Avatar);
app.component("GlobalButton", Button);
app.component("GlobalCard", Card);
app.component("GlobalContainer", Container);
app.component("GroupLink", Group);
app.component("GlobalRules", Rules);
app.component("SideNavEntries", SideNavEntries);
app.component("UserLink", User);

app.mount("#app");

// Router progress bar
router.beforeEach((to, from, next) => {
  if (typeof to.matched[0].components?.default === "function") {
    eventBus.emit("asyncComponentLoading", to);
  }
  next();
});

router.beforeResolve((to, from, next) => {
  eventBus.emit("asyncComponentLoaded");
  next();
});

export default app;
