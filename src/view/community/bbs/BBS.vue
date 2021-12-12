<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <BBSList v-if="data" :boards="data"></BBSList>
    <br />
    <Card
      ><div class="columns">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.lock_new')"
            :title="$t('bbs.lock_new')"
            src="@/asset/img/bbs/folder_new_lock.svg"
          />&nbsp;{{ $t("bbs.lock_new") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.lock')"
            title="$t('bbs.lock')"
            src="@/asset/img/bbs/folder_lock.svg"
          />&nbsp;{{ $t("bbs.lock") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Nouveaux messages"
            title="Nouveaux messages"
            src="@/asset/img/bbs/folder_new.svg"
          />&nbsp;Nouveaux messages&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Pas de nouveaux messages"
            title="Pas de nouveaux messages"
            src="@/asset/img/bbs/folder.svg"
          />&nbsp;Pas de nouveaux messages&nbsp;
        </div>
      </div></Card
    >
  </Container>
</template>

<script>
import BBSList from "@/component/bbs/list/BBS.vue";

// @vuese
// @group View/Community/BBS
// BBS page
export default {
  name: "BBSView",
  components: {
    BBSList
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/bbs.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/bbs.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.bbs",
    meta: [
      {
        name: "description",
        content:
          "chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chimboz, accueil"
      },
      {
        property: "og:description",
        content: "Chimboz, accueil"
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
<style lang="scss">
.symbol-info {
  flex-direction: row;
  justify-content: center;
}

.columns {
  column-count: 1;
}

@media (min-width: 400px) {
  .columns {
    column-count: 2;
  }
}

@media (min-width: 600px) {
  .columns {
    column-count: 3;
  }
}
</style>
