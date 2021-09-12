<template>
  <div>
    <router-link
      :to="entry.url"
      class="list"
      v-for="(entry, i) of sideNavEntries.filter((entry)=> entry.section == section)"
      :key="i"
    >
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
      />&nbsp;{{ $t(entry.label) }}
    </router-link>
  </div>
</template>
<script setup>
const sideNavEntries = [
  {
    label: "section.account",
    url: "/account",
    section: "account",
  },
  {
    label: "section.messenger",
    url: "/messenger",
    section: "account",
  },
  {
    label: "section.groups",
    url: "/groups",
    section: "account",
  },
  {
    label: "section.friends",
    url: "/friends",
    section: "account",
  },
  {
    label: "section.forum",
    url: "/bbs",
    section: "account",
  },
  {
    label: "section.password",
    url: "/password",
    section: "account",
  },
  {
    label: "section.capitalization",
    url: "/majmin",
    section: "account",
  },
  {
    label: "section.shop",
    url: "/shop",
    section: "account",
  },
  {
    label: "section.games",
    url: "/games",
    section: "games",
  },
  {
    label: "section.bacteria",
    url: "/games/bacteria",
    section: "games",
  },
  {
    label: "section.patojdur",
    url: "/games/patojdur",
    section: "games",
  },
  {
    label: "section.mazo",
    url: "/games/mazo",
    section: "games",
  },
  {
    label: "section.members",
    url: "/members",
    section: "members",
  },
  {
    label: "section.book",
    url: "/book",
    section: "members",
  },
  {
    label: "section.popularity",
    url: "/popularity",
    section: "members",
  },
  {
    label: "section.wedding",
    url: "/wedding",
    section: "members",
  },
  {
    label: "section.groups",
    url: "/groups",
    section: "members",
  },
  {
    label: "section.forum",
    url: "/bbs",
    section: "community",
  },
  {
    label: "section.shop",
    url: "/shop",
    section: "community",
  },
  {
    label: "section.encyclopedia",
    url: "/enclyclopedia",
    section: "community",
  },
];
</script>
<script>
export default {
  name: "SideNavEntries",
  props: {
    section: {
      required: true,
      type: String,
    },
  },
};
</script>
