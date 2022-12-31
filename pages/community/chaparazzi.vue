<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <RouterView />
    <Card v-if="data" color="yellow" style="position: relative">
      <ScrollableContainer
        route="gallery"
        class="fullwidth"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...new Set([...data, ...results])])"
      >
        <div v-for="image of data" :key="image.name" class="gallery-image">
          <router-link :to="'/chaparazzi/' + image.name">
            <nuxt-img
              draggable="false"
              :alt="image.name"
              :src="`/gallery/${image.name}`"
              :src-placeholder="asset('img/loading.svg')"
              @contextmenu.prevent
            />
          </router-link>
          <em>"{{ image.name.replace(/\.[^/.]+$/, "") }}"</em><br />
          <UserLink :user="image.author" /><br />
          {{ format(image.date, "PPp") }}
        </div>
      </ScrollableContainer>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { asset } from "@/utils";
import { format } from "@/utils/date";

import api from "@/plugins/api";
import { RouterView, RouterLink } from "vue-router";
import { useHead } from "@vueuse/head";

const data = ref<any>(undefined);

onBeforeMount(async () => {
  data.value = (await useFetch(`gallery?page=0`)).data;
});

// /api/chaparazzi/${vm.page}.json
useHead({ title: "section.chaparazzi" });
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
