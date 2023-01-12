<template>
  <Container>
    <template #left-column />
    <Card color="red">
      <img
        draggable="false"
        alt="Error icon"
        width="39"
        height="32"
        src="@/assets/img/icon/warning.svg"
        @contextmenu.prevent
      ><b>&nbsp;{{
        $route.params.message
          ? $t($route.params.message as string)
          : $t("error.default")
      }}</b>
    </Card>
    <template #right-column />
  </Container>
</template>

<script setup lang="ts">

useHead({ title: 'section.error' })
</script>
