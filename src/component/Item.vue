<template>
  <GlobalCard v-if="data" style="position: relative">
    <div class="relative">
      <StrokeText justified class="item-name" :class="data.rarity">{{
        data.name
      }}</StrokeText>
      <div class="item-icons">
        n°{{ $route.params.id }}
        <img
          :src="require(`@/asset/img/icon/rarity/${data.rarity}.png`)"
          :title="data.rarity"
          :alt="data.rarity"
          draggable="false"
          @contextmenu.prevent
        />&nbsp;<img
          :src="require(`@/asset/img/icon/item_category/${data.type}.svg`)"
          :title="data.type"
          :alt="data.type"
          draggable="false"
          @contextmenu.prevent
        />
      </div>
    </div>
    <div class="flex" style="align-items: flex-start">
      <img
        :src="`/item/${data.type}/${data.id}.svg`"
        :alt="data.name"
        class="item-preview"
        draggable="false"
        @contextmenu.prevent
      />
      <div class="owners">
        <table>
          <colgroup>
            <col width="100%" />
            <col width="60" />
          </colgroup>
          <thead>
            <tr>
              <th>Membre</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="owner of data.owner" :key="owner.user.id">
              <td><UserLink :user="owner.user" /></td>
              <td>
                <b>{{ owner.quantity }}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
    StrokeText,
  },
  data() {
    return {
      data: null,
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
  },
};
</script>
<style lang="scss" scoped>
.item-name {
  fill: var(--text-button);
  height: calc(var(--gap) * 2);
  stroke-width: 3;
  font-family: "Chimboz Heavy";
  font-size: var(--lg-font-size);
  border-radius: calc(var(--border-radius) / 2) calc(var(--border-radius) / 2) 0
    0;
  padding: var(--md-gap);
}

.item-icons {
  position: absolute;
  right: 0;
  top: 0;
  color: var(--light);
  font-family: "Pixelated Verdana 10";
}

.item-icons img {
  height: 26px;
}

.item-preview {
  zoom: 150%;
}

.owners {
  max-height: 150px;
  overflow-y: auto;
}

.owners table {
  width: 100%;
}

// Rarity colors
.common {
  stroke: #999;
  background: linear-gradient(to bottom, #999, transparent);
}

.rare {
  stroke: #69c;
  background: linear-gradient(to bottom, #69c, transparent);
}

.mythic {
  stroke: #9412fe;
  background: linear-gradient(to bottom, #9412fe, transparent);
}

.legendary {
  stroke: #fc0;
  background: linear-gradient(to bottom, #fc0, transparent);
}

.unique {
  stroke: #c00;
  background: linear-gradient(to bottom, #c00, transparent);
}
</style>
