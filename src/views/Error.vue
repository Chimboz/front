<template>
  <GlobalContainer>
    <template #left-column></template>
    <GlobalCard color="red">
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
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>

<script>
// @vuese
// @group View
// Error page. You can define an error message using route parameter `message`.
export default {
  name: "ErrorView",
  metaInfo: {
    title: "section.error",
  },
};
</script>
