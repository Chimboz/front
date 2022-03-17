import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
    return { top: 0, behavior: "smooth" };
  },
  routes
});

router.beforeEach((to, from, next) => {
  const guestOnly = ["Login"];
  const userOnly = [
    "Account",
    "Home",
    "Admin",
    "Messenger",
    "Friends",
    "Notsmart",
    "LowUpp",
    "Bank",
    "Eraser",
    "Conversation",
    "Group Manage",
    "Group Edit",
    "Group Create"
  ];
  if (to.path == "/tchat")
    router.push({ name: "Error", params: { message: "error.tchat" } });
  if (store.getters["auth/authenticated"]) {
    if (guestOnly.includes(to.name))
      router.push({ name: "Error", params: { message: "error.connected" } });
    else next();
  } else {
    if (userOnly.includes(to.name)) next({ name: "Login" });
    else next();
  }
});

export default router;
