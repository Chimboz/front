<template>
  <GlobalContainer>
    <template #left-column></template>
    <GlobalCard color="red">
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
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({ title: "section.error" });
</script>
