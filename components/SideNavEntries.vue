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
      />&nbsp;{{ entry.label }}
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  section: string
}>()

const { t } = useI18n()

const sideNavEntries = computed(() => [
  {
    label: t('section.account'),
    url: '/account',
    section: 'Account'
  },
  {
    label: t('section.messenger'),
    url: '/messenger',
    section: 'Account'
  },
  {
    label: t('section.groups'),
    url: '/groups/manage',
    section: 'Account'
  },
  {
    label: t('section.friends'),
    url: '/friends',
    section: 'Account'
  },
  {
    label: t('section.password'),
    url: '/notsmart',
    section: 'Account'
  },
  {
    label: t('section.eraser'),
    url: '/eraser',
    section: 'Account'
  },
  {
    label: t('section.capitalization'),
    url: '/lowupp',
    section: 'Account'
  },
  {
    label: t('section.games'),
    url: '/games',
    section: 'Games'
  },
  {
    label: t('section.bacteria'),
    url: '/games/bacteria',
    section: 'Games'
  },
  {
    label: t('section.patojdur'),
    url: '/games/patojdur',
    section: 'Games'
  },
  {
    label: t('section.mazo'),
    url: '/games/mazo',
    section: 'Games'
  },
  {
    label: t('section.members'),
    url: '/members',
    section: 'Members'
  },
  {
    label: t('section.book'),
    url: '/book',
    section: 'Members'
  },
  {
    label: t('section.popularity'),
    url: '/popularity',
    section: 'Members'
  },
  {
    label: t('section.wedding'),
    url: '/weddings',
    section: 'Members'
  },
  {
    label: t('section.groups'),
    url: '/groups',
    section: 'Members'
  },
  {
    label: t('section.forum'),
    url: '/bbs',
    section: 'Community'
  },
  {
    label: t('section.shop'),
    url: '/shop',
    section: 'Community'
  },
  {
    label: t('section.encyclopedia'),
    url: '/encyclopedia',
    section: 'Community'
  },
  {
    label: t('section.chaparazzi'),
    url: '/chaparazzi',
    section: 'Community'
  }
])
</script>
<style scoped>
.router-link-active .list,
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

.card .router-link-active,
.card .active {
  color: var(--light);
}
</style>
