import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../view/Account.vue")
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../view/Games.vue")
  },
  {
    path: "/games/bacteria",
    name: "Bacteria",
    component: () => import("../view/game/Bacteria.vue")
  },
  {
    path: "/games/bacteria/story",
    name: "Bacteria Story",
    component: () => import("../view/game/bacteria/Story.vue")
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../view/game/Patojdur.vue")
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../view/game/Mazo.vue")
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../view/Members.vue")
  },
  {
    path: "/member/:id",
    name: "Member",
    component: () => import("../view/social/Member.vue")
  },
  {
    path: "/wedding",
    name: "Wedding",
    component: () => import("../view/social/Wedding.vue")
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../view/social/Groups.vue")
  },
  {
    path: "/group/:id",
    name: "Group",
    component: () => import("../view/social/Group.vue")
  },
  {
    path: "/group/edit/:id",
    name: "Group Edit",
    component: () => import("../view/social/group/Edit.vue")
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../view/BBS.vue")
  },
  {
    path: "/bbs/:id",
    name: "BBS machin", // TODO
    component: () => import("../view/bbs/Forum.vue")
  },
  {
    path: "/bbs/:id/:topic",
    name: "BBS machin truc", // TODO
    component: () => import("../view/bbs/Topic.vue")
  },
  {
    path: "/shop",
    name: "Shop", // TODO
    component: () => import("../view/Shop.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login.vue")
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../view/Error.vue")
  }
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
        behavior: "smooth"
      };
    }
    return { top: 0, behavior: "smooth" };
  },
  routes
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
