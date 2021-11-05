<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.blazon[name] = item)"
      @previous-item="
        (name) =>
          (data.blazon[name] =
            data.items[name][data.items[name].indexOf(data.blazon[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.blazon[name] = this.data.items[name][
            data.items[name].indexOf(data.blazon[name]) + 1
          ])
      "
    />
  </Container>
</template>
<script>
import Cabin from "@/component/blazon/Cabin.vue";

export default {
  name: "Edit",
  components: {
    Cabin
  },
  data() {
    return {
      data: null
    };
  },

  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/edit.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/edit.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.groupedit",
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
