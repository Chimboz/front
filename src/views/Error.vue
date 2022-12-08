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
        src="@/assets/img/icon/warning.svg"
      /><b
        >&nbsp;{{
          $route.params.message ? t($route.params.message as string) : t("error.default")
        }}</b
      >
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
// @vuese
// @group View
// Error page. You can define an error message using route parameter `message`.

const { t } = useI18n();

/*
  metaInfo: {
    title: "section.error",
  },
};*/
</script>
