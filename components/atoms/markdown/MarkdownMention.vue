<template>
  <span class="disambiguation">
    <NuxtLink
      v-if="user"
      :to="`/book/${user.mid}`"
      target="_blank"
      :style="{ color: user.color }"
    >
      @{{ node.user }}
    </NuxtLink>
    <span v-else>{{ node.raw }}</span>
  </span>
</template>
<script setup lang="ts">
import type { Tokens } from 'marked';

const props = defineProps<{ node: Tokens.Generic }>();

type User = { mid: number; color: string };

const user = ref<null | User>(null);

watch(
  () => props.node.user,
  async (value) => {
    user.value = (
      await useFetch<User>(`https://chimboz.fr/api/book/search/${value}/search`)
    ).data.value;
  },
  { immediate: true }
);
</script>
