<template>
  <Container>
    <template #left-column></template>
    <Card color="red">
      <img
        draggable="false"
        alt="Error icon"
        width="39"
        height="32"
        src="@/assets/img/icon/warning.svg"
        @contextmenu.prevent
      /><b
        >&nbsp;{{
          $route.params.message
            ? $t($route.params.message as string)
            : $t("error.default")
        }}</b
      >
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({ title: "section.error" });
</script>
