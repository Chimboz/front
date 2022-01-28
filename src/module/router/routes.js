export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../view/Home.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../../view/account/Account.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/levels",
    name: "Levels",
    component: () => import("../../view/account/Levels.vue")
  },
  {
    path: "/messenger",
    name: "Messenger",
    component: () => import("../../view/account/Messenger.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/messenger/:id",
    name: "Conversation",
    component: () => import("../../view/account/Conversation.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("../../view/account/Friends.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/notsmart",
    name: "Notsmart",
    component: () => import("../../view/account/Notsmart.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/lowupp",
    name: "LowUpp",
    component: () => import("../../view/account/LowUpp.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../../view/games/Games.vue")
  },
  {
    path: "/games/bacteria",
    name: "Bacteria",
    component: () => import("../../view/games/Bacteria.vue")
  },
  {
    path: "/games/bacteria/story",
    name: "Bacteria Story",
    component: () => import("../../view/games/bacteria/Story.vue")
  },
  {
    path: "/games/patojdur",
    name: "Patojdur",
    component: () => import("../../view/games/Patojdur.vue")
  },
  {
    path: "/games/mazo",
    name: "Mazo",
    component: () => import("../../view/games/Mazo.vue")
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../../view/members/Members.vue")
  },
  {
    path: "/book",
    name: "Book",
    component: () => import("../../view/members/book/Book.vue")
  },
  {
    path: "/book/:id",
    name: "Member",
    component: () => import("../../view/members/book/Member.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
  },
  {
    path: "/weddings",
    name: "Wedding",
    component: () => import("../../view/members/Wedding.vue")
  },
  {
    path: "/popularity",
    name: "Popularity",
    component: () => import("../../view/members/Popularity.vue")
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../../view/members/group/Groups.vue")
  },
  {
    path: "/groups/:id",
    name: "Group",
    component: () => import("../../view/members/group/Group.vue"),
    meta: {
      sitemap: {
        slugs: [1]
      }
    }
  },
  {
    path: "/groups/manage",
    name: "Group Manage",
    component: () => import("../../view/members/group/Manage.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/groups/edit/:id",
    name: "Group Edit",
    component: () => import("../../view/members/group/Edit.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/groups/create",
    name: "Group Create",
    component: () => import("../../view/members/group/Create.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/online",
    name: "Online",
    component: () => import("../../view/members/Online.vue")
  },
  {
    path: "/bbs",
    name: "BBS",
    component: () => import("../../view/community/bbs/BBS.vue")
  },
  {
    path: "/bbs/:id/:page?",
    name: "Forum",
    component: () => import("../../view/community/bbs/Forum.vue"),
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
    component: () => import("../../view/community/bbs/Topic.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../../view/community/Shop.vue")
  },
  {
    path: "/eraser",
    name: "Eraser",
    component: () => import("../../view/community/Eraser.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/encyclopedia",
    name: "Encyclopedia",
    component: () => import("../../view/community/Encyclopedia.vue"),
    children: [
      {
        path: ":id",
        component: () => import("../../component/Item.vue"),
        meta: { sitemap: { ignoreRoute: true } }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../../view/Login.vue")
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../../view/Error.vue")
  }
];
