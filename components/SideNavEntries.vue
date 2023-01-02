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
    url: "/messenger",
    section: "Account",
  },
  {
    label: "section.groups",
    url: "/groups/manage",
    section: "Account",
  },
  {
    label: "section.friends",
    url: "/friends",
    section: "Account",
  },
  {
    label: "section.password",
    url: "/notsmart",
    section: "Account",
  },
  {
    label: "section.eraser",
    url: "/eraser",
    section: "Account",
  },
  {
    label: "section.capitalization",
    url: "/lowupp",
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
    url: "/book",
    section: "Members",
  },
  {
    label: "section.popularity",
    url: "/popularity",
    section: "Members",
  },
  {
    label: "section.wedding",
    url: "/weddings",
    section: "Members",
  },
  {
    label: "section.groups",
    url: "/groups",
    section: "Members",
  },
  {
    label: "section.forum",
    url: "/bbs",
    section: "Community",
  },
  {
    label: "section.shop",
    url: "/shop",
    section: "Community",
  },
  {
    label: "section.encyclopedia",
    url: "/encyclopedia",
    section: "Community",
  },
  {
    label: "section.chaparazzi",
    url: "/chaparazzi",
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
