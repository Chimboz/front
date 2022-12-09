<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot
    /></template>
    <TopicList v-if="data" :topic="data" />
    <br />
    <MarkdownInput v-if="authenticated && data && !data.locked" />
  </GlobalContainer>
</template>

<script setup lang="ts">
import TopicList from "@/components/bbs/list/Topic.vue";
import MarkdownInput from "@/components/bbs/MarkdownInput.vue";
import { useAuthStore } from "@/stores/auth";
const auth = useAuthStore();
const user = auth.user;

// @vuese
// @group View/Community/BBS
// Topic page


      const data: any = ref(null);
    };
  },
// /api/topic/${vm.$route.params.page ? vm.$route.params.page : 1}.json
  computed: {
    const authenticated = true;
  },
// meta title section.topic
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
