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
    <router-view></router-view>
    <GlobalCard color="yellow" v-if="data" style="position: relative">
      <ScrollableContainer
        route="encyclopedia"
        class="fullwidth"
        :maxHeight="450"
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
                  @contextmenu.prevent
                  :alt="item.name"
                  :src="`/item/${item.type}/${item.id}.svg`"
                  :src-placeholder="require('@/assets/img/loading.svg')"
                /></button></router-link
          ></Tooltip>
        </div>
      </ScrollableContainer>
    </GlobalCard>
    <template #right-column
      ><GlobalCard justified
        ><template #button>
          <GlobalButton icon="search.svg">Chercher</GlobalButton>
        </template>
        <form @submit.prevent="onSearch" class="flex fullwidth">
          <input
            name="username"
            type="text"
            class="btn-md"
            v-model="search"
            :placeholder="$t('placeholder.item')"
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Type d'item :</b>
        <div class="fullwidth centered" @contextmenu.prevent>
          <button
            type="button"
            v-for="category of categories"
            :aria-label="category"
            :key="category"
            :class="{ active: checkedCategories.includes(category) }"
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
            class="item pointer filter"
          >
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="category"
              :src="asset(`img/icon/item_category/${category}.svg`)"
            />
          </button>
        </div>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Rareté :</b>
        <div class="fullwidth centered">
          <button
            type="button"
            v-for="rarity of rarities"
            :aria-label="rarity"
            :key="rarity"
            :class="[
              rarity,
              checkedRarities.includes(rarity) ? 'active' : false,
            ]"
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
            class="item pointer filter"
          >
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="rarity"
              :src="asset(`img/icon/rarity/${rarity}.png`)"
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
import { ref } from "vue";

// @vuese
// @group View/Community
// Encyclopedia page
const data: any = ref(undefined);
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

// /api/encyclopedia/${vm.page}.json
// meta title section.encyclopedia
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
