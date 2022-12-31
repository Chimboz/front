/// <reference types="vite/client" />









declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    GlobalAvatar: typeof Avatar;
    GlobalButton: typeof Button;
    GlobalCard: typeof Card;
    GlobalContainer: typeof Container;
    GroupLink: typeof Group;
    GlobalRules: typeof Rules;
    SideNavEntries: typeof SideNavEntries;
    UserLink: typeof User;
  }
}
