<template>
  <Container v-if="data">
    <template #left-column>
      <Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div>
      </Card>
    </template>
    <BBSList :boards="data"></BBSList>
    <br />
    <Card
      ><div class="columns">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="BBS Verrouillé (nouveaux messages)"
            title="BBS Verrouillé (nouveaux messages)"
            src="@/asset/img/bbs/folder_new_lock.svg"
          />&nbsp;Verrouillé nouveaux messages&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="BBS Verrouillé"
            title="BBS Verrouillé"
            src="@/asset/img/bbs/folder_lock.svg"
          />&nbsp;Verrouillé&nbsp;
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
import Card from "@/component/Card.vue";
import BBSList from "@/component/bbs/list/BBS.vue";
import Container from "@/component/Container.vue";

export default {
  name: "BBS",
  components: {
    BBSList,
    Container,
    Card,
  },
  data() {
    return {
      data: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/bbs.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await api.get("/api/bbs.json");
    this.data = req.data;
  },
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
