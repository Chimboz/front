import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/fonts.css";
import "./assets/scss/main.scss";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store/index.js";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .mount("#app");
