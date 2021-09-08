import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Chapatiz Retro" },
  },
  {
    path: "/tchat",
    name: "Tchat",
    component: () => import("../view/Tchat.vue"),
    meta: { title: "Chapatiz Retro | Tchat" },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../view/Account.vue"),
    meta: { title: "Chapatiz Retro | Mon compte" },
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../view/Games.vue"),
    meta: { title: "Chapatiz Retro | Jeux" },
  },
  {
    path: "/games/bacteria",
    name: "Bacteria",
    component: () => import("../view/game/Bacteria.vue"),
    meta: { title: "Chapatiz Retro | Bacteria" },
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../view/game/Patojdur.vue"),
    meta: { title: "Chapatiz Retro | Patojdur" },
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../view/game/Mazo.vue"),
    meta: { title: "Chapatiz Retro | Mazo" },
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../view/Members.vue"),
    meta: { title: "Chapatiz Retro | Membres" },
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../view/BBS.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/bbs/:id",
    name: "BBS machin", // TODO
    component: () => import("../view/bbs/Board.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/bbs/:id/:topic",
    name: "BBS machin truc", // TODO
    component: () => import("../view/bbs/Topic.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/shop",
    name: "Shop", // TODO
    component: () => import("../view/Shop.vue"),
    meta: { title: "Chapatiz Retro | Magasin" },
  },
  {
    path: "/member/:id",
    name: "Member",
    component: () => import("../view/social/Member.vue"),
    meta: { title: "Chapatiz Retro | Membre" },
  },
  {
    path: "/wedding",
    name: "Wedding",
    component: () => import("../view/social/Wedding.vue"),
    meta: { title: "Chapatiz Retro | Mariage" },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login.vue"),
    meta: { title: "Chapatiz Retro | Se connecter" },
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: () => import("../view/NotFound.vue"),
    meta: { title: "Chapatiz Retro | Erreur" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  const guestOnly = ["Login"];
  const userOnly = ["Account"];
  if (store.getters["auth/authenticated"]) {
    if (guestOnly.includes(to.name)) next({ name: "Not Found" });
    next();
  } else {
    if (userOnly.includes(to.name)) next({ name: "Login" });
    next();
  }
});

export default router;
