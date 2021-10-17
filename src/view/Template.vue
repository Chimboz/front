<!-- This component is only meant to be copy pasted -->
<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Template" />
        </div> </Card
      ><br />
      <Rules top />
      <Security />
    </template>
    <Demo />

    <template #right-column><Card color="blue" top> </Card> </template>
  </Container>
</template>
<script>
export default {
  name: "Template",
  components: {},
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/Template.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/Template.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "section.template",
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped></style>
