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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tchat.vue"),
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
    component: () => import("../views/Games/Bacteria.vue"),
    meta: { title: "Chapatiz Retro | Bacteria" },
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../views/Games/Patojdur.vue"),
    meta: { title: "Chapatiz Retro | Patojdur" },
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../views/Games/Mazo.vue"),
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
    component: () => import("../views/BBS/Board.vue"),
    meta: { title: "Chapatiz Retro | BBS" },
  },
  {
    path: "/bbs/:id/:topic",
    name: "BBS machin truc", // TODO
    component: () => import("../views/BBS/Topic.vue"),
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
