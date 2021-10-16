<template>
  <router-link
    :to="entry.url"
    v-for="(entry, i) of sideNavEntries.filter(
      (entry) => entry.section == props.section
    )"
    :key="i"
  >
    <div class="list">
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
      />&nbsp;{{ $t(entry.label) }}
    </div>
  </router-link>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  section: {
    required: true,
    type: String
  }
});

const sideNavEntries = [
  {
    label: "section.account",
    url: "/account",
    section: "account"
  },
  {
    label: "section.messenger",
    url: "/messenger",
    section: "account"
  },
  {
    label: "section.groups",
    url: "/groups",
    section: "account"
  },
  {
    label: "section.friends",
    url: "/friends",
    section: "account"
  },
  {
    label: "section.forum",
    url: "/bbs",
    section: "account"
  },
  {
    label: "section.password",
    url: "/password",
    section: "account"
  },
  {
    label: "section.capitalization",
    url: "/majmin",
    section: "account"
  },
  {
    label: "section.shop",
    url: "/shop",
    section: "account"
  },
  {
    label: "section.games",
    url: "/games",
    section: "games"
  },
  {
    label: "section.bacteria",
    url: "/games/bacteria",
    section: "games"
  },
  {
    label: "section.patojdur",
    url: "/games/patojdur",
    section: "games"
  },
  {
    label: "section.mazo",
    url: "/games/mazo",
    section: "games"
  },
  {
    label: "section.members",
    url: "/members",
    section: "members"
  },
  {
    label: "section.book",
    url: "/book",
    section: "members"
  },
  {
    label: "section.popularity",
    url: "/popularity",
    section: "members"
  },
  {
    label: "section.wedding",
    url: "/wedding",
    section: "members"
  },
  {
    label: "section.groups",
    url: "/groups",
    section: "members"
  },
  {
    label: "section.forum",
    url: "/bbs",
    section: "community"
  },
  {
    label: "section.shop",
    url: "/shop",
    section: "community"
  },
  {
    label: "section.encyclopedia",
    url: "/enclyclopedia",
    section: "community"
  },
  {
    label: "section.devlog",
    url: "/devlog",
    section: "community"
  },
  {
    label: "section.documentation",
    url: "/documentation",
    section: "community"
  }
];
</script>
<style lang="scss" scoped>
.router-link-active .list {
  background: transparent
    linear-gradient(to right, #ff00a6a0, #ff00a6 10%, #ff00a6 90%, #ff00a6a0) !important;
  color: #fff;
}
</style>
