import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import("../views/Tchat.vue"),
    meta: { title: "Chapatiz Retro | Tchat" },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: { title: "Chapatiz Retro | Mon compte" },
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games.vue"),
    meta: { title: "Chapatiz Retro | Jeux" },
  },
  {
    path: "/games/bacteria",
    name: "Bacteria",
    component: () => import("../views/games/Bacteria.vue"),
    meta: { title: "Chapatiz Retro | Bacteria" },
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../views/games/Patojdur.vue"),
    meta: { title: "Chapatiz Retro | Patojdur" },
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../views/games/Mazo.vue"),
    meta: { title: "Chapatiz Retro | Mazo" },
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../views/Members.vue"),
    meta: { title: "Chapatiz Retro | Membres" },
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../views/BBS.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/bbs/:id",
    name: "BBS machin", // TODO
    component: () => import("../views/bbs/Board.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/bbs/:id/:topic",
    name: "BBS machin truc", // TODO
    component: () => import("../views/bbs/Topic.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
    meta: { title: "Chapatiz Retro | Not Found" },
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

export default router;
