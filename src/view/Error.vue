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
export default {
  name: "Error",
};
</script>
