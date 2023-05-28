<template>
  <NuxtLink
    v-for="(entry, i) of sideNavEntries.filter(
      (entry) => entry.category === category
    )"
    :key="i"
    :class="{ active: $route.meta.section === entry.section }"
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
  category: string;
}>();

const { t } = useI18n();

const sideNavEntries = computed(() => [
  {
    label: t('account'),
    url: '/account',
    category: 'account',
    section: 'account',
  },
  {
    label: t('messenger'),
    url: '/messenger',
    category: 'account',
    section: 'messenger',
  },
  {
    label: t('groups'),
    url: '/groups/manage',
    category: 'account',
    section: 'groups',
  },
  {
    label: t('friends'),
    url: '/friends',
    category: 'account',
    section: 'friends',
  },
  {
    label: t('password'),
    url: '/notsmart',
    category: 'account',
    section: 'notsmart',
  },
  {
    label: t('eraser'),
    url: '/eraser',
    category: 'account',
    section: 'eraser',
  },
  {
    label: t('capitalization'),
    url: '/lowupp',
    category: 'account',
    section: 'lowupp',
  },
  {
    label: t('games'),
    url: '/games',
    category: 'games',
    section: 'games',
  },
  {
    label: t('bacteria'),
    url: '/games/bacteria',
    category: 'games',
    section: 'bacteria',
  },
  {
    label: t('patojdur'),
    url: '/games/patojdur',
    category: 'games',
    section: 'patojdur',
  },
  {
    label: t('mazo'),
    url: '/games/mazo',
    category: 'games',
    section: 'mazo',
  },
  {
    label: t('members'),
    url: '/members',
    category: 'members',
    section: 'members',
  },
  {
    label: t('book'),
    url: '/book',
    category: 'members',
    section: 'book',
  },
  {
    label: t('popularity'),
    url: '/popularity',
    category: 'members',
    section: 'popularity',
  },
  {
    label: t('wedding'),
    url: '/weddings',
    category: 'members',
    section: 'weddings',
  },
  {
    label: t('groups'),
    url: '/groups',
    category: 'members',
    section: 'groups',
  },
  {
    label: t('forum'),
    url: '/bbs',
    category: 'community',
    section: 'bbs',
  },
  {
    label: t('shop'),
    url: '/shop',
    category: 'community',
    section: 'shop',
  },
  {
    label: t('encyclopedia'),
    url: '/encyclopedia',
    category: 'community',
    section: 'encyclopedia',
  },
  {
    label: t('chaparazzi'),
    url: '/chaparazzi',
    category: 'community',
    section: 'chaparazzi',
  },
]);
</script>
<style scoped>
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

.card .active {
  color: var(--light);
}
</style>
