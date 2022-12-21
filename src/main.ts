/* import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') */

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
// External plugins
import router from "./router";
import i18n from "./modules/i18n";
import eventBus from "./modules/eventBus";
// Modules
// import "./modules/registerServiceWorker";
// Internal CSS
import "modern-normalize/modern-normalize.css"; // Reset
import "./assets/css/var.css";
import "./assets/css/main.scss";
import "./assets/css/fonts.css";
import "./assets/css/classes.css";
import "./assets/css/atomic.css";
// Globally registered components
import Avatar from "./components/core/global/AvatarComponent.vue";
import Button from "./components/core/global/ButtonComponent.vue";
import Card from "./components/core/global/CardComponent.vue";
import Container from "./components/core/global/ContainerComponent.vue";
import Group from "./components/core/global/link/GroupComponent.vue";
import Rules from "./components/core/global/RulesComponent.vue";
import SideNavEntries from "./components/core/global/SideNavEntriesComponent.vue";
import User from "./components/core/global/link/UserComponent.vue";

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(createPinia())
  .use(createMetaManager());

// Globally accessible modules
app.config.globalProperties.eventBus = eventBus; // Event hub

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
    eventBus.emit("asyncComponentLoading");
  }
  next();
});

router.beforeResolve((to, from, next) => {
  eventBus.emit("asyncComponentLoaded");
  next();
});

export default app;

// TODO check forms submit
// TODO better quotes
// TODO verif v-if data
