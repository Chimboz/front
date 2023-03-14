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
      >&nbsp;{{ entry.label }}
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  section: string;
}>();

const { t } = useI18n();

const sideNavEntries = computed(() => [
  {
    label: t('account'),
    url: '/account',
    section: 'Account',
  },
  {
    label: t('messenger'),
    url: '/messenger',
    section: 'Account',
  },
  {
    label: t('groups'),
    url: '/groups/manage',
    section: 'Account',
  },
  {
    label: t('friends'),
    url: '/friends',
    section: 'Account',
  },
  {
    label: t('password'),
    url: '/notsmart',
    section: 'Account',
  },
  {
    label: t('eraser'),
    url: '/eraser',
    section: 'Account',
  },
  {
    label: t('capitalization'),
    url: '/lowupp',
    section: 'Account',
  },
  {
    label: t('games'),
    url: '/games',
    section: 'Games',
  },
  {
    label: t('bacteria'),
    url: '/games/bacteria',
    section: 'Games',
  },
  {
    label: t('patojdur'),
    url: '/games/patojdur',
    section: 'Games',
  },
  {
    label: t('mazo'),
    url: '/games/mazo',
    section: 'Games',
  },
  {
    label: t('members'),
    url: '/members',
    section: 'Members',
  },
  {
    label: t('book'),
    url: '/book',
    section: 'Members',
  },
  {
    label: t('popularity'),
    url: '/popularity',
    section: 'Members',
  },
  {
    label: t('wedding'),
    url: '/weddings',
    section: 'Members',
  },
  {
    label: t('groups'),
    url: '/groups',
    section: 'Members',
  },
  {
    label: t('forum'),
    url: '/bbs',
    section: 'Community',
  },
  {
    label: t('shop'),
    url: '/shop',
    section: 'Community',
  },
  {
    label: t('encyclopedia'),
    url: '/encyclopedia',
    section: 'Community',
  },
  {
    label: t('chaparazzi'),
    url: '/chaparazzi',
    section: 'Community',
  },
]);
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
