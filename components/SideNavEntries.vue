<template>
  <NuxtLink
    v-for="(entry, i) of sideNavEntries.filter(
      (entry) => entry.section === section
    )"
    :key="i"
    :to="entry.url"
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
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  section: string;
}>();

const sideNavEntries = [
  {
    label: "section.account",
    url: "/account",
    section: "Account",
  },
  {
    label: "section.messenger",
    url: "/account/messenger",
    section: "Account",
  },
  {
    label: "section.groups",
    url: "/members/groups/manage",
    section: "Account",
  },
  {
    label: "section.friends",
    url: "/account/friends",
    section: "Account",
  },
  {
    label: "section.password",
    url: "/account/notsmart",
    section: "Account",
  },
  {
    label: "section.eraser",
    url: "/account/eraser",
    section: "Account",
  },
  {
    label: "section.capitalization",
    url: "/account/lowupp",
    section: "Account",
  },
  {
    label: "section.games",
    url: "/games",
    section: "Games",
  },
  {
    label: "section.bacteria",
    url: "/games/bacteria",
    section: "Games",
  },
  {
    label: "section.patojdur",
    url: "/games/patojdur",
    section: "Games",
  },
  {
    label: "section.mazo",
    url: "/games/mazo",
    section: "Games",
  },
  {
    label: "section.members",
    url: "/members",
    section: "Members",
  },
  {
    label: "section.book",
    url: "/members/book",
    section: "Members",
  },
  {
    label: "section.popularity",
    url: "/members/popularity",
    section: "Members",
  },
  {
    label: "section.wedding",
    url: "/members/weddings",
    section: "Members",
  },
  {
    label: "section.groups",
    url: "/members/groups",
    section: "Members",
  },
  {
    label: "section.forum",
    url: "/community/bbs",
    section: "Community",
  },
  {
    label: "section.shop",
    url: "/community/shop",
    section: "Community",
  },
  {
    label: "section.encyclopedia",
    url: "/community/encyclopedia",
    section: "Community",
  },
  {
    label: "section.chaparazzi",
    url: "/community/chaparazzi",
    section: "Community",
  },
];
</script>
<style scoped>
.NuxtLink-active .list,
.active .list {
  background: transparent
    linear-gradient(
      to right,
      var(--main-card-blue),
      var(--pink) 10%,
      var(--pink) 90%,
      var(--main-card-blue)
    ) !important;
}

.card .NuxtLink-active,
.card .active {
  color: var(--light);
}
</style>
