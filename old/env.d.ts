/// <reference types="vite/client" />
import Avatar from "@/components/core/global/AvatarComponent.vue";
import Button from "@/components/core/global/ButtonComponent.vue";
import Card from "@/components/core/global/CardComponent.vue";
import Container from "@/components/core/global/ContainerComponent.vue";
import Group from "@/components/core/global/link/GroupComponent.vue";
import Rules from "@/components/core/global/RulesComponent.vue";
import SideNavEntries from "@/components/core/global/SideNavEntriesComponent.vue";
import User from "@/components/core/global/link/UserComponent.vue";

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
