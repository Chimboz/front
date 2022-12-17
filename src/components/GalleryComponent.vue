<template>
  <GlobalCard color="yellow">
    <template #header>{{
      String($route.params.name).replace(/\.[^/.]+$/, "")
    }}</template>
    <a target="_blank" :href="'/gallery/' + $route.params.name">
      <img
        draggable="false"
        :src="'/gallery/' + $route.params.name"
        style="width: 100%"
        @contextmenu.prevent
      />
    </a>
  </GlobalCard>
  <br />
</template>
<script setup lang="ts">
// @vuese
// @group Default
</script>
