export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/Home.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../view/Account.vue")
  },
  {
    path: "/messenger",
    name: "Messenger",
    component: () => import("../view/account/Messenger.vue")
  },
  {
    path: "/messenger/:id",
    name: "Conversation",
    component: () => import("../view/account/Conversation.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
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
    path: "/book",
    name: "Book",
    component: () => import("../view/social/Book.vue")
  },
  {
    path: "/book/:id",
    name: "Member",
    component: () => import("../view/social/Member.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
  },
  {
    path: "/weddings",
    name: "Wedding",
    component: () => import("../view/social/Wedding.vue")
  },
  {
    path: "/popularity",
    name: "Popularity",
    component: () => import("../view/social/Popularity.vue")
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../view/social/Groups.vue")
  },
  {
    path: "/groups/:id",
    name: "Group",
    component: () => import("../view/social/Group.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
  },
  {
    path: "/groups/manage",
    name: "Group Manage",
    component: () => import("../view/social/group/Manage.vue")
  },
  {
    path: "/groups/edit/:id",
    name: "Group Edit",
    component: () => import("../view/social/group/Edit.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
  },
  {
    path: "/online",
    name: "Online",
    component: () => import("../view/social/Online.vue")
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../view/BBS.vue")
  },
  {
    path: "/bbs/:id/:page?",
    name: "Forum",
    component: () => import("../view/bbs/Forum.vue"),
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
          { id: 13, page: 1 }
        ]
      }
    }
  },
  {
    path: "/topic/:topic/:page?",
    name: "Topic",
    component: () => import("../view/bbs/Topic.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/shop",
    name: "Shop",
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
