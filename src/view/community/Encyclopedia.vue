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
      <div class="encyclopedia" @scroll.passive="onScroll">
        <div
          v-for="item of data.filter(
            (item) => checked.includes(item.type) && item.name.includes(search)
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
              >
                <VLazyImage
                  draggable="false"
                  @contextmenu.prevent
                  :src="`/avatar/${item.type}/${item.id}.svg`"
                  :src-placeholder="require('@/asset/img/loading.svg')"
                /></button></router-link
          ></Tooltip>
        </div>
        <div v-if="isLoading" class="spinner-loading">
          <img
            src="@/asset/img/loading.svg"
            draggable="false"
            width="200"
            height="200"
            @contextmenu.prevent
          />
        </div>
      </div>
    </GlobalCard>
    <template #right-column
      ><GlobalCard
        ><template #button>
          <GlobalButton icon="search.svg">Chercher</GlobalButton>
        </template>
        <form @submit.prevent="search()" class="flex fullwidth">
          <input
            name="username"
            type="text"
            class="btn-md"
            v-model="search"
            :placeholder="$t('placeholder.item')"
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <div class="category-selection fullwidth" @contextmenu.prevent>
          <button
            type="button"
            v-for="category of categories"
            :key="category"
            :class="{ active: checked.includes(category) }"
            @click="
              checked.includes(category) && checked.length == 1
                ? (checked = [
                    'body',
                    'bot',
                    'floor',
                    'frame',
                    'furniture',
                    'hat',
                    'item0',
                    'item1',
                    'item2',
                    'pet',
                    'power',
                    'primary',
                    'secondary',
                    'shape',
                    'shoe',
                    'top',
                    'wall',
                  ])
                : (checked = [`${category}`])
            "
            @contextmenu.prevent="
              checked.includes(category)
                ? checked.splice(checked.indexOf(category), 1)
                : checked.push(category)
            "
            class="item pointer category"
          >
            <img
              draggable="false"
              @contextmenu.prevent
              :src="require(`@/asset/img/icon/item_category/${category}.svg`)"
            />
          </button>
        </div> </GlobalCard
    ></template>
  </GlobalContainer>
</template>
<script>
import VLazyImage from "v-lazy-image";
import Tooltip from "@/component/core/Tooltip.vue";

// @vuese
// @group View/Community
// Encyclopedia page
export default {
  name: "EncyclopediaView",
  components: {
    VLazyImage,
    Tooltip,
  },
  data() {
    return {
      data: null,
      categories: [
        "body",
        "bot",
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
      ],
      checked: [
        "body",
        "bot",
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
      ],
      search: "",
      page: 0,
      isLoading: false,
    };
  },
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight - 60) {
        this.isLoading = true;
        this.api.get(`/api/encyclopedia/${++this.page}.json`).then(
          (res) => {
            this.data = [...new Set([...this.data, ...res.data])];
            this.isLoading = false;
          },
          () => (this.isLoading = false)
        );
      }
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get(`/api/encyclopedia/${vm.page}.json`).then((res) => {
        vm.data = res.data;
        vm.shown = res.data[0];
      })
    );
  } /*
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(`/api/encyclopedia/0.json`);
    this.data = req.data;
    this.shown = this.data[0];
    next();
  },*/,
  metaInfo: {
    title: "section.encyclopedia",
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
      },
      {
        property: "og:title",
        content: "Chimboz, accueil",
      },
      {
        property: "og:description",
        content: "Chimboz, accueil",
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" },
    ],
  },
};
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
  background: #0003;
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
  background: linear-gradient(to bottom, var(--main-card-blue), var(--main-card));
  height: 60px;
  width: 60px;
  border-radius: var(--border-radius);
  overflow: hidden;
  vertical-align: middle;
}

.category {
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
  transform: translate(-0.5px, -4px) scale(1.5);
}

.item1 img {
  transform: translate(2px, -17px) scale(1.5);
}

.item2 img {
  transform: translate(4px, -64px) scale(1.5);
}
</style>
