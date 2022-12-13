<template>
  <GlobalContainer v-if="data">
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <RouterView />
    <GlobalCard color="yellow" v-if="data" style="position: relative">
      <div class="gallery" @scroll.passive="onScroll">
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
        <div v-if="isLoading" class="spinner-loading">
          <img
            src="@/assets/img/loading.svg"
            alt="Loading spinner"
            draggable="false"
            width="200"
            height="200"
            @contextmenu.prevent
          />
        </div>
      </div>
    </GlobalCard>
  </GlobalContainer>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
import { asset } from "@/utils";
const locales = { fr, enGB };

// @vuese
// @group View/Community
// Chaparazzi page
const data: any = ref(undefined);
const search = ref("");
const page = ref(0);
const isLoading = ref(false);

function onScroll() {}
/*function onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
  if (scrollTop + clientHeight >= scrollHeight - 60) {
    isLoading = true;
    api.get(`/api/chaparazzi/${++page}.json`).then(
      (res) => {
        data = [...new Set([...data, ...res.data])];
        isLoading = false;
      },
      () => (isLoading = false)
    );
  }
}*/
function formatDate(date: number) {
  return format(new Date(date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

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
