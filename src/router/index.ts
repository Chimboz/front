import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/AdminView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
      children: [
        {
          path: ":id",
          component: () => import("../components/AdminUser.vue"),
          meta: { sitemap: { ignoreRoute: true } },
        },
      ],
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/account/AccountView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/levels",
      name: "Levels",
      component: () => import("../views/account/LevelsView.vue"),
    },
    {
      path: "/messenger",
      name: "Messenger",
      component: () => import("../views/account/MessengerView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/messenger/:id",
      name: "Conversation",
      component: () => import("../views/account/ConversationView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/friends",
      name: "Friends",
      component: () => import("../views/account/FriendsView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/notsmart",
      name: "Notsmart",
      component: () => import("../views/account/NotsmartView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/eraser",
      name: "Eraser",
      component: () => import("../views/account/EraserView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/lowupp",
      name: "LowUpp",
      component: () => import("../views/account/LowUppView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/bank",
      name: "Bank",
      component: () => import("../views/account/BankView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/games",
      name: "Games",
      component: () => import("../views/games/GamesView.vue"),
    },
    {
      path: "/games/bacteria",
      name: "Bacteria",
      component: () => import("../views/games/BacteriaView.vue"),
    },
    {
      path: "/games/bacteria/story",
      name: "Bacteria Story",
      component: () => import("../views/games/bacteria/StoryView.vue"),
    },
    {
      path: "/games/patojdur",
      name: "Patojdur",
      component: () => import("../views/games/PatojdurView.vue"),
    },
    {
      path: "/games/mazo",
      name: "Mazo",
      component: () => import("../views/games/MazoView.vue"),
    },
    {
      path: "/members",
      name: "Members",
      component: () => import("../views/members/MembersView.vue"),
    },
    {
      path: "/book",
      name: "Book",
      component: () => import("../views/members/book/BookView.vue"),
    },
    {
      path: "/book/:id",
      name: "Member",
      component: () => import("../views/members/book/MemberView.vue"),
      meta: {
        sitemap: {
          slugs: [1],
        },
      },
    },
    {
      path: "/weddings",
      name: "Wedding",
      component: () => import("../views/members/WeddingView.vue"),
    },
    {
      path: "/popularity",
      name: "Popularity",
      component: () => import("../views/members/PopularityView.vue"),
    },
    {
      path: "/groups",
      name: "Groups",
      component: () => import("../views/members/group/GroupsView.vue"),
    },
    {
      path: "/groups/:id",
      name: "Group",
      component: () => import("../views/members/group/GroupView.vue"),
      meta: {
        sitemap: {
          slugs: [1],
        },
      },
    },
    {
      path: "/groups/manage",
      name: "Group Manage",
      component: () => import("../views/members/group/ManageView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/groups/edit/:id",
      name: "Group Edit",
      component: () => import("../views/members/group/EditView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/groups/create",
      name: "Group Create",
      component: () => import("../views/members/group/CreateView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/online",
      name: "Online",
      component: () => import("../views/members/OnlineView.vue"),
    },
    {
      path: "/bbs",
      name: "BBS",
      component: () => import("../views/community/bbs/BBSView.vue"),
    },
    {
      path: "/bbs/:id/:page?",
      name: "Forum",
      component: () => import("../views/community/bbs/ForumView.vue"),
      meta: {
        sitemap: {
          slugs: [
            { id: 1, page: 1 },
            { id: 2, page: 1 },
            { id: 3, page: 1 },
            { id: 4, page: 1 },
            { id: 5, page: 1 },
            { id: 6, page: 1 },
            { id: 7, page: 1 },
            { id: 8, page: 1 },
            { id: 9, page: 1 },
            { id: 10, page: 1 },
            { id: 12, page: 1 },
            { id: 13, page: 1 },
          ],
        },
      },
    },
    {
      // TODO: remove topic parameter
      path: "/topic/:forum/:topic/:page?",
      name: "Topic",
      component: () => import("../views/community/bbs/TopicView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/community/ShopView.vue"),
    },
    {
      path: "/encyclopedia",
      name: "Encyclopedia",
      component: () => import("../views/community/EncyclopediaView.vue"),
      children: [
        {
          path: ":id",
          component: () => import("../components/Item.vue"),
          meta: { sitemap: { ignoreRoute: true } },
        },
      ],
    },
    {
      path: "/chaparazzi",
      name: "Chaparazzi",
      component: () => import("../views/community/ChaparazziView.vue"),
      children: [
        {
          path: ":name",
          component: () => import("../components/Gallery.vue"),
          meta: { sitemap: { ignoreRoute: true } },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    // 404
    {
      path: "/:pathMatch(.*)*",
      name: "Error",
      component: () => import("../views/ErrorView.vue"),
    },
  ],
});

export default router;

/*
import { createRouter, createWebHistory } from "vue-router";
import store from "@/stores/auth";
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
*/
