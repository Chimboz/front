import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/fonts.css";
import "./assets/scss/main.scss";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(Vuex)
  .mount("#app");
