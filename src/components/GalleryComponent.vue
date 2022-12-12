<template>
  <GlobalCard color="yellow">
    <template #header>{{
      String($route.params.name).replace(/\.[^/.]+$/, "")
    }}</template>
    <a target="_blank" :href="'/gallery/' + $route.params.name">
      <img
        draggable="false"
        @contextmenu.prevent
        :src="'/gallery/' + $route.params.name"
        style="width: 100%"
      />
    </a>
  </GlobalCard>
  <br />
</template>
<script setup lang="ts">
// @vuese
// @group Default
</script>
