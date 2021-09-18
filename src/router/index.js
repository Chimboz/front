import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Chapatizᵣₑₜᵣₒ" },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../view/Account.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Mon compte" },
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../view/Games.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Jeux" },
  },
  {
    path: "/games/bacteria",
    name: "Bacteria",
    component: () => import("../view/game/Bacteria.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Bacteria" },
  },
  {
    path: "/games/bacteria/story",
    name: "Bacteria Story",
    component: () => import("../view/game/bacteria/Story.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Histoire de Bacteria" },
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../view/game/Patojdur.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Patojdur" },
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../view/game/Mazo.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Mazo" },
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../view/Members.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Membres" },
  },
  {
    path: "/member/:id",
    name: "Member",
    component: () => import("../view/social/Member.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Membre" },
  },
  {
    path: "/wedding",
    name: "Wedding",
    component: () => import("../view/social/Wedding.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Mariage" },
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../view/social/Groups.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Groupes" },
  },
  {
    path: "/group/:id",
    name: "Group",
    component: () => import("../view/social/Group.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Groupe" },
  },
  {
    path: "/group/edit/:id",
    name: "Group Edit",
    component: () => import("../view/social/group/Edit.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Edition de groupe" },
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../view/BBS.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ BBS" },
  },
  {
    path: "/bbs/:id",
    name: "BBS machin", // TODO
    component: () => import("../view/bbs/Forum.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ BBS" },
  },
  {
    path: "/bbs/:id/:topic",
    name: "BBS machin truc", // TODO
    component: () => import("../view/bbs/Topic.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ BBS" },
  },
  {
    path: "/shop",
    name: "Shop", // TODO
    component: () => import("../view/Shop.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Magasin" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Se connecter" },
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../view/Error.vue"),
    meta: { title: "Chapatizᵣₑₜᵣₒ Erreur" },
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
  const userOnly = ["Account", "Home"];
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
