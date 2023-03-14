<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <BbsListTopic :topic="data" />
    <BbsMarkdownInput v-if="user && (!data.locked || +user.user_level > 3)" />
  </Container>
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const user = computed(() => useAuthStore().user);
const route = useRoute();
const { t } = useI18n();

const { data } = await useFetch<any>(
  `https://chimboz.fr/api/bbs/topic/${route.params.forum}/${route.params.topic}?page=${route.params.page}`
);

useHead({ title: `${t('topic')} "${data.value.messages[0].title}"` });
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
