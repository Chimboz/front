<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" v-if="data" justified
      ><template #subtop>Niveaux</template>
      <div class="flex">
        <div class="level-list">
          <div
            v-for="rank of data"
            :key="rank.level"
            class="pointer"
            @click="selected = rank.level"
          >
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="number"
              v-for="number in rank.level.toString(10)"
              :key="number.index"
              width="19"
              height="21"
              :src="require(`@/asset/img/number/${number}.svg`)"
            />&nbsp;<b>{{ rank.name }}</b>
          </div>
        </div>
        <div class="level-description flex centered">
          <img
            :src="require('@/asset/img/level/' + data[selected].level + '.png')"
          />
          <div v-for="(line, index) of data[selected].content" :key="index">
            {{ line }}
          </div>
          <b>Membres ayant ce niveau :</b> {{ data[selected].number }}
        </div>
      </div>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
// @vuese
// @group View/Account
// Levels page
export default {
  name: "LevelView",
  data() {
    return {
      data: null,
      selected: 0,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/levels.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/levels.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "level",
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
.level-list {
  max-height: 250px;
  overflow-y: scroll;
}

.level-list div {
  background: var(--dark-card-yellow);
  border: 2px solid var(--main-card-yellow);
  padding: var(--gap);
  border-radius: var(--border-radius);
}

.level-description {
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0%;
}
</style>
