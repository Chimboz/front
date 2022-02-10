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
      <div>
        <div v-for="rank of data" :key="rank.level">
          <label :for="rank.level" class="pointer level"
            ><img
              draggable="false"
              @contextmenu.prevent
              :alt="number"
              v-for="number in rank.level.toString(10)"
              :key="number.index"
              width="19"
              height="21"
              :src="require(`@/asset/img/number/${number}.svg`)"
            />&nbsp;<b>{{ rank.name }}</b></label
          >
          <input type="radio" name="level" :id="rank.level" />
          <div class="level-description flex centered">
            <img :src="require('@/asset/img/level/' + rank.level + '.png')" />
            <div
              v-for="(line, index) of rank.content"
              :key="rank + ' ' + index"
            >
              {{ line }}
            </div>
            <b>Membres ayant ce niveau :</b> {{rank.number}}
          </div>
        </div>
      </div>
      <div></div>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Account
// Levels page
export default {
  name: "LevelView",
  data() {
    return {
      data: null,
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
    title: "section.conversation",
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
.level {
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, var(--light), var(--dark-card-yellow));
  border-radius: var(--border-radius);
  color: var(--title-card-yellow);
}

.level-description {
  display: none;
}

input[type="radio"] {
  display: none;
}

input:checked + .level-description {
  display: block;
}
</style>
