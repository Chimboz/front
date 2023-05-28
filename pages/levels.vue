<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries category="account" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card color="yellow" left>
      <template #subtop>
        {{ $t('levels') }}
      </template>
      <div class="flex">
        <div class="level-list">
          <div
            v-for="rank of data"
            :key="rank.level"
            class="pointer level"
            :class="{ active: selected === rank.level }"
            @click="selected = rank.level"
            @keyup="selected = rank.level"
          >
            <b class="mr-auto">{{ rank.name }}</b>
            <div><Number :number="rank.level" /></div>
          </div>
        </div>
        <div class="level-description flex centered">
          <img
            width="200"
            height="200"
            :alt="'Level' + data[selected].level"
            :src="asset(`img/level/${data[selected].level}.png`)"
          />
          <div v-for="(line, index) of data[selected].content" :key="index">
            {{ line }}
          </div>
          <b>{{ $t('levels.membersHave') }}:</b> {{ data[selected].number }}
        </div>
      </div>
    </Card>
    <template #right-column />
  </Container>
</template>
<script setup lang="ts">
const { data } = await useFetch<any>('/api/levels');
const selected = ref(0);

definePageMeta({
  category: 'account',
  section: 'levels',
});
const { t } = useI18n();
useHead({ title: computed(() => t('levels')) });
</script>

<style lang="scss" scoped>
.level-list {
  max-height: 450px;
  overflow-y: scroll;
  direction: rtl;
  .level {
    background: var(--dark-card-yellow);
    border: 2px solid var(--main-card-yellow);
    padding: var(--gap);
    border-radius: var(--border-radius);
    direction: ltr;
    transition: var(--duration);

    &.active {
      background: var(--pink);
      color: var(--light);
    }
  }
}

.level-description {
  flex-direction: column;
  flex: 1 0 0%;
}
</style>
