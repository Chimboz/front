<template>
  <GlobalCard color="yellow">
    <template #header>{{ $route.params.name.replace(/\.[^/.]+$/, "") }}</template>
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
<script>
// @vuese
// @group Default
export default {
  name: "ChaparazziGallery",
};
</script>
<style lang="scss" scoped></style>
