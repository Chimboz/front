<template>
  <Container>
    <template #left-column></template>
    <Card color="red">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Error icon"
        width="39"
        height="32"
        src="@/asset/img/icon/warning.svg"
      /><b
        >&nbsp;{{
          this.$route.params.message
            ? $t(this.$route.params.message)
            : $t("error.default")
        }}</b
      >
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script>
// @vuese
// @group View
// Error page. You can define an error message using route parameter `message`.
export default {
  name: "ErrorView",
  metaInfo: {
    title: "section.error",
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
