<template>
  <GlobalCard v-if="data" style="position: relative">
    <StrokeText justified class="item-name" :class="data.rarity">{{
      data.name
    }}</StrokeText>
    <div class="item-icons"
      >n°{{ $route.params.id }}
      <img
        :src="require(`@/asset/img/icon/rarity/${data.rarity}.png`)"
        :title="data.rarity"
        :alt="data.rarity"
        draggable="false"
        @contextmenu.prevent />&nbsp;<img
        :src="require(`@/asset/img/icon/item_category/${data.type}.svg`)"
        :title="data.type"
        :alt="data.type"
        draggable="false"
        @contextmenu.prevent
    /></div>
    <div class="flex" style="align-items: flex-start">
      <img
        :src="`/avatar/${data.type}/${data.id}.svg`"
        class="item-preview"
        draggable="false"
        @contextmenu.prevent
      />
      <table style="width: 100%">
        <colgroup>
          <col width="100%" />
          <col width="60" />
        </colgroup>
        <thead
          ><tr><th>Membre</th><th>Quantité</th></tr></thead
        ><tbody
          ><tr v-for="owner of data.owner" :key="owner.user.id"
            ><td><UserLink :user="owner.user" /></td
            ><td
              ><b>{{ owner.quantity }}</b></td
            ></tr
          ></tbody
        ></table
      ></div
    >
  </GlobalCard>
  <br />
</template>
<script>
import StrokeText from "@/component/core/StrokeText.vue";

// @vuese
// @group Default
export default {
  name: "EncyclopediaItem",
  components: {
    StrokeText
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get(`/api/item/${vm.$route.params.id}.json`).then((res) => {
        vm.data = res.data;
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(`/api/item/${to.params.id}.json`);
    this.data = req.data;
    next();
  }
};
</script>
<style lang="scss" scoped>
.item-name {
  fill: #fff;
  stroke: #f39;
  stroke-width: 3;
  font-family: "Chimboz Heavy";
  font-size: 26px;
  height: 26px;
  border-bottom: 2px solid;
}

.item-icons {
  position: absolute;
  right: 10px;
  top: 10px;
  font-family: "Pixelated Verdana 10";
}

.item-icons img {
  height: 26px;
}

.item-preview {
  zoom: 150%;
}

// Rarity colors
.common {
  stroke: #999;
  border-bottom-color: #999;
}

.rare {
  stroke: #69c;
  border-bottom-color: #69c;
}

.mythic {
  stroke: #9412fe;
  border-bottom-color: #9412fe;
}

.legendary {
  stroke: #fc0;
  border-bottom-color: #fc0;
}

.unique {
  stroke: #c00;
  border-bottom-color: #c00;
}
</style>
