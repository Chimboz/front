import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Home"] },
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/AdminView.vue"),
      meta: { sitemap: { ignoreRoute: true } },
      children: [
        {
          path: ":id",
          component: () => import("../components/AdminUserComponent.vue"),
          meta: { sitemap: { ignoreRoute: true } },
        },
      ],
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/account/AccountView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/levels",
      name: "Levels",
      component: () => import("../views/account/LevelsView.vue"),
      meta: { section: ["Account"] },
    },
    {
      path: "/messenger",
      name: "Messenger",
      component: () => import("../views/account/MessengerView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/messenger/:id",
      name: "Conversation",
      component: () => import("../views/account/ConversationView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/friends",
      name: "Friends",
      component: () => import("../views/account/FriendsView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/notsmart",
      name: "Notsmart",
      component: () => import("../views/account/NotsmartView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/eraser",
      name: "Eraser",
      component: () => import("../views/account/EraserView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/lowupp",
      name: "LowUpp",
      component: () => import("../views/account/LowUppView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/bank",
      name: "Bank",
      component: () => import("../views/account/BankView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Account"] },
    },
    {
      path: "/games",
      name: "Games",
      component: () => import("../views/games/GamesView.vue"),
      meta: { section: ["Games"] },
    },
    {
      path: "/games/bacteria",
      name: "Bacteria",
      component: () => import("../views/games/BacteriaView.vue"),
      meta: { section: ["Games"] },
    },
    {
      path: "/games/bacteria/story",
      name: "Bacteria Story",
      component: () => import("../views/games/bacteria/StoryView.vue"),
      meta: { section: ["Games"] },
    },
    {
      path: "/games/patojdur",
      name: "Patojdur",
      component: () => import("../views/games/PatojdurView.vue"),
      meta: { section: ["Games"] },
    },
    {
      path: "/games/mazo",
      name: "Mazo",
      component: () => import("../views/games/MazoView.vue"),
      meta: { section: ["Games"] },
    },
    {
      path: "/members",
      name: "Members",
      component: () => import("../views/members/MembersView.vue"),
      meta: { section: ["Members"] },
    },
    {
      path: "/book",
      name: "Book",
      component: () => import("../views/members/book/BookView.vue"),
      meta: { section: ["Members"] },
    },
    {
      path: "/book/:id",
      name: "Member",
      component: () => import("../views/members/book/MemberView.vue"),
      meta: {
        sitemap: {
          slugs: [1],
        },
        section: ["Members"],
      },
    },
    {
      path: "/weddings",
      name: "Wedding",
      component: () => import("../views/members/WeddingView.vue"),
      meta: { section: ["Members"] },
    },
    {
      path: "/popularity",
      name: "Popularity",
      component: () => import("../views/members/PopularityView.vue"),
      meta: { section: ["Members"] },
    },
    {
      path: "/groups",
      name: "Groups",
      component: () => import("../views/members/group/GroupsView.vue"),
      meta: { section: ["Members"] },
    },
    {
      path: "/groups/:id",
      name: "Group",
      component: () => import("../views/members/group/GroupView.vue"),
      meta: {
        sitemap: {
          slugs: [1],
        },
        section: ["Members"],
      },
    },
    {
      path: "/groups/manage",
      name: "Group Manage",
      component: () => import("../views/members/group/ManageView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Members"] },
    },
    {
      path: "/groups/edit/:id",
      name: "Group Edit",
      component: () => import("../views/members/group/EditView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Members"] },
    },
    {
      path: "/groups/create",
      name: "Group Create",
      component: () => import("../views/members/group/CreateView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Members"] },
    },
    {
      path: "/online",
      name: "Online",
      component: () => import("../views/members/OnlineView.vue"),
      meta: { section: ["Home"] },
    },
    {
      path: "/bbs",
      name: "BBS",
      component: () => import("../views/community/bbs/BBSView.vue"),
      meta: { section: ["Community"] },
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
        section: ["Community"],
      },
    },
    {
      // TODO: remove topic parameter
      path: "/topic/:forum/:topic/:page?",
      name: "Topic",
      component: () => import("../views/community/bbs/TopicView.vue"),
      meta: { sitemap: { ignoreRoute: true }, section: ["Community"] },
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/community/ShopView.vue"),
      meta: { section: ["Community"] },
    },
    {
      path: "/encyclopedia",
      name: "Encyclopedia",
      component: () => import("../views/community/EncyclopediaView.vue"),
      meta: { section: ["Community"] },
      children: [
        {
          path: ":id",
          component: () => import("../components/ItemComponent.vue"),
          meta: { sitemap: { ignoreRoute: true } },
        },
      ],
    },
    {
      path: "/chaparazzi",
      name: "Chaparazzi",
      component: () => import("../views/community/ChaparazziView.vue"),
      meta: { section: ["Community"] },
      children: [
        {
          path: ":name",
          component: () => import("../components/GalleryComponent.vue"),
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

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;

/*
import { createRouter, createWebHistory } from "vue-router";
import store from "@/stores/auth";
import { routes } from "./routes.js";

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
