<template>
  <router-link
    :to="entry.url"
    v-for="(entry, i) of sideNavEntries.filter(
      (entry) => entry.section == section
    )"
    :key="i"
  >
    <div class="list">
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        width="17"
        height="17"
        draggable="false"
        @contextmenu.prevent
      />&nbsp;{{ $t(entry.label) }}
    </div>
  </router-link>
</template>
<script setup lang="ts">
// @vuese
// @group Core/Global
export default {
  name: "SideNavEntries",
  props: {
    section: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      sideNavEntries: [
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
          url: "/groups/manage",
          section: "account",
        },
        {
          label: "section.friends",
          url: "/friends",
          section: "account",
        },
        {
          label: "section.password",
          url: "/notsmart",
          section: "account",
        },
        {
          label: "section.eraser",
          url: "/eraser",
          section: "account",
        },
        {
          label: "section.capitalization",
          url: "/lowupp",
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
          url: "/weddings",
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
          url: "/encyclopedia",
          section: "community",
        },
        {
          label: "section.chaparazzi",
          url: "/chaparazzi",
          section: "community",
        },
      ],
    };
  },
};
</script>
