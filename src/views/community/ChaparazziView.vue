<template>
  <GlobalContainer v-if="data">
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <RouterView />
    <GlobalCard color="yellow" v-if="data" style="position: relative">
      <ScrollableContainer
        route="gallery"
        class="fullwidth"
        :maxHeight="450"
        @scroll-data="(results: any[]) => (data = [...new Set([...data, ...results])])"
      >
        <div v-for="image of data" :key="image.name" class="gallery-image">
          <router-link :to="'/chaparazzi/' + image.name">
            <VLazyImage
              draggable="false"
              :alt="image.name"
              @contextmenu.prevent
              :src="`/gallery/${image.name}`"
              :src-placeholder="asset('img/loading.svg')"
            />
          </router-link>
          <em>"{{ image.name.replace(/\.[^/.]+$/, "") }}"</em><br />
          <UserLink :user="image.author" /><br />
          {{ formatDate(image.date) }}
        </div>
      </ScrollableContainer>
    </GlobalCard>
  </GlobalContainer>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { onBeforeMount, ref } from "vue";
import { asset } from "@/utils";
import ScrollableContainer from "@/components/core/ScrollableContainerComponent.vue";
import api from "@/modules/api";
import { RouterView, RouterLink } from "vue-router";
const locales = { fr, enGB };

// @vuese
// @group View/Community
// Chaparazzi page
const data: any = ref(undefined);

function formatDate(date: number) {
  return format(new Date(date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

onBeforeMount(async () => {
  data.value = (await api.get(`gallery?page=0`)).data;
});

// /api/chaparazzi/${vm.page}.json
// meta title section.chaparazzi
</script>
<style lang="scss" scoped>
.gallery {
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;
}

.spinner-loading {
  background: var(--dark);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  border-radius: var(--border-radius);
}
.gallery-image {
  width: 33%;
  padding: var(--md-gap);
  display: inline-block;
}

.gallery-image img {
  width: 100%;
  border: 1px solid var(--main-bg);
}
</style>
