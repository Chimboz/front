<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <RouterView />
    <GlobalCard v-if="data" color="yellow" style="position: relative">
      <ScrollableContainer
        route="encyclopedia"
        class="fullwidth"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...new Set([...data, ...results])])"
      >
        <div
          v-for="item of data.filter(
            (item:any) =>
              checkedCategories.includes(item.type) &&
              checkedRarities.includes(item.rarity) &&
              item.name.includes(search)
          )"
          :key="item"
          class="item-wrapper"
        >
          <Tooltip>
            <template #tooltip
              ><b>{{ item.name }}</b></template
            >
            <router-link :to="'/encyclopedia/' + item.id">
              <button
                type="button"
                class="item"
                :class="[
                  item.type,
                  item.rarity,
                  $route.params.id == item.id ? 'active' : false,
                ]"
                :aria-label="item.name"
              >
                <VLazyImage
                  draggable="false"
                  :alt="item.name"
                  :src="`/item/${item.type}/${item.id}.svg`"
                  :src-placeholder="asset('img/loading.svg')"
                  @contextmenu.prevent
                /></button></router-link
          ></Tooltip>
        </div>
      </ScrollableContainer>
    </GlobalCard>
    <template #right-column
      ><GlobalCard justified
        ><template #button>
          <GlobalButton type="button" icon="search.svg">Chercher</GlobalButton>
        </template>
        <form class="flex fullwidth" @submit.prevent="onSearch">
          <input
            v-model="search"
            name="username"
            type="text"
            class="btn-md"
            aria-label="Username"
            :placeholder="$t('placeholder.item')"
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Type d'item :</b>
        <div class="fullwidth centered" @contextmenu.prevent>
          <button
            v-for="category of categories"
            :key="category"
            type="button"
            :aria-label="category"
            :class="{ active: checkedCategories.includes(category) }"
            class="item pointer filter"
            @click="
              checkedCategories.includes(category) &&
              checkedCategories.length == 1
                ? (checkedCategories = categories)
                : (checkedCategories = [`${category}`])
            "
            @contextmenu.prevent="
              checkedCategories.includes(category)
                ? checkedCategories.splice(
                    checkedCategories.indexOf(category),
                    1
                  )
                : checkedCategories.push(category)
            "
          >
            <img
              draggable="false"
              :alt="category"
              :src="asset(`img/icon/item_category/${category}.svg`)"
              @contextmenu.prevent
            />
          </button>
        </div>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Rareté :</b>
        <div class="fullwidth centered">
          <button
            v-for="rarity of rarities"
            :key="rarity"
            type="button"
            :aria-label="rarity"
            :class="[
              rarity,
              checkedRarities.includes(rarity) ? 'active' : false,
            ]"
            class="item pointer filter"
            @click="
              checkedRarities.includes(rarity) && checkedRarities.length == 1
                ? (checkedRarities = rarities)
                : (checkedRarities = [`${rarity}`])
            "
            @contextmenu.prevent="
              checkedRarities.includes(rarity)
                ? checkedRarities.splice(checkedRarities.indexOf(rarity), 1)
                : checkedRarities.push(rarity)
            "
          >
            <img
              draggable="false"
              :alt="rarity"
              :src="asset(`img/icon/rarity/${rarity}.png`)"
              @contextmenu.prevent
            />
          </button>
        </div> </GlobalCard
    ></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import ScrollableContainer from "@/components/core/ScrollableContainerComponent.vue";
import VLazyImage from "v-lazy-image";
import Tooltip from "@/components/core/TooltipComponent.vue";
import { onBeforeMount, ref } from "vue";
import { asset } from "@/utils";
import api from "@/modules/api";
import { RouterView, RouterLink } from "vue-router";
import { useMeta } from "vue-meta";

const data = ref<any>(undefined);
const categories = [
  "body",
  "bot",
  "etc",
  "floor",
  "frame",
  "furniture",
  "hat",
  "item0",
  "item1",
  "item2",
  "pet",
  "power",
  "primary",
  "secondary",
  "shape",
  "shoe",
  "top",
  "wall",
];
const checkedCategories = ref([
  "body",
  "bot",
  "etc",
  "floor",
  "frame",
  "furniture",
  "hat",
  "item0",
  "item1",
  "item2",
  "pet",
  "power",
  "primary",
  "secondary",
  "shape",
  "shoe",
  "top",
  "wall",
]);
const rarities = ["common", "rare", "mythic", "legendary", "unique"];
const checkedRarities = ref([
  "common",
  "rare",
  "mythic",
  "legendary",
  "unique",
]);
const search = ref("");

function onSearch() {}

onBeforeMount(async () => {
  data.value = (
    await api.get(
      `https://chimboz.fr/public/api/encyclopedia?lang=${
        navigator.language.split("-")[0]
      }&page=0`
    )
  ).data;
});

// /api/encyclopedia/${vm.page}.json
useMeta({ title: "section.encyclopedia" });
</script>
<style lang="scss" scoped>
// Encyclopedia container
.encyclopedia {
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

// Loading circle
.item img[src*="loading"] {
  transform: unset;
  width: 100%;
}

.item-wrapper {
  display: inline-block;
}

// Items
.item {
  margin: var(--sm-gap);
  background: linear-gradient(
    to bottom,
    var(--main-card-blue),
    var(--main-card)
  );
  height: 60px;
  width: 60px;
  border-radius: var(--border-radius);
  overflow: hidden;
  vertical-align: middle;
}

.filter {
  height: 40px;
  width: 40px;
}

.item.active {
  border: 3px solid var(--light);
}

.item.active img {
  margin: -3px;
}

.hat img {
  transform: translate(-3px, -31px) scale(1.5);
}

.body img {
  transform: translate(-11px, -15px) scale(1.5);
}

.shoe img {
  transform: translate(-4px, 0px) scale(1.5);
}

.item0 img {
  transform: translate(1px, -4px) scale(1.5);
}

.item1 img {
  transform: translate(2px, -17px) scale(1.5);
}

.item2 img {
  transform: translate(4px, -64px) scale(1.5);
}
</style>
